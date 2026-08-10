import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CalendarDays,
  Heart,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a história, a proposta e o atendimento do Studio Arrasou Sobrancelhas em Praia Grande - SP.",
};

const values = [
  {
    title: "Atendimento individual",
    description:
      "Cada cliente possui características únicas. Por isso, cada atendimento começa com atenção às suas necessidades e expectativas.",
    icon: Heart,
  },
  {
    title: "Técnica e cuidado",
    description:
      "Os procedimentos são realizados com atenção aos detalhes, buscando equilíbrio entre técnica, estética e naturalidade.",
    icon: Sparkles,
  },
  {
    title: "Experiência",
    description:
      "Do primeiro contato ao resultado final, cada etapa é pensada para proporcionar uma experiência acolhedora e profissional.",
    icon: Target,
  },
];

export default function SobrePage() {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-arrasou-black text-white">
        {/* Glow dourado */}
        <div
          className="
            pointer-events-none
            absolute
            -right-40
            top-10
            h-[480px]
            w-[480px]
            rounded-full
            bg-arrasou-gold/10
            blur-[140px]
          "
        />

        <div className="container-premium relative">
          <div
            className="
              grid
              items-center
              gap-12
              py-16

              sm:py-20

              lg:grid-cols-[1fr_0.8fr]
              lg:gap-16
              lg:py-24
            "
          >
            {/* TEXTO */}
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
                  Nossa essência
                </span>
              </div>

              <h1
                className="
                  max-w-3xl
                  font-serif
                  text-4xl
                  font-medium
                  leading-[1.05]
                  tracking-[-0.03em]

                  sm:text-5xl
                  lg:text-7xl
                "
              >
                Beleza começa quando
                <span className="block text-gold-gradient">
                  você se reconhece.
                </span>
              </h1>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-sm
                  leading-7
                  text-white/55

                  sm:text-base
                  sm:leading-8
                "
              >
                O Studio Arrasou nasceu com uma proposta simples:
                oferecer cuidado, técnica e atenção individual para
                valorizar a beleza e a identidade de cada cliente.
              </p>

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  gap-3

                  sm:flex-row
                "
              >
                <Link
                  href="/agendamento"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-arrasou-gold
                    px-7
                    py-4
                    text-sm
                    font-bold
                    text-arrasou-black
                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:bg-arrasou-goldLight
                    hover:shadow-gold
                  "
                >
                  <CalendarDays className="h-4 w-4" />

                  Agendar atendimento

                  <ArrowRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />
                </Link>

                <Link
                  href="/servicos"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    px-7
                    py-4
                    text-sm
                    font-semibold
                    text-white
                    transition-all

                    hover:border-arrasou-gold
                    hover:text-arrasou-gold
                  "
                >
                  Conhecer os serviços
                </Link>
              </div>
            </div>

            {/* FOTO */}
            <div
              className="
                relative
                mx-auto
                w-full
                max-w-[440px]

                lg:ml-auto
              "
            >
              <div
                className="
                  absolute
                  -bottom-4
                  -right-4
                  hidden
                  h-[90%]
                  w-[90%]
                  rounded-[2rem]
                  border
                  border-arrasou-gold/30

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
                  border-white/10
                  bg-[#171717]
                "
              >
                <Image
                  src="/images/hero/thays-hero-v2.png"
                  alt="Thays do Studio Arrasou Sobrancelhas"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 440px"
                  className="object-cover object-[62%_center]"
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/60
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
                        tracking-[0.24em]
                        text-arrasou-gold
                      "
                    >
                      Arrasou Sobrancelhas
                    </p>

                    <p className="mt-2 font-serif text-2xl text-white">
                      Thays
                    </p>

                    <p className="mt-1 text-sm text-white/60">
                      Beleza • Técnica • Cuidado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SOBRE A THAYS
      ====================================================== */}

      <section className="bg-arrasou-offWhite py-20 sm:py-24 lg:py-28">
        <div className="container-premium">
          <div
            className="
              grid
              gap-12

              lg:grid-cols-[0.7fr_1.3fr]
              lg:gap-20
            "
          >
            {/* TÍTULO */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-arrasou-gold" />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-arrasou-gold
                  "
                >
                  Por trás da Arrasou
                </span>
              </div>

              <h2
                className="
                  mt-5
                  font-serif
                  text-4xl
                  font-medium
                  leading-tight
                  tracking-[-0.03em]
                  text-arrasou-black

                  sm:text-5xl
                "
              >
                Um olhar atento
                <span className="block text-arrasou-gold">
                  para cada detalhe.
                </span>
              </h2>
            </div>

            {/* TEXTO */}
            <div>
              <p
                className="
                  text-base
                  leading-8
                  text-black/60

                  sm:text-lg
                  sm:leading-9
                "
              >
                À frente do Studio Arrasou Sobrancelhas, Thays acredita
                que um bom resultado não deve simplesmente seguir um
                padrão. O atendimento precisa considerar as
                características, preferências e identidade de cada
                pessoa.
              </p>

              <p className="mt-6 text-base leading-8 text-black/55">
                Essa atenção individual está presente desde a escolha
                do procedimento até os detalhes do atendimento. A
                proposta é proporcionar resultados equilibrados e uma
                experiência em que cada cliente se sinta bem cuidada.
              </p>

              <div
                className="
                  mt-8
                  border-l-2
                  border-arrasou-gold
                  py-2
                  pl-6
                "
              >
                <p
                  className="
                    font-serif
                    text-2xl
                    italic
                    leading-relaxed
                    text-arrasou-black

                    sm:text-3xl
                  "
                >
                  “Realçar sua beleza sem apagar aquilo que faz você
                  ser você.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALORES
      ====================================================== */}

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-arrasou-gold" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-arrasou-gold
                "
              >
                Nossa forma de atender
              </span>

              <span className="h-px w-10 bg-arrasou-gold" />
            </div>

            <h2
              className="
                font-serif
                text-4xl
                font-medium
                tracking-[-0.03em]
                text-arrasou-black

                sm:text-5xl
                lg:text-6xl
              "
            >
              O que você encontra
              <span className="block text-arrasou-gold">
                em cada atendimento.
              </span>
            </h2>
          </div>

          <div
            className="
              mt-12
              grid
              gap-5

              md:grid-cols-3
            "
          >
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[1.5rem]
                    border
                    border-black/10
                    bg-arrasou-offWhite
                    p-6
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-arrasou-gold/30
                    hover:shadow-premium

                    sm:p-7
                  "
                >
                  <span
                    className="
                      absolute
                      right-5
                      top-3
                      font-serif
                      text-5xl
                      italic
                      text-black/[0.035]
                    "
                  >
                    0{index + 1}
                  </span>

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
                      bg-white
                    "
                  >
                    <Icon className="h-5 w-5 text-arrasou-gold" />
                  </div>

                  <h3
                    className="
                      mt-6
                      font-serif
                      text-2xl
                      font-medium
                      text-arrasou-black
                    "
                  >
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black/50">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-arrasou-offWhite pb-20 sm:pb-24 lg:pb-28">
        <div className="container-premium">
          <div
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              bg-arrasou-black
              px-6
              py-14
              text-center
              text-white

              sm:px-10
              sm:py-16

              lg:px-16
              lg:py-20
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -right-32
                top-0
                h-[320px]
                w-[320px]
                rounded-full
                bg-arrasou-gold/10
                blur-[100px]
              "
            />

            <div className="relative mx-auto max-w-3xl">
              <ShieldCheck
                className="
                  mx-auto
                  h-7
                  w-7
                  text-arrasou-gold
                "
              />

              <h2
                className="
                  mt-6
                  font-serif
                  text-4xl
                  font-medium
                  leading-tight

                  sm:text-5xl
                "
              >
                Agora queremos cuidar
                <span className="block text-gold-gradient">
                  de você.
                </span>
              </h2>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-xl
                  text-sm
                  leading-7
                  text-white/55

                  sm:text-base
                "
              >
                Consulte nossa agenda, escolha o procedimento e
                encontre o melhor horário para seu atendimento.
              </p>

              <Link
                href="/agendamento"
                className="
                  group
                  mt-8
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-arrasou-gold
                  px-7
                  py-4
                  text-sm
                  font-bold
                  text-arrasou-black
                  transition-all
                  duration-300

                  hover:bg-arrasou-goldLight
                  hover:shadow-gold
                "
              >
                Agendar meu horário

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}