"use client";

import Cal from "@calcom/embed-react";
import { serviceMap } from "./serviceMap";

interface CalBookingProps {
  service: string;
  customerName: string;
  customerPhone: string;
  notes: string;
}

export default function CalBooking({
  service,
  customerName,
  customerPhone,
  notes,
}: CalBookingProps) {
  if (!service) return null;

  const selected = serviceMap[service as keyof typeof serviceMap];

  if (!selected) return null;

  return (
    <div className="rounded-xl overflow-hidden border bg-white shadow-lg">
      <Cal
        calLink={`arrasou-sobrancelhas/${selected.calSlug}`}
        style={{
          width: "100%",
          height: "760px",
          border: "none",
        }}
        config={{
          theme: "light",
          layout: "month_view",

          // Em breve vamos utilizar estes dados para
          // preencher automaticamente o formulário
          name: customerName,
          notes: notes,
        }}
      />
    </div>
  );
}