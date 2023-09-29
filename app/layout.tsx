import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'

const roboto_mono = Roboto_Mono({ weight: ['200'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kreatis',
  description: 'Web development agency',
  keywords: ['web developer', 'programmer', 'linux', 'mac os', 'hackintosh', 'woof os', 'woof', 'vithushan', 'sutharsan', 'vithu', 'acutewoof', 'a cute woof'],
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

