"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { GradientButton } from "./MyPortfolio"
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

export default function SupportDocs() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({ title: "", message: "" })

  const handleComingSoon = (feature: string, details: string) => {
    setModalContent({ title: "Coming Soon", message: `${feature} is coming soon! ${details}` })
    setIsModalOpen(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 h-full overflow-y-auto futuristic-scrollbar"
    >
      <h1 className="text-3xl font-bold text-white mb-8">Support & Docs</h1>

      {/* Quick Start Guide */}
      <GlassCard>
        <h2 className="text-xl font-semibold mb-4">
          <GradientText gradient="from-green-400 to-blue-500">Quick Start Guide</GradientText>
        </h2>
        <ol className="list-decimal list-inside text-white space-y-2">
          <li>Connect your wallet</li>
          <li>Set your risk preferences</li>
          <li>Deposit funds into Apexify</li>
          <li>Let our AI optimize your yields</li>
          <li>Monitor your performance in real-time</li>
        </ol>
      </GlassCard>

      {/* FAQ Section */}
      <GlassCard>
        <h2 className="text-xl font-semibold mb-4">
          <GradientText gradient="from-purple-400 to-pink-500">Frequently Asked Questions</GradientText>
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-white font-medium">What are Apexify's fees?</h3>
            <p className="text-gray-300">
              Apexify charges a 2% performance fee on profits. There are no management fees.
            </p>
          </div>
          <div>
            <h3 className="text-white font-medium">How does Apexify ensure security?</h3>
            <p className="text-gray-300">
              We use non-custodial smart contracts, regular audits, and implement best practices in DeFi security.
            </p>
          </div>
          <div>
            <h3 className="text-white font-medium">How does the AI strategy work?</h3>
            <p className="text-gray-300">
              Our AI constantly analyzes market conditions, yield opportunities, and risk factors to optimize your
              portfolio allocation.
            </p>
          </div>
        </div>
      </GlassCard>

      {/* API Access */}
      <GlassCard>
        <h2 className="text-xl font-semibold mb-4">
          <GradientText gradient="from-yellow-400 to-orange-500">API Access</GradientText>
        </h2>
        <p className="text-white mb-4">Integrate Apexify into your own applications with our API.</p>
        <GradientButton
          gradient="from-yellow-400 to-orange-500"
          onClick={() =>
            handleComingSoon(
              "API Documentation",
              "We're finalizing our API documentation to help developers integrate Apexify seamlessly.",
            )
          }
        >
          View API Documentation
        </GradientButton>
      </GlassCard>

      {/* Live Chat Support */}
      <GlassCard>
        <h2 className="text-xl font-semibold mb-4">
          <GradientText gradient="from-green-400 to-blue-500">Live Chat Support</GradientText>
        </h2>
        <p className="text-white mb-4">Need help? Our support team is available 24/7.</p>
        <GradientButton
          gradient="from-green-400 to-blue-500"
          onClick={() =>
            handleComingSoon(
              "Live Chat",
              "Our live chat support system is being set up to provide you with instant assistance.",
            )
          }
        >
          Start Live Chat
        </GradientButton>
      </GlassCard>

      {/* Community Links */}
      <GlassCard>
        <h2 className="text-xl font-semibold mb-4">
          <GradientText gradient="from-blue-400 to-purple-500">Join Our Community</GradientText>
        </h2>
        <div className="space-x-4">
          <GradientButton
            gradient="from-indigo-400 to-cyan-400"
            className="text-sm"
            onClick={() =>
              handleComingSoon(
                "Discord Community",
                "Our Discord server is being set up. Join us for discussions, updates, and community events.",
              )
            }
          >
            Discord
          </GradientButton>
          <GradientButton
            gradient="from-blue-400 to-cyan-400"
            className="text-sm"
            onClick={() =>
              handleComingSoon(
                "Twitter Updates",
                "Follow us on Twitter for real-time updates, insights, and announcements.",
              )
            }
          >
            Twitter
          </GradientButton>
          <GradientButton
            gradient="from-purple-400 to-pink-400"
            className="text-sm"
            onClick={() =>
              handleComingSoon(
                "Governance Forum",
                "Participate in shaping the future of Apexify through our upcoming governance platform.",
              )
            }
          >
            Governance Forum
          </GradientButton>
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

