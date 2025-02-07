"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Link2 } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface Protocol {
  name: string
  description: string
  x: number
  y: number
  color: string
}

const protocols: Protocol[] = [
  { name: "Raydium", description: "AMM & yield farming powerhouse", x: 70, y: 20, color: "#1fcff1" },
  { name: "Orca", description: "High-efficiency DEX with concentrated liquidity", x: 80, y: 60, color: "#10b981" },
  { name: "Solend", description: "Algorithmic money market for passive income", x: 20, y: 70, color: "#9945ff" },
  { name: "Marinade", description: "Liquid staking for optimal capital utilization", x: 30, y: 30, color: "#f97316" },
  { name: "Serum", description: "Decentralized exchange (DEX) and ecosystem", x: 70, y: 80, color: "#3b82f6" },
  {
    name: "Mango Markets",
    description: "Decentralized, cross-margin trading platform",
    x: 10,
    y: 50,
    color: "#f59e0b",
  },
]

export default function Integrations() {
  const [hoveredProtocol, setHoveredProtocol] = useState<string | null>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeProtocol, setActiveProtocol] = useState<number | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50])

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    const interval = setInterval(() => {
      setActiveProtocol(Math.floor(Math.random() * protocols.length))
    }, 1500)

    return () => {
      window.removeEventListener("resize", updateDimensions)
      clearInterval(interval)
    }
  }, [])

  const centerX = dimensions.width / 2
  const centerY = dimensions.height / 2

  return (
    <section className="pt-8 pb-16 px-4" ref={sectionRef}>
      <motion.h2 style={{ opacity, y }} className="text-5xl font-bold mb-16 text-center text-white text-shadow">
        Integrations & Supported Protocols
      </motion.h2>
      <div className="container mx-auto">
        <motion.div
          style={{ opacity, y }}
          className="rounded-[10px] border border-white/[0.18] relative group"
          initial={{ background: "rgba(93, 93, 93, 0.1)" }}
          animate={{ background: "rgba(93, 93, 93, 0.1)" }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]"
            style={{
              "--size": "300",
              "--duration": "10s",
              "--anchor": "90",
              "--border-width": "1.5",
              "--color-from": "#ffaa40",
              "--color-to": "#9c40ff",
              "--delay": "-0s",
            }}
          />
          <div className="p-8">
            <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-12">
              {/* Network Visualization */}
              <motion.div
                ref={containerRef}
                className="lg:w-1/2 relative h-[450px]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0 }}>
                  {protocols.map((protocol, index) => (
                    <motion.line
                      key={`line-${index}`}
                      x1={`${protocol.x}%`}
                      y1={`${protocol.y}%`}
                      x2="50%"
                      y2="50%"
                      stroke="#4B5563"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  ))}
                  {protocols.map((protocol, index) => (
                    <motion.line
                      key={`energy-${index}`}
                      x1={`${protocol.x}%`}
                      y1={`${protocol.y}%`}
                      x2="50%"
                      y2="50%"
                      stroke="url(#energyGradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={
                        activeProtocol === index && isInView
                          ? {
                              pathLength: [0, 1],
                              opacity: [0, 1, 0],
                            }
                          : {}
                      }
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                  ))}
                  <defs>
                    <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ffaa40">
                        <animate attributeName="offset" values="0;1" dur="1.5s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="100%" stopColor="#9c40ff">
                        <animate attributeName="offset" values="0;1" dur="1.5s" repeatCount="indefinite" />
                      </stop>
                    </linearGradient>
                  </defs>
                </svg>

                {/* Pulsing Effect for Protocols */}
                {protocols.map((protocol, index) => (
                  <motion.div
                    key={`pulse-${index}`}
                    style={{
                      position: "absolute",
                      left: `calc(${protocol.x}% - 25px)`,
                      top: `calc(${protocol.y}% - 25px)`,
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: protocol.color,
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.1, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  />
                ))}

                {/* Center Node */}
                <div
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{ zIndex: 3 }}
                >
                  <motion.div
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <span className="text-4xl font-bold text-white">A</span>
                  </motion.div>
                </div>

                {/* Protocol Nodes */}
                {protocols.map((protocol, index) => (
                  <motion.div
                    key={`node-${index}`}
                    className="absolute"
                    style={{
                      left: `calc(${protocol.x}% - 25px)`,
                      top: `calc(${protocol.y}% - 25px)`,
                      zIndex: 3,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="relative">
                      <motion.div
                        className={`w-[50px] h-[50px] rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center cursor-pointer overflow-hidden transition-opacity duration-300 ${
                          hoveredProtocol && hoveredProtocol !== protocol.name ? "opacity-50" : "opacity-100"
                        }`}
                        whileHover={{ scale: 1.1 }}
                        onHoverStart={() => setHoveredProtocol(protocol.name)}
                        onHoverEnd={() => setHoveredProtocol(null)}
                      >
                        <img
                          src={
                            protocol.name === "Raydium"
                              ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/raydium.jpg-jjBuGEaPvJXiJGXoyytB8Vh0inITki.jpeg"
                              : protocol.name === "Orca"
                                ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Orca.jpg-X7cZwTbSAeZi5Mm0yanqhqyxyAGxl6.jpeg"
                                : protocol.name === "Solend"
                                  ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/solend.jpg-9MmXpNmvmkgomrVAN6Uhm1DEBeAhWV.jpeg"
                                  : protocol.name === "Marinade"
                                    ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marinade.jpg-O7p0Ov2d4tuWmPKhBLUXpQWZbsyLnk.jpeg"
                                    : protocol.name === "Serum"
                                      ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/serum.jpg-2kkk0Zw0e2A5o3SsYLAJv83UJZDVxS.jpeg"
                                      : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mango%20market.jpg-QesE4IWVDNIXHfzzI6ULE2Fko2e2zc.jpeg"
                          }
                          alt={protocol.name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </motion.div>

                      {/* Protocol Info Tooltip */}
                      <motion.div
                        className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full top-0 mt-4 w-48 p-3 bg-black/90 backdrop-blur-md rounded-lg pointer-events-none"
                        style={{ zIndex: 1000 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: hoveredProtocol === protocol.name ? 1 : 0,
                          y: hoveredProtocol === protocol.name ? 0 : 10,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="text-white font-semibold mb-1">{protocol.name}</p>
                        <p className="text-gray-300 text-sm">{protocol.description}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Apexify Content */}
              <motion.div
                className="lg:w-1/2 space-y-6"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                  <Link2 className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-5xl font-bold text-white text-shadow">Apexify: Unifying DeFi</h2>
                <p className="text-xl text-gray-300">
                  Experience the power of AI-driven yield optimization across Solana's diverse DeFi landscape. Apexify
                  seamlessly integrates with leading protocols, maximizing your returns while minimizing risk through
                  intelligent, automated strategies.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      <style jsx>{`
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
        @keyframes border-beam {
          from {
            offset-distance: 0%;
          }
          to {
            offset-distance: 100%;
          }
        }
      `}</style>
    </section>
  )
}

