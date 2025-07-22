import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import FeaturedProducts from "@/components/featured-products"
import CategoryGrid from "@/components/category-grid"
import Testimonials from "@/components/testimonials"
import Newsletter from "@/components/newsletter"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategoryGrid />
        <FeaturedProducts />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
