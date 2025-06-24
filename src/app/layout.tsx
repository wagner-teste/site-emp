// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarDemo from "./components/navbar-demo";
import Footer from "./components/footer";
import { BackToTop } from "@/components/ui/back-to-top";
import { CTAProvider } from './contexts/CTAContext';
import { ContactModal } from './components/cta/ContactModal';
import { FloatingWhatsApp } from './components/cta/FloatingWhatsApp'; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrimeCode Solutions - Soluções Tecnológicas Inovadoras",
  description: "Empresa especializada em desenvolvimento de software, consultoria e suporte técnico. Transformamos ideias em soluções digitais eficientes.",
  keywords: "desenvolvimento web, aplicativos mobile, consultoria tecnológica, suporte técnico, PrimeCode Solutions",
  authors: [{ name: "PrimeCode Solutions" }],
  creator: "PrimeCode Solutions",
  publisher: "PrimeCode Solutions",
  robots: "index, follow",
  openGraph: {
    title: "PrimeCode Solutions - Soluções Tecnológicas Inovadoras",
    description: "Transformamos ideias em soluções digitais eficientes",
    type: "website",
    locale: "pt_BR",
    siteName: "PrimeCode Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeCode Solutions - Soluções Tecnológicas Inovadoras",
    description: "Transformamos ideias em soluções digitais eficientes",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`relative ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CTAProvider>
          <NavbarDemo />

          <main>
            {children}
          </main>

          <Footer />
          <BackToTop />
          <ContactModal />
          <FloatingWhatsApp />
        </CTAProvider>
      </body>
    </html>
  );
}
