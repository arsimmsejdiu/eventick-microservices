import Navigation from '@/components/Navigation'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import React from "react";
import {ThemeProvider} from "next-themes";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eventick',
  description: 'Buy your tickets to any events',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
