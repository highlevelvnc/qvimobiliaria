import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ToastProvider from '@/components/ToastProvider'
import ScrollProgressBar from '@/components/ScrollProgressBar'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import ScrollToTop from '@/components/ScrollToTop'
import CustomCursor from '@/components/CustomCursor'

// Configuração de fontes premium
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

// Metadados SEO otimizados
export const metadata: Metadata = {
  metadataBase: new URL('https://qvimobiliaria.pt'),
  title: {
    default: 'QV Imobiliária | Mediação Imobiliária de Luxo em Lisboa, Cascais e Oeiras - AMI 17398',
    template: '%s | QV Imobiliária'
  },
  description: 'QV Imobiliária - Venda Ágil, Eficaz e sem Preocupações. Especialistas em imóveis de luxo em Lisboa, Cascais, Oeiras, Amadora, Odivelas, Benfica e Abrantes. Transformamos imóveis em negócios bem-sucedidos. AMI 17398.',
  keywords: [
    'imobiliária lisboa',
    'imobiliária cascais',
    'imobiliária oeiras',
    'imobiliária amadora',
    'imobiliária odivelas',
    'imobiliária benfica',
    'mediação imobiliária portugal',
    'imóveis de luxo portugal',
    'moradias cascais',
    'apartamentos lisboa',
    'QV imobiliária',
    'AMI 17398',
    'comprar casa lisboa',
    'vender casa cascais',
    'imóveis premium portugal',
    'arrendamento lisboa',
    'venda imóveis oeiras'
  ],
  authors: [{ name: 'QV Imobiliária' }],
  creator: 'QV Imobiliária',
  publisher: 'QV Imobiliária',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    url: 'https://qvimobiliaria.pt',
    siteName: 'QV Imobiliária',
    title: 'QV Imobiliária | Mediação Imobiliária de Luxo em Portugal',
    description: 'Venda Ágil, Eficaz e sem Preocupações. Especialistas em imóveis de luxo em Lisboa, Cascais, Oeiras, Amadora, Odivelas, Benfica e Abrantes.',
    images: [
      {
        url: '/hero-luxury-villa.png',
        width: 1200,
        height: 630,
        alt: 'QV Imobiliária - Mediação Imobiliária Premium',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QV Imobiliária | Mediação Imobiliária de Luxo',
    description: 'Venda Ágil, Eficaz e sem Preocupações. Especialistas em imóveis premium.',
    images: ['/hero-luxury-villa.png'],
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
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://qvimobiliaria.pt',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-PT" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <ScrollProgressBar />
        <CustomCursor />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <ScrollToTop />
        <ToastProvider />
      </body>
    </html>
  )
}
