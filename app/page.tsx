import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import PopularCities from '@/components/sections/PopularCities'
import QuickFilters from '@/components/sections/QuickFilters'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <PopularCities />
      <QuickFilters />
      <Footer />
    </main>
  )
}