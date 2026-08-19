import { Check } from "lucide-react";

type ExperienceItem = {
  company: string;
  period: string;
  role: string;
  bullets: string[];
};

const EXPERIENCE: ExperienceItem[] = [
  {
    company: "In Forma Software",
    period: "Jan 2026 — Presente · Recife, PE",
    role: "Estagiário em Desenvolvimento de Software",
    bullets: [
      "Desenvolvimento e manutenção de aplicações mobile em Flutter, Java e Kotlin.",
      "Apoio ao time de tecnologia em tarefas de desenvolvimento contínuo.",
    ],
  },
  {
    company: "Residência FAP · Softex",
    period: "Jan 2024 — Jun 2024",
    role: "Residente em Desenvolvimento de Software",
    bullets: [
      "Desenvolvimento de aplicação web com React.js no front-end.",
      "Construção da API com Node.js e Express.js.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-baseline gap-1">
          <h2 className="text-3xl font-extrabold text-ink">
            Experiência<span className="text-accent">.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-7">
          {EXPERIENCE.map((item) => (
            <div
              key={item.company}
              className="grid gap-6 border-b border-border pb-6 last:border-b-0 last:pb-0 sm:grid-cols-[220px_1fr]"
            >
              <div>
                <div className="relative pl-4 text-[15px] font-bold text-ink">
                  <span className="absolute left-0 top-[6px] h-1.5 w-1.5 rounded-full bg-accent" />
                  {item.company}
                </div>
                <div className="mt-1 pl-4 text-[12.5px] text-ink-soft">
                  {item.period}
                </div>
              </div>
              <div>
                <div className="mb-2 text-[15px] font-semibold text-ink">
                  {item.role}
                </div>
                <ul className="flex flex-col gap-2">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm text-ink-soft"
                    >
                      <Check className="mt-0.5 h-[15px] w-[15px] flex-none text-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
