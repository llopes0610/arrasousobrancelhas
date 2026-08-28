import Link from "next/link";
import {
    Clock3,
    MapPin,
    MessageCircle,
    ArrowUpRight,
} from "lucide-react";

const navigation = [
    { label: "Início", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Sobre", href: "/sobre" },
    { label: "Localização", href: "/#localizacao" },
    { label: "Agendamento", href: "/agendamento" },
];

const GOOGLE_MAPS_URL =
    "https://maps.app.goo.gl/SFXGzmEYHebMBvPZ7";

const WHATSAPP_URL =
    "https://wa.me/5511954239295?text=Olá! Vim pelo site da Arrasou Sobrancelhas.";

const INSTAGRAM_URL =
    "https://www.instagram.com/arrasousobrancelhas";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-arrasou-black text-white">
            {/* Linha superior dourada */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-arrasou-gold to-transparent" />

            {/* Glow */}
            <div
                className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-[360px]
          w-[360px]
          rounded-full
          bg-arrasou-gold/10
          blur-[120px]
        "
            />

            <div className="container-premium relative">
                <div
                    className="
            grid
            gap-10
            py-14

            sm:py-16

            lg:grid-cols-[1.1fr_0.8fr_1fr_1fr]
            lg:gap-12
            lg:py-20
          "
                >
                    {/* MARCA */}
                    <div>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-3"
                            aria-label="Arrasou Sobrancelhas"
                        >
                            <div className="relative flex h-12 w-12 items-center justify-center">
                                <span className="absolute inset-0 rotate-45 border border-arrasou-gold/50" />

                                <span className="relative font-serif text-2xl italic text-arrasou-gold">
                                    AS
                                </span>
                            </div>

                            <div>
                                <p className="font-serif text-xl font-semibold text-white">
                                    Arrasou
                                </p>

                                <p className="mt-1 text-[10px] uppercase tracking-[0.32em] text-arrasou-gold">
                                    Sobrancelhas
                                </p>
                            </div>
                        </Link>

                        <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
                            Beleza, técnica e cuidado em um espaço pensado para
                            valorizar sua identidade com atendimento personalizado.
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            <Link
                                href={INSTAGRAM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram da Arrasou Sobrancelhas"
                                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/60
                  transition-all
                  duration-300

                  hover:border-arrasou-gold
                  hover:text-arrasou-gold
                "
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <rect
                                        x="3"
                                        y="3"
                                        width="18"
                                        height="18"
                                        rx="5"
                                    />

                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="4"
                                    />

                                    <circle
                                        cx="17.5"
                                        cy="6.5"
                                        r="1"
                                        fill="currentColor"
                                        stroke="none"
                                    />
                                </svg>
                            </Link>

                            <Link
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp da Arrasou Sobrancelhas"
                                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/60
                  transition-all
                  duration-300

                  hover:border-arrasou-gold
                  hover:text-arrasou-gold
                "
                            >
                                <MessageCircle className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* NAVEGAÇÃO */}
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-arrasou-gold">
                            Navegação
                        </p>

                        <nav className="mt-6 flex flex-col gap-3">
                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="
                    text-sm
                    text-white/55
                    transition-colors
                    hover:text-arrasou-gold
                  "
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* LOCALIZAÇÃO */}
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-arrasou-gold">
                            Onde estamos
                        </p>

                        <div className="mt-6 flex items-start gap-3">
                            <MapPin className="mt-1 h-4 w-4 shrink-0 text-arrasou-gold" />

                            <p className="text-sm leading-7 text-white/55">
                                Rua Júlio Prestes de Albuquerque, 185
                                <br />
                                Vila Mirim
                                <br />
                                Praia Grande — SP
                            </p>
                        </div>

                        <Link
                            href={GOOGLE_MAPS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                mt-5
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-white/65
                transition-colors
                hover:text-arrasou-gold
              "
                        >
                            Abrir no Google Maps

                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>

                    {/* HORÁRIOS */}
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-arrasou-gold">
                            Atendimento
                        </p>

                        <div className="mt-6 flex items-start gap-3">
                            <Clock3 className="mt-1 h-4 w-4 shrink-0 text-arrasou-gold" />

                            <div className="text-sm leading-7 text-white/55">
                                <p>Segunda a sábado</p>
                                <p>09:00 às 19:00</p>
                            </div>
                        </div>

                        <Link
                            href="/agendamento"
                            className="
                mt-6
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-arrasou-gold
                px-5
                py-3
                text-sm
                font-semibold
                text-arrasou-gold
                transition-all
                duration-300

                hover:bg-arrasou-gold
                hover:text-arrasou-black
              "
                        >
                            Agendar horário
                        </Link>
                    </div>
                </div>

                {/* BASE */}
                <div
                    className="
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            py-6
            text-center

            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:text-left
          "
                >
                    <p className="text-xs text-white/30">
                        © 2026 Arrasou Sobrancelhas. Todos os direitos reservados.
                    </p>

                    <p className="text-xs text-white/25">
                        Vila Mirim • Praia Grande — SP
                    </p>
                </div>
            </div>
        </footer>
    );
}