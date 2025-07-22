"use client"

import Link from "next/link"
import { ShoppingCart, Search, Menu, User, Heart, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { useState, useEffect } from "react"
import { products } from "@/lib/products"
import type { Product } from "@/contexts/cart-context"

export default function Header() {
  const { state } = useCart()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const [showResults, setShowResults] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setSearchResults(filtered)
      setShowResults(true)
    } else {
      setSearchResults([])
      setShowResults(false)
    }
  }, [searchQuery])

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
  }

  const clearSearch = () => {
    setSearchQuery("")
    setShowResults(false)
  }

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest(".user-menu-container")) {
        setShowUserMenu(false)
      }
    }

    if (showUserMenu) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showUserMenu])

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900/95 backdrop-blur-xl border-b-2 border-blue-500/30 shadow-2xl shadow-blue-500/10">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Header Row */}
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group flex-shrink-0 min-w-0">
            <div className="relative">
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                <span
                  className="text-white font-black text-lg md:text-xl tracking-wider transform group-hover:scale-110 transition-transform duration-300"
                  style={{ fontFamily: "serif" }}
                >
                  A
                </span>
              </div>
              <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
              {/* Unique A accent lines */}
              <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-1 left-1 w-1 h-1 bg-cyan-300 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xl md:text-2xl font-bold text-gradient truncate">Ayer Electrohub</span>
              <span className="text-xs text-blue-400 -mt-1 font-medium hidden sm:block">Premium Tech Store</span>
            </div>
          </Link>

          {/* Desktop Navigation - Only visible on large screens */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center mx-8">
            {[
              { href: "/products/phones", label: "Smartphones" },
              { href: "/products/laptops", label: "Laptops" },
              { href: "/products/wearables", label: "Wearables" },
              { href: "/products/accessories", label: "Accessories" },
              { href: "/contact", label: "Support" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group px-3 py-2 whitespace-nowrap"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md lg:max-w-lg mx-4 lg:mx-8 relative">
            <div className="relative w-full group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
              <Input
                placeholder="Search premium electronics..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-12 pr-4 py-3 w-full glass-effect border-white/20 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 rounded-2xl bg-white/5 text-white placeholder:text-gray-400 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-focus-within:opacity-100 transition-all duration-300 -z-10"></div>
            </div>

            {/* Desktop Search Results - Simplified and More Visible */}
            {showResults && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border-2 border-blue-500 shadow-2xl max-h-80 overflow-y-auto z-50">
                {searchResults.length > 0 ? (
                  <div className="py-2">
                    <div className="px-4 py-2 bg-gray-50 border-b text-sm font-semibold text-gray-600">
                      {searchResults.length} products found
                    </div>
                    <div className="max-h-60 overflow-y-auto">
                      {searchResults.slice(0, 8).map((product) => (
                        <Link
                          key={product.id}
                          href={`/products/${product.category}/${product.id}`}
                          onClick={clearSearch}
                          className="block px-4 py-3 hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0"
                        >
                          <div className="font-medium text-gray-900 text-base">{product.name}</div>
                        </Link>
                      ))}
                    </div>
                    {searchResults.length > 8 && (
                      <div className="px-4 py-3 bg-gray-50 border-t">
                        <Link
                          href={`/search?q=${encodeURIComponent(searchQuery)}`}
                          onClick={clearSearch}
                          className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                        >
                          View all {searchResults.length} results →
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="px-4 py-6 text-center">
                    <p className="text-gray-500">No products found for "{searchQuery}"</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-2 md:space-x-3 flex-shrink-0">
            {/* Mobile Search Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden glass-effect hover:bg-white/10 rounded-xl group h-10 w-10"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-4 w-4 text-gray-300 group-hover:text-blue-400 transition-colors" />
            </Button>

            {/* Desktop-only Actions */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden lg:flex glass-effect hover:bg-white/10 rounded-xl group h-10 w-10"
            >
              <Heart className="h-4 w-4 text-gray-300 group-hover:text-red-400 transition-colors" />
            </Button>

            {/* User Menu Dropdown */}
            <div className="relative user-menu-container">
              <Button
                variant="ghost"
                size="icon"
                className="hidden lg:flex glass-effect hover:bg-white/10 rounded-xl group h-10 w-10"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <User className="h-4 w-4 text-gray-300 group-hover:text-blue-400 transition-colors" />
              </Button>

              {/* User Dropdown Menu */}
              {showUserMenu && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl border-2 border-blue-500 shadow-2xl z-50">
                  <div className="py-2">
                    <div className="px-4 py-2 bg-gray-50 border-b text-sm font-semibold text-gray-600">My Account</div>
                    <Link
                      href="/login"
                      className="block px-4 py-3 hover:bg-blue-50 transition-colors border-b border-gray-100 text-gray-900 font-medium"
                      onClick={() => setShowUserMenu(false)}
                    >
                      🔐 Sign In
                    </Link>
                    <Link
                      href="/register"
                      className="block px-4 py-3 hover:bg-blue-50 transition-colors border-b border-gray-100 text-gray-900 font-medium"
                      onClick={() => setShowUserMenu(false)}
                    >
                      📝 Create Account
                    </Link>
                    <Link
                      href="/profile"
                      className="block px-4 py-3 hover:bg-blue-50 transition-colors border-b border-gray-100 text-gray-900 font-medium"
                      onClick={() => setShowUserMenu(false)}
                    >
                      👤 My Profile
                    </Link>
                    <Link
                      href="/orders"
                      className="block px-4 py-3 hover:bg-blue-50 transition-colors border-b border-gray-100 text-gray-900 font-medium"
                      onClick={() => setShowUserMenu(false)}
                    >
                      📦 My Orders
                    </Link>
                    <Link
                      href="/wishlist"
                      className="block px-4 py-3 hover:bg-blue-50 transition-colors text-gray-900 font-medium"
                      onClick={() => setShowUserMenu(false)}
                    >
                      ❤️ Wishlist
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Cart Button - Always visible and prominent */}
            <Link href="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="relative glass-effect hover:bg-white/10 rounded-xl group h-10 w-10 ring-2 ring-transparent hover:ring-green-500/30 transition-all duration-300"
              >
                <ShoppingCart className="h-5 w-5 text-gray-300 group-hover:text-green-400 transition-colors" />
                {state.itemCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs bg-gradient-to-r from-green-500 to-green-600 text-white border-2 border-background pulse-glow animate-pulse">
                    {state.itemCount > 99 ? "99+" : state.itemCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden glass-effect hover:bg-white/10 rounded-xl h-10 w-10"
                >
                  <Menu className="h-4 w-4 text-gray-300" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] glass-effect border-white/10 p-0">
                <div className="flex flex-col h-full">
                  {/* Mobile Menu Header */}
                  <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="relative h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                        <span className="text-white font-black text-sm tracking-wider" style={{ fontFamily: "serif" }}>
                          A
                        </span>
                        <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-80"></div>
                      </div>
                      <span className="text-lg font-bold text-gradient">Ayer Electrohub</span>
                    </div>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-white/10">
                        <X className="h-4 w-4 text-gray-300" />
                      </Button>
                    </SheetClose>
                  </div>

                  {/* Mobile Search */}
                  <div className="p-6 border-b border-white/10">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search electronics..."
                        value={searchQuery}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        className="pl-10 pr-4 py-3 glass-effect border-white/20 rounded-xl bg-white/5 text-white placeholder:text-gray-400 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                      />
                    </div>

                    {/* Mobile Search Results - Simplified */}
                    {showResults && (
                      <div className="mt-4 max-h-60 overflow-y-auto bg-white rounded-xl border-2 border-blue-500 shadow-xl">
                        {searchResults.length > 0 ? (
                          <div className="py-2">
                            <div className="px-4 py-2 bg-gray-50 border-b text-sm font-semibold text-gray-600">
                              {searchResults.length} found
                            </div>
                            {searchResults.slice(0, 5).map((product) => (
                              <SheetClose asChild key={product.id}>
                                <Link
                                  href={`/products/${product.category}/${product.id}`}
                                  onClick={clearSearch}
                                  className="block px-4 py-3 hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0"
                                >
                                  <div className="font-medium text-gray-900">{product.name}</div>
                                </Link>
                              </SheetClose>
                            ))}
                          </div>
                        ) : (
                          <div className="px-4 py-4 text-center">
                            <p className="text-gray-500">No products found</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col p-6 flex-1 space-y-2">
                    {[
                      { href: "/products/phones", label: "Smartphones", icon: "📱" },
                      { href: "/products/laptops", label: "Laptops", icon: "💻" },
                      { href: "/products/wearables", label: "Wearables", icon: "⌚" },
                      { href: "/products/accessories", label: "Accessories", icon: "🎧" },
                      { href: "/contact", label: "Support", icon: "💬" },
                    ].map((item) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className="flex items-center space-x-4 text-base font-medium text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 p-4 rounded-xl hover:bg-white/5 group"
                        >
                          <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
                          <span>{item.label}</span>
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>

                  {/* Mobile Bottom Actions */}
                  <div className="p-6 border-t border-white/10 space-y-3">
                    <SheetClose asChild>
                      <Link href="/cart">
                        <Button
                          className="w-full glass-effect hover:bg-white/10 rounded-xl justify-start text-left"
                          variant="ghost"
                        >
                          <ShoppingCart className="h-4 w-4 mr-3 text-green-400" />
                          <span className="text-gray-300">Cart {state.itemCount > 0 && `(${state.itemCount})`}</span>
                        </Button>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button
                        className="w-full glass-effect hover:bg-white/10 rounded-xl justify-start text-left"
                        variant="ghost"
                      >
                        <Heart className="h-4 w-4 mr-3 text-red-400" />
                        <span className="text-gray-300">Wishlist</span>
                      </Button>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button
                        className="w-full glass-effect hover:bg-white/10 rounded-xl justify-start text-left"
                        variant="ghost"
                      >
                        <User className="h-4 w-4 mr-3 text-blue-400" />
                        <span className="text-gray-300">My Account</span>
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search Bar - Expandable */}
        {isSearchOpen && (
          <div className="md:hidden pb-4 animate-slide-up">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search electronics..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-12 pr-4 py-3 w-full glass-effect border-white/20 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 rounded-xl bg-white/5 text-white placeholder:text-gray-400 transition-all duration-300"
                autoFocus
              />
            </div>

            {/* Mobile Search Results - More Visible */}
            {showResults && (
              <div className="mt-2 bg-white rounded-xl border-2 border-blue-500 shadow-xl max-h-60 overflow-y-auto">
                {searchResults.length > 0 ? (
                  <div className="py-2">
                    <div className="px-4 py-2 bg-gray-50 border-b text-sm font-semibold text-gray-600">
                      {searchResults.length} found
                    </div>
                    {searchResults.slice(0, 5).map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.category}/${product.id}`}
                        onClick={() => {
                          clearSearch()
                          setIsSearchOpen(false)
                        }}
                        className="block px-4 py-3 hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        <div className="font-medium text-gray-900">{product.name}</div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-4 text-center">
                    <p className="text-gray-500">No products found</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  )
}
