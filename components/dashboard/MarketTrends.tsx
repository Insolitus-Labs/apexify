"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { ArrowUpRight, ArrowDownRight, TrendingUp, DollarSign } from "lucide-react"

const GlassCard = ({ children, className = "", ...props }) => (
  <motion.div
    className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 border border-white border-opacity-20 shadow-lg ${className}`}
    {...props}
  >
    {children}
  </motion.div>
)

const GradientText = ({ children, gradient = "from-blue-400 to-purple-500" }) => (
  <span className={`bg-gradient-to-r ${gradient} text-transparent bg-clip-text`}>{children}</span>
)

export default function MarketTrends() {
  const [trendingProtocols, setTrendingProtocols] = useState([
    { name: "Raydium", apy: "12.5", tvl: "1.2", change: 2.3 },
    { name: "Marinade", apy: "5.8", tvl: "0.8", change: -1.5 },
    { name: "Solend", apy: "8.1", tvl: "0.6", change: 0.7 },
    { name: "Serum", apy: "15.3", tvl: "0.4", change: 3.2 },
  ])

  const [gasFees, setGasFees] = useState([
    { time: "00:00", fee: 0.000005 },
    { time: "04:00", fee: 0.000007 },
    { time: "08:00", fee: 0.00001 },
    { time: "12:00", fee: 0.000008 },
    { time: "16:00", fee: 0.000006 },
    { time: "20:00", fee: 0.000009 },
  ])

  const [yieldFarming, setYieldFarming] = useState([
    { name: "RAY-USDC", apy: "45" },
    { name: "SOL-USDT", apy: "38" },
    { name: "SRM-SOL", apy: "42" },
    { name: "MNDE-USDC", apy: "36" },
  ])

  const [arbitrageOpportunities, setArbitrageOpportunities] = useState([
    { pair: "RAY/USDC", spread: "2.3", exchanges: "Raydium and Serum" },
    { pair: "SOL/USDT", spread: "1.8", exchanges: "Orca and Raydium" },
    { pair: "SRM/SOL", spread: "3.1", exchanges: "Serum and Orca" },
  ])

  const [news, setNews] = useState([
    { title: "Solana Foundation announces $100M developer fund", icon: "dollar-sign" },
    { title: "Raydium launches new concentrated liquidity pools", icon: "dollar-sign" },
    { title: "Marinade Finance reaches $1B in staked SOL", icon: "dollar-sign" },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      // Update trending protocols
      setTrendingProtocols((prev) =>
        prev.map((protocol) => ({
          ...protocol,
          apy: (Number.parseFloat(protocol.apy) + (Math.random() - 0.5)).toFixed(1),
          tvl: (Number.parseFloat(protocol.tvl) + (Math.random() - 0.5) * 0.1).toFixed(1),
          change: Number.parseFloat((protocol.change + (Math.random() - 0.5)).toFixed(1)),
        })),
      )

      // Update gas fees
      setGasFees((prev) => {
        const newFee = Math.max(
          0.000001,
          Number.parseFloat((prev[prev.length - 1].fee + (Math.random() - 0.5) * 0.000002).toFixed(6)),
        )
        return [...prev.slice(1), { time: new Date().toLocaleTimeString(), fee: newFee }]
      })

      // Update yield farming
      setYieldFarming((prev) =>
        prev.map((pool) => ({
          ...pool,
          apy: (Number.parseFloat(pool.apy) + (Math.random() - 0.5) * 2).toFixed(1),
        })),
      )

      // Update arbitrage opportunities
      setArbitrageOpportunities((prev) =>
        prev.map((opp) => ({
          ...opp,
          spread: (Number.parseFloat(opp.spread) + (Math.random() - 0.5)).toFixed(1),
        })),
      )

      // Update news (simulate new news item every 30 seconds)
      if (Math.random() > 0.8) {
        const newNews = {
          title: `New DeFi protocol launches with ${(Math.random() * 100).toFixed(1)}% APY`,
          icon: "dollar-sign",
        }
        setNews((prev) => [newNews, ...prev.slice(0, 2)])
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 h-full overflow-y-auto futuristic-scrollbar"
    >
      <h1 className="text-3xl font-bold text-white mb-8">Market Trends</h1>

      {/* Trending DeFi Protocols */}
      <GlassCard>
        <h2 className="text-xl font-semibold text-white mb-4">
          <GradientText gradient="from-green-400 to-blue-500">Trending DeFi Protocols</GradientText>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {trendingProtocols.map((protocol, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-5 rounded-lg p-4"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                transition: { duration: 0.2 },
              }}
            >
              <h3 className="text-lg font-semibold text-white mb-2">{protocol.name}</h3>
              <p className="text-sm text-gray-300">APY: {protocol.apy}%</p>
              <p className="text-sm text-gray-300">TVL: ${protocol.tvl}B</p>
              <div className={`flex items-center mt-2 ${protocol.change >= 0 ? "text-green-400" : "text-red-400"}`}>
                {protocol.change >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                <span className="ml-1">{Math.abs(protocol.change)}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </GlassCard>

      {/* Solana Gas Fees Tracker */}
      <GlassCard>
        <h2 className="text-xl font-semibold text-white mb-4">
          <GradientText gradient="from-yellow-400 to-orange-500">Solana Gas Fees Tracker</GradientText>
        </h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={gasFees}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(31, 41, 55, 0.8)",
                  border: "none",
                  borderRadius: "8px",
                }}
              />
              <Line type="monotone" dataKey="fee" stroke="#10B981" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </GlassCard>

      {/* Yield Farming Leaderboard */}
      <GlassCard>
        <h2 className="text-xl font-semibold text-white mb-4">
          <GradientText gradient="from-pink-400 to-purple-500">Yield Farming Leaderboard</GradientText>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {yieldFarming.map((pool, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-5 rounded-lg p-4 flex items-center justify-between"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                transition: { duration: 0.2 },
              }}
            >
              <div>
                <h3 className="text-lg font-semibold text-white">{pool.name}</h3>
                <p className="text-sm text-gray-300">APY</p>
              </div>
              <div className="text-2xl font-bold text-green-400">{pool.apy}%</div>
            </motion.div>
          ))}
        </div>
      </GlassCard>

      {/* Arbitrage Opportunities */}
      <GlassCard>
        <h2 className="text-xl font-semibold text-white mb-4">
          <GradientText gradient="from-blue-400 to-green-500">Arbitrage Opportunities</GradientText>
        </h2>
        <ul className="space-y-2 text-white">
          {arbitrageOpportunities.map((opp, index) => (
            <li key={index} className="flex items-center">
              <TrendingUp className="mr-2 text-green-400" size={20} />
              {opp.pair}: {opp.spread}% spread between {opp.exchanges}
            </li>
          ))}
        </ul>
      </GlassCard>

      {/* News & Updates */}
      <GlassCard>
        <h2 className="text-xl font-semibold text-white mb-4">
          <GradientText gradient="from-indigo-400 to-cyan-500">News & Updates</GradientText>
        </h2>
        <ul className="space-y-2 text-white">
          {news.map((item, index) => (
            <li key={index} className="flex items-center">
              <DollarSign className="mr-2 text-blue-400" size={20} />
              {item.title}
            </li>
          ))}
        </ul>
      </GlassCard>

      <style jsx global>{`
        .futuristic-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #3B82F6 #1F2937;
        }

        .futuristic-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .futuristic-scrollbar::-webkit-scrollbar-track {
          background: #1F2937;
          border-radius: 3px;
          box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        }

        .futuristic-scrollbar::-webkit-scrollbar-thumb {
          background-color: #3B82F6;
          border-radius: 3px;
          border: 1px solid #1F2937;
          box-shadow: 0 0 8px rgba(59, 130, 246, 0.5);
        }

        .futuristic-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #60A5FA;
        }

        .futuristic-scrollbar::-webkit-scrollbar-thumb:active {
          background-color: #2563EB;
        }

        @keyframes glow {
          0% {
            box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
          }
          100% {
            box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
          }
        }

        .futuristic-scrollbar::-webkit-scrollbar-thumb {
          animation: glow 2s infinite;
        }
      `}</style>
    </motion.div>
  )
}

