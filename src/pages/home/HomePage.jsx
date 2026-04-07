import { useState } from 'react'
import { AnnouncementBar } from '../../components/layout/AnnouncementBar'
import { Footer } from '../../components/layout/Footer'
import { MobileBottomBar } from '../../components/layout/MobileBottomBar'
import { MobileSidebar } from '../../components/layout/MobileSidebar'
import { Navbar } from '../../components/layout/Navbar'
import { CategorySection } from '../../components/sections/CategorySection'
import { FeaturedSection } from '../../components/sections/FeaturedSection'
import { HeroSection } from '../../components/sections/HeroSection'
import { NewsletterSection } from '../../components/sections/NewsletterSection'
import { NewArrivalsSection } from '../../components/sections/NewArrivalsSection'
import { PromoSection } from '../../components/sections/PromoSection'
import { TestimonialSection } from '../../components/sections/TestimonialSection'
import { TrustSection } from '../../components/sections/TrustSection'

export function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="page-shell">
      <AnnouncementBar />
      <Navbar onOpenMenu={() => setIsSidebarOpen(true)} />
      <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <main>
        <HeroSection />
        <CategorySection />
        <FeaturedSection />
        <PromoSection />
        <NewArrivalsSection />
        <TrustSection />
        <TestimonialSection />
        <NewsletterSection />
      </main>

      <Footer />
      <MobileBottomBar onOpenMenu={() => setIsSidebarOpen(true)} />
    </div>
  )
}
