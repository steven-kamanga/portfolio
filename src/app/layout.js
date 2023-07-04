import './globals.css'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Portfolio',
  description: 'Steven kamangas portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  )
}
