import { Suspense } from "react"
import Head from "next/head"
import dynamic from "next/dynamic"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SkeletonLoader from "../components/SkeletonLoader"

const DynamicHero = dynamic(() => import("../components/Hero"), { ssr: false })
const DynamicDashboard = dynamic(() => import("../components/Dashboard"), { ssr: false })
const DynamicWhyApexify = dynamic(() => import("../components/WhyApexify"), { ssr: false })
const DynamicHowItWorks = dynamic(() => import("../components/HowItWorks"), { ssr: false })
const DynamicSmartDeFiEngine = dynamic(() => import("../components/SmartDeFiEngine"), { ssr: false })
const DynamicIntegrations = dynamic(() => import("../components/Integrations"), { ssr: false })
const DynamicFAQs = dynamic(() => import("../components/FAQs"), { ssr: false })

export default function Home() {
  return (
    <>
      <Head>
        <title>Apexify - Next-Gen Smart DeFi Solutions</title>
        <meta name="description" content="Apexify is the ultimate Smart DeFi platform with advanced automation, security, and seamless integrations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen">
        <Header />
        <Suspense fallback={<SkeletonLoader />}>
          <DynamicHero />
        </Suspense>
        <DynamicDashboard />
        <Suspense fallback={<SkeletonLoader />}>
          <DynamicWhyApexify />
          <DynamicHowItWorks />
          <DynamicSmartDeFiEngine />
          <DynamicIntegrations />
          <DynamicFAQs />
        </Suspense>
        <Footer />
      </main>
    </>
  )
}
