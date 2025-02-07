"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Wallet, Shield, Zap, Bell, Lock } from "lucide-react"
import Modal from "../Modal"

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

const GradientButton = ({ children, className = "", gradient = "from-blue-500 to-purple-600", onClick, ...props }) => (
  <button
    className={`px-4 py-2 rounded-full text-white font-semibold transition-all duration-300 ease-in-out bg-gradient-to-r ${gradient} hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
)

const ComingSoonSwitch = ({ id, label, onToggle }) => (
  <div className="flex items-center">
    <Switch id={id} onCheckedChange={onToggle} />
    <label htmlFor={id} className="ml-2 text-white">
      {label}
    </label>
  </div>
)

export default function Settings() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({ title: "", message: "" })

  const handleComingSoon = (feature: string, details: string) => {
    openModal("Coming Soon", `${feature} is coming soon! ${details}`)
  }

  const openModal = (title: string, message: string) => {
    setModalContent({ title, message })
    setIsModalOpen(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 h-full overflow-y-auto futuristic-scrollbar"
    >
      <h1 className="text-3xl font-bold text-white mb-8">Settings</h1>

      {/* Wallet Management */}
      <GlassCard>
        <h2 className="text-xl font-semibold mb-4">
          <GradientText gradient="from-green-400 to-blue-500">Wallet Management</GradientText>
        </h2>
        <div className="flex items-center space-x-4">
          <GradientButton
            gradient="from-green-400 to-blue-500"
            onClick={() =>
              handleComingSoon(
                "Connect Wallet",
                "Soon you'll be able to seamlessly connect your Solana wallet to Apexify.",
              )
            }
          >
            <Wallet className="inline-block mr-2" size={16} />
            Connect Wallet
          </GradientButton>
          <GradientButton
            gradient="from-red-500 to-pink-500"
            onClick={() =>
              handleComingSoon(
                "Disconnect Wallet",
                "Wallet disconnection feature is in development for enhanced security and flexibility.",
              )
            }
          >
            <Wallet className="inline-block mr-2" size={16} />
            Disconnect Wallet
          </GradientButton>
        </div>
      </GlassCard>

      {/* AI Strategy Preferences */}
      <GlassCard>
        <h2 className="text-xl font-semibold mb-4">
          <GradientText gradient="from-purple-400 to-pink-500">AI Strategy Preferences</GradientText>
        </h2>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="risk-tolerance">
            Risk Tolerance
          </label>
          <Select
            onValueChange={() =>
              handleComingSoon(
                "Risk Tolerance Selection",
                "We're fine-tuning our AI to offer personalized risk management strategies.",
              )
            }
          >
            <SelectTrigger id="risk-tolerance" className="w-full bg-white bg-opacity-10 border-white border-opacity-20">
              <SelectValue placeholder="Select risk tolerance" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </GlassCard>

      {/* Auto-Compound Settings */}
      <GlassCard>
        <h2 className="text-xl font-semibold mb-4">
          <GradientText gradient="from-yellow-400 to-orange-500">Auto-Compound Settings</GradientText>
        </h2>
        <div className="flex items-center mb-4">
          <ComingSoonSwitch
            id="auto-compound"
            label="Enable auto-compounding"
            onToggle={() =>
              handleComingSoon(
                "Auto-compounding",
                "Our AI-driven auto-compounding feature will maximize your yields automatically.",
              )
            }
          />
        </div>
        <div>
          <label className="block text-white mb-2" htmlFor="compound-frequency">
            Compounding Frequency
          </label>
          <Select
            onValueChange={() =>
              handleComingSoon(
                "Compounding Frequency Selection",
                "You'll soon be able to customize your compounding schedule for optimal returns.",
              )
            }
          >
            <SelectTrigger
              id="compound-frequency"
              className="w-full bg-white bg-opacity-10 border-white border-opacity-20"
            >
              <SelectValue placeholder="Select frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </GlassCard>

      {/* Notification Preferences */}
      <GlassCard>
        <h2 className="text-xl font-semibold mb-4">
          <GradientText gradient="from-blue-400 to-cyan-500">Notification Preferences</GradientText>
        </h2>
        <div className="space-y-4">
          <ComingSoonSwitch
            id="yield-alerts"
            label={
              <>
                <Zap className="inline-block mr-2" size={16} />
                Yield change alerts
              </>
            }
            onToggle={() =>
              handleComingSoon(
                "Yield Change Alerts",
                "Stay informed about significant changes in your portfolio's yield performance.",
              )
            }
          />
          <ComingSoonSwitch
            id="risk-alerts"
            label={
              <>
                <Shield className="inline-block mr-2" size={16} />
                Risk assessment alerts
              </>
            }
            onToggle={() =>
              handleComingSoon(
                "Risk Assessment Alerts",
                "Receive timely notifications about changes in your portfolio's risk profile.",
              )
            }
          />
          <ComingSoonSwitch
            id="rebalance-alerts"
            label={
              <>
                <Bell className="inline-block mr-2" size={16} />
                AI rebalance alerts
              </>
            }
            onToggle={() =>
              handleComingSoon(
                "AI Rebalance Alerts",
                "Get notified when our AI suggests portfolio rebalancing for optimal performance.",
              )
            }
          />
        </div>
      </GlassCard>

      {/* Security Settings */}
      <GlassCard>
        <h2 className="text-xl font-semibold mb-4">
          <GradientText gradient="from-red-400 to-yellow-500">Security Settings</GradientText>
        </h2>
        <div className="space-y-4">
          <div>
            <GradientButton
              gradient="from-green-400 to-blue-500"
              onClick={() =>
                handleComingSoon(
                  "2FA",
                  "Enhanced security with Two-Factor Authentication is on its way to protect your assets.",
                )
              }
            >
              <Lock className="inline-block mr-2" size={16} />
              Enable 2FA
            </GradientButton>
          </div>
          <div>
            <GradientButton
              gradient="from-yellow-400 to-orange-500"
              onClick={() =>
                handleComingSoon(
                  "Withdrawal Whitelist",
                  "Soon you'll be able to manage a whitelist of approved withdrawal addresses for extra security.",
                )
              }
            >
              <Shield className="inline-block mr-2" size={16} />
              Manage Withdrawal Whitelist
            </GradientButton>
          </div>
        </div>
      </GlassCard>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={modalContent.title}>
        <p>{modalContent.message}</p>
      </Modal>

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

