import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-arrasou-50 via-white to-nude-50 overflow-hidden">
      <div className="section-container section-padding">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Sparkles className="h-5 w-5 text-arrasou-400" />
              <span className="text-sm font-medium text-gray-700">
                Especialistas em Design de Sobrancelhas e micropigmentação
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 font-serif leading-tight">
            Realce sua Beleza Natural
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transforme seu olhar com design de sobrancelhas personalizado. 
            Técnicas modernas, atendimento exclusivo e resultados que você merece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-arrasou-400 hover:bg-arrasou-500 text-white px-8 py-6 text-lg group"
            >
              <Link href="/agendamento">
                Agendar Agora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-2 border-arrasou-400 text-arrasou-400 hover:bg-arrasou-50 px-8 py-6 text-lg"
            >
              <Link href="/servicos">
                Conhecer Serviços
              </Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-arrasou-400 mb-2">+12</p>
              <p className="text-sm text-gray-600">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-arrasou-400 mb-2">2000+</p>
              <p className="text-sm text-gray-600">Clientes Felizes</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-arrasou-400 mb-2">100%</p>
              <p className="text-sm text-gray-600">Satisfação</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-arrasou-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-nude-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
    </section>
  );
}