"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, A11y } from "swiper/modules"
import { useRef, useState } from "react"
import { Brain, Zap, Shield, Rocket, ArrowRight } from "lucide-react"
import type React from "react" // Added import for React

// Import Swiper styles
import "swiper/css"
import "swiper/css/autoplay"

const features = [
  {
    title: "AI-Powered Autonomy",
    description: "Our intelligent agent continuously rebalances your portfolio for optimal yield.",
    icon: Brain,
  },
  {
    title: "Real-Time Optimization",
    description: "Powered by real-time Solana DeFi data for instant execution.",
    icon: Zap,
  },
  {
    title: "Auto-Risk Management",
    description: "Dynamically adjusts exposure to mitigate market volatility.",
    icon: Shield,
  },
  {
    title: "Frictionless Solana Performance",
    description: "Leverages Solana's ultra-fast transactions to maximize arbitrage and APY.",
    icon: Rocket,
  },
]

export default function WhyApexify() {
  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [(index) => index * 100, (index) => (index + 1) * 100], [0, 1])
  const y = useTransform(scrollY, [(index) => index * 100, (index) => (index + 1) * 100], [50, 0])

  const handleLearnMore = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const howItWorksSection = document.getElementById("how-it-works")
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: "smooth" })
    }
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop()
    }
  }

  return (
    <section id="why-apexify" className="py-16 px-4 mt-12" ref={sectionRef}>
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Why Apexify?
        </motion.h2>
        <Swiper
          modules={[Autoplay, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="why-apexify-swiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <motion.div
                  key={index}
                  className={`relative overflow-hidden rounded-xl backdrop-blur-md bg-white/10 border border-white/20 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group h-full ${
                    isActive
                      ? "border-t-2 border-b-2 border-blue-500 bg-gradient-to-br from-blue-500/30 to-purple-500/30"
                      : ""
                  }`}
                  style={{ opacity: opacity[index], y: y[index] }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <feature.icon className="w-10 h-10 mr-4 text-blue-400" />
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 flex-grow mb-4">{feature.description}</p>
                    <a
                      href="#how-it-works"
                      className="flex items-center text-blue-300 group-hover:text-blue-200 transition-colors duration-300 cursor-pointer"
                      onClick={handleLearnMore}
                    >
                      <span className="mr-2">Learn more</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style jsx global>{`
        .why-apexify-swiper {
          padding-bottom: 30px;
        }
        .why-apexify-swiper .swiper-slide {
          height: auto;
          transition: transform 0.3s;
        }
        .why-apexify-swiper .swiper-slide-active {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  )
}

