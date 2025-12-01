import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arrasou Sobrancelhas | Design de Sobrancelhas com Thays",
  description: "Estúdio especializado em design de sobrancelhas, henna, alongamento de cílios e muito mais. Realce sua beleza natural com a expertise da Thays.",
  keywords: "sobrancelhas, design de sobrancelhas, henna, alongamento de cílios, beleza feminina, estética",
  authors: [{ name: "Arrasou Sobrancelhas" }],
  openGraph: {
    title: "Arrasou Sobrancelhas | Design de Sobrancelhas",
    description: "Realce sua beleza natural com tratamentos especializados para sobrancelhas e cílios.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}