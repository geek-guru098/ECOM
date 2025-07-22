"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Package, Truck, CheckCircle, Clock } from "lucide-react"
import { formatNepaliCurrency } from "@/lib/products"

const orders = [
  {
    id: "ORD-2024-001",
    date: "2024-01-20",
    status: "delivered",
    total: 179900,
    items: [{ name: "iPhone 15 Pro Max", quantity: 1, price: 179900 }],
  },
  {
    id: "ORD-2024-002",
    date: "2024-01-18",
    status: "shipped",
    total: 37400,
    items: [{ name: "AirPods Pro (2nd Gen)", quantity: 1, price: 37400 }],
  },
  {
    id: "ORD-2024-003",
    date: "2024-01-15",
    status: "processing",
    total: 524900,
    items: [{ name: 'MacBook Pro 16" M3 Max', quantity: 1, price: 524900 }],
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "delivered":
      return <CheckCircle className="h-4 w-4" />
    case "shipped":
      return <Truck className="h-4 w-4" />
    case "processing":
      return <Clock className="h-4 w-4" />
    default:
      return <Package className="h-4 w-4" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "delivered":
      return "bg-green-500"
    case "shipped":
      return "bg-blue-500"
    case "processing":
      return "bg-yellow-500"
    default:
      return "bg-gray-500"
  }
}

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gradient mb-4">My Orders</h1>
            <p className="text-gray-400">Track and manage your orders from Ayer Electrohub</p>
          </div>

          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="glass-card rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{order.id}</h3>
                    <p className="text-gray-400">Ordered on {new Date(order.date).toLocaleDateString()}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge className={`${getStatusColor(order.status)} text-white`}>
                      {getStatusIcon(order.status)}
                      <span className="ml-2 capitalize">{order.status}</span>
                    </Badge>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gradient">{formatNepaliCurrency(order.total)}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 border-b border-white/10 last:border-b-0"
                    >
                      <div>
                        <h4 className="font-medium text-white">{item.name}</h4>
                        <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-blue-400 font-semibold">{formatNepaliCurrency(item.price)}</div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass-effect border-white/20 text-white hover:bg-white/10 bg-transparent"
                    >
                      View Details
                    </Button>
                    {order.status === "delivered" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="glass-effect border-white/20 text-white hover:bg-white/10 bg-transparent"
                      >
                        Reorder
                      </Button>
                    )}
                  </div>
                  {order.status === "shipped" && (
                    <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-500">
                      Track Package
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
