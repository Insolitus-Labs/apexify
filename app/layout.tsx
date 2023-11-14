import "./globals.css"
import ParticlesBackground from "../components/ParticlesBackground"
import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = { 
  title: "APEXIFY",
  description: "AI-Powered Yield Farming Across Solana",
  openGraph: {
    title: "APEXIFY - AI-Powered Yield Farming",
    description: "AI-driven yield optimization across Solana’s DeFi ecosystem.",
    url: "https://apexify.com",
    siteName: "APEXIFY",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apexify.jpg-B3vJz0v2kpg4SEucZOMbhmqjVzIx6G.jpeg",
        width: 1200,
        height: 630,
        alt: "APEXIFY Yield Farming",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "APEXIFY - AI-Powered Yield Farming",
    description: "AI-driven yield optimization across Solana’s DeFi ecosystem.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apexify.jpg-B3vJz0v2kpg4SEucZOMbhmqjVzIx6G.jpeg"],
  },
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
      <body className="bg-[#0A0A0A]">
        <ParticlesBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
