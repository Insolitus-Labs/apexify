"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { TrendingUp, Sprout, Shield } from "lucide-react"
import { useRef } from "react"

const features = [
  {
    title: "Multi-Protocol Arbitrage",
    description: "Exploits inefficiencies across Solana's DeFi ecosystem.",
    icon: TrendingUp,
    gradient: "from-blue-400 to-cyan-300",
  },
  {
    title: "Yield Farming Automation",
    description: "Moves capital between lending pools, staking, and liquidity farming for max APY.",
    icon: Sprout,
    gradient: "from-green-400 to-emerald-300",
  },
  {
    title: "Risk Mitigation AI",
    description: "Reacts instantly to market conditions, protecting your assets from volatility.",
    icon: Shield,
    gradient: "from-purple-400 to-pink-300",
  },
]

export default function SmartDeFiEngine() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50])

  return (
    <section className="py-24 px-4" ref={sectionRef}>
      <div className="container mx-auto">
        <motion.h2 style={{ opacity, y }} className="text-5xl font-bold mb-16 text-center text-white text-shadow">
          Apexify's Smart DeFi Engine
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              style={{ opacity, y }}
              className="relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 p-6 group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out`}
              />
              <div className="relative z-10">
                <motion.div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
      `}</style>
    </section>
  )
}

