import type { Metadata } from "next";

import CalBooking from "@/components/agendamento/CalBooking";

import {
  Clock3,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Agendamento",

  description:
    "Agende seu atendimento no Studio Arrasou Sobrancelhas em Praia Grande - SP.",
};

export default function AgendamentoPage() {
  return (
    <>
      {/* =====================================================
          HERO DA PÁGINA
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-arrasou-black
          pb-16
          pt-16
          text-white

          sm:pb-20
          sm:pt-20

          lg:pb-24
          lg:pt-24
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            -right-40
            top-0
            h-[420px]
            w-[420px]
            rounded-full
            bg-arrasou-gold/10
            blur-[130px]
          "
        />

        <div className="container-premium relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-arrasou-gold" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-arrasou-gold

                  sm:text-xs
                "
              >
                Agendamento
              </span>

              <span className="h-px w-10 bg-arrasou-gold" />
            </div>

            <h1
              className="
                font-serif
                text-4xl
                font-medium
                leading-tight
                tracking-[-0.03em]

                sm:text-5xl
                lg:text-7xl
              "
            >
              Escolha seu momento
              <span className="block text-gold-gradient">
                de cuidado.
              </span>
            </h1>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-sm
                leading-7
                text-white/55

                sm:text-base
                sm:leading-8
              "
            >
              Escolha o procedimento desejado e fale diretamente
              com nossa equipe pelo WhatsApp para consultar os
              horários disponíveis.
            </p>
          </div>

          {/* Informações */}

          <div
            className="
              mx-auto
              mt-10
              grid
              max-w-4xl
              gap-3

              sm:grid-cols-3
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-white/10
                bg-white/[0.035]
                p-4
              "
            >
              <MessageCircle className="h-5 w-5 shrink-0 text-arrasou-gold" />

              <div>
                <p className="text-sm font-semibold">
                  Atendimento direto
                </p>

                <p className="mt-1 text-xs text-white/40">
                  Fale conosco pelo WhatsApp
                </p>
              </div>
            </div>

            <div
              className="
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-white/10
                bg-white/[0.035]
                p-4
              "
            >
              <Clock3 className="h-5 w-5 shrink-0 text-arrasou-gold" />

              <div>
                <p className="text-sm font-semibold">
                  Consulte horários
                </p>

                <p className="mt-1 text-xs text-white/40">
                  Encontre a melhor disponibilidade
                </p>
              </div>
            </div>

            <div
              className="
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-white/10
                bg-white/[0.035]
                p-4
              "
            >
              <ShieldCheck className="h-5 w-5 shrink-0 text-arrasou-gold" />

              <div>
                <p className="text-sm font-semibold">
                  Confirmação rápida
                </p>

                <p className="mt-1 text-xs text-white/40">
                  Combine os detalhes com nossa equipe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          AGENDAMENTO
      ====================================================== */}

      <section
        className="
          relative
          bg-arrasou-black
          pb-20

          sm:pb-24
          lg:pb-28
        "
      >
        <div className="container-premium">
          <div
            className="
              mx-auto
              max-w-6xl
              rounded-[1.75rem]
              border
              border-white/10
              bg-[#101010]
              p-5

              sm:p-7
              lg:p-9
            "
          >
            <div className="mb-10">
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-arrasou-gold
                "
              >
                Nossos serviços
              </p>

              <h2 className="mt-3 font-serif text-3xl text-white">
                Escolha o serviço
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/45">
                Selecione o procedimento desejado para iniciar
                seu atendimento diretamente pelo WhatsApp.
              </p>
            </div>

            <CalBooking />
          </div>

          {/* Localização */}

          <div
            className="
              mx-auto
              mt-8
              flex
              max-w-6xl
              items-start
              gap-3
              border-t
              border-white/10
              pt-7
            "
          >
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-arrasou-gold" />

            <p className="text-sm leading-6 text-white/40">
              Atendimento no Studio Arrasou Sobrancelhas —
              Av. Júlio Prestes de Albuquerque, 185, Vila Mirim,
              Praia Grande — SP.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}