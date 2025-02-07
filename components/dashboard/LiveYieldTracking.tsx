"use client"

import { motion } from "framer-motion"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", yield: 4000 },
  { name: "Feb", yield: 3000 },
  { name: "Mar", yield: 5000 },
  { name: "Apr", yield: 4500 },
  { name: "May", yield: 6000 },
  { name: "Jun", yield: 5500 },
]

export default function LiveYieldTracking() {
  return (
    <motion.div
      className="bg-gray-900 rounded-lg p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold mb-4 text-white">Live Yield Tracking</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip contentStyle={{ backgroundColor: "#1F2937", border: "none" }} labelStyle={{ color: "#F3F4F6" }} />
          <Line type="monotone" dataKey="yield" stroke="#3B82F6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

