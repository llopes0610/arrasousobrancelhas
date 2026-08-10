import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Award,
  Heart,
  Sparkles,
} from "lucide-react";

export default function AboutPreview() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-arrasou-offWhite py-20 sm:py-24 lg:py-28"
    >
      <div className="container-premium">
        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[0.92fr_1.08fr]
            lg:gap-16
          "
        >
          {/* =====================================================
              IMAGEM
          ====================================================== */}

          <div className="relative mx-auto w-full max-w-[520px] lg:mx-0">
            {/* Moldura */}
            <div
              className="
                absolute
                -left-4
                -top-4
                hidden
                h-[88%]
                w-[88%]
                rounded-[2rem]
                border
                border-arrasou-gold/25
                lg:block
              "
            />

            <div
              className="
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-[1.75rem]
                border
                border-black/10
                bg-white
                shadow-premium
              "
            >
              <Image
                src="/images/hero/thays-hero-v2.png"
                alt="Thays, especialista do Studio Arrasou Sobrancelhas"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover object-[62%_center]"
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/45
                  via-transparent
                  to-transparent
                "
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="border-l border-arrasou-gold pl-4">
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-arrasou-gold
                    "
                  >
                    Especialista
                  </p>

                  <p className="mt-1 font-serif text-2xl text-white">
                    Thays
                  </p>

                  <p className="mt-1 text-sm text-white/70">
                    Studio Arrasou Sobrancelhas
                  </p>
                </div>
              </div>
            </div>

            {/* Card flutuante */}
            <div
              className="
                absolute
                -bottom-6
                -right-4
                hidden
                max-w-[240px]
                rounded-2xl
                border
                border-black/10
                bg-white
                p-5
                shadow-xl
                lg:block
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-arrasou-gold/10
                  "
                >
                  <Sparkles className="h-4 w-4 text-arrasou-gold" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-arrasou-black">
                    Atendimento personalizado
                  </p>

                  <p className="mt-1 text-xs leading-5 text-black/50">
                    Cada detalhe pensado para você.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              CONTEÚDO
          ====================================================== */}

          <div>
            <div className="mb-5 flex items-center gap-3">
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
                Quem cuida de você
              </span>
            </div>

            <h2
              className="
                max-w-2xl
                font-serif
                text-4xl
                font-medium
                leading-tight
                tracking-[-0.03em]
                text-arrasou-black
                sm:text-5xl
                lg:text-6xl
              "
            >
              Técnica, sensibilidade e
              <span className="block text-arrasou-gold">
                atenção aos detalhes.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-8
                text-black/60
              "
            >
              À frente do Studio Arrasou Sobrancelhas, Thays une técnica,
              cuidado e olhar individualizado para criar resultados que
              respeitam a identidade de cada cliente.
            </p>

            <p
              className="
                mt-4
                max-w-2xl
                text-base
                leading-8
                text-black/60
              "
            >
              Mais do que transformar sobrancelhas, a proposta é oferecer uma
              experiência acolhedora, segura e personalizada em cada
              atendimento.
            </p>

            {/* Diferenciais */}
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <div
                className="
                  rounded-2xl
                  border
                  border-black/10
                  bg-white
                  p-5
                "
              >
                <Award className="h-5 w-5 text-arrasou-gold" />

                <h3 className="mt-4 text-sm font-semibold text-arrasou-black">
                  Técnica especializada
                </h3>

                <p className="mt-2 text-sm leading-6 text-black/50">
                  Procedimentos planejados de forma individual para cada
                  cliente.
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-black/10
                  bg-white
                  p-5
                "
              >
                <Heart className="h-5 w-5 text-arrasou-gold" />

                <h3 className="mt-4 text-sm font-semibold text-arrasou-black">
                  Cuidado em cada etapa
                </h3>

                <p className="mt-2 text-sm leading-6 text-black/50">
                  Atendimento próximo e atenção aos detalhes do início ao fim.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div
              className="
                mt-9
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-center
              "
            >
              <Link
                href="/sobre"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-arrasou-black
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-black
                "
              >
                Conhecer nossa história

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
                href="/agendamento"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-arrasou-gold
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  text-arrasou-gold
                  transition-all
                  duration-300

                  hover:bg-arrasou-gold
                  hover:text-arrasou-black
                "
              >
                Agendar atendimento
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}