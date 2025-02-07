import { AnimatePresence, motion } from "framer-motion"
import DashboardHome from "./DashboardHome"
import MyPortfolio from "./MyPortfolio"
import MarketTrends from "./MarketTrends"
import Settings from "./Settings"
import SupportDocs from "./SupportDocs"

interface DashboardContentProps {
  activeTab: string
}

export default function DashboardContent({ activeTab }: DashboardContentProps) {
  return (
    <div className="flex-1 p-8 bg-[#0D0D0D] overflow-y-auto h-[80vh] w-full futuristic-scrollbar">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "dashboard" && <DashboardHome />}
          {activeTab === "portfolio" && <MyPortfolio />}
          {activeTab === "market" && <MarketTrends />}
          {activeTab === "settings" && <Settings />}
          {activeTab === "support" && <SupportDocs />}
        </motion.div>
      </AnimatePresence>
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
    </div>
  )
}

