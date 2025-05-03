"use client"

import { motion } from "framer-motion"
import { Home, Briefcase, TrendingUp, Settings } from "lucide-react"

const sidebarItems = [
  { id: "dashboard", icon: Home, label: "Dashboard" },
  { id: "portfolio", icon: Briefcase, label: "My Portfolio" },
  { id: "market", icon: TrendingUp, label: "Market Trends" },
  { id: "settings", icon: Settings, label: "Settings" },
]

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <motion.div
      className="w-64 bg-gray-900 rounded-lg p-4 shadow-lg"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      {sidebarItems.map((item) => (
        <motion.button
          key={item.id}
          className={`flex items-center w-full p-3 mb-2 rounded-lg transition-colors duration-300 ${
            activeTab === item.id ? "bg-blue-600 text-white" : "text-gray-400 hover:bg-gray-800"
          }`}
          onClick={() => setActiveTab(item.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <item.icon className="mr-3" size={20} />
          {item.label}
        </motion.button>
      ))}
    </motion.div>
  )
}
