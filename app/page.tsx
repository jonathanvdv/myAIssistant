import { Nav } from '@/components/nav'
import Hero from '@/components/landing/hero'
import Stats from '@/components/landing/stats'
import Features from '@/components/landing/features'
import Benefits from '@/components/landing/benefits'
import Integrations from '@/components/landing/integrations'
import SocialProof from '@/components/landing/social-proof'
import Testimonials from '@/components/landing/testimonials'
import CTA from '@/components/landing/cta'
import Footer from '@/components/landing/footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-gradient-primary text-white text-center py-2 px-4 animate-fade-down">
        Purpose-built tools for closing more deals.
      </div>
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <Stats />
        <Benefits />
        <Features />
        <Integrations />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

