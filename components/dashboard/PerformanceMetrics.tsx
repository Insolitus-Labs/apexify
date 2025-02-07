"use client"

import { motion } from "framer-motion"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Week 1", apy: 4, performance: 24 },
  { name: "Week 2", apy: 3, performance: 13 },
  { name: "Week 3", apy: 5, performance: 38 },
  { name: "Week 4", apy: 4, performance: 30 },
  { name: "Week 5", apy: 6, performance: 42 },
  { name: "Week 6", apy: 5, performance: 35 },
]

export default function PerformanceMetrics() {
  return (
    <motion.div
      className="bg-gray-900 rounded-lg p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h3 className="text-2xl font-semibold mb-4 text-white">Performance Metrics & APY Trends</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip contentStyle={{ backgroundColor: "#1F2937", border: "none" }} labelStyle={{ color: "#F3F4F6" }} />
          <Area type="monotone" dataKey="apy" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="performance" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

