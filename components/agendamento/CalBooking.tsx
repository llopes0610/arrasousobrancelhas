"use client";

import { useState } from "react";
import Cal from "@calcom/embed-react";

import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  Eye,
  Sparkles,
  WandSparkles,
  ScanFace,
  Droplets,
} from "lucide-react";

type Service = {
  id: string;
  name: string;
  description: string;
  duration: string;
  calLink: string;
  icon: React.ElementType;
};

const services: Service[] = [
  {
    id: "design-sobrancelhas",
    name: "Design de Sobrancelhas",
    description:
      "Design personalizado para valorizar o formato natural do seu rosto.",
    duration: "30 minutos",
    calLink: "arrasou-sobrancelhas/design-sobrancelhas",
    icon: Eye,
  },
  {
    id: "design-henna",
    name: "Design + Henna",
    description:
      "Design personalizado com aplicação de henna para maior definição.",
    duration: "40 minutos",
    calLink: "arrasou-sobrancelhas/design-henna",
    icon: WandSparkles,
  },
  {
    id: "micropigmentacao",
    name: "Micropigmentação",
    description:
      "Técnica personalizada para definição e valorização das sobrancelhas.",
    duration: "1h30",
    calLink: "arrasou-sobrancelhas/micropigmentacao",
    icon: Sparkles,
  },
  {
    id: "limpeza-pele",
    name: "Higienização Facial",
    description:
      "Cuidados especiais para uma pele mais limpa, saudável e revitalizada.",
    duration: "50 minutos",
    calLink: "arrasou-sobrancelhas/limpeza-pele",
    icon: Droplets,
  },
  {
    id: "depilacao-facial",
    name: "Depilação Facial",
    description:
      "Remoção dos pelos faciais com cuidado, precisão e conforto.",
    duration: "40 minutos",
    calLink: "arrasou-sobrancelhas/depilacao-facial",
    icon: ScanFace,
  },
];

export default function CalBooking() {
  const [selectedService, setSelectedService] =
    useState<Service | null>(null);

  /*
   * =========================================================
   * ESCOLHA DO SERVIÇO
   * =========================================================
   */

  if (!selectedService) {
    return (
      <div className="w-full">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setSelectedService(service)}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.035]
                  p-6
                  text-left
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-arrasou-gold/40
                  hover:bg-white/[0.06]
                  hover:shadow-gold
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-arrasou-gold/30
                    bg-arrasou-gold/5
                    transition-colors

                    group-hover:border-arrasou-gold
                  "
                >
                  <Icon className="h-5 w-5 text-arrasou-gold" />
                </div>

                <h3 className="mt-5 font-serif text-2xl font-medium text-white">
                  {service.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/50">
                  {service.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm text-white/45">
                  <Clock3 className="h-4 w-4 text-arrasou-gold" />

                  {service.duration}
                </div>

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-arrasou-gold
                  "
                >
                  <CalendarDays className="h-4 w-4" />

                  Escolher horário
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  /*
   * =========================================================
   * CALENDÁRIO
   * =========================================================
   */

  return (
    <div className="w-full">
      {/* Serviço selecionado */}

      <div
        className="
          mb-6
          flex
          flex-col
          gap-4
          rounded-2xl
          border
          border-white/10
          bg-white/[0.035]
          p-5

          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <div>
          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.24em]
              text-arrasou-gold
            "
          >
            Serviço selecionado
          </p>

          <h3 className="mt-2 font-serif text-2xl text-white">
            {selectedService.name}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-sm text-white/50">
            <Clock3 className="h-4 w-4 text-arrasou-gold" />

            {selectedService.duration}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setSelectedService(null)}
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-full
            border
            border-white/15
            px-5
            py-3
            text-sm
            font-semibold
            text-white/70
            transition-all

            hover:border-arrasou-gold
            hover:text-arrasou-gold
          "
        >
          <ArrowLeft className="h-4 w-4" />

          Trocar serviço
        </button>
      </div>

      {/* Cal.com */}

      <div
        className="
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-white
          shadow-premium
        "
      >
        <Cal
          calLink={selectedService.calLink}
          style={{
            width: "100%",
            minHeight: "720px",
            overflow: "scroll",
          }}
          config={{
            layout: "month_view",
            theme: "light",
          }}
        />
      </div>
    </div>
  );
}