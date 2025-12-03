import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Toaster } from "sonner";

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
  metadataBase: new URL('https://arrasousobrancelhas.com.br'),
  title: {
    default: "Arrasou Sobrancelhas | Design de Sobrancelhas e Micropigmentação em Cotia, Praia Grande e Santos - SP",
    template: "%s | Arrasou Sobrancelhas"
  },
  description: "Estúdio especializado em design de sobrancelhas e micropigmentação com +12 anos de experiência. Atendimento in loco em Cotia, Praia Grande, São Vicente e Santos - SP. Todas as técnicas de micropigmentação por R$ 200. Agende agora!",
  keywords: [
    "design de sobrancelhas",
    "micropigmentação sobrancelhas",
    "sobrancelhas Cotia",
    "sobrancelhas Praia Grande",
    "sobrancelhas Santos",
    "sobrancelhas São Vicente",
    "micropigmentação fio a fio",
    "micropigmentação shadow",
    "micropigmentação ombré",
    "henna sobrancelhas",
    "design de sobrancelhas em domicílio",
    "atendimento in loco sobrancelhas",
    "estética facial",
    "beleza feminina",
    "Thays sobrancelhas",
    "micropigmentação baixada santista",
    "design de sobrancelhas SP",
  ],
  authors: [{ name: "Thays - Arrasou Sobrancelhas" }],
  creator: "Arrasou Sobrancelhas",
  publisher: "Arrasou Sobrancelhas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96-96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://arrasousobrancelhas.com.br",
    siteName: "Arrasou Sobrancelhas",
    title: "Arrasou Sobrancelhas | Design e Micropigmentação em Cotia e Baixada Santista",
    description: "Design de sobrancelhas e micropigmentação com +12 anos de experiência. Atendimento in loco. Todas as técnicas por R$ 200. Cotia, Praia Grande, Santos e São Vicente.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arrasou Sobrancelhas - Design e Micropigmentação",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arrasou Sobrancelhas | Design e Micropigmentação",
    description: "Design de sobrancelhas e micropigmentação com +12 anos de experiência. Atendimento in loco em Cotia e Baixada Santista.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "seu-codigo-google-search-console",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="canonical" href="https://arrasousobrancelhas.com.br" />
        <meta name="geo.region" content="BR-SP" />
        <meta name="geo.placename" content="Cotia, Praia Grande, Santos, São Vicente" />
        <meta name="theme-color" content="#F472B6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Arrasou" />
      </head>
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}