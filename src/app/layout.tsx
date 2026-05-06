import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mekimi | Soluções Digitais',
  description:
    'A Mekimi transforma ideias em experiências digitais. Criamos sites institucionais, landing pages, hotsites, apps mobile, SaaS, software desktop e APIs com excelência.',
  keywords: [
    'agência digital',
    'desenvolvimento de software',
    'sites institucionais',
    'landing page',
    'aplicativos mobile',
    'SaaS',
    'APIs',
    'mekimi',
  ],
  icons: {
    icon: '/logo.svg',
  },
  openGraph: {
    title: 'Mekimi | Soluções Digitais',
    description: 'Transformamos ideias em experiências digitais.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
