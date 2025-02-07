"use client"

import { useState, useEffect, useRef } from "react"
import DashboardSidebar from "./dashboard/DashboardSidebar"
import DashboardContent from "./dashboard/DashboardContent"
import IOSWindow from "./IOSWindow"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const dashboardRef = useRef(null)

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev)
  }

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset
      setScrollPosition(position)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const calculateTransform = () => {
    const maxScroll = window.innerHeight * 0.1 // 10% of viewport height
    const scrollPercentage = Math.min(scrollPosition / maxScroll, 1)
    const scale = 0.97572 + (1 - 0.97572) * scrollPercentage
    const rotateX = 3.64195 * (1 - scrollPercentage)
    const opacity = 0.951441 + (1 - 0.951441) * scrollPercentage

    return {
      opacity,
      transform: `perspective(1000px) scale(${scale}) rotateX(${rotateX}deg)`,
      transition: "all 0.3s ease",
    }
  }

  return (
    <section id="dashboard-section" ref={dashboardRef} className="px-4 bg-transparent -mt-[10vh]">
      <div className="container mx-auto smooth-scroll" style={calculateTransform()}>
        <IOSWindow title="Apexify Dashboard">
          <div className="flex rounded-lg overflow-hidden min-h-[80vh] w-full">
            <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} isCollapsed={isSidebarCollapsed} />
            <div className="flex-grow relative">
              <button className="absolute top-4 left-0 z-10 bg-gray-700 p-2 rounded-r-md" onClick={toggleSidebar}>
                {isSidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
              </button>
              <DashboardContent activeTab={activeTab} />
            </div>
          </div>
        </IOSWindow>
      </div>
      <style jsx>{`
        .smooth-scroll {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  )
}

