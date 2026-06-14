import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { AosInit } from '../components/aos-init'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://dmmz.vercel.app'),
  title: 'Daniel Marques - Desenvolvedor Full-Stack',
  description: 'Desenvolvedor Full-Stack focado em soluções completas, do front-end ao back-end.',
  keywords: ['Desenvolvedor', 'Full-Stack', 'React', 'Next.js', 'Node.js', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Daniel Marques' }],
  openGraph: {
    title: 'Daniel Marques - Desenvolvedor Full-Stack',
    description: 'Confira meu portfólio e projetos full-stack desenvolvidos com as tecnologias mais modernas.',
    url: "https://dmmz.vercel.app",
    siteName: 'Daniel Marques - Portfolio',
    images: [
      {
        url: '/assets/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Preview do Portfólio de Daniel Marques',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Marques - Desenvolvedor Full-Stack',
    description: 'Portfolio de Daniel Marques - Desenvolvedor Full-Stack',
    images: ['/assets/opengraph-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        {children}
        <AosInit />
      </body>
    </html>
  )
}
