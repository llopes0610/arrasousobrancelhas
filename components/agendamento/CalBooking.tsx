"use client";

import {
  Clock3,
  Droplets,
  Eye,
  Footprints,
  Hand,
  MessageCircle,
  ScanFace,
  Sparkles,
  WandSparkles,
} from "lucide-react";

type Service = {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  category: string;
  icon: React.ElementType;
};

const WHATSAPP_NUMBER = "5511954239295";

const services: Service[] = [
  // =========================================================
  // SOBRANCELHAS
  // =========================================================
  {
    id: "design-sobrancelhas",
    name: "Design de Sobrancelhas",
    description:
      "Design personalizado para valorizar o formato natural do seu rosto.",
    duration: "30 minutos",
    price: "R$ 30,00",
    category: "Sobrancelhas",
    icon: Eye,
  },
  {
    id: "design-henna",
    name: "Design + Henna",
    description:
      "Design personalizado com aplicação de henna para maior definição.",
    duration: "40 minutos",
    price: "R$ 40,00",
    category: "Sobrancelhas",
    icon: WandSparkles,
  },
  {
    id: "brow-lamination",
    name: "Brow Lamination",
    description:
      "Técnica que alinha e modela os fios das sobrancelhas, proporcionando um efeito mais definido e moderno.",
    duration: "40 minutos",
    price: "R$ 70,00",
    category: "Sobrancelhas",
    icon: Sparkles,
  },
  {
    id: "micropigmentacao",
    name: "Micropigmentação",
    description:
      "Técnica personalizada para definição e valorização das sobrancelhas.",
    duration: "50 minutos",
    price: "R$ 180,00",
    category: "Micropigmentação",
    icon: Sparkles,
  },

  // =========================================================
  // LÁBIOS
  // =========================================================
  {
    id: "micropigmentacao-labial",
    name: "Micropigmentação Labial",
    description:
      "Procedimento para realçar o contorno e a tonalidade natural dos lábios.",
    duration: "49 minutos",
    price: "R$ 180,00",
    category: "Lábios",
    icon: Sparkles,
  },

  // =========================================================
  // CÍLIOS
  // =========================================================
  {
    id: "extensao-cilios",
    name: "Extensão de Cílios",
    description:
      "Aplicação de fios para proporcionar mais volume, definição e destaque ao olhar.",
    duration: "50 minutos",
    price: "R$ 120,00",
    category: "Cílios",
    icon: Eye,
  },

  // =========================================================
  // ROSTO
  // =========================================================
  {
    id: "higienizacao-facial",
    name: "Higienização Facial",
    description:
      "Cuidados especiais para uma pele mais limpa, saudável e revitalizada.",
    duration: "30 minutos",
    price: "R$ 50,00",
    category: "Rosto",
    icon: Droplets,
  },
  {
    id: "epilacao-buco",
    name: "Epilação Buço",
    description:
      "Remoção delicada dos pelos da região do buço, proporcionando acabamento suave e preciso.",
    duration: "20 minutos",
    price: "R$ 15,00",
    category: "Rosto",
    icon: ScanFace,
  },
  {
    id: "epilacao-facial",
    name: "Epilação Facial",
    description:
      "Remoção cuidadosa dos pelos faciais com atenção ao conforto e acabamento.",
    duration: "28 minutos",
    price: "R$ 40,00",
    category: "Rosto",
    icon: ScanFace,
  },

  // =========================================================
  // UNHAS
  // =========================================================
  {
    id: "manicure",
    name: "Manicure",
    description:
      "Cuidados completos para as unhas das mãos, com acabamento delicado e esmaltação.",
    duration: "60 minutos",
    price: "R$ 30,00",
    category: "Unhas",
    icon: Hand,
  },
  {
    id: "pedicure",
    name: "Pedicure",
    description:
      "Cuidados para as unhas dos pés, proporcionando beleza, conforto e acabamento impecável.",
    duration: "60 minutos",
    price: "R$ 35,00",
    category: "Unhas",
    icon: Footprints,
  },
  {
    id: "pe-mao",
    name: "Pé + Mão",
    description:
      "Manicure e pedicure em um único atendimento para um cuidado completo.",
    duration: "120 minutos",
    price: "R$ 50,00",
    category: "Unhas",
    icon: Hand,
  },
  {
    id: "banho-gel",
    name: "Banho de Gel",
    description:
      "Camada de gel aplicada sobre as unhas naturais para proporcionar maior resistência e acabamento.",
    duration: "57 minutos",
    price: "R$ 80,00",
    category: "Unhas",
    icon: Sparkles,
  },
  {
    id: "blindagem",
    name: "Blindagem",
    description:
      "Técnica para reforçar e proteger as unhas naturais, proporcionando mais resistência e durabilidade.",
    duration: "60 minutos",
    price: "R$ 30,00",
    category: "Unhas",
    icon: Sparkles,
  },
  {
    id: "esmaltacao-gel-mao",
    name: "Esmaltação em Gel - Mão",
    description:
      "Esmaltação em gel nas unhas das mãos para maior brilho e durabilidade.",
    duration: "90 minutos",
    price: "R$ 60,00",
    category: "Unhas",
    icon: Hand,
  },
  {
    id: "esmaltacao-gel-pe",
    name: "Esmaltação em Gel - Pé",
    description:
      "Esmaltação em gel nas unhas dos pés para acabamento duradouro e sofisticado.",
    duration: "90 minutos",
    price: "R$ 65,00",
    category: "Unhas",
    icon: Footprints,
  },
  {
    id: "plastica-pes",
    name: "Plástica dos Pés",
    description:
      "Tratamento voltado ao cuidado e renovação dos pés, proporcionando mais maciez e conforto.",
    duration: "60 minutos",
    price: "R$ 30,00",
    category: "Unhas",
    icon: Footprints,
  },
  {
    id: "plastica-pes-pedicure",
    name: "Plástica dos Pés + Pedicure",
    description:
      "Combinação de tratamento para renovação dos pés com o cuidado completo das unhas.",
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

function getWhatsAppLink(service: Service) {
  const message = `Olá! 😊 Vim pelo site da Arrasou Sobrancelhas e gostaria de agendar *${service.name}* (${service.price}). Poderia me informar os horários disponíveis?`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

export default function CalBooking() {
  return (
    <div className="w-full space-y-12">
      {categories.map((category) => {
        const categoryServices = services.filter(
          (service) => service.category === category
        );

        if (categoryServices.length === 0) return null;

        return (
          <div key={category}>
            <div className="mb-5 flex items-center gap-4">
              <h3 className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.24em] text-arrasou-gold">
                {category}
              </h3>

              <span className="h-px w-full bg-white/10" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {categoryServices.map((service) => {
                const Icon = service.icon;

                return (
                  <a
                    key={service.id}
                    href={getWhatsAppLink(service)}
                    target="_blank"
                    rel="noopener noreferrer"
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
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
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

                      <span className="rounded-full border border-arrasou-gold/20 bg-arrasou-gold/5 px-3 py-1.5 text-sm font-semibold text-arrasou-gold">
                        {service.price}
                      </span>
                    </div>

                    <h4 className="mt-5 font-serif text-2xl font-medium text-white">
                      {service.name}
                    </h4>

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
                      <MessageCircle className="h-4 w-4" />

                      Agendar pelo WhatsApp
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}