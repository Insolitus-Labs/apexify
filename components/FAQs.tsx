"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useState, useRef } from "react"

const faqs = [
  {
    question: "How does Apexify ensure security?",
    answer:
      "Apexify employs state-of-the-art security measures, including smart contract audits, non-custodial architecture, and continuous monitoring to ensure the safety of your assets.",
  },
  {
    question: "What fees does Apexify charge?",
    answer:
      "Apexify operates on a performance-based fee structure. We charge a small percentage of the profits generated, ensuring our interests are aligned with yours. There are no hidden costs or management fees.",
  },
  {
    question: "Is there a minimum deposit?",
    answer:
      "No, Apexify is designed to be accessible to all. You can start with any amount you're comfortable with, allowing you to test our platform and grow your investment at your own pace.",
  },
  {
    question: "How does the AI strategy work?",
    answer:
      "Our AI continuously analyzes market data, identifies optimal yield opportunities, and automatically allocates assets to maximize returns while managing risk. It adapts in real-time to changing market conditions.",
  },
  {
    question: "Can I withdraw my funds at any time?",
    answer:
      "Yes, Apexify offers full liquidity. You can withdraw your funds at any time without penalties. However, for optimal results, we recommend allowing the AI sufficient time to execute its strategies.",
  },
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50])

  return (
    <section id="faqs" className="py-24 px-4" ref={sectionRef}>
      <div className="container mx-auto">
        <motion.h2 style={{ opacity, y }} className="text-5xl font-bold mb-16 text-center text-white">
          Frequently Asked Questions
        </motion.h2>
        <div className="container mx-auto">
          <motion.div
            style={{ opacity, y }}
            className="rounded-[10px] border border-white/[0.18] relative group overflow-hidden"
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
            <div className="p-8 space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.button
                    className="flex justify-between items-center w-full text-left p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-xl font-medium text-white">{faq.question}</span>
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-white" />
                    ) : (
                      <Plus className="w-6 h-6 text-white" />
                    )}
                  </motion.button>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 p-4 bg-white/5 rounded-lg"
                    >
                      <p className="text-gray-300">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

