"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Início", href: "/" },
  { name: "Serviços", href: "/servicos" },
  { name: "Sobre", href: "/sobre" },
  { name: "Galeria", href: "/galeria" },
  { name: "Agendamento", href: "/agendamento" },
];

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="section-container py-4" aria-label="Global">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-8 w-8 text-arrasou-400" />
            <span className="text-xl sm:text-2xl font-bold text-gray-900 font-serif">
              Arrasou Sobrancelhas
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-arrasou-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="bg-arrasou-400 hover:bg-arrasou-500">
              <Link href="/agendamento">Agendar</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-arrasou-50 hover:text-arrasou-400 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Button asChild className="w-full bg-arrasou-400 hover:bg-arrasou-500">
                <Link href="/agendamento" onClick={() => setMobileMenuOpen(false)}>
                  Agendar Agora
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}