import { Metadata } from "next";
import PageSection from "@/components/layout/PageSection";
import GalleryGrid from "@/components/galeria/GalleryGrid";

export const metadata: Metadata = {
  title: "Galeria de Transformações | Arrasou Sobrancelhas",
  description: "Veja o antes e depois dos nossos trabalhos. Resultados reais de clientes que arrasaram!",
};

export default function GaleriaPage() {
  return (
    <>
      <PageSection className="bg-gradient-to-b from-arrasou-50 to-white">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-serif">
            Galeria de Transformações
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Confira os resultados incríveis das nossas clientes. Cada transformação 
            é única e pensada especialmente para realçar a beleza natural.
          </p>
        </div>
        
        <GalleryGrid />

        <div className="mt-16 text-center bg-white rounded-2xl shadow-lg p-8 sm:p-12 max-w-2xl mx-auto">
          <p className="text-2xl font-bold text-gray-900 mb-4 font-serif">
            Quer ser a próxima transformação?
          </p>
          <p className="text-gray-600 mb-6">
            Agende seu horário e venha fazer parte da nossa galeria de sucessos!
          </p>
        </div>
      </PageSection>
    </>
  );
}