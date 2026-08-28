"use client";

import {
  Clock3,
  Eye,
  Sparkles,
  WandSparkles,
  ScanFace,
  Droplets,
  MessageCircle,
} from "lucide-react";

type Service = {
  id: string;
  name: string;
  description: string;
  duration: string;
  icon: React.ElementType;
};

const WHATSAPP_NUMBER = "5511954239295";

const services: Service[] = [
  {
    id: "design-sobrancelhas",
    name: "Design de Sobrancelhas",
    description:
      "Design personalizado para valorizar o formato natural do seu rosto.",
    duration: "30 minutos",
    icon: Eye,
  },
  {
    id: "design-henna",
    name: "Design + Henna",
    description:
      "Design personalizado com aplicação de henna para maior definição.",
    duration: "40 minutos",
    icon: WandSparkles,
  },
  {
    id: "micropigmentacao",
    name: "Micropigmentação",
    description:
      "Técnica personalizada para definição e valorização das sobrancelhas.",
    duration: "1h30",
    icon: Sparkles,
  },
  {
    id: "limpeza-pele",
    name: "Higienização Facial",
    description:
      "Cuidados especiais para uma pele mais limpa, saudável e revitalizada.",
    duration: "50 minutos",
    icon: Droplets,
  },
  {
    id: "depilacao-facial",
    name: "Depilação Facial",
    description:
      "Remoção dos pelos faciais com cuidado, precisão e conforto.",
    duration: "40 minutos",
    icon: ScanFace,
  },
];

function getWhatsAppLink(serviceName: string) {
  const message = `Olá! 😊 Vim pelo site da Arrasou Sobrancelhas e gostaria de agendar ${serviceName}. Poderia me informar os horários disponíveis?`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

export default function CalBooking() {
  return (
    <div className="w-full">
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <a
              key={service.id}
              href={getWhatsAppLink(service.name)}
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
                  transition-colors

                  group-hover:border-arrasou-gold
                "
              >
                <Icon className="h-5 w-5 text-arrasou-gold" />
              </div>

              <h3 className="mt-5 font-serif text-2xl font-medium text-white">
                {service.name}
              </h3>

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
}