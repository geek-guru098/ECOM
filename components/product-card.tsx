"use client"

import type React from "react"
import { Truck } from "lucide-react"

import Link from "next/link"
import { Star, ShoppingCart, Heart, Eye, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"
import { useToast } from "@/hooks/use-toast"
import { formatNepaliCurrency } from "@/lib/products"
import type { Product } from "@/contexts/cart-context"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatch({ type: "ADD_ITEM", payload: product })
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <div className="group relative glass-card rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-700 hover:scale-105 hover:-translate-y-2">
      <Link href={`/products/${product.category}/${product.id}`}>
        <div className="aspect-square overflow-hidden relative bg-gradient-to-br from-gray-900 to-gray-800">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

          {/* Overlay Actions */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="flex space-x-3">
              <Button
                size="sm"
                className="glass-effect hover:bg-white/20 rounded-full border border-white/30 text-white"
              >
                <Eye className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                className="glass-effect hover:bg-white/20 rounded-full border border-white/30 text-white"
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col space-y-2">
            {product.inStock ? (
              <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs px-3 py-1 rounded-full shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                In Stock
              </Badge>
            ) : (
              <Badge variant="destructive" className="text-xs px-3 py-1 rounded-full">
                Out of Stock
              </Badge>
            )}
          </div>

          {/* Quick Add Button */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <Button
              size="sm"
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 neon-glow"
            >
              <Zap className="h-4 w-4 mr-1" />
              Quick Add
            </Button>
          </div>
        </div>
      </Link>

      <div className="p-6 space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30 text-xs font-medium px-3 py-1 rounded-full">
              {product.category}
            </Badge>
            <div className="flex items-center space-x-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-600"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-400">({product.reviews})</span>
            </div>
          </div>

          <Link href={`/products/${product.category}/${product.id}`}>
            <h3 className="font-bold text-lg text-white group-hover:text-gradient transition-all duration-300 line-clamp-2 leading-tight">
              {product.name}
            </h3>
          </Link>

          <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">{product.description}</p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="space-y-1">
            <span className="text-2xl font-bold text-gradient">{formatNepaliCurrency(product.price)}</span>
            <p className="text-xs text-green-400 font-medium flex items-center">
              <Truck className="h-3 w-3 mr-1" />
              Free shipping
            </p>
          </div>

          <Button
            size="sm"
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
