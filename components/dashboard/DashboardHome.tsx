"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts"
import { PieChart, Pie, Cell, Legend } from "recharts"
import { BarChart, Bar } from "recharts"
import { ArrowUpRight, ArrowDownRight, DollarSign, Percent } from "lucide-react"

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

const GlassCard = ({ children, className = "", ...props }) => (
  <motion.div
    className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-4 border border-white border-opacity-20 shadow-lg ${className}`}
    {...props}
  >
    {children}
  </motion.div>
)

export default function DashboardHome() {
  const [yieldData, setYieldData] = useState([
    { name: "00:00", yield: 4000 },
    { name: "04:00", yield: 3000 },
    { name: "08:00", yield: 2000 },
    { name: "12:00", yield: 2780 },
    { name: "16:00", yield: 1890 },
    { name: "20:00", yield: 2390 },
    { name: "24:00", yield: 3490 },
  ])

  const [portfolioData, setPortfolioData] = useState([
    { name: "SOL", value: 400 },
    { name: "USDC", value: 300 },
    { name: "RAY", value: 200 },
    { name: "SRM", value: 100 },
  ])

  const [performanceData, setPerformanceData] = useState([
    { name: "Week 1", returns: 4000 },
    { name: "Week 2", returns: 3000 },
    { name: "Week 3", returns: 2000 },
    { name: "Week 4", returns: 2780 },
  ])

  const [apyTrendData, setApyTrendData] = useState([
    { name: "Jan", apy: 5.2 },
    { name: "Feb", apy: 5.8 },
    { name: "Mar", apy: 6.1 },
    { name: "Apr", apy: 5.9 },
    { name: "May", apy: 6.3 },
    { name: "Jun", apy: 6.7 },
  ])

  const [totalBalance, setTotalBalance] = useState(10234.56)
  const [dailyProfit, setDailyProfit] = useState(123.45)
  const [currentAPY, setCurrentAPY] = useState(12.34)
  const [totalYield, setTotalYield] = useState(1567.89)

  useEffect(() => {
    const interval = setInterval(() => {
      // Update yield data
      setYieldData((prevData) => {
        const newData = [
          ...prevData.slice(1),
          { name: new Date().toLocaleTimeString(), yield: Math.floor(Math.random() * 5000) },
        ]
        return newData
      })

      // Update portfolio data
      setPortfolioData((prevData) => {
        return prevData.map((item) => ({ ...item, value: item.value + Math.floor(Math.random() * 50 - 25) }))
      })

      // Update performance data
      setPerformanceData((prevData) => {
        return prevData.map((item) => ({ ...item, returns: item.returns + Math.floor(Math.random() * 500 - 250) }))
      })

      // Update APY trend data
      setApyTrendData((prevData) => {
        const lastMonth = prevData[prevData.length - 1]
        const newApy = Math.max(4, Math.min(8, lastMonth.apy + (Math.random() - 0.5)))
        return [
          ...prevData.slice(1),
          { name: new Date().toLocaleString("default", { month: "short" }), apy: Number.parseFloat(newApy.toFixed(1)) },
        ]
      })

      // Update summary numbers
      setTotalBalance((prevBalance) => Number.parseFloat((prevBalance + (Math.random() * 100 - 50)).toFixed(2)))
      setDailyProfit((prevProfit) => Number.parseFloat((prevProfit + (Math.random() * 10 - 5)).toFixed(2)))
      setCurrentAPY((prevAPY) => Number.parseFloat((prevAPY + (Math.random() * 0.5 - 0.25)).toFixed(2)))
      setTotalYield((prevYield) => Number.parseFloat((prevYield + (Math.random() * 20 - 10)).toFixed(2)))
    }, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="h-full overflow-y-auto p-4 futuristic-scrollbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-white mb-6">Dashboard</h1>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {/* Portfolio Summary Cards */}
        <GlassCard>
          <div>
            <p className="text-gray-300 text-sm mb-1">Total Balance</p>
            <p className="text-2xl font-bold text-white">${totalBalance.toLocaleString()}</p>
          </div>
          <div className="flex items-center text-green-400 mt-2">
            <ArrowUpRight size={16} className="mr-1" />
            <span className="text-sm">+2.5%</span>
          </div>
        </GlassCard>
        <GlassCard>
          <div>
            <p className="text-gray-300 text-sm mb-1">24h Profit/Loss</p>
            <p className={`text-2xl font-bold ${dailyProfit >= 0 ? "text-green-400" : "text-red-400"}`}>
              {dailyProfit >= 0 ? "+" : "-"}${Math.abs(dailyProfit).toLocaleString()}
            </p>
          </div>
          <div className={`flex items-center ${dailyProfit >= 0 ? "text-green-400" : "text-red-400"} mt-2`}>
            {dailyProfit >= 0 ? (
              <ArrowUpRight size={16} className="mr-1" />
            ) : (
              <ArrowDownRight size={16} className="mr-1" />
            )}
            <span className="text-sm">{dailyProfit >= 0 ? "+" : "-"}1.2%</span>
          </div>
        </GlassCard>
        <GlassCard>
          <div>
            <p className="text-gray-300 text-sm mb-1">Current APY</p>
            <p className="text-2xl font-bold text-blue-400">{currentAPY.toFixed(2)}%</p>
          </div>
          <div className="flex items-center text-green-400 mt-2">
            <ArrowUpRight size={16} className="mr-1" />
            <span className="text-sm">+0.5%</span>
          </div>
        </GlassCard>
        <GlassCard>
          <div>
            <p className="text-gray-300 text-sm mb-1">Total Yield Earned</p>
            <p className="text-2xl font-bold text-white">${totalYield.toLocaleString()}</p>
          </div>
          <div className="flex items-center text-green-400 mt-2">
            <ArrowUpRight size={16} className="mr-1" />
            <span className="text-sm">+15.3% this month</span>
          </div>
        </GlassCard>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {/* Live Yield Tracking */}
        <GlassCard className="lg:col-span-2">
          <h2 className="text-lg font-semibold text-white mb-4">Live Yield Tracking</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%" className="rounded-xl overflow-hidden">
              <AreaChart data={yieldData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(31, 41, 55, 0.8)",
                    backdropFilter: "blur(4px)",
                    border: "none",
                    borderRadius: "8px",
                  }}
                />
                <Area type="monotone" dataKey="yield" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        {/* Portfolio Allocation */}
        <GlassCard>
          <h2 className="text-lg font-semibold text-white mb-4">Portfolio Allocation</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%" className="rounded-xl overflow-hidden">
              <PieChart>
                <Pie
                  data={portfolioData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {portfolioData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(31, 41, 55, 0.8)",
                    backdropFilter: "blur(4px)",
                    border: "none",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {/* Performance Trends */}
        <GlassCard className="lg:col-span-2">
          <h2 className="text-lg font-semibold text-white mb-4">Performance Trends</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%" className="rounded-xl overflow-hidden">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(31, 41, 55, 0.8)",
                    backdropFilter: "blur(4px)",
                    border: "none",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="returns" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        {/* APY Trend */}
        <GlassCard>
          <h2 className="text-lg font-semibold text-white mb-4">APY Trend</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%" className="rounded-xl overflow-hidden">
              <LineChart data={apyTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(31, 41, 55, 0.8)",
                    backdropFilter: "blur(4px)",
                    border: "none",
                    borderRadius: "8px",
                  }}
                />
                <Line type="monotone" dataKey="apy" stroke="#8B5CF6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </motion.div>

      {/* AI Insights */}
      <GlassCard className="mt-6">
        <h2 className="text-lg font-semibold text-white mb-4">AI Insights</h2>
        <ul className="space-y-2 text-sm">
          <motion.li
            className="flex items-center text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <ArrowUpRight className="text-green-400 mr-2" size={16} />
            Rebalance suggested: Increase SOL allocation by 5% for optimal portfolio distribution.
          </motion.li>
          <motion.li
            className="flex items-center text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <ArrowDownRight className="text-red-400 mr-2" size={16} />
            Risk adjustment: Consider reducing exposure to SRM due to recent market volatility.
          </motion.li>
          <motion.li
            className="flex items-center text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <Percent className="text-blue-400 mr-2" size={16} />
            New opportunity: High-yield farming pool available on Raydium with 18.5% APY.
          </motion.li>
          <motion.li
            className="flex items-center text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <DollarSign className="text-yellow-400 mr-2" size={16} />
            Profit taking: Consider taking profits on RAY position after recent 20% price increase.
          </motion.li>
        </ul>
      </GlassCard>
    </motion.div>
  )
}

