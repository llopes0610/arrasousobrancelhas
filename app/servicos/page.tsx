import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  Clock3,
  Droplets,
  Eye,
  Footprints,
  Hand,
  ScanFace,
  Sparkles,
  WandSparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça os serviços do Studio Arrasou Sobrancelhas em Praia Grande - SP.",
};

type Service = {
  title: string;
  description: string;
  duration: string;
  price: string;
  category: string;
  icon: React.ElementType;
};

const services: Service[] = [
  // SOBRANCELHAS
  {
    title: "Design de Sobrancelhas",
    description:
      "Mapeamento e design personalizado para valorizar o formato natural do rosto, respeitando proporções e características individuais.",
    duration: "30 minutos",
    price: "R$ 30,00",
    category: "Sobrancelhas",
    icon: Eye,
  },
  {
    title: "Design + Henna",
    description:
      "Combina o design personalizado com aplicação de henna para maior definição, preenchimento visual e destaque do olhar.",
    duration: "40 minutos",
    price: "R$ 40,00",
    category: "Sobrancelhas",
    icon: WandSparkles,
  },
  {
    title: "Brow Lamination",
    description:
      "Técnica para alinhamento e modelagem dos fios das sobrancelhas, proporcionando um visual definido, moderno e natural.",
    duration: "40 minutos",
    price: "R$ 70,00",
    category: "Sobrancelhas",
    icon: Sparkles,
  },

  // MICROPIGMENTAÇÃO
  {
    title: "Micropigmentação",
    description:
      "Procedimento personalizado para definição e valorização das sobrancelhas, respeitando formato, proporções e identidade da cliente.",
    duration: "50 minutos",
    price: "R$ 180,00",
    category: "Micropigmentação",
    icon: Sparkles,
  },
  {
    title: "Micropigmentação Labial",
    description:
      "Procedimento desenvolvido para realçar o contorno e a tonalidade dos lábios, proporcionando aparência mais uniforme e definida.",
    duration: "49 minutos",
    price: "R$ 180,00",
    category: "Lábios",
    icon: Sparkles,
  },

  // CÍLIOS
  {
    title: "Extensão de Cílios",
    description:
      "Aplicação de fios para proporcionar mais volume, definição e destaque ao olhar de forma personalizada.",
    duration: "50 minutos",
    price: "R$ 120,00",
    category: "Cílios",
    icon: Eye,
  },

  // ROSTO
  {
    title: "Higienização Facial",
    description:
      "Cuidado direcionado à limpeza e renovação da pele, proporcionando sensação de frescor e preparação para a rotina de cuidados.",
    duration: "30 minutos",
    price: "R$ 50,00",
    category: "Rosto",
    icon: Droplets,
  },
  {
    title: "Epilação Buço",
    description:
      "Remoção delicada dos pelos da região do buço, proporcionando acabamento limpo, suave e preciso.",
    duration: "20 minutos",
    price: "R$ 15,00",
    category: "Rosto",
    icon: ScanFace,
  },
  {
    title: "Epilação Facial",
    description:
      "Remoção cuidadosa dos pelos faciais, com atenção ao acabamento, conforto e delicadeza durante o procedimento.",
    duration: "28 minutos",
    price: "R$ 40,00",
    category: "Rosto",
    icon: ScanFace,
  },

  // UNHAS
  {
    title: "Manicure",
    description:
      "Cuidados completos para as unhas das mãos, incluindo preparação, acabamento e esmaltação.",
    duration: "60 minutos",
    price: "R$ 30,00",
    category: "Unhas",
    icon: Hand,
  },
  {
    title: "Pedicure",
    description:
      "Cuidado completo das unhas dos pés, proporcionando conforto, acabamento delicado e beleza.",
    duration: "60 minutos",
    price: "R$ 35,00",
    category: "Unhas",
    icon: Footprints,
  },
  {
    title: "Pé + Mão",
    description:
      "Manicure e pedicure em um único atendimento para um cuidado completo das mãos e dos pés.",
    duration: "120 minutos",
    price: "R$ 50,00",
    category: "Unhas",
    icon: Hand,
  },
  {
    title: "Banho de Gel",
    description:
      "Aplicação de uma camada de gel sobre as unhas naturais para proporcionar resistência, proteção e acabamento sofisticado.",
    duration: "57 minutos",
    price: "R$ 80,00",
    category: "Unhas",
    icon: Sparkles,
  },
  {
    title: "Blindagem",
    description:
      "Técnica desenvolvida para proteger e fortalecer as unhas naturais, proporcionando maior resistência e durabilidade.",
    duration: "60 minutos",
    price: "R$ 30,00",
    category: "Unhas",
    icon: Sparkles,
  },
  {
    title: "Esmaltação em Gel - Mão",
    description:
      "Esmaltação em gel nas unhas das mãos, proporcionando brilho intenso e maior durabilidade.",
    duration: "90 minutos",
    price: "R$ 60,00",
    category: "Unhas",
    icon: Hand,
  },
  {
    title: "Esmaltação em Gel - Pé",
    description:
      "Esmaltação em gel nas unhas dos pés para acabamento sofisticado e maior durabilidade.",
    duration: "90 minutos",
    price: "R$ 65,00",
    category: "Unhas",
    icon: Footprints,
  },
  {
    title: "Plástica dos Pés",
    description:
      "Tratamento voltado ao cuidado e renovação dos pés, proporcionando mais maciez, conforto e bem-estar.",
    duration: "60 minutos",
    price: "R$ 30,00",
    category: "Unhas",
    icon: Footprints,
  },
  {
    title: "Plástica dos Pés + Pedicure",
    description:
      "Combinação do tratamento de renovação dos pés com o cuidado completo das unhas.",
    duration: "120 minutos",
    price: "R$ 65,00",
    category: "Unhas",
    icon: Footprints,
  },
];

