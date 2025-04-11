import { useEffect } from "react"
import { Suspense, lazy } from "react"
import Head from "next/head"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SkeletonLoader from "../components/SkeletonLoader"
import ErrorBoundary from "../components/ErrorBoundary"

const DynamicHero = dynamic(() => import("../components/Hero"), { ssr: false })
const DynamicDashboard = dynamic(() => import("../components/Dashboard"), { ssr: false })
const DynamicWhyApexify = lazy(() => import("../components/WhyApexify"))
const DynamicHowItWorks = lazy(() => import("../components/HowItWorks"))
const DynamicSmartDeFiEngine = dynamic(() => import("../components/SmartDeFiEngine"), { ssr: false })
const LazyIntegrations = lazy(() => import("../components/Integrations"))
const LazyFAQs = lazy(() => import("../components/FAQs"))

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
      const restoreScroll = () => window.scrollTo(0, 0)
      router.events.on("routeChangeStart", restoreScroll)
      return () => router.events.off("routeChangeStart", restoreScroll)
    }
  }, [router])

  return (
    <>
      <Head>
        <title>Apexify - Next-Gen Smart DeFi Solutions</title>
        <meta name="description" content="Apexify offers the latest DeFi solutions for efficient yield farming on Solana." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Apexify - Next-Gen Smart DeFi Solutions" />
        <meta property="og:description" content="Automate and optimize your yield farming with Apexify." />
        <meta property="og:image" content="https://example.com/og-image.png" />
      </Head>
      <main className="min-h-screen" role="main">
        <Header />
        <ErrorBoundary fallback={<div role="alert">Something went wrong loading this section.</div>}>
          <Suspense fallback={<SkeletonLoader />}>
            <DynamicHero aria-label="Hero section" />
            <DynamicDashboard />
            <DynamicWhyApexify />
            <DynamicHowItWorks />
            <DynamicSmartDeFiEngine />
            <LazyIntegrations />
            <LazyFAQs />
          </Suspense>
        </ErrorBoundary>
        <Footer />
      </main>
    </>
  )
}
