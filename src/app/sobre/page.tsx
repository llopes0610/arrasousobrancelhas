import { Metadata } from "next";
import PageSection from "@/components/layout/PageSection";
import { Heart, Award, Sparkles, Shield } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre a Thays | Arrasou Sobrancelhas",
  description: "Conheça a história, experiência e valores que fazem do Arrasou Sobrancelhas referência em design de sobrancelhas.",
};

export default function SobrePage() {
  return (
    <>
      <PageSection className="bg-gradient-to-b from-arrasou-50 to-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-serif">
            Conheça a Thays
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Paixão por beleza, dedicação e excelência em cada atendimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/thays.jpg"
              alt="Thays - Designer de Sobrancelhas"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 font-serif">
              Minha História
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Olá! Sou a Thays, apaixonada por design de sobrancelhas há mais de 8 anos. 
              Minha jornada começou com um sonho: ajudar mulheres a se sentirem mais 
              confiantes e bonitas através do poder transformador de um olhar bem cuidado.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Ao longo desses anos, especializei-me em técnicas modernas e personalizadas, 
              sempre priorizando a naturalidade e harmonia do rosto de cada cliente. 
              Cada sobrancelha é única, assim como cada mulher que passa por aqui.
            </p>
            <p className="text-gray-600 leading-relaxed">
              O Arrasou Sobrancelhas nasceu do desejo de criar um espaço acolhedor onde 
              você possa relaxar, se cuidar e sair daqui se sentindo ainda mais incrível. 
              Será um prazer receber você!
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Award className="w-12 h-12 text-arrasou-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">+8 Anos</h3>
            <p className="text-gray-600">De experiência na área</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Heart className="w-12 h-12 text-arrasou-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">+2000</h3>
            <p className="text-gray-600">Clientes atendidas</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Sparkles className="w-12 h-12 text-arrasou-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Certificada</h3>
            <p className="text-gray-600">Cursos e especializações</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Shield className="w-12 h-12 text-arrasou-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">100% Seguro</h3>
            <p className="text-gray-600">Materiais esterilizados</p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-arrasou-400 to-arrasou-500 rounded-2xl p-8 sm:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif">Nossos Valores</h2>
          <div className="grid sm:grid-cols-3 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Excelência</h3>
              <p className="text-arrasou-50">
                Compromisso com a qualidade em cada detalhe do atendimento
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Cuidado</h3>
              <p className="text-arrasou-50">
                Atenção personalizada respeitando a individualidade de cada cliente
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Confiança</h3>
              <p className="text-arrasou-50">
                Ambiente seguro com higiene e profissionalismo impecáveis
              </p>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}