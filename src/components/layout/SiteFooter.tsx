import Link from "next/link";
import { Instagram, Facebook, Phone, MapPin, Mail, Sparkles } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-8 w-8 text-arrasou-400" />
              <span className="text-xl font-bold font-serif">
                Arrasou Sobrancelhas
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Realçando a beleza natural de cada mulher com profissionalismo e carinho.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-arrasou-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-400 hover:text-arrasou-400 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-arrasou-400 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-gray-400 hover:text-arrasou-400 transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="/agendamento" className="text-gray-400 hover:text-arrasou-400 transition-colors">
                  Agendamento
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-gray-400">
                <Phone className="h-5 w-5 text-arrasou-400 flex-shrink-0 mt-0.5" />
                <span>(11) 95423-9295</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <Mail className="h-5 w-5 text-arrasou-400 flex-shrink-0 mt-0.5" />
                <span>contato@arrasousobrancelhas.com.br</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="h-5 w-5 text-arrasou-400 flex-shrink-0 mt-0.5" />
                <span>
                  Baixada Santatis &<br />
                  São Paulo/SP
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/arrasousobrancelhas"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-arrasou-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Siga-nos nas redes sociais para dicas de beleza e novidades!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Arrasou Sobrancelhas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}