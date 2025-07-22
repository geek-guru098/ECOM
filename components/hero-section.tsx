"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Shield, Truck, Headphones, Zap, Award, Users } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-up">
            {/* Premium Badge */}
            <div className="flex items-center space-x-4 text-sm">
              <div className="glass-effect px-4 py-2 rounded-full border border-yellow-500/30">
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-yellow-400" />
                  <span className="text-yellow-400 font-medium">Premium Quality Guaranteed</span>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-gray-300 ml-2">50K+ Happy Customers</span>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient block mb-2">Next-Gen</span>
                <span className="text-white">Electronics</span>
                <br />
                <span className="text-gradient-gold">Delivered Today</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Experience the future with our curated collection of premium smartphones, laptops, wearables, and
                accessories.
                <span className="text-blue-400 font-semibold"> Same-day delivery available.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products/phones">
                <Button
                  size="lg"
                  className="premium-gradient hover:shadow-2xl hover:shadow-blue-500/25 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 hover:scale-105 neon-glow"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-effect border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 hover:scale-105 bg-transparent"
                >
                  <Headphones className="mr-2 h-5 w-5" />
                  Expert Consultation
                </Button>
              </Link>
            </div>

            {/* Enhanced Trust Elements */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="glass-card p-4 rounded-2xl group hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">Same-Day Delivery</p>
                    <p className="text-xs text-gray-400">Orders before 2 PM</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-4 rounded-2xl group hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl group-hover:shadow-lg group-hover:shadow-green-500/50 transition-all duration-300">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">3-Year Warranty</p>
                    <p className="text-xs text-gray-400">Premium protection</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-4 rounded-2xl group hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">24/7 Expert Support</p>
                    <p className="text-xs text-gray-400">Always here to help</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative floating-animation">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl transform rotate-6"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-cyan-500/20 to-pink-500/20 rounded-3xl blur-3xl transform -rotate-6"></div>

            <div className="relative glass-card rounded-3xl p-8 shadow-professional-lg min-h-[500px] aspect-[4/3]">
              <img
                src="/images/hero-electronics.png"
                alt="Premium Electronics Collection"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=600&width=700&text=Premium+Electronics+Collection"
                }}
              />

              {/* Floating UI Elements */}
              <div
                className="absolute -top-6 -right-6 glass-card rounded-2xl p-4 shadow-xl border border-white/20 floating-animation"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-center">
                  <p className="text-xs text-gray-400 mb-1">Starting from</p>
                  <p className="font-bold text-2xl text-gradient">Rs 11,900</p>
                  <p className="text-xs text-green-400">✓ In Stock</p>
                </div>
              </div>

              <div
                className="absolute -bottom-6 -left-6 glass-card rounded-2xl px-6 py-3 shadow-xl border border-white/20 floating-animation"
                style={{ animationDelay: "2s" }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-sm font-semibold text-white">2,847 sold today</p>
                </div>
              </div>

              <div
                className="absolute top-1/2 -right-8 glass-card rounded-xl p-3 shadow-xl border border-white/20 floating-animation"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-bold text-white">4.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
