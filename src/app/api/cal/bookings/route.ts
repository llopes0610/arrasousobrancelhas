import { NextRequest, NextResponse } from "next/server";

const CAL_API_URL = "https://api.cal.com/v2/bookings";

const CAL_API_VERSION = "2026-02-25";

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.CAL_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          error: "CAL_API_KEY não configurada.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const {
      name,
      whatsapp,
      service,
      eventTypeSlug,
      start,
      notes,
    } = body;

    if (!name || !whatsapp || !eventTypeSlug || !start) {
      return NextResponse.json(
        {
          success: false,
          error: "Nome, WhatsApp, serviço e horário são obrigatórios.",
        },
        { status: 400 }
      );
    }

    const bookingPayload = {
      start,

      attendee: {
        name,
        timeZone: "America/Sao_Paulo",
        phoneNumber: normalizePhone(whatsapp),
        language: "pt-BR",
      },

      eventTypeSlug,

      username: process.env.CAL_USERNAME || "arrasou-sobrancelhas",

      metadata: {
        whatsapp: normalizePhone(whatsapp),
        service: service || "",
        notes: notes || "",
        source: "site-arraso-sobrancelhas",
      },
    };

    const response = await fetch(CAL_API_URL, {
      method: "POST",

      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "cal-api-version": CAL_API_VERSION,
      },

      body: JSON.stringify(bookingPayload),

      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Erro ao criar booking no Cal.com:", data);

      return NextResponse.json(
        {
          success: false,
          error:
            data?.message ||
            data?.error ||
            "Não foi possível realizar o agendamento.",
          details: data,
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      booking: data.data,
    });
  } catch (error) {
    console.error("Erro interno ao criar booking:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Erro interno ao realizar o agendamento.",
      },
      { status: 500 }
    );
  }
}

function normalizePhone(phone: string) {
  const numbers = phone.replace(/\D/g, "");

  if (numbers.startsWith("55")) {
    return `+${numbers}`;
  }

  return `+55${numbers}`;
}