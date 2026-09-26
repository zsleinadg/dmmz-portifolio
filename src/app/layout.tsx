import './globals.css'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Poppins } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { ThemeToaster } from '@/components/theme-toaster'
import { AosInit } from '@/components/aos-init'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://dmmz.vercel.app'),
  title: 'Daniel Muniz - Desenvolvedor Full-Stack',
  description: 'Desenvolvedor Full-Stack focado em soluções completas, do front-end ao back-end.',
  keywords: ['Desenvolvedor', 'Full-Stack', 'React', 'Next.js', 'Node.js', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Daniel Muniz' }],
  openGraph: {
    title: 'Daniel Muniz - Desenvolvedor Full-Stack',
    description: 'Confira meu portfólio e projetos full-stack desenvolvidos com as tecnologias mais modernas.',
    url: "https://dmmz.vercel.app",
    siteName: 'Daniel Muniz - Portfolio',
    images: [
      {
        url: '/assets/opengraph-image.webp',
        width: 1200,
        height: 630,
        alt: 'Preview do Portfólio de Daniel Muniz',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Muniz - Desenvolvedor Full-Stack',
    description: 'Portfolio de Daniel Muniz - Desenvolvedor Full-Stack',
    images: ['/assets/opengraph-image.webp'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Daniel Muniz',
  url: 'https://dmmz.vercel.app',
  jobTitle: 'Desenvolvedor Full-Stack & Analista de Sistemas',
  sameAs: [
    'https://github.com/zsleinadg',
    'https://www.linkedin.com/in/danielmunizworks/',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${poppins.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
          <ThemeToaster />
        </ThemeProvider>
        <AosInit />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
