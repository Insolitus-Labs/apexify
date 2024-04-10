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
const DynamicWhyApexify = dynamic(() => import("../components/WhyApexify"), { ssr: false })
const DynamicHowItWorks = dynamic(() => import("../components/HowItWorks"), { ssr: false })
const DynamicSmartDeFiEngine = dynamic(() => import("../components/SmartDeFiEngine"), { ssr: false })

// Load these components later to improve FCP
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
        <meta name="description" content="Apexify is the ultimate Smart DeFi platform with advanced automation, security, and seamless integrations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen">
        <Header />
        <ErrorBoundary fallback={<div>Something went wrong loading this section.</div>}>
          <Suspense fallback={<SkeletonLoader />}>
            <DynamicHero />
          </Suspense>
          <DynamicDashboard />
          <Suspense fallback={<SkeletonLoader />}>
            <DynamicWhyApexify />
            <DynamicHowItWorks />
            <DynamicSmartDeFiEngine />
          </Suspense>
        </ErrorBoundary>
        <Suspense fallback={<SkeletonLoader />}>
          <LazyIntegrations />
          <LazyFAQs />
        </Suspense>
        <Footer />
      </main>
    </>
  )
}
