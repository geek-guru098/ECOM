import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Shield, Truck, Headphones, CreditCard } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Trust Elements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-blue-500" />
            <div>
              <h4 className="font-semibold">Secure Payment</h4>
              <p className="text-sm text-muted-foreground">SSL Protected</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Truck className="h-8 w-8 text-blue-500" />
            <div>
              <h4 className="font-semibold">Free Shipping</h4>
              <p className="text-sm text-muted-foreground">Orders over Rs 15,000</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Headphones className="h-8 w-8 text-blue-500" />
            <div>
              <h4 className="font-semibold">24/7 Support</h4>
              <p className="text-sm text-muted-foreground">Expert assistance</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <CreditCard className="h-8 w-8 text-blue-500" />
            <div>
              <h4 className="font-semibold">Easy Returns</h4>
              <p className="text-sm text-muted-foreground">30-day policy</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative h-8 w-8 rounded bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-black text-sm tracking-wider" style={{ fontFamily: "serif" }}>
                  A
                </span>
                <div className="absolute top-0 right-0 w-1 h-1 bg-yellow-400 rounded-full opacity-80"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Ayer Electrohub
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Your trusted partner for premium electronics in Nepal. Discover the latest technology with unbeatable
              prices and exceptional service at Ayer Electrohub.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-blue-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-blue-500 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-blue-500 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-muted-foreground hover:text-blue-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products/phones" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link href="/products/laptops" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  Laptops
                </Link>
              </li>
              <li>
                <Link
                  href="/products/wearables"
                  className="text-muted-foreground hover:text-blue-500 transition-colors"
                >
                  Wearables
                </Link>
              </li>
              <li>
                <Link
                  href="/products/accessories"
                  className="text-muted-foreground hover:text-blue-500 transition-colors"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  Warranty
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📧 support@ayerelectrohub.com.np</li>
              <li>📞 +977-1-4567890</li>
              <li>📱 +977-9841234567</li>
              <li>📍 New Road, Kathmandu 44600, Nepal</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Ayer Electrohub Nepal. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}
