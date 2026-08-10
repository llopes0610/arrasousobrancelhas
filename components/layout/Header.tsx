"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CalendarDays, Menu, X } from "lucide-react";

const navigation = [
  {
    label: "Início",
    href: "/",
  },
  {
    label: "Serviços",
    href: "/servicos",
  },
  {
    label: "Sobre",
    href: "/sobre",
  },
  {
    label: "Localização",
    href: "/#localizacao",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`
          fixed
          left-0
          right-0
          top-0
          z-50
          border-b
          transition-all
          duration-300
          ${
            scrolled
              ? "border-arrasou-gold/20 bg-arrasou-black/95 shadow-xl backdrop-blur-xl"
              : "border-white/10 bg-arrasou-black"
          }
        `}
      >
        {/* Linha dourada superior */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-arrasou-gold to-transparent" />

        <div className="container-premium">
          <div className="flex h-[78px] items-center justify-between lg:h-[88px]">
            {/* MARCA */}
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="group flex items-center gap-3"
              aria-label="Arrasou Sobrancelhas - Página inicial"
            >
              {/* Monograma */}
              <div className="relative flex h-11 w-11 items-center justify-center sm:h-12 sm:w-12">
                <span className="absolute inset-0 rotate-45 border border-arrasou-gold/50 transition-all duration-300 group-hover:border-arrasou-gold" />

                <span className="relative font-serif text-xl font-semibold italic text-arrasou-gold sm:text-2xl">
                  AS
                </span>
              </div>

              {/* Nome */}
              <div className="flex flex-col">
                <span className="font-serif text-lg font-semibold leading-none tracking-[0.04em] text-white sm:text-xl">
                  Arrasou
                </span>

                <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.35em] text-arrasou-gold sm:text-[10px]">
                  Sobrancelhas
                </span>
              </div>
            </Link>

            {/* MENU DESKTOP */}
            <nav
              className="hidden items-center gap-7 lg:flex"
              aria-label="Menu principal"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    relative
                    py-2
                    text-sm
                    font-medium
                    text-white/75
                    transition-colors
                    duration-200

                    after:absolute
                    after:bottom-0
                    after:left-0
                    after:h-px
                    after:w-0
                    after:bg-arrasou-gold
                    after:transition-all
                    after:duration-300

                    hover:text-white
                    hover:after:w-full
                  "
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA DESKTOP */}
            <div className="hidden lg:block">
              <Link
                href="/agendamento"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-arrasou-gold
                  bg-arrasou-gold
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-arrasou-black
                  transition-all
                  duration-300

                  hover:bg-transparent
                  hover:text-arrasou-gold
                  hover:shadow-gold
                "
              >
                <CalendarDays className="h-4 w-4" />

                Agendar horário
              </Link>
            </div>

            {/* BOTÃO MOBILE */}
            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className="
                inline-flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                text-white
                transition-colors
                hover:border-arrasou-gold
                hover:text-arrasou-gold
                lg:hidden
              "
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MENU MOBILE */}
      <div
        className={`
          fixed
          inset-0
          z-40
          bg-arrasou-black
          transition-all
          duration-300
          lg:hidden
          ${
            menuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      >
        <div className="container-premium flex min-h-screen flex-col pt-32">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-arrasou-gold">
              Navegação
            </span>
          </div>

          <nav className="flex flex-col">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  py-5
                  text-2xl
                  font-medium
                  text-white
                  transition-colors
                  hover:text-arrasou-gold
                "
              >
                <span>{item.label}</span>

                <span className="font-serif text-sm text-arrasou-gold/50">
                  0{index + 1}
                </span>
              </Link>
            ))}
          </nav>

          <div className="mt-10">
            <Link
              href="/agendamento"
              onClick={() => setMenuOpen(false)}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-arrasou-gold
                px-6
                py-4
                font-semibold
                text-arrasou-black
                transition-colors
                hover:bg-arrasou-goldLight
              "
            >
              <CalendarDays className="h-5 w-5" />

              Agendar meu horário
            </Link>
          </div>

          <div className="mt-auto border-t border-white/10 py-8">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Studio Arrasou Sobrancelhas
            </p>

            <p className="mt-2 text-sm text-white/60">
              Praia Grande • SP
            </p>
          </div>
        </div>
      </div>

      {/* Espaço do header fixo */}
      <div className="h-[80px] lg:h-[90px]" />
    </>
  );
}