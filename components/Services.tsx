import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiFlutter,
  SiKotlin,
  SiFigma,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Skill = { icon: IconType; name: string; color: string };

const CATEGORIES: { title: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    skills: [
      { icon: SiReact, name: "React", color: "text-[#61dafb]" },
      { icon: SiTypescript, name: "TypeScript", color: "text-[#3178c6]" },
      { icon: SiNextdotjs, name: "Next.js", color: "text-ink" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { icon: SiNodedotjs, name: "Node.js", color: "text-[#3c873a]" },
      { icon: SiExpress, name: "Express.js", color: "text-ink" },
      { icon: SiPrisma, name: "Prisma", color: "text-[#0c344b]" },
    ],
  },
  {
    title: "Mobile & Design",
    skills: [
      { icon: SiFlutter, name: "Flutter", color: "text-[#02569b]" },
      { icon: SiKotlin, name: "Kotlin", color: "text-[#7f52ff]" },
      { icon: SiFigma, name: "Figma", color: "text-[#f24e1e]" },
    ],
  },
];

export default function Services() {
  return (
    <section id="skills" className="border-t border-border py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-baseline gap-1">
          <h2 className="text-3xl font-extrabold text-ink">
            Skills<span className="text-accent">.</span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-border bg-surface p-5"
            >
              <h3 className="mb-3.5 text-sm font-semibold text-ink">
                {cat.title}
              </h3>
              <div className="flex flex-col">
                {cat.skills.map((skill, i) => (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-3 py-2 ${
                      i > 0 ? "border-t border-border" : ""
                    }`}
                  >
                    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-accent-soft">
                      <skill.icon className={`h-4 w-4 ${skill.color}`} />
                    </span>
                    <span className="text-[13.5px] text-ink">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
