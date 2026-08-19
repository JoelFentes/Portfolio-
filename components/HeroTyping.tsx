"use client";

import { useEffect, useState } from "react";

export default function HeroTyping() {
  const [text, setText] = useState("");
  const fullText = "desenvolvedor full-stack.";
  const typingSpeed = 70;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-[52px]">
      Joel Fentes,
      <br />
      <span className="text-accent">{text}</span>
      <span className="animate-pulse text-accent">|</span>
    </h1>
  );
}