const categories = [
  "Sobrancelhas",
  "Micropigmentação",
  "Lábios",
  "Cílios",
  "Rosto",
  "Unhas",
];

export default function ServicosPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-arrasou-black py-20 text-white sm:py-24 lg:py-28">
        <div
          className="
            pointer-events-none
            absolute
            -right-40
            top-10
            h-[420px]
            w-[420px]
            rounded-full
            bg-arrasou-gold/10
            blur-[140px]
          "
        />

        <div className="container-premium relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-arrasou-gold" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-arrasou-gold sm:text-xs">
                Serviços
              </span>

              <span className="h-px w-10 bg-arrasou-gold" />
            </div>

            <h1 className="font-serif text-4xl font-medium leading-tight tracking-[-0.03em] sm:text-5xl lg:text-7xl">
              Cuidados pensados para
              <span className="block text-gold-gradient">
                realçar sua beleza.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              Conheça os procedimentos disponíveis no Studio Arrasou
              Sobrancelhas e escolha o cuidado que mais combina com você.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          LISTA DE SERVIÇOS
      ====================================================== */}

      <section className="bg-arrasou-offWhite py-20 sm:py-24 lg:py-28">
        <div className="container-premium space-y-20">
          {categories.map((category) => {
            const categoryServices = services.filter(
              (service) => service.category === category
            );

            if (categoryServices.length === 0) return null;

            return (
              <div key={category}>
                {/* Categoria */}

                <div className="mb-8 flex items-center gap-5">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-arrasou-gold">
                      Nossos cuidados
                    </span>

                    <h2 className="mt-2 font-serif text-3xl font-medium text-arrasou-black sm:text-4xl">
                      {category}
                    </h2>
                  </div>

                  <span className="mt-auto h-px flex-1 bg-black/10" />
                </div>

                {/* Serviços */}

                <div className="grid gap-6 lg:grid-cols-2">
                  {categoryServices.map((service) => {
                    const Icon = service.icon;

                    return (
                      <article
                        key={service.title}
                        className="
                          group
                          relative
                          overflow-hidden
                          rounded-[1.75rem]
                          border
                          border-black/10
                          bg-white
                          p-6
                          shadow-sm
                          transition-all
                          duration-300

                          hover:-translate-y-1
                          hover:border-arrasou-gold/30
                          hover:shadow-premium

                          sm:p-8
                        "
                      >
                        <div className="flex items-start justify-between gap-5">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-arrasou-gold/30 bg-arrasou-gold/5">
                            <Icon className="h-5 w-5 text-arrasou-gold" />
                          </div>

                          <span className="rounded-full bg-arrasou-black px-4 py-2 text-sm font-semibold text-arrasou-gold">
                            {service.price}
                          </span>
                        </div>

                        <h3 className="mt-6 font-serif text-3xl font-medium text-arrasou-black">
                          {service.title}
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-black/55">
                          {service.description}
                        </p>

                        <div className="mt-6 flex items-center gap-2 border-t border-black/10 pt-5 text-sm text-black/45">
                          <Clock3 className="h-4 w-4 text-arrasou-gold" />
                          {service.duration}
                        </div>

                        <Link
                          href="/agendamento"
                          className="
                            mt-6
                            inline-flex
                            items-center
                            gap-2
                            text-sm
                            font-semibold
                            text-arrasou-gold
                            transition-colors

                            hover:text-arrasou-black
                          "
                        >
                          Agendar este serviço

                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* =====================================================
              CTA FINAL
          ====================================================== */}

          <article
            className="
              flex
              min-h-[320px]
              flex-col
              justify-between
              rounded-[1.75rem]
              bg-arrasou-black
              p-6
              text-white
              shadow-premium

              sm:p-8
              lg:p-10
            "
          >
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-arrasou-gold">
                Agendamento
              </span>

              <h2 className="mt-5 max-w-2xl font-serif text-4xl font-medium leading-tight">
                Já sabe qual procedimento deseja realizar?
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/55">
                Escolha seu procedimento e fale diretamente com
                nossa equipe para consultar os horários disponíveis.
              </p>
            </div>

            <Link
              href="/agendamento"
              className="
                mt-8
                inline-flex
                w-fit
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
              Agendar atendimento
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}