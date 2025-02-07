"use client"

import { motion } from "framer-motion"

const steps = [
  {
    title: "Connect Your Wallet",
    description: "(Phantom, Solflare, Ledger)",
    icon: "1️⃣",
  },
  {
    title: "Choose Your Yield Strategy",
    description: "(Auto-Farm, Arbitrage, Risk-Controlled)",
    icon: "2️⃣",
  },
  {
    title: "Let Apexify Handle the Rest",
    description: "🚀",
    icon: "3️⃣",
  },
]

export default function GetStarted() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-semibold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get Started in Minutes
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-medium mb-2 text-white">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="flex justify-center mt-12 space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Launch App
          </a>
          <a
            href="#"
            className="bg-transparent hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-3 px-6 rounded-lg border border-blue-500 transition duration-300"
          >
            Read Whitepaper
          </a>
          <a
            href="#"
            className="bg-transparent hover:bg-purple-500 hover:text-white text-purple-500 font-bold py-3 px-6 rounded-lg border border-purple-500 transition duration-300"
          >
            Join Discord
          </a>
        </motion.div>
      </div>
    </section>
  )
}

