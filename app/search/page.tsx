"use client"

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import { products } from "@/lib/products"
import type { Product } from "@/contexts/cart-context"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [searchResults, setSearchResults] = useState<Product[]>([])

  useEffect(() => {
    if (query.trim().length > 0) {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase()),
      )
      setSearchResults(filtered)
    } else {
      setSearchResults([])
    }
  }, [query])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-gradient">Search Results for "{query}"</h1>
          <p className="text-muted-foreground">Found {searchResults.length} products matching your search</p>
        </div>

        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {searchResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="glass-card rounded-2xl p-8 max-w-md mx-auto">
              <h2 className="text-xl font-semibold mb-4 text-white">No products found</h2>
              <p className="text-gray-400 mb-6">
                We couldn't find any products matching "{query}". Try searching with different keywords.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• Check your spelling</p>
                <p>• Try more general keywords</p>
                <p>• Browse our categories instead</p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
