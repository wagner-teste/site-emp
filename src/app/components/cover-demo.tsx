"use client";
import React from "react";
import { Cover } from "@/components/ui/cover";
import Link from "next/link";
import { CTAButton } from "./cta/CTAButton";

export function CoverDemo() {
  return (
    <div>
     <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl">
       Soluções rápidas como um <br /> 
      
      
        <Cover>🚀</Cover> para o seu negócio
      </h2>
      <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
        A <strong>PrimeCode Solutions</strong> é uma empresa de tecnologia que oferece soluções personalizadas para o seu negócio. Nossa equipe é especializada em desenvolvimento de software, consultoria e suporte técnico. Estamos aqui para ajudar você a alcançar seus objetivos com eficiência e inovação.
      </p>
 
      <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        <CTAButton
          action="modal"
          target="contact"
          type="primary"
          section="cover-hero"
          className="rounded-md bg-sky-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
        >
          Entrar em contato
        </CTAButton>
        <Link href="/empresa">
          <button className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
            Sobre nós
          </button>
        </Link>
      </div>
    </div>
  );
}