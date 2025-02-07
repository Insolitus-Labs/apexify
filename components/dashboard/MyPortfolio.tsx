"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Switch } from "@/components/ui/switch"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import Modal from "../Modal"

const GlassCard = ({ children, className = "", noHover = false, ...props }) => (
  <motion.div
    className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 shadow-lg ${className}`}
    whileHover={noHover ? {} : { scale: 1.02, transition: { duration: 0.2 } }}
    {...props}
  >
    {children}
  </motion.div>
)

const GradientButton = ({ children, className = "", gradient = "from-blue-500 to-purple-600", onClick, ...props }) => (
  <button
    className={`px-4 py-2 rounded-xl text-white font-semibold transition-all duration-300 ease-in-out bg-gradient-to-r ${gradient} hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
)

export default function MyPortfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({ title: "", message: "" })
  const [assets, setAssets] = useState([
    { name: "SOL", protocol: "Marinade", balance: "100", value: "10000", apy: "5.2", risk: "Low", change: 2.3 },
    { name: "USDC", protocol: "Solend", balance: "5000", value: "5000", apy: "8.1", risk: "Low", change: 1.5 },
    { name: "RAY", protocol: "Raydium", balance: "1000", value: "3000", apy: "12.5", risk: "Medium", change: -1.8 },
    { name: "SRM", protocol: "Serum", balance: "2000", value: "2000", apy: "15.3", risk: "High", change: 3.7 },
  ])
  const [totalPortfolioValue, setTotalPortfolioValue] = useState(20000)
  const [totalYieldEarned, setTotalYieldEarned] = useState(1250)
  const [portfolioChange, setPortfolioChange] = useState(5.2)
  const [yieldChange, setYieldChange] = useState(2.8)

  const handleComingSoon = (feature: string, details: string) => {
    setModalContent({ title: "Coming Soon", message: `${feature} is coming soon! ${details}` })
    setIsModalOpen(true)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setAssets((prevAssets) =>
        prevAssets.map((asset) => ({
          ...asset,
          value: (Number.parseFloat(asset.value) + (Math.random() - 0.5) * 100).toFixed(2),
          apy: (Number.parseFloat(asset.apy) + (Math.random() - 0.5)).toFixed(1),
          change: Number.parseFloat((asset.change + (Math.random() - 0.5)).toFixed(1)),
        })),
      )

      setTotalPortfolioValue((prev) => Number.parseFloat((prev + (Math.random() - 0.5) * 500).toFixed(2)))
      setTotalYieldEarned((prev) => Number.parseFloat((prev + Math.random() * 10).toFixed(2)))
      setPortfolioChange((prev) => Number.parseFloat((prev + (Math.random() - 0.5)).toFixed(1)))
      setYieldChange((prev) => Number.parseFloat((prev + (Math.random() - 0.5)).toFixed(1)))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-6">
      <h1 className="text-3xl font-bold text-white mb-8">My Portfolio</h1>

      {/* Asset Breakdown */}
      <GlassCard noHover>
        <h2 className="text-xl font-semibold text-white mb-4">Asset Breakdown</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-white">
            <thead>
              <tr className="text-left border-b border-gray-700">
                <th className="pb-2">Asset</th>
                <th className="pb-2">Protocol</th>
                <th className="pb-2">Balance</th>
                <th className="pb-2">Value</th>
                <th className="pb-2">APY</th>
                <th className="pb-2">Risk</th>
                <th className="pb-2">24h Change</th>
                <th className="pb-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset, index) => (
                <tr key={index} className="border-b border-gray-700 last:border-b-0">
                  <td className="py-3">{asset.name}</td>
                  <td className="py-3">{asset.protocol}</td>
                  <td className="py-3">{asset.balance}</td>
                  <td className="py-3">${Number.parseFloat(asset.value).toLocaleString()}</td>
                  <td className="py-3 flex items-center">
                    {asset.apy}%
                    <ArrowUpRight className="ml-1 text-green-400" size={14} />
                  </td>
                  <td className="py-3">{asset.risk}</td>
                  <td className={`py-3 ${asset.change >= 0 ? "text-green-400" : "text-red-400"}`}>
                    {asset.change >= 0 ? "+" : ""}
                    {asset.change}%
                  </td>
                  <td className="py-3">
                    <GradientButton
                      className="mr-2 text-xs"
                      gradient="from-green-400 to-blue-500"
                      onClick={() =>
                        handleComingSoon(
                          "Deposit",
                          `Soon you'll be able to deposit ${asset.name} directly from your wallet to start earning yield.`,
                        )
                      }
                    >
                      Deposit
                    </GradientButton>
                    <GradientButton
                      className="text-xs"
                      gradient="from-red-500 to-pink-600"
                      onClick={() =>
                        handleComingSoon(
                          "Withdraw",
                          `Withdrawal functionality for ${asset.name} is being implemented with enhanced security measures.`,
                        )
                      }
                    >
                      Withdraw
                    </GradientButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>

      {/* Auto-Compound Status */}
      <GlassCard noHover>
        <h2 className="text-xl font-semibold text-white mb-4">Auto-Compound Status</h2>
        <div className="flex items-center">
          <Switch
            id="auto-compound"
            onCheckedChange={() =>
              handleComingSoon(
                "Auto-Compound",
                "Our AI-driven auto-compounding feature is being fine-tuned to maximize your yields automatically.",
              )
            }
          />
          <label htmlFor="auto-compound" className="ml-2 text-white">
            Enable AI-driven compounding
          </label>
        </div>
      </GlassCard>

      {/* Portfolio Performance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard>
          <h2 className="text-xl font-semibold text-white mb-4">Total Portfolio Value</h2>
          <p className="text-3xl font-bold text-white">${totalPortfolioValue.toLocaleString()}</p>
          <div className={`flex items-center ${portfolioChange >= 0 ? "text-green-400" : "text-red-400"} mt-2`}>
            {portfolioChange >= 0 ? (
              <ArrowUpRight size={16} className="mr-1" />
            ) : (
              <ArrowDownRight size={16} className="mr-1" />
            )}
            <span>
              {portfolioChange >= 0 ? "+" : ""}
              {portfolioChange}% (24h)
            </span>
          </div>
        </GlassCard>
        <GlassCard>
          <h2 className="text-xl font-semibold text-white mb-4">Total Yield Earned</h2>
          <p className="text-3xl font-bold text-white">${totalYieldEarned.toLocaleString()}</p>
          <div className={`flex items-center ${yieldChange >= 0 ? "text-green-400" : "text-red-400"} mt-2`}>
            {yieldChange >= 0 ? (
              <ArrowUpRight size={16} className="mr-1" />
            ) : (
              <ArrowDownRight size={16} className="mr-1" />
            )}
            <span>
              {yieldChange >= 0 ? "+" : ""}
              {yieldChange}% (24h)
            </span>
          </div>
        </GlassCard>
      </div>

      {/* Rebalance Action */}
      <GlassCard noHover>
        <h2 className="text-xl font-semibold text-white mb-4">Portfolio Actions</h2>
        <GradientButton
          gradient="from-purple-500 to-indigo-600"
          onClick={() =>
            handleComingSoon(
              "Rebalance Portfolio",
              "Our AI is being trained to provide optimal portfolio rebalancing suggestions based on market conditions and your risk profile.",
            )
          }
        >
          Rebalance Portfolio
        </GradientButton>
      </GlassCard>

      {/* Risk Assessment */}
      <GlassCard>
        <h2 className="text-xl font-semibold text-white mb-4">Risk Assessment</h2>
        <div className="flex items-center">
          <div className="w-2/3 bg-gray-700 rounded-full h-4">
            <div
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-4 rounded-full"
              style={{ width: "60%" }}
            ></div>
          </div>
          <span className="ml-4 text-white">Moderate</span>
        </div>
        <p className="text-gray-300 mt-2">
          Your portfolio has a balanced risk profile. Consider diversifying further to reduce risk.
        </p>
      </GlassCard>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={modalContent.title}>
        <p>{modalContent.message}</p>
      </Modal>
    </motion.div>
  )
}

export { GradientButton }

