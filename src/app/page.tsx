import HeroSection from "@/components/home/HeroSection";
import ServicesHighlight from "@/components/home/ServicesHighlight";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";
import ExitIntentModal from "@/components/ExitIntentModal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Design de Sobrancelhas e Micropigmentação em Cotia e Baixada Santista",
  description: "Transforme seu olhar com design de sobrancelhas personalizado. +12 anos de experiência. Atendimento in loco em Cotia, Praia Grande, Santos e São Vicente. Micropigmentação a partir de R$ 200.",
  alternates: {
    canonical: "https://arrasousobrancelhas.com.br",
  },
};

export default function Home() {
  // Structured Data (JSON-LD) para SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Arrasou Sobrancelhas",
    "image": "https://arrasousobrancelhas.com.br/logo.jpg",
    "@id": "https://arrasousobrancelhas.com.br",
    "url": "https://arrasousobrancelhas.com.br",
    "telephone": "+5511954239295",
    "priceRange": "R$ 40 - R$ 200",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Atendimento In Loco",
      "addressLocality": "Cotia, Praia Grande, Santos, São Vicente",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "geo": [
      {
        "@type": "GeoCoordinates",
        "latitude": -23.606,
        "longitude": -46.919
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://instagram.com/arrasousobrancelhas",
      "https://facebook.com/arrasousobrancelhas"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "100"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Beleza",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Design de Sobrancelhas",
            "description": "Modelagem completa com análise facial personalizada",
            "provider": {
              "@type": "BeautySalon",
              "name": "Arrasou Sobrancelhas"
            }
          },
          "price": "45.00",
          "priceCurrency": "BRL"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Micropigmentação de Sobrancelhas",
            "description": "Todas as técnicas: Fio a Fio, Shadow, Ombré e Híbrida",
            "provider": {
              "@type": "BeautySalon",
              "name": "Arrasou Sobrancelhas"
            }
          },
          "price": "200.00",
          "priceCurrency": "BRL"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection />
      <ServicesHighlight />
      <WhyChooseUs />
      <CTASection />
      <ExitIntentModal />
    </>
  );
}