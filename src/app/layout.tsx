import type { Metadata, Viewport } from 'next';
import { DM_Sans, Manrope } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-heading', display: 'swap' });
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://maipu-jardines.vercel.app').replace(/\/$/, '');

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: 'Maipú Jardines | Corte de pasto y mantenimiento de jardines',
    template: '%s | Maipú Jardines',
  },
  description:
    'Servicio de corte de pasto y mantenimiento de jardines en Maipú, Mendoza y localidades cercanas. Solicitá un presupuesto para tu casa, comercio o empresa.',
  applicationName: 'Maipú Jardines',
  ...(siteUrl ? { alternates: { canonical: '/' } } : {}),
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: 'Maipú Jardines',
    title: 'Maipú Jardines | Corte de pasto y mantenimiento',
    description: 'Corte de pasto y mantenimiento de espacios verdes en Maipú y alrededores.',
    ...(siteUrl ? { url: '/' } : {}),
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#173f2b',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body className={`${dmSans.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
