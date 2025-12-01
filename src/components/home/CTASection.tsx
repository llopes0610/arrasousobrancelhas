import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-container section-padding">
      <div className="bg-gradient-to-r from-arrasou-400 to-arrasou-500 rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-serif">
          Pronta para Transformar seu Olhar?
        </h2>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-arrasou-50">
          Agende seu horário agora e descubra como é se sentir ainda mais confiante e bonita. 
          Estamos ansiosas para receber você!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-arrasou-500 hover:bg-arrasou-50 px-8 py-6 text-lg group"
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
            className="border-2 border-white text-white hover:bg-white hover:text-arrasou-500 px-8 py-6 text-lg"
          >
            <a 
              href="https://wa.me/5511954239295?text=Olá! Gostaria de agendar um horário" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}