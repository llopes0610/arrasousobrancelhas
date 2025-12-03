import { Shield, Heart, Award, MapPin } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Segurança e Higiene",
    description: "Materiais descartáveis e esterilizados em todos os procedimentos, seguindo rigorosos protocolos de segurança.",
  },
  {
    icon: Heart,
    title: "Atendimento Personalizado",
    description: "Cada cliente é única. Escutamos suas necessidades e criamos o design perfeito para você.",
  },
  {
    icon: Award,
    title: "Profissional Experiente",
    description: "Mais de 12 anos de experiência e formação especializada em técnicas modernas de design.",
  },
  {
    icon: MapPin,
    title: "Atendimento In Loco",
    description: "Levo meu estúdio até você! Atendemos em Cotia, Praia Grande, São Vicente e Santos - SP.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-container section-padding bg-gradient-to-b from-arrasou-50 to-white">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-serif">
          Por que Escolher a Thays?
        </h2>
        <p className="text-lg text-gray-600">
          Seu olhar merece o melhor cuidado, com quem realmente entende do assunto
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason) => {
          const Icon = reason.icon;
          return (
            <div key={reason.title} className="text-center">
              <div className="bg-white w-16 h-16 rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                <Icon className="h-8 w-8 text-arrasou-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}