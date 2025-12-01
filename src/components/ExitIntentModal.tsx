"use client";

import { useState, useEffect } from "react";
import { X, Gift, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExitIntentModal() {
  const [showModal, setShowModal] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Verifica se já mostrou o modal nesta sessão
    const alreadyShown = sessionStorage.getItem("exitModalShown");
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Detecta quando o mouse sai pela parte superior da tela (intenção de fechar)
      if (e.clientY <= 0 && !hasShown) {
        setShowModal(true);
        setHasShown(true);
        sessionStorage.setItem("exitModalShown", "true");
      }
    };

    // Também mostra após 30 segundos se o usuário não interagiu
    const timer = setTimeout(() => {
      if (!hasShown && !sessionStorage.getItem("exitModalShown")) {
        setShowModal(true);
        setHasShown(true);
        sessionStorage.setItem("exitModalShown", "true");
      }
    }, 30000);

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasShown]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Vi o site e gostaria de saber mais sobre os serviços e agendar um horário! 💅✨"
    );
    window.open(`https://wa.me/5511954239295?text=${message}`, "_blank");
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay escuro */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setShowModal(false)}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Botão fechar */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header com gradiente */}
        <div className="bg-gradient-to-r from-arrasou-400 to-arrasou-500 p-6 text-white text-center">
          <Gift className="h-12 w-12 mx-auto mb-3 animate-bounce" />
          <h2 className="text-2xl font-bold font-serif">Espera! 🎁</h2>
        </div>

        {/* Conteúdo */}
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Tem um presente esperando você!
          </h3>
          <p className="text-gray-600 mb-6">
            Chame no WhatsApp agora e ganhe <span className="font-bold text-arrasou-500">10% OFF</span> no seu primeiro atendimento! 
            Oferta exclusiva para novas clientes. 💕
          </p>

          <Button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-6 text-lg gap-2 mb-4"
          >
            <MessageCircle className="h-5 w-5" />
            Quero meu desconto!
          </Button>

          <button
            onClick={() => setShowModal(false)}
            className="text-sm text-gray-400 hover:text-gray-600"
          >
            Não, obrigada. Prefiro pagar o preço cheio.
          </button>
        </div>
      </div>
    </div>
  );
}