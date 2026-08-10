import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Sparkles,
} from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-arrasou-offWhite
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* Luz decorativa */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-10
          h-[380px]
          w-[380px]
          rounded-full
          bg-arrasou-gold/10
          blur-[120px]
        "
      />

      <div className="container-premium relative">
        <div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-black/10
            bg-arrasou-black
            px-6
            py-14
            text-center
            shadow-premium

            sm:px-10
            sm:py-16

            lg:px-16
            lg:py-20
          "
        >
          {/* detalhe dourado */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-px
              w-40
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-arrasou-gold
              to-transparent
            "
          />

          <div className="mx-auto max-w-3xl">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-9 bg-arrasou-gold" />

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
                Seu momento começa aqui
              </span>

              <span className="h-px w-9 bg-arrasou-gold" />
            </div>

            <h2
              className="
                font-serif
                text-4xl
                font-medium
                leading-tight
                tracking-[-0.03em]
                text-white

                sm:text-5xl
                lg:text-6xl
              "
            >
              Reserve seu horário
              <span className="block text-gold-gradient">
                de forma simples e rápida.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-sm
                leading-7
                text-white/60

                sm:text-base
                sm:leading-8
              "
            >
              Escolha o serviço desejado, selecione um horário disponível
              e confirme seu atendimento diretamente pela nossa agenda online.
            </p>

            <div
              className="
                mt-9
                flex
                flex-col
                items-center
                justify-center
                gap-4

                sm:flex-row
              "
            >
              <Link
                href="/agendamento"
                className="
                  group
                  inline-flex
                  min-h-14
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-arrasou-gold
                  px-7
                  text-sm
                  font-bold
                  text-arrasou-black
                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-arrasou-goldLight
                  hover:shadow-gold

                  sm:w-auto
                "
              >
                <CalendarDays className="h-5 w-5" />

                Agendar meu horário

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <Link
                href="/servicos"
                className="
                  inline-flex
                  min-h-14
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  px-7
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300

                  hover:border-arrasou-gold
                  hover:text-arrasou-gold

                  sm:w-auto
                "
              >
                Ver nossos serviços
              </Link>
            </div>

            <div
              className="
                mt-10
                flex
                items-center
                justify-center
                gap-2
                text-xs
                uppercase
                tracking-[0.18em]
                text-white/35
              "
            >
              <Sparkles className="h-4 w-4 text-arrasou-gold" />

              Praia Grande • Vila Mirim
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}