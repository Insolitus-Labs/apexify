"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Wallet, BotIcon, Rocket } from "lucide-react"
import React from "react" // Added import for React

const steps = [
  {
    title: "Connect Your Wallet",
    description:
      "Securely link your Solana wallet to Apexify. We support Phantom, Solflare, and other major wallets for seamless integration.",
    icon: Wallet,
    color: "from-blue-400 to-cyan-400",
  },
  {
    title: "AI Optimization",
    description:
      "Our advanced AI analyzes market conditions, identifies optimal yield strategies, and automatically allocates your assets for maximum returns.",
    icon: BotIcon,
    color: "from-purple-400 to-pink-400",
  },
  {
    title: "Earn Passively",
    description:
      "Sit back and watch your portfolio grow. Apexify continuously rebalances and compounds your yields, ensuring optimal performance 24/7.",
    icon: Rocket,
    color: "from-orange-400 to-red-400",
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="how-it-works" className="py-16 px-4 bg-transparent" ref={sectionRef}>
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center text-white text-shadow"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {/* Interactive Steps */}
          <div className="w-full lg:w-1/3 space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeStep === index ? "bg-gray-800/80" : "bg-gray-800/30 hover:bg-gray-800/50"
                }`}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mr-4`}
                  >
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Step Details */}
          <div className="w-full lg:w-2/3 bg-gray-800/70 backdrop-blur-sm rounded-xl p-8 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${steps[activeStep].color} flex items-center justify-center mb-4`}
                >
                  {React.createElement(steps[activeStep].icon, { className: "w-6 h-6 text-white" })}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{steps[activeStep].title}</h3>
                <p className="text-xl text-gray-300 mb-6">{steps[activeStep].description}</p>
              </motion.div>
            </AnimatePresence>

            {/* Background Effect */}
            <div className="absolute top-0 right-0 w-1/2 h-full">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${steps[activeStep].color} opacity-10 blur-3xl`}
              ></div>
            </div>
          </div>
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

