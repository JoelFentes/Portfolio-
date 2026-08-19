import type { Metadata } from "next";
import { Bricolage_Grotesque, Public_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const publicSans = Public_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Joel Fentes — Desenvolvedor Full-Stack",
  description:
    "Portfólio de Joel Fentes, desenvolvedor full-stack. Confira projetos, experiência e forma de contato.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${bricolage.variable} ${publicSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
