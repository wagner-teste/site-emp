"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const sections = ["Inicio", "Sobre", "Servicos", "Portfolio", "Depoimentos", "Contato"];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("Inicio");

  useEffect(() => {
    const handleObserve = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserve, {
      rootMargin: "-50% 0px -50% 0px", // Ajuste sensível
      threshold: 0,
    });

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex gap-6 bg-white/80 backdrop-blur-md px-6 py-2 rounded-full shadow">
      {sections.map((section) => (
        <Link
          key={section}
          href={`#${section}`}
          className={`text-sm transition ${activeSection === section
              ? "text-black font-semibold"
              : "text-neutral-500 hover:text-black"
            }`}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </Link>
      ))}
    </nav>
  );
}
