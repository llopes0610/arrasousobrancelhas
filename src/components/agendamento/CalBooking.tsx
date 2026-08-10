"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

type Service = {
  id: string;
  name: string;
  description: string;
  duration: string;
  calLink: string;
};

const services: Service[] = [
  {
    id: "design-sobrancelhas",
    name: "Design de Sobrancelhas",
    description: "Realce sua beleza com um design personalizado.",
    duration: "30 minutos",
    calLink: "arrasou-sobrancelhas/design-sobrancelhas",
  },
  {
    id: "design-henna",
    name: "Design + Henna",
    description: "Design personalizado com aplicação de henna.",
    duration: "40 minutos",
    calLink: "arrasou-sobrancelhas/design-henna",
  },
  {
    id: "micropigmentacao",
    name: "Micropigmentação",
    description: "Procedimento personalizado para realçar suas sobrancelhas.",
    duration: "1h30",
    calLink: "arrasou-sobrancelhas/micropigmentacao",
  },
  {
    id: "limpeza-pele",
    name: "Limpeza de Pele",
    description: "Cuidados especiais para deixar sua pele mais saudável.",
    duration: "50 minutos",
    calLink: "arrasou-sobrancelhas/limpeza-pele",
  },
  {
    id: "depilacao-facial",
    name: "Depilação Facial",
    description: "Remoção dos pelos faciais com cuidado e precisão.",
    duration: "40 minutos",
    calLink: "arrasou-sobrancelhas/depilacao-facial",
  },
];

declare global {
  interface Window {
    Cal?: {
      (
        action: string,
        options?: Record<string, unknown>
      ): void;
    };
  }
}

export default function CalBooking() {
  const [selectedService, setSelectedService] =
    useState<Service | null>(null);

  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selectedService) {
      return;
    }

    const initializeCal = () => {
      if (!window.Cal) {
        console.error("Cal.com não foi carregado.");
        return;
      }

      /*
       * Inicializa o Cal.com
       */
      window.Cal("init", {
        origin: "https://app.cal.com",
      });

      /*
       * Configuração visual
       */
      window.Cal("ui", {
        styles: {
          branding: {
            brandColor: "#000000",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    };

    const existingScript = document.getElementById(
      "cal-embed-script"
    );

    if (existingScript) {
      initializeCal();
      return;
    }

    const script = document.createElement("script");

    script.id = "cal-embed-script";
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;

    script.onload = initializeCal;

    document.head.appendChild(script);
  }, [selectedService]);

  useEffect(() => {
    if (!selectedService || !calendarRef.current) {
      return;
    }

    const renderCalendar = () => {
      if (!window.Cal || !calendarRef.current) {
        return;
      }

      /*
       * Limpa o calendário anterior
       */
      calendarRef.current.innerHTML = "";

      /*
       * Cria o elemento do embed
       */
      const calendarElement =
        document.createElement("div");

      calendarElement.setAttribute(
        "data-cal-link",
        selectedService.calLink
      );

      calendarElement.setAttribute(
        "data-cal-namespace",
        selectedService.id
      );

      calendarElement.setAttribute(
        "data-cal-config",
        JSON.stringify({
          layout: "month_view",
          theme: "light",
        })
      );

      calendarElement.className = "w-full min-h-[700px]";

      calendarRef.current.appendChild(calendarElement);

      /*
       * Inicializa o embed
       */
      window.Cal("init", {
        origin: "https://app.cal.com",
      });

      window.Cal("ui", {
        styles: {
          branding: {
            brandColor: "#000000",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    };

    /*
     * Dá um pequeno intervalo para garantir
     * que o script do Cal esteja disponível.
     */
    const timer = setTimeout(() => {
      renderCalendar();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [selectedService]);

  /*
   * TELA DE SELEÇÃO DO SERVIÇO
   */
  if (!selectedService) {
    return (
      <div className="w-full">
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => setSelectedService(service)}
              className="
                group
                text-left
                bg-white
                border
                border-gray-200
                rounded-2xl
                p-6
                transition-all
                duration-200
                hover:border-arrasou-400
                hover:shadow-lg
                focus:outline-none
                focus:ring-2
                focus:ring-arrasou-400
              "
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-arrasou-50
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <Calendar className="w-6 h-6 text-arrasou-400" />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-gray-900">
                      {service.name}
                    </h3>

                    <div className="flex items-center gap-1 mt-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      {service.duration}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-4">
                {service.description}
              </p>

              <div
                className="
                  mt-5
                  text-sm
                  font-semibold
                  text-arrasou-500
                  group-hover:text-arrasou-600
                "
              >
                Escolher horário →
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  /*
   * CALENDÁRIO DO SERVIÇO
   */
  return (
    <div className="w-full">
      {/* Cabeçalho */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">
            {selectedService.name}
          </h3>

          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <Clock className="w-4 h-4" />
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
            px-4
            py-2
            rounded-lg
            border
            border-gray-200
            text-sm
            font-medium
            text-gray-700
            hover:bg-gray-50
            transition-colors
          "
        >
          <ArrowLeft className="w-4 h-4" />
          Escolher outro serviço
        </button>
      </div>

      {/* Calendário Cal.com */}
      <div
        ref={calendarRef}
        className="
          w-full
          min-h-[700px]
          overflow-hidden
          rounded-xl
        "
      />
    </div>
  );
}