import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'

const roboto_mono = Roboto_Mono({ weight: ['200'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WebTrope',
  description: 'Web development agency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto_mono.className}>{children}</body>
    </html>
  )
}
