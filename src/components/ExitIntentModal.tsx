"use client";

import { useState, useEffect } from "react";
import { X, Gift, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExitIntentModal() {
  const [showModal, setShowModal] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("exitModalShown");
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    // Detecta mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown && !isMobile) {
        setShowModal(true);
        setHasShown(true);
        sessionStorage.setItem("exitModalShown", "true");
      }
    };

    // Para mobile: mostra após scroll ou após 20 segundos
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      if (isMobile && !hasShown) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
          if (scrollPercentage > 40 && !sessionStorage.getItem("exitModalShown")) {
            setShowModal(true);
            setHasShown(true);
            sessionStorage.setItem("exitModalShown", "true");
          }
        }, 1000);
      }
    };

    // Timer para desktop e mobile
    const timer = setTimeout(() => {
      if (!hasShown && !sessionStorage.getItem("exitModalShown")) {
        setShowModal(true);
        setHasShown(true);
        sessionStorage.setItem("exitModalShown", "true");
      }
    }, isMobile ? 20000 : 30000);

    document.addEventListener("mouseleave", handleMouseLeave);
    if (isMobile) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
      clearTimeout(scrollTimeout);
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
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setShowModal(false)}
      />
      
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in zoom-in-95 duration-300">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 text-white hover:text-gray-200 z-10"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="bg-gradient-to-r from-arrasou-400 to-arrasou-500 p-6 text-white text-center">
          <Gift className="h-12 w-12 mx-auto mb-3 animate-bounce" />
          <h2 className="text-2xl font-bold font-serif">Espera! 🎁</h2>
        </div>

        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Oferta Exclusiva Esperando por Você!
          </h3>
          <p className="text-gray-600 mb-4">
            Chame no WhatsApp agora e ganhe <span className="font-bold text-arrasou-500">10% OFF</span> no seu primeiro atendimento! 
          </p>

          {/* Destaque Atendimento In Loco */}
          <div className="bg-arrasou-50 border-2 border-arrasou-200 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 justify-center mb-2 text-arrasou-600">
              <MapPin className="h-5 w-5" />
              <span className="font-bold text-sm">Atendimento In Loco!</span>
            </div>
            <p className="text-sm text-gray-600">
              Levo meu estúdio até você em:<br />
              <span className="font-semibold">Cotia, Praia Grande, São Vicente e Santos</span>
            </p>
          </div>

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