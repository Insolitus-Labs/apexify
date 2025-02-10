"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Twitter, BookOpen } from "lucide-react"
import { useState, useEffect } from "react"

const menuItems = [
  { name: "Dashboard", href: "#dashboard-section" },
  { name: "Why Apexify", href: "#why-apexify" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "FAQs", href: "#faqs" },
] 

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    if (typeof window !== "undefined") {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      } else {
        console.warn(`Element with selector "${href}" not found.`)
      }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300 ${isScrolled ? "bg-zinc-900/90" : "bg-transparent"}`}
    >
      <div className={`mx-auto max-w-screen-xl rounded-[10px] ${isScrolled ? "bg-zinc-900/90 backdrop-blur-md" : ""}`}>
        <div className="flex items-center justify-between h-14 px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apexify.jpg-B3vJz0v2kpg4SEucZOMbhmqjVzIx6G.jpeg"
                alt="Apexify Logo"
                className="object-contain"
              />
            </div>
            <span className="text-white font-medium">Apexify</span>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right Side Navigation */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white transition-colors duration-200 hover:bg-transparent"
              onClick={() => window.open("https://apexify.gitbook.io/apexify-docs", "_blank")}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Documentation
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
              onClick={() => window.open("https://x.com/apexify_ai", "_blank")}
              style={{ borderRadius: "8px" }}
            >
              <Twitter className="w-4 h-4 mr-2" />
              Follow on X
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

