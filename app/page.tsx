import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import HeroTyping from "@/components/HeroTyping";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-bg">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="mb-3.5 text-sm text-ink-soft">Olá, eu sou</p>
            <HeroTyping />
            <p className="mb-7 mt-5 max-w-[46ch] text-base text-ink-soft">
              Crio sites e aplicações funcionais que entregam experiências de
              usuário excepcionais, unindo tecnologia moderna a princípios
              sólidos de design.
            </p>
            <div className="mb-7 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-deep"
              >
                Entre em contato
              </Link>
              <Link
                href="/#portfolio"
                className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Ver projetos
              </Link>
            </div>
            <div className="flex gap-6">
              <Link
                href="https://www.linkedin.com/in/joel-fentes/"
                target="_blank"
                className="text-ink-soft transition-colors hover:text-accent"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                </svg>
              </Link>
              <Link
                href="https://github.com/JoelFentes"
                target="_blank"
                className="text-ink-soft transition-colors hover:text-accent"
                aria-label="GitHub"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto h-[280px] w-[280px]">
            <div className="absolute -inset-4 rounded-full border border-accent-soft" />
            <div className="relative h-full w-full overflow-hidden rounded-full shadow-2xl">
              <Image
                src="/images/profile.jpg"
                alt="Joel Fentes"
                fill
                sizes="280px"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-border py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-baseline gap-1">
            <h2 className="text-3xl font-extrabold text-ink">
              Sobre mim<span className="text-accent">.</span>
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="max-w-[42ch] border-l-[3px] border-accent pl-[18px] text-base text-ink-soft">
                Minha paixão é resolver problemas complexos com soluções
                criativas, sempre com o usuário no centro de cada decisão.
                Acredito que um bom design é invisível — ele simplesmente
                funciona.
              </p>

              <p className="mb-3.5 mt-7 text-sm font-semibold text-ink">
                Minha stack
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "Java",
                  "React/Typescript",
                  "Kotlin",
                  "Flutter",
                ].map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-2 text-[13px] font-medium text-ink"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-3.5 w-3.5 text-accent"
                    >
                      <path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z" />
                    </svg>
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="mb-3 text-sm font-semibold text-ink">
                O que me move
              </h3>
              <p className="text-sm text-ink-soft">
                Aprender novas tecnologias constantemente e transformar
                ideias em produtos reais — do primeiro esboço ao deploy. Fora
                do código, gosto de acompanhar tendências de UI/UX e testar
                novas ferramentas de desenvolvimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Experience />
      <Services />
      <Works />
      <Contact />

      <footer className="border-t border-border px-8 py-7 text-center text-[12.5px] text-ink-soft">
        Joel Fentes © 2026
      </footer>
    </div>
  );
}
