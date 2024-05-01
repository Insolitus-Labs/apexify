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
      </Head>
      <main className="min-h-screen" role="main">
        <Header />
        <ErrorBoundary fallback={<div role="alert">Something went wrong loading this section.</div>}>
          <Suspense fallback={<SkeletonLoader />}>
            <DynamicHero aria-label="Hero section" />
          </Suspense>
        </ErrorBoundary>
        <Footer />
      </main>
    </>
  )
}
