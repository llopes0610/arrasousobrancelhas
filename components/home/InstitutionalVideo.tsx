import { PlayCircle } from "lucide-react";

export default function InstitutionalVideo() {
  return (
    <section
      id="studio"
      className="bg-arrasou-offWhite py-20 sm:py-24 lg:py-28"
    >
      <div className="container-premium">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* TEXTO */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-arrasou-gold" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-arrasou-gold sm:text-xs">
                Conheça o Studio
              </span>
            </div>

            <h2 className="max-w-xl font-serif text-4xl font-medium leading-tight tracking-[-0.03em] text-arrasou-black sm:text-5xl lg:text-6xl">
              Uma experiência pensada
              <span className="block text-arrasou-gold">
                para valorizar você.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-black/65">
              No Studio Arrasou Sobrancelhas, cada atendimento é pensado de
              forma individual. Técnica, cuidado e atenção aos detalhes fazem
              parte de uma experiência criada para realçar sua beleza com
              naturalidade e personalidade.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-arrasou-gold/30 bg-white">
                <PlayCircle className="h-5 w-5 text-arrasou-gold" />
              </div>

              <div>
                <p className="text-sm font-semibold text-arrasou-black">
                  Assista ao nosso vídeo institucional
                </p>

                <p className="mt-1 text-sm text-black/50">
                  Conheça um pouco mais da Arrasou.
                </p>
              </div>
            </div>
          </div>

          {/* VÍDEO */}
          <div className="relative">
            <div className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-[2rem] border border-arrasou-gold/25 lg:block" />

            <div className="relative overflow-hidden rounded-[1.5rem] border border-black/10 bg-arrasou-black shadow-premium sm:rounded-[2rem]">
              <video
                className="aspect-[9/16] w-full object-contain bg-black"
                controls
                preload="metadata"
                playsInline
                poster="/images/hero/thays-hero-v2.png"
              >
                <source
                  src="/videos/institucional.mp4"
                  type="video/mp4"
                />

                Seu navegador não suporta reprodução de vídeo.
              </video>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-black/10 pt-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-arrasou-gold">
                  Studio Arrasou
                </p>

                <p className="mt-1 text-sm text-black/55">
                  Vila Mirim • Praia Grande — SP
                </p>
              </div>

              <span className="text-xs uppercase tracking-[0.18em] text-black/35">
                Beleza • Técnica • Cuidado
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}