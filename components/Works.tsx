import Link from "next/link";
import Image from "next/image";

type Project = {
  title: string;
  tech: string;
  description: string;
  img?: string;
  link?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Platform of Developers",
    tech: "React · Node.js · Prisma",
    description:
      "Plataforma colaborativa para desenvolvedores compartilharem projetos e construírem juntos.",
    img: "/images/project1.jpg",
    link: "https://github.com/JoelFentes/Projeto-Web",
  },
  {
    title: "Sowing E-commerce",
    tech: "React · Node.js · Prisma",
    description:
      "Loja completa para uma confeitaria: catálogo, carrinho, checkout e painel administrativo.",
    img: "/images/project2.jpg",
    link: "https://github.com/JoelFentes/DessertShop",
  },
  {
    title: "Seu próximo projeto",
    tech: "A definir",
    description:
      "Espaço reservado para o próximo projeto — me envie o nome, stack e link quando estiver pronto.",
  },
];

export default function Works() {
  return (
    <section id="portfolio" className="border-t border-border py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-baseline gap-1">
          <h2 className="text-3xl font-extrabold text-ink">
            Projetos<span className="text-accent">.</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-accent-soft">
                {project.img ? (
                  <>
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {project.link && (
                      <div className="pointer-events-none absolute inset-0 flex items-end gap-2 bg-gradient-to-t from-ink/75 to-transparent to-60% p-3.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <Link
                          href={project.link}
                          target="_blank"
                          className="pointer-events-auto rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink"
                        >
                          Ver código
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm text-ink-soft">
                    Screenshot em breve
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="mb-1.5 text-base font-bold text-ink">
                  {project.title}
                </h3>
                <p className="mb-2.5 text-xs font-medium text-accent-deep">
                  {project.tech}
                </p>
                <p className="mb-4 text-[13.5px] text-ink-soft">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  {project.link ? (
                    <>
                      <Link
                        href={project.link}
                        target="_blank"
                        className="rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-accent-deep"
                      >
                        Código
                      </Link>
                      <span className="rounded-full border border-dashed border-border px-3 py-1.5 text-xs font-semibold text-ink-soft">
                        Demo em breve
                      </span>
                    </>
                  ) : (
                    <Link
                      href="https://github.com/JoelFentes"
                      target="_blank"
                      className="rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-accent-deep"
                    >
                      GitHub
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
