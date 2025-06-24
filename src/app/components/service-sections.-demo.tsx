"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function ServiceSectionsCarrossel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-10 sm:py-16 lg:py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 text-white font-sans mb-4 sm:mb-6 lg:mb-8">
        Seção de Serviços
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const ContentWeb = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-4 sm:p-6 md:p-8 lg:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base md:text-lg lg:text-2xl font-sans max-w-3xl mx-auto leading-relaxed">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Transformamos suas ideias em soluções digitais que impulsionam
          resultados
        </span>{" "}
        através de sites modernos, responsivos e preparados para destacar seu
        negócio no mundo online.
      </p>
      <img
        src="https://images.unsplash.com/photo-1642132652798-ae887edb9e9d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Web site"
        height="500"
        width="500"
        className="w-full sm:w-3/4 md:w-1/2 h-auto mx-auto object-contain rounded-lg mt-4 sm:mt-6"
      />
    </div>
  );
};

const ContentMobile = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-4 sm:p-6 md:p-8 lg:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base md:text-lg lg:text-2xl font-sans max-w-3xl mx-auto leading-relaxed">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Levamos sua empresa até a palma da mão do cliente com apps eficientes,
        </span>{" "}
        funcionais e preparados para oferecer a melhor experiência em qualquer dispositivo.
      </p>
      <img
        src="https://images.unsplash.com/photo-1659084624431-6496c76aae7c?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="App mobile"
        height="500"
        width="500"
        className="w-full sm:w-3/4 md:w-1/2 h-auto mx-auto object-contain rounded-lg mt-4 sm:mt-6"
      />
    </div>
  );
};

const ContentConsult = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-4 sm:p-6 md:p-8 lg:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base md:text-lg lg:text-2xl font-sans max-w-3xl mx-auto leading-relaxed">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Identificamos pontos de melhoria, otimizamos recursos e orientamos decisões
        </span>{" "}
        para que a tecnologia trabalhe a favor do crescimento do seu negócio.
      </p>
      <img
        src="https://images.unsplash.com/photo-1573165265437-f5e267bb3db6?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Consultoria"
        height="500"
        width="500"
        className="w-full sm:w-3/4 md:w-1/2 h-auto mx-auto object-contain rounded-lg mt-4 sm:mt-6"
      />
    </div>
  );
};

const ContentSuport = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-4 sm:p-6 md:p-8 lg:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base md:text-lg lg:text-2xl font-sans max-w-3xl mx-auto leading-relaxed">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Conte com uma equipe especializada pronta para resolver problemas rapidamente,
        </span>{" "}
       garantindo estabilidade e segurança para suas operações diárias.
      </p>
      <img
        src="https://plus.unsplash.com/premium_vector-1682300655643-9c07cc4b1fff?q=80&w=834&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Suporte tecnico"
        height="500"
        width="500"
        className="w-full sm:w-3/4 md:w-1/2 h-auto mx-auto object-contain rounded-lg mt-4 sm:mt-6"
      />
    </div>
  );
};

const ContentProcess = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-4 sm:p-6 md:p-8 lg:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base md:text-lg lg:text-2xl font-sans max-w-3xl mx-auto leading-relaxed">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Implemente soluções inteligentes que otimizam fluxos de trabalho.
        </span>{" "}
        Reduza custos operacionais, elimine retrabalho e aumente a produtividade da sua equipe com tecnologias que agilizam o dia a dia da sua empresa.
      </p>
      <img
        src="https://plus.unsplash.com/premium_photo-1681010317789-68f31df3b9b0?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Macbook mockup from Aceternity UI"
        height="500"
        width="500"
        className="w-full sm:w-3/4 md:w-1/2 h-auto mx-auto object-contain rounded-lg mt-4 sm:mt-6"
      />
    </div>
  );
};

const data = [
  {
    category: "Desenvolvimento Web",
    title: "Deixe seu negócio mais tecnológico e atualizado.",
    src: "https://images.unsplash.com/photo-1711540846696-9389ab66377e?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <ContentWeb />,
  },
  {
    category: "Desenvolvimento Mobile",
    title: "Aplicativos rápidos para Android e IOS com design intuitivo.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     content: <ContentMobile />,
  },
  {
    category: "Consultoria em TI",
    title: "Análise técnica e estratégias personalizadas para sua empresa.",
    src: "https://plus.unsplash.com/premium_photo-1661774953651-d4f658a7e34d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <ContentConsult />,
  },

  {
    category: "Suporte Técnico",
    title:
      "Suporte ágil para manter seus sistemas funcionando sem interrupções.",
    src: "https://plus.unsplash.com/premium_photo-1683134568489-b07ba6980bf6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     content: <ContentSuport />,
  },
  {
    category: "Automação de Processos",
    title: "Automatize tarefas repetitivas e ganhe produtividade.",
    src: "https://plus.unsplash.com/premium_photo-1726407884242-ad23db752114?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     content: <ContentProcess />,
  },
];