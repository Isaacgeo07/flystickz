import type { Metadata } from 'next'
import { Inter, Anton } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const anton = Anton({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-anton'
})

export const metadata: Metadata = {
  title: 'Flystickz | Premium Drumsticks for Every Drummer',
  description: 'Crafted with balance, durability, and feel in mind. Premium 2B, 5A, 5B, 7A, X5A & X5B drumsticks for drummers who demand excellence.',
  generator: 'v0.app',
  keywords: ['drumsticks', 'drums', 'percussion', 'music', 'drummers', 'premium drumsticks'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${anton.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
