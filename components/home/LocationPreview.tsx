import Link from "next/link";

import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Navigation,
} from "lucide-react";

const GOOGLE_MAPS_URL =
  "https://maps.app.goo.gl/SFXGzmEYHebMBvPZ7";

const ADDRESS =
  "Rua Júlio Prestes de Albuquerque, 185 - Vila Mirim, Praia Grande - SP";

export default function LocationPreview() {
  const mapQuery = encodeURIComponent(ADDRESS);

  return (
    <section
      id="localizacao"
      className="
        relative
        overflow-hidden
        bg-arrasou-black
        py-20
        text-white

        sm:py-24
        lg:py-28
      "
    >
      {/* Glow dourado */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-arrasou-gold/10
          blur-[140px]
        "
      />

      <div className="container-premium relative">
        {/* Cabeçalho */}
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

                sm:text-xs
              "
            >
              Onde estamos
            </span>

            <span className="h-px w-10 bg-arrasou-gold" />
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
            Seu momento de cuidado
            <span className="block text-gold-gradient">
              começa aqui.
            </span>
          </h2>

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
            Estamos em Praia Grande, em um espaço preparado para
            proporcionar conforto, cuidado e uma experiência
            especializada em cada atendimento.
          </p>
        </div>

        {/* Conteúdo principal */}
        <div
          className="
            mt-12
            grid
            overflow-hidden
            rounded-[1.75rem]
            border
            border-white/10
            bg-white/[0.035]

            lg:grid-cols-[0.78fr_1.22fr]
            lg:rounded-[2rem]
          "
        >
          {/* Informações */}
          <div
            className="
              flex
              flex-col
              justify-between
              p-6

              sm:p-8
              lg:p-10
            "
          >
            <div>
              {/* Local */}
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
                "
              >
                <MapPin className="h-5 w-5 text-arrasou-gold" />
              </div>

              <p
                className="
                  mt-7
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-arrasou-gold
                "
              >
                Studio Arrasou Sobrancelhas
              </p>

              <h3
                className="
                  mt-3
                  font-serif
                  text-3xl
                  font-medium
                  leading-tight
                  text-white

                  sm:text-4xl
                "
              >
                Vila Mirim
                <span className="block text-white/50">
                  Praia Grande — SP
                </span>
              </h3>

              {/* Endereço */}
              <div className="mt-7 border-l border-arrasou-gold/50 pl-4">
                <p className="text-sm leading-7 text-white/65">
                  Rua Júlio Prestes de Albuquerque, 185
                  <br />
                  Vila Mirim
                  <br />
                  Praia Grande — SP
                </p>
              </div>

              {/* Horários */}
              <div className="mt-8 flex items-start gap-3">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                  "
                >
                  <Clock3 className="h-4 w-4 text-arrasou-gold" />
                </div>

                <div>
                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-white/35
                    "
                  >
                    Atendimento
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/70">
                    Segunda a sábado
                    <br />
                    das 9h às 19h
                  </p>
                </div>
              </div>
            </div>

            {/* Botões */}
            <div className="mt-10 space-y-3">
              <Link
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-arrasou-gold
                  px-6
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
                <Navigation className="h-4 w-4" />

                Como chegar

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300

                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>

              <Link
                href="/agendamento"
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300

                  hover:border-arrasou-gold
                  hover:text-arrasou-gold
                "
              >
                Agendar atendimento
              </Link>
            </div>
          </div>

          {/* MAPA */}
          <div
            className="
              relative
              min-h-[420px]
              border-t
              border-white/10

              sm:min-h-[500px]

              lg:min-h-[560px]
              lg:border-l
              lg:border-t-0
            "
          >
            <iframe
              title="Localização do Studio Arrasou Sobrancelhas"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            {/* Detalhe sobre mapa */}
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                h-24
                bg-gradient-to-t
                from-black/30
                to-transparent
              "
            />
          </div>
        </div>

        {/* Informação inferior */}
        <div
          className="
            mt-8
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-white/10
            pt-7
            text-center

            sm:flex-row
            sm:text-left
          "
        >
          <div>
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

            <p className="mt-2 text-sm text-white/45">
              Beleza, técnica e cuidado em Praia Grande.
            </p>
          </div>

          <Link
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-white/60
              transition-colors

              hover:text-arrasou-gold
            "
          >
            Visualizar no Google Maps

            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}