import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Arrasou Sobrancelhas | Praia Grande - SP",
    template: "%s | Arrasou Sobrancelhas",
  },

  description:
    "Studio Arrasou Sobrancelhas em Praia Grande - SP. Design de sobrancelhas, micropigmentação e procedimentos especializados de beleza.",

  keywords: [
    "Arrasou Sobrancelhas",
    "sobrancelhas Praia Grande",
    "design de sobrancelhas Praia Grande",
    "micropigmentação Praia Grande",
    "studio de sobrancelhas Praia Grande",
    "beleza Praia Grande",
  ],

  authors: [
    {
      name: "Arrasou Sobrancelhas",
    },
  ],

  creator: "Arrasou Sobrancelhas",

  openGraph: {
    title: "Arrasou Sobrancelhas | Praia Grande - SP",
    description:
      "Sua beleza merece um olhar especialista. Conheça o Studio Arrasou Sobrancelhas em Praia Grande.",
    type: "website",
    locale: "pt_BR",
    siteName: "Arrasou Sobrancelhas",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen bg-white font-sans text-arrasou-black antialiased">
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}