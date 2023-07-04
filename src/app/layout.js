import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Portfolio',
  description: 'Steven kamangas portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
      <Footer />
      </body>
      <Analytics />
    </html>
  )
}
