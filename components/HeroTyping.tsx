'use client'

import { useEffect, useState } from "react";

export default function HeroTyping() {
  const [text, setText] = useState("");
  const fullText = "Full Stack Trainee Developer";
  const typingSpeed = 80; 

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
    <h2 className="text-2xl lg:text-3xl text-slate-600 mt-4">
      {text}
      <span className="animate-pulse">|</span>
    </h2>
  );
}
