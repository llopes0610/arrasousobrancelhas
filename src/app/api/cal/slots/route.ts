import { NextRequest, NextResponse } from "next/server";

const CAL_API_URL = "https://api.cal.com/v2/slots";

const CAL_API_VERSION = "2024-09-04";

export async function GET(request: NextRequest) {
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

    const { searchParams } = new URL(request.url);

    const eventTypeSlug = searchParams.get("eventTypeSlug");
    const start = searchParams.get("start");
    const end = searchParams.get("end");

    if (!eventTypeSlug || !start || !end) {
      return NextResponse.json(
        {
          success: false,
          error: "eventTypeSlug, start e end são obrigatórios.",
        },
        { status: 400 }
      );
    }

    const params = new URLSearchParams();

    params.set("eventTypeSlug", eventTypeSlug);
    params.set("username", process.env.CAL_USERNAME || "arrasou-sobrancelhas");
    params.set("start", start);
    params.set("end", end);
    params.set("timeZone", "America/Sao_Paulo");
    params.set("format", "range");

    const response = await fetch(`${CAL_API_URL}?${params.toString()}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "cal-api-version": CAL_API_VERSION,
      },
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Erro Cal.com:", data);

      return NextResponse.json(
        {
          success: false,
          error: data?.message || "Erro ao consultar disponibilidade.",
          details: data,
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      data: data.data || {},
    });
  } catch (error) {
    console.error("Erro interno ao consultar slots:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Erro interno ao consultar horários.",
      },
      { status: 500 }
    );
  }
}