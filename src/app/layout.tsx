import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { AosInit } from './_components/aos-init'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://dmmz.vercel.app'),
  title: 'Daniel Marques - Desenvolvedor Front-End',
  description: 'Desenvolvedor Front-End focado em interfaces modernas, responsivas e acessíveis.',
  keywords: ['Desenvolvedor', 'Front-End', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Daniel Marques' }],
  openGraph: {
    title: 'Daniel Marques - Desenvolvedor Front-End',
    description: 'Confira meu portfólio e projetos desenvolvidos com as tecnologias mais modernas.',
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
    title: 'Daniel Marques - Desenvolvedor Front-End',
    description: 'Portfolio de Daniel Marques',
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
