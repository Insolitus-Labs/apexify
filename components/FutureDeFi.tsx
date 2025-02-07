"use client"

import { motion, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Zap, TrendingUp, FileText } from "lucide-react"
import { useEffect, useState } from "react"

const AIOrb = () => (
  <motion.div
    className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-3xl"
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.3, 0.2],
    }}
    transition={{
      duration: 5,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
    }}
  />
)

const FloatingIcon = ({ icon: Icon, delay }) => (
  <motion.div
    className="absolute text-white/20"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay }}
  >
    <Icon size={40} />
  </motion.div>
)

const YieldCounter = () => {
  const [yieldValue, setYieldValue] = useState(12.5)

  useEffect(() => {
    const interval = setInterval(() => {
      setYieldValue((prev) => +(prev + (Math.random() - 0.5) * 0.1).toFixed(2))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return <div className="text-4xl font-bold text-green-400">{yieldValue.toFixed(2)}% APY</div>
}

const FutureDeFi = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
      <div className="container mx-auto relative">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>

        <AIOrb />
        <FloatingIcon icon={Brain} delay={0.2} />
        <FloatingIcon icon={Zap} delay={0.4} />
        <FloatingIcon icon={TrendingUp} delay={0.6} />

        <motion.div
          className="relative z-10 bg-black/30 backdrop-filter backdrop-blur-xl rounded-3xl border border-white/10 p-12 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-8">
              <motion.h2
                className="text-5xl md:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-lexend"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Amplify Your DeFi Yields with AI
              </motion.h2>
              <motion.p
                className="text-xl text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Experience the future of decentralized finance. Let our AI optimize your portfolio in real-time.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-700/80 to-purple-800/80 text-white hover:from-blue-800/90 hover:to-purple-900/90 transition-all duration-300 transform hover:scale-105 px-8 py-6 rounded-full font-semibold text-lg group"
                  onClick={() => window.open("https://apexify.gitbook.io/apexify-docs", "_blank")}
                >
                  Read Whitepaper
                  <FileText className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </Button>
              </motion.div>
            </div>

            <div className="lg:w-1/2 relative">
              <motion.div
                className="bg-white/5 rounded-2xl p-8 backdrop-filter backdrop-blur-lg border border-white/10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Current AI-Optimized Yield</h3>
                <YieldCounter />
                <p className="text-gray-400 mt-4">
                  Our AI continuously analyzes market conditions to maximize your returns
                </p>
                <motion.div
                  className="mt-6 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, delay: 1 }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FutureDeFi

