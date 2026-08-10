import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-arrasou-black text-white"
    >
      {/* Luz dourada esquerda */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-arrasou-gold/10
          blur-[130px]
        "
      />

      {/* Luz dourada direita */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-arrasou-gold/10
          blur-[150px]
        "
      />

      <div className="container-premium relative">
        <div
          className="
            grid
            items-center
            gap-10
            py-12

            md:py-14

            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-12
            lg:py-14

            xl:grid-cols-[1.08fr_0.92fr]
            xl:gap-16
            xl:py-16
          "
        >
          {/* =====================================================
              CONTEÚDO
          ====================================================== */}
          <div className="relative z-10">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-arrasou-gold sm:w-10" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-arrasou-gold

                  sm:text-xs

                  xl:text-sm
                "
              >
                Studio Arrasou Sobrancelhas
              </span>
            </div>

            {/* Título */}
            <h1
              className="
                max-w-[720px]
                font-serif
                text-[2.9rem]
                font-medium
                leading-[0.98]
                tracking-[-0.035em]
                text-white

                sm:text-6xl

                md:text-[4.2rem]

                lg:text-[4.3rem]

                xl:text-[5rem]

                2xl:text-[5.4rem]
              "
            >
              Sua beleza
              <span className="block">merece</span>

              <span className="block text-gold-gradient">
                um olhar
              </span>

              <span className="block text-gold-gradient">
                especialista.
              </span>
            </h1>

            {/* Descrição */}
            <p
              className="
                mt-6
                max-w-[620px]
                text-sm
                leading-7
                text-white/65

                sm:text-base

                xl:text-[1.05rem]
                xl:leading-8
              "
            >
              Atendimento especializado em sobrancelhas,
              micropigmentação e procedimentos de beleza para
              valorizar sua identidade de forma elegante,
              cuidadosa e personalizada.
            </p>

            {/* Botões */}
            <div
              className="
                mt-7
                flex
                flex-col
                gap-3

                sm:flex-row
                sm:items-center
              "
            >
              <Link
                href="/agendamento"
                className="
                  group
                  inline-flex
                  min-h-13
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-arrasou-gold
                  px-6
                  py-3.5
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
                  min-h-13
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300

                  hover:border-arrasou-gold
                  hover:text-arrasou-gold
                "
              >
                Conhecer os serviços
              </Link>
            </div>

            {/* Informações */}
            <div
              className="
                mt-8
                grid
                max-w-[680px]
                gap-5
                border-t
                border-white/10
                pt-6

                sm:grid-cols-2
              "
            >
              {/* Localização */}
              <div className="flex items-start gap-3">
                <div
                  className="
                    mt-0.5
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-arrasou-gold/30
                    bg-arrasou-gold/5
                  "
                >
                  <MapPin className="h-4 w-4 text-arrasou-gold" />
                </div>

                <div>
                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-white/40
                    "
                  >
                    Estamos em
                  </p>

                  <p className="mt-1 text-sm leading-5 text-white/80">
                    Vila Mirim
                    <br />
                    Praia Grande — SP
                  </p>
                </div>
              </div>

              {/* Experiência */}
              <div className="flex items-start gap-3">
                <div
                  className="
                    mt-0.5
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-arrasou-gold/30
                    bg-arrasou-gold/5
                  "
                >
                  <Sparkles className="h-4 w-4 text-arrasou-gold" />
                </div>

                <div>
                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-white/40
                    "
                  >
                    Experiência
                  </p>

                  <p className="mt-1 text-sm leading-5 text-white/80">
                    Atendimento personalizado
                    <br />
                    em ambiente especializado
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              IMAGEM
          ====================================================== */}
          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[520px]

              lg:ml-auto
              lg:max-w-[500px]

              xl:max-w-[540px]
            "
          >
            {/* Borda dourada deslocada */}
            <div
              className="
                pointer-events-none
                absolute
                -bottom-3
                -right-3
                hidden
                h-[88%]
                w-[88%]
                rounded-[1.8rem]
                border
                border-arrasou-gold/35

                lg:block
              "
            />

            {/* Label */}
            <div
              className="
                absolute
                -left-5
                top-10
                z-20
                hidden
                rounded-full
                border
                border-arrasou-gold/25
                bg-arrasou-black/90
                px-5
                py-3
                backdrop-blur-xl

                xl:block
              "
            >
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.28em]
                  text-arrasou-gold
                "
              >
                Beleza • Técnica • Cuidado
              </p>
            </div>

            {/* FOTO */}
            <div
              className="
                relative
                aspect-[16/13]
                overflow-hidden
                rounded-[1.5rem]
                border
                border-white/10
                bg-[#171717]
                shadow-2xl

                sm:aspect-[16/12]

                lg:aspect-[4/5]

                xl:aspect-[4/5]
              "
            >
              <Image
                src="/images/hero/thays-hero-v2.png"
                alt="Thays, especialista do Studio Arrasou Sobrancelhas em Praia Grande"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 42vw, 540px"
                className="
                  object-cover
                  object-[60%_center]

                  sm:object-[55%_center]

                  lg:object-[61%_center]
                "
              />

              {/* Gradiente da fotografia */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/55
                  via-transparent
                  to-transparent
                "
              />

              {/* Assinatura */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-5

                  sm:p-6
                "
              >
                <div className="border-l border-arrasou-gold pl-4">
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-arrasou-gold
                    "
                  >
                    Studio Arrasou
                  </p>

                  <p className="mt-1 text-xs text-white/75 sm:text-sm">
                    Praia Grande • SP
                  </p>
                </div>
              </div>
            </div>

            {/* Assinatura flutuante - apenas desktop */}
            <div
              className="
                absolute
                -bottom-5
                left-7
                z-20
                hidden
                items-center
                rounded-2xl
                border
                border-white/10
                bg-arrasou-black
                px-5
                py-3
                shadow-xl

                lg:flex
              "
            >
              <span className="font-serif text-lg italic text-arrasou-gold">
                AS
              </span>

              <span
                className="
                  ml-3
                  text-[9px]
                  uppercase
                  tracking-[0.23em]
                  text-white/50
                "
              >
                Arrasou Sobrancelhas
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ENDEREÇO */}
      <div className="border-t border-white/10">
        <div className="container-premium">
          <div
            className="
              flex
              min-h-14
              items-center
              justify-center
              py-3
              text-center
            "
          >
            <p
              className="
                text-[9px]
                uppercase
                leading-5
                tracking-[0.16em]
                text-white/35

                sm:text-[10px]
                sm:tracking-[0.22em]
              "
            >
              Rua Júlio Prestes de Albuquerque, 185
              <span className="mx-2 text-arrasou-gold">•</span>
              Vila Mirim
              <span className="mx-2 text-arrasou-gold">•</span>
              Praia Grande — SP
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}