import { Metadata } from "next";
import PageSection from "@/components/layout/PageSection";
import ServicesGrid from "@/components/servicos/ServicesGrid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Serviços | Micropigmentação e Design de Sobrancelhas",
  description: "Confira todos os nossos serviços: Micropigmentação (R$ 200), Design de Sobrancelhas (R$ 45), Henna, Limpeza de Pele. Atendimento in loco em Cotia, Praia Grande, Santos e São Vicente.",
  keywords: [
    "serviços design sobrancelhas",
    "micropigmentação preço",
    "henna sobrancelhas valor",
    "limpeza de pele facial",
    "tabela de preços sobrancelhas",
  ],
  alternates: {
    canonical: "https://arrasousobrancelhas.com.br/servicos",
  },
  openGraph: {
    title: "Nossos Serviços | Arrasou Sobrancelhas",
    description: "Micropigmentação, Design de Sobrancelhas, Henna e mais. Preços a partir de R$ 40. Atendimento in loco.",
    url: "https://arrasousobrancelhas.com.br/servicos",
  },
};

export default function ServicosPage() {
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Micropigmentação Fio a Fio",
          "description": "Técnica realista que cria fios individuais",
          "provider": { "@type": "Organization", "name": "Arrasou Sobrancelhas" },
          "offers": {
            "@type": "Offer",
            "price": "200.00",
            "priceCurrency": "BRL"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Design de Sobrancelhas",
          "description": "Modelagem completa com análise facial",
          "provider": { "@type": "Organization", "name": "Arrasou Sobrancelhas" },
          "offers": {
            "@type": "Offer",
            "price": "45.00",
            "priceCurrency": "BRL"
          }
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesStructuredData) }}
      />
      <PageSection className="bg-gradient-to-b from-arrasou-50 to-white">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-serif">
            Nossos Serviços
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Oferecemos tratamentos especializados para realçar sua beleza natural. 
            Cada serviço é personalizado para atender suas necessidades e expectativas.
          </p>
        </div>
        
        <ServicesGrid />
        
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 max-w-2xl mx-auto border border-arrasou-100">
            <Sparkles className="w-12 h-12 text-arrasou-400 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 font-serif">
              Pronta para Arrasar?
            </h2>
            <p className="text-gray-600 mb-6">
              Agende seu horário e venha experimentar a transformação que você merece.
            </p>
            <Link href="/agendamento">
              <Button size="lg" className="bg-arrasou-400 hover:bg-arrasou-500 text-white px-8 py-6 text-lg">
                Agendar Agora
              </Button>
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  );
}