"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Mail } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to the Ayer Electrohub newsletter.",
      })
      setEmail("")
    }
  }

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <Mail className="h-12 w-12 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with Latest Tech</h2>
          <p className="text-blue-100 mb-8">
            Subscribe to our newsletter and be the first to know about new products, exclusive deals, and tech insights.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
              required
            />
            <Button type="submit" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
