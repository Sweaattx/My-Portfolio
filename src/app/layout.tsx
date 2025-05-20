import './globals.css';
import { Playfair_Display, Montserrat, Inter } from 'next/font/google';
import Footer from "@/components/Footer";
import { Metadata } from 'next';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Piero Valdez - Estudiante de Ingeniería de Software',
  description: 'Portfolio personal de Piero Valdez, estudiante de Ingeniería de Software aspirante a desarrollador Full Stack, enfocado en React, Next.js y desarrollo backend.',
  keywords: ["software engineer", "desarrollador web", "UPC", "Piero Valdez", "portfolio", "ingeniería de software", "programación"],
  authors: [{ name: "Piero Benjamin Ayvar Valdez" }],
  creator: "Piero Benjamin Ayvar Valdez",
  publisher: "Piero Benjamin Ayvar Valdez",
  robots: "index, follow",
  manifest: "/manifest.json",
  applicationName: "Piero Valdez Portfolio",
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://Pierov.com", // Actualiza esto con tu dominio real
    title: "Piero Valdez | Estudiante de Ingeniería de Software",
    description: "Portafolio de Piero Benjamin Ayvar Valdez, estudiante de Ingeniería de Software en la UPC, aspirante a desarrollador Full Stack",
    siteName: "Piero Valdez Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${montserrat.variable} ${inter.variable} antialiased min-h-screen flex flex-col`}>
      <body>
        {children}
      </body>
    </html>
  );
}