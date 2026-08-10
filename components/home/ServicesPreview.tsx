import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Sparkles,
  Eye,
  WandSparkles,
  ScanFace,
  Droplets,
} from "lucide-react";

const services = [
  {
    title: "Design de Sobrancelhas",
    description:
      "Mapeamento e design personalizado para valorizar o formato natural do seu rosto.",
    duration: "30 minutos",
    icon: Eye,
    href: "/agendamento",
  },
  {
    title: "Design + Henna",
    description:
      "Design personalizado com aplicação de henna para um resultado mais definido e marcante.",
    duration: "40 minutos",
    icon: WandSparkles,
    href: "/agendamento",
  },
  {
    title: "Micropigmentação",
    description:
      "Técnicas personalizadas para realçar as sobrancelhas com equilíbrio, definição e naturalidade.",
    duration: "1h30",
    icon: Sparkles,
    href: "/agendamento",
  },
  {
    title: "Higienização Facial",
    description:
      "Cuidados para uma pele mais limpa, renovada e preparada para sua rotina de beleza.",
    duration: "50 minutos",
    icon: Droplets,
    href: "/agendamento",
  },
  {
    title: "Depilação Facial",
    description:
      "Remoção cuidadosa dos pelos faciais, proporcionando acabamento limpo e delicado.",
    duration: "40 minutos",
    icon: ScanFace,
    href: "/agendamento",
  },
];

export default function ServicesPreview() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-arrasou-black py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Luz dourada decorativa */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-arrasou-gold/10
          blur-[130px]
        "
      />

      <div className="container-premium relative">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-arrasou-gold" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-arrasou-gold sm:text-xs">
              Nossos Serviços
            </span>

            <span className="h-px w-10 bg-arrasou-gold" />
          </div>

          <h2 className="font-serif text-4xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            Cuidados pensados para
            <span className="block text-gold-gradient">
              realçar sua beleza.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            Técnicas personalizadas, atendimento especializado e atenção aos
            detalhes em cada procedimento.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.035]
                  p-6
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-arrasou-gold/40
                  hover:bg-white/[0.055]
                  hover:shadow-gold
                "
              >
                {/* Número decorativo */}
                <span
                  className="
                    absolute
                    right-5
                    top-4
                    font-serif
                    text-5xl
                    italic
                    text-white/[0.035]
                    transition-colors
                    group-hover:text-arrasou-gold/[0.08]
                  "
                >
                  0{index + 1}
                </span>

                {/* Ícone */}
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
                    transition-all
                    duration-300

                    group-hover:border-arrasou-gold
                    group-hover:bg-arrasou-gold/10
                  "
                >
                  <Icon className="h-5 w-5 text-arrasou-gold" />
                </div>

                <h3 className="mt-6 font-serif text-2xl font-medium text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5 text-sm text-white/50">
                  <Clock className="h-4 w-4 text-arrasou-gold" />
                  {service.duration}
                </div>

                <Link
                  href={service.href}
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-arrasou-gold
                    transition-colors
                    hover:text-arrasou-goldLight
                  "
                >
                  Agendar este serviço

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
              </article>
            );
          })}

          {/* Card final CTA */}
          <article
            className="
              flex
              min-h-[320px]
              flex-col
              justify-between
              rounded-2xl
              border
              border-arrasou-gold/30
              bg-gradient-to-br
              from-arrasou-gold/15
              via-arrasou-gold/5
              to-transparent
              p-6
            "
          >
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-arrasou-gold">
                Seu momento
              </span>

              <h3 className="mt-5 font-serif text-3xl font-medium leading-tight text-white">
                Encontre o cuidado ideal para você.
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/55">
                Consulte os horários disponíveis e reserve seu atendimento
                diretamente pela nossa agenda online.
              </p>
            </div>

            <Link
              href="/agendamento"
              className="
                mt-8
                inline-flex
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
              Ver horários disponíveis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </div>

        {/* CTA inferior */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/servicos"
            className="
              inline-flex
              items-center
              gap-2
              border-b
              border-arrasou-gold/40
              pb-1
              text-sm
              font-semibold
              text-white/70
              transition-colors
              hover:border-arrasou-gold
              hover:text-arrasou-gold
            "
          >
            Ver todos os serviços
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}