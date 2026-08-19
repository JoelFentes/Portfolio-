import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-2 flex items-baseline gap-1">
          <h2 className="text-3xl font-extrabold text-ink">
            Vamos trabalhar juntos<span className="text-accent">.</span>
          </h2>
        </div>
        <p className="max-w-[50ch] text-ink-soft">
          Pronto para transformar sua ideia em realidade? Me envie uma
          mensagem.
        </p>

        <div className="mt-6 flex flex-wrap gap-6">
          <div className="min-w-[180px] flex-1 rounded-2xl border border-border bg-surface px-5 py-4">
            <span className="mb-1.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
              <Mail className="h-3.5 w-3.5" /> Email
            </span>
            <Link
              href="mailto:joelfentes@gmail.com"
              className="text-[15px] font-semibold text-ink transition-colors hover:text-accent-deep"
            >
              joelfentes@gmail.com
            </Link>
          </div>

          <div className="min-w-[180px] flex-1 rounded-2xl border border-border bg-surface px-5 py-4">
            <span className="mb-1.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
              <Phone className="h-3.5 w-3.5" /> Telefone
            </span>
            <Link
              href="tel:+5581984972303"
              className="text-[15px] font-semibold text-ink transition-colors hover:text-accent-deep"
            >
              (81) 98497-2303
            </Link>
          </div>

          <div className="min-w-[180px] flex-1 rounded-2xl border border-border bg-surface px-5 py-4">
            <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
              Social
            </span>
            <div className="flex items-center gap-3 text-[15px] font-semibold text-ink">
              <Link
                href="https://github.com/JoelFentes"
                target="_blank"
                className="flex items-center gap-1.5 transition-colors hover:text-accent-deep"
              >
                <FaGithub className="h-4 w-4" /> GitHub
              </Link>
              <span className="text-ink-soft">·</span>
              <Link
                href="https://www.linkedin.com/in/joel-fentes/"
                target="_blank"
                className="flex items-center gap-1.5 transition-colors hover:text-accent-deep"
              >
                <FaLinkedin className="h-4 w-4" /> LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
