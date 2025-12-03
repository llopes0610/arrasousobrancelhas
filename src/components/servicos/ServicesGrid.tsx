import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign, Sparkles, Star } from "lucide-react";

const services = [
  {
    title: "Design de Sobrancelhas",
    description: "Modelagem completa com análise facial, medição e design personalizado para valorizar seus traços únicos.",
    duration: "45 min",
    price: "R$ 45,00",
    featured: false,
  },
  {
    title: "Design + Henna",
    description: "Design de sobrancelhas com aplicação de henna para preenchimento natural e duradouro.",
    duration: "60 min",
    price: "R$ 60,00",
    featured: false,
  },
  {
    title: "Coloração de Sobrancelhas",
    description: "Coloração profissional para sobrancelhas mais marcantes e definidas, com coloração de longa duração.",
    duration: "30 min",
    price: "R$ 60,00",
    featured: false,
  },
  {
    title: "Alongamento de Cílios",
    description: "Técnica fio a fio para cílios volumosos e alongados. Resultado natural que dura até 4 semanas.",
    duration: "90 min",
    price: "R$ 200,00",
    featured: false,
  },
  {
    title: "Limpeza de Pele Facial",
    description: "Tratamento completo para limpeza profunda, hidratação e revitalização da pele do rosto.",
    duration: "60 min",
    price: "R$ 150,00",
    featured: false,
  },
  {
    title: "Depilação Facial",
    description: "Depilação delicada e precisa de buço, queixo e outras áreas do rosto com técnica especializada.",
    duration: "20 min",
    price: "R$ 40,00",
    featured: false,
  },
];

const micropigmentationServices = [
  {
    title: "Micropigmentação Fio a Fio",
    description: "Técnica realista que cria fios individuais para um resultado natural e perfeito. Ideal para quem busca densidade e definição.",
    duration: "2h - 2h30",
    price: "R$ 200,00",
    technique: "Fios Realistas",
  },
  {
    title: "Micropigmentação Shadow (Esfumada)",
    description: "Efeito de maquiagem suave e sombreado, perfeito para quem quer um visual mais marcante e preenchido.",
    duration: "2h - 2h30",
    price: "R$ 200,00",
    technique: "Efeito Sombreado",
  },
  {
    title: "Micropigmentação Ombré",
    description: "Técnica degradê que começa mais suave e intensifica nas pontas. Resultado moderno e sofisticado.",
    duration: "2h - 2h30",
    price: "R$ 200,00",
    technique: "Efeito Degradê",
  },
  {
    title: "Micropigmentação Híbrida",
    description: "Combinação de fio a fio + shadow para máxima naturalidade e definição. O melhor dos dois mundos!",
    duration: "2h30 - 3h",
    price: "R$ 200,00",
    technique: "Técnica Mista",
  },
];

export default function ServicesGrid() {
  return (
    <div className="space-y-12">
      {/* Seção Micropigmentação em Destaque */}
      <div>
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-arrasou-400 to-arrasou-500 text-white px-6 py-2 rounded-full mb-4">
            <Star className="h-5 w-5" />
            <span className="font-bold">Promoção Especial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 font-serif">
            Micropigmentação de Sobrancelhas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Todas as técnicas por apenas <span className="font-bold text-arrasou-500 text-2xl">R$ 200,00</span>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Resultado duradouro de 1 a 2 anos • Retoque incluso após 30 dias
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {micropigmentationServices.map((service) => (
            <Card 
              key={service.title} 
              className="relative overflow-hidden border-2 border-arrasou-300 hover:border-arrasou-400 hover:shadow-xl transition-all group"
            >
              {/* Badge de destaque */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-arrasou-400 to-arrasou-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                Popular
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start gap-2 mb-2">
                  <Sparkles className="h-5 w-5 text-arrasou-400 flex-shrink-0 mt-1" />
                  <CardTitle className="text-lg font-bold text-gray-900 leading-tight">
                    {service.title}
                  </CardTitle>
                </div>
                <span className="inline-block text-xs font-semibold text-arrasou-600 bg-arrasou-50 px-3 py-1 rounded-full">
                  {service.technique}
                </span>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 leading-relaxed min-h-[80px]">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-arrasou-100">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4 text-arrasou-400" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4 text-arrasou-400" />
                    <span className="font-bold text-arrasou-500 text-lg">{service.price}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info adicional sobre micropigmentação */}
        <div className="bg-gradient-to-r from-arrasou-50 to-nude-50 rounded-xl p-6 border-2 border-arrasou-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-shrink-0">
              <div className="bg-white rounded-full p-3 shadow-md">
                <Sparkles className="h-6 w-6 text-arrasou-400" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-2">O que está incluso na Micropigmentação?</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Consulta e design personalizado</li>
                <li>✓ Aplicação da técnica escolhida</li>
                <li>✓ Materiais de alta qualidade e segurança</li>
                <li>✓ Retoque de manutenção após 30 dias</li>
                <li>✓ Orientações completas de cuidados pós-procedimento</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Divisor visual */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-gray-500 font-medium">
            Outros Serviços
          </span>
        </div>
      </div>

      {/* Serviços regulares */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card 
            key={service.title} 
            className="hover:shadow-lg transition-shadow border-2 hover:border-arrasou-200"
          >
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 leading-relaxed min-h-[60px]">
                {service.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-4 w-4 text-arrasou-400" />
                  <span className="text-sm">{service.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-arrasou-400" />
                  <span className="font-bold text-arrasou-500">{service.price}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}