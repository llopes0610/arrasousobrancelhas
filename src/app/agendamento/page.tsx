import { Metadata } from "next";
import PageSection from "@/components/layout/PageSection";
import BookingForm from "@/components/agendamento/BookingForm";
import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Agendar Horário | Arrasou Sobrancelhas",
  description: "Agende seu horário de forma rápida e fácil. Estamos ansiosas para receber você!",
};

export default function AgendamentoPage() {
  return (
    <>
      <PageSection className="bg-gradient-to-b from-arrasou-50 to-white">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-serif">
            Agende seu Horário
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Preencha o formulário abaixo ou entre em contato pelo WhatsApp. 
            Mal podemos esperar para receber você!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <Phone className="w-10 h-10 text-arrasou-400 mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-600 text-sm mb-4">(11) 95423-9295</p>
            <Button 
              asChild
              className="w-full bg-green-500 hover:bg-green-600"
            >
              <a 
                href="https://wa.me/5511954239295?text=Olá! Gostaria de agendar um horário" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Chamar no WhatsApp
              </a>
            </Button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Clock className="w-10 h-10 text-arrasou-400 mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Horário de Atendimento</h3>
            <p className="text-gray-600 text-sm">Segunda a Sexta: 9h às 19h</p>
            <p className="text-gray-600 text-sm">Sábado: 9h às 17h</p>
            <p className="text-gray-600 text-sm">Domingo: Fechado</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <MapPin className="w-10 h-10 text-arrasou-400 mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Localização</h3>
            <p className="text-gray-600 text-sm">
              Rua das Flores, 123<br />
              Centro - São Paulo/SP<br />
              CEP: 01234-567
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center font-serif">
              Formulário de Agendamento
            </h2>
            <BookingForm />
          </div>
        </div>
      </PageSection>
    </>
  );
}