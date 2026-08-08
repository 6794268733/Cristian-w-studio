import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cristian Wrubel | Desarrollador Web en Puerto Iguazú, Misiones",
  description: "Creo páginas web modernas, rápidas y optimizadas para negocios y emprendedores de Puerto Iguazú, Misiones y toda Argentina.",
  keywords: ["desarrollador web Puerto Iguazú", "diseñador web Misiones", "creación de páginas web", "Cristian Wrubel"],
  authors: [{ name: "Cristian Wrubel" }],
  openGraph: {
    title: "Cristian Wrubel | Desarrollador Web en Puerto Iguazú",
    description: "Sitios web profesionales que venden. Desde Puerto Iguazú para toda Argentina.",
    url: "https://cristian-w-studio.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={'${geistSans.variable} ${geistMono.variable} antialiased'}>
        {children}
      </body>
    </html>
  );
}