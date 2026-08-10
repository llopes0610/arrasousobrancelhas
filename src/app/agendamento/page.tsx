import { Metadata } from "next";
import PageSection from "@/components/layout/PageSection";
import CalBooking from "@/components/agendamento/CalBooking";
import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Agendar Horário | Arrasou Sobrancelhas",
  description:
    "Agende seu horário na Arrasou Sobrancelhas de forma rápida e fácil.",
};

export default function AgendamentoPage() {
  return (
    <PageSection>
      {/* Cabeçalho */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 font-serif mb-4">
          Agende seu Horário
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Escolha o serviço, a data e o melhor horário para você.
          <br />
          Seu agendamento será confirmado automaticamente.
        </p>
      </div>

      {/* Informações */}
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {/* WhatsApp */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
          <Phone className="w-10 h-10 text-arrasou-400 mx-auto mb-4" />

          <h3 className="font-bold text-gray-900 mb-2">
            Precisa de ajuda?
          </h3>

          <p className="text-gray-600 text-sm mb-4">
            Fale conosco pelo WhatsApp
          </p>

          <Button
            asChild
            className="w-full bg-green-500 hover:bg-green-600"
          >
            <a
              href="https://wa.me/5511954239295?text=Olá! Gostaria de ajuda para agendar um horário."
              target="_blank"
              rel="noopener noreferrer"
            >
              Chamar no WhatsApp
            </a>
          </Button>
        </div>

        {/* Horário */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <Clock className="w-10 h-10 text-arrasou-400 mx-auto mb-4" />

          <h3 className="font-bold text-gray-900 mb-2">
            Horário de Atendimento
          </h3>

          <p className="text-gray-600 text-sm">
            Segunda a Sexta: 9h às 19h
          </p>

          <p className="text-gray-600 text-sm">
            Sábado: 9h às 17h
          </p>

          <p className="text-gray-600 text-sm">
            Domingo: Fechado
          </p>
        </div>

        {/* Localização */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <MapPin className="w-10 h-10 text-arrasou-400 mx-auto mb-4" />

          <h3 className="font-bold text-gray-900 mb-2">
            Localização
          </h3>

          <p className="text-gray-600 text-sm">
            Cotia/SP
            <br />
            Praia Grande/SP
            <br />
            São Vicente/SP
            <br />
            Santos/SP
          </p>
        </div>
      </div>

      {/* CAL.COM */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-serif mb-2">
              Escolha seu serviço e horário
            </h2>

            <p className="text-gray-600">
              Selecione uma data e um horário disponível para realizar seu
              agendamento.
            </p>
          </div>

          <CalBooking />
        </div>
      </div>
    </PageSection>
  );
}