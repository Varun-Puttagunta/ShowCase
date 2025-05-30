import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Test APP',
  description: 'Created By Varun',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
