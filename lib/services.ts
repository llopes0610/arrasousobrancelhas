export type Service = {
  id: string;
  name: string;
  description: string;
  duration: string;
  calLink: string;
};

export const services: Service[] = [
  {
    id: "design-sobrancelhas",
    name: "Design de Sobrancelhas",
    description:
      "Design personalizado para valorizar o formato natural do seu rosto.",
    duration: "30 minutos",
    calLink: "arrasou-sobrancelhas/design-sobrancelhas",
  },

  {
    id: "design-henna",
    name: "Design + Henna",
    description:
      "Design personalizado com aplicação de henna para realçar o olhar.",
    duration: "40 minutos",
    calLink: "arrasou-sobrancelhas/design-henna",
  },

  {
    id: "micropigmentacao",
    name: "Micropigmentação de Sobrancelhas",
    description:
      "Técnica personalizada para definição e valorização das sobrancelhas.",
    duration: "1h30",
    calLink: "arrasou-sobrancelhas/micropigmentacao",
  },

  {
    id: "limpeza-pele",
    name: "Higienização Facial",
    description:
      "Cuidados especiais para uma pele mais limpa, saudável e revitalizada.",
    duration: "50 minutos",
    calLink: "arrasou-sobrancelhas/limpeza-pele",
  },

  {
    id: "depilacao-facial",
    name: "Depilação Facial",
    description:
      "Remoção dos pelos faciais com cuidado, precisão e conforto.",
    duration: "40 minutos",
    calLink: "arrasou-sobrancelhas/depilacao-facial",
  },
];