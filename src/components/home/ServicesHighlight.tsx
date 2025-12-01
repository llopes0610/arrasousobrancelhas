import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Eye, Brush } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Sparkles,
    title: "Design de Sobrancelhas",
    description: "Técnica personalizada que valoriza a harmonia do seu rosto, realçando seu olhar de forma natural e elegante.",
    color: "text-arrasou-400",
    bgColor: "bg-arrasou-50",
  },
  {
    icon: Brush,
    title: "Henna e Coloração",
    description: "Preenchimento com henna de alta qualidade para sobrancelhas mais definidas e marcantes por mais tempo.",
    color: "text-arrasou-500",
    bgColor: "bg-arrasou-100",
  },
  {
    icon: Eye,
    title: "Alongamento de Cílios",
    description: "Cílios volumosos e alongados com técnica fio a fio, para um olhar ainda mais expressivo e deslumbrante.",
    color: "text-arrasou-600",
    bgColor: "bg-arrasou-200",
  },
];

export default function ServicesHighlight() {
  return (
    <section className="section-container section-padding bg-white">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-serif">
          Serviços que Transformam
        </h2>
        <p className="text-lg text-gray-600">
          Oferecemos tratamentos especializados pensados especialmente para você
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card key={service.title} className="border-2 hover:border-arrasou-200 transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className={`${service.bgColor} w-14 h-14 rounded-full flex items-center justify-center mb-4`}>
                  <Icon className={`h-7 w-7 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="text-center">
        <Button asChild size="lg" variant="outline" className="border-2 border-arrasou-400 text-arrasou-400 hover:bg-arrasou-50">
          <Link href="/servicos">Ver Todos os Serviços</Link>
        </Button>
      </div>
    </section>
  );
}