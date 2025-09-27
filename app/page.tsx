import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import PopularCities from '@/components/sections/PopularCities'
import QuickFilters from '@/components/sections/QuickFilters'
import LiveActivity from '@/components/sections/LiveActivity'
import Tools from '@/components/sections/Tools'
import Newsletter from '@/components/sections/Newsletter'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <PopularCities />
      <QuickFilters />
      <LiveActivity />
      <Tools />
      <Newsletter />
      <Footer />
    </main>
  )
}