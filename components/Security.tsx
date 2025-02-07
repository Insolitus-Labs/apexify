"use client"

import { motion } from "framer-motion"

const securityFeatures = [
  {
    title: "Non-Custodial",
    description: "You stay in control of your funds at all times.",
    icon: "🔐",
  },
  {
    title: "Audited Smart Contracts",
    description: "Secure architecture for DeFi peace of mind.",
    icon: "🛡️",
  },
  {
    title: "Fully Transparent",
    description: "AI decision-making is traceable and accountable.",
    icon: "📖",
  },
]

export default function Security() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-semibold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Security & Transparency
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-medium mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

