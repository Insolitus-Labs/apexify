import "./globals.css"
import ParticlesBackground from "../components/ParticlesBackground"
import ScrollToTop from "../components/ScrollToTop"
import GlobalLoader from "../components/GlobalLoader"
import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = { 
  title: "APEXIFY",
  description: "AI-Powered Yield Farming Across Solana",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apexify.jpg-B3vJz0v2kpg4SEucZOMbhmqjVzIx6G.jpeg"
          type="image/jpeg"
        />
      </head>
      <body className="bg-[#0A0A0A]" aria-live="polite">
        <ParticlesBackground />
        <GlobalLoader />
        <div className="relative z-10" role="main">{children}</div>
        <ScrollToTop />
      </body>
    </html>
  )
}
