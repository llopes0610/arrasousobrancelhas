import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign } from "lucide-react";

const services = [
  {
    title: "Design de Sobrancelhas",
    description: "Modelagem completa com análise facial, medição e design personalizado para valorizar seus traços únicos.",
    duration: "45 min",
    price: "R$ 80,00",
  },
  {
    title: "Design + Henna",
    description: "Design de sobrancelhas com aplicação de henna para preenchimento natural e duradouro.",
    duration: "60 min",
    price: "R$ 120,00",
  },
  {
    title: "Coloração de Sobrancelhas",
    description: "Coloração profissional para sobrancelhas mais marcantes e definidas, com coloração de longa duração.",
    duration: "30 min",
    price: "R$ 60,00",
  },
  {
    title: "Alongamento de Cílios",
    description: "Técnica fio a fio para cílios volumosos e alongados. Resultado natural que dura até 4 semanas.",
    duration: "90 min",
    price: "R$ 200,00",
  },
  {
    title: "Limpeza de Pele Facial",
    description: "Tratamento completo para limpeza profunda, hidratação e revitalização da pele do rosto.",
    duration: "60 min",
    price: "R$ 150,00",
  },
  {
    title: "Depilação Facial",
    description: "Depilação delicada e precisa de buço, queixo e outras áreas do rosto com técnica especializada.",
    duration: "20 min",
    price: "R$ 40,00",
  },
];

export default function ServicesGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <Card key={service.title} className="hover:shadow-lg transition-shadow border-2 hover:border-arrasou-200">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">
              {service.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
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
  );
}