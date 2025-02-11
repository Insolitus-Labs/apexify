"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useCallback, useRef } from "react"

export default function Hero() {
  const ref = useRef(null)  
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const scrollToDashboard = useCallback(() => {
    const dashboardSection = document.getElementById("dashboard-section")
    if (dashboardSection) {
      dashboardSection.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 200], [1, 0])
  const y = useTransform(scrollY, [0, 200], [0, 50])

  return (
    <div className="flex flex-col justify-center min-h-[90vh] relative" ref={ref}>
      <div className="text-center w-full max-w-6xl mx-auto px-4">
        <motion.div
          style={{ opacity, y }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
        >
          <span className="mr-2">✨</span>
          <span className="text-white text-sm">Introducing Apexify Agent</span>
        </motion.div>

        <motion.h1
          style={{ opacity, y }}
          className="text-4xl md:text-6xl lg:text-[90px] font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-white">Peak Returns,</span>
          <br />
          <span className="relative inline-block">
            <span className="text-gray-500">ZERO</span>
            <motion.span
              className="absolute left-0 top-0 overflow-hidden whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-white to-gray-500"
              initial={{ width: "0%" }}
              animate={isInView ? { width: ["0%", "100%", "100%", "0%"] } : { width: "0%" }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 6,
                ease: "easeInOut",
                times: [0, 0.4, 0.6, 1],
              }}
            >
              ZERO
            </motion.span>
          </span>
          <span className="text-white"> Lag</span>
        </motion.h1>

        <motion.p
          style={{ opacity, y }}
          className="text-gray-400 text-xl my-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Harness AI-driven yield farming strategies to maximize DeFi profits on Solana—automatically
        </motion.p>
      </div>
    </div>
  )
}

