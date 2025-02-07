import { Home, Briefcase, TrendingUp, Settings, HelpCircle } from "lucide-react"

const sidebarItems = [
  { id: "dashboard", icon: Home, label: "Dashboard" },
  { id: "portfolio", icon: Briefcase, label: "My Portfolio" },
  { id: "market", icon: TrendingUp, label: "Market Trends" },
  { id: "settings", icon: Settings, label: "Settings" },
  { id: "support", icon: HelpCircle, label: "Support & Docs" },
]

interface DashboardSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  isCollapsed: boolean
}

export default function DashboardSidebar({ activeTab, setActiveTab, isCollapsed }: DashboardSidebarProps) {
  return (
    <div
      className={`bg-opacity-50 backdrop-filter backdrop-blur-sm p-4 border-r border-gray-700 transition-all duration-300 ${
        isCollapsed ? "w-20 min-w-[5rem] max-w-[5rem]" : "w-72 min-w-[18rem] max-w-[18rem]"
      }`}
    >
      <div className={`flex items-center justify-between mb-8 ${isCollapsed ? "flex-col" : ""}`}>
        <div className="flex items-center">
          <div className="h-8 w-8 relative mr-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apexify.jpg-B3vJz0v2kpg4SEucZOMbhmqjVzIx6G.jpeg"
              alt="Apexify Logo"
              className="object-contain"
            />
          </div>
          {!isCollapsed && <span className="text-white font-medium">Apexify</span>}
        </div>
        {!isCollapsed && <span className="px-2 py-1 bg-[#cccccc] text-xs text-gray-700 rounded-[5px]">BETA</span>}
      </div>
      <div className="mb-8">
        {!isCollapsed && <h3 className="text-sm font-semibold text-gray-400 mb-2">Menu</h3>}
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            className={`flex items-center w-full p-2 mb-1 rounded-lg transition-colors ${
              activeTab === item.id
                ? "bg-white bg-opacity-10 text-white"
                : "text-gray-400 hover:bg-white hover:bg-opacity-5"
            } ${isCollapsed ? "justify-center" : "justify-start"} rounded-xl`}
            onClick={() => setActiveTab(item.id)}
          >
            <item.icon className={isCollapsed ? "" : "mr-3"} size={18} />
            {!isCollapsed && <span className="truncate">{item.label}</span>}
          </button>
        ))}
      </div>
    </div>
  )
}

