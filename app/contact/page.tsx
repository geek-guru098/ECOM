"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message sent!",
      description: "Thank you for contacting Ayer Electrohub. We'll get back to you within 24 hours.",
    })

    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Ayer Electrohub</h1>
            <p className="text-muted-foreground text-lg">
              Have questions? We're here to help. Get in touch with our Ayer Electrohub support team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 border">
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" required />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" rows={6} placeholder="Tell us how we can help you..." required />
                </div>
                <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 border">
                <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-blue-500 mt-1" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">support@ayerelectrohub.com</p>
                      <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-blue-500 mt-1" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">1-800-ELECTRO</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-500 mt-1" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-muted-foreground">
                        123 Tech Street
                        <br />
                        Silicon Valley, CA 94000
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Chat */}
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageCircle className="h-8 w-8" />
                  <h2 className="text-2xl font-semibold">Live Chat Support</h2>
                </div>
                <p className="mb-6 text-blue-100">
                  Need immediate assistance? Chat with our support team in real-time.
                </p>
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                  Start Live Chat
                </Button>
              </div>

              {/* FAQ */}
              <div className="bg-card rounded-2xl p-8 border">
                <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">What's your return policy?</h3>
                    <p className="text-muted-foreground text-sm">
                      We offer a 30-day return policy for all items in original condition.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Do you offer international shipping?</h3>
                    <p className="text-muted-foreground text-sm">
                      Yes, we ship worldwide with various shipping options available.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">How can I track my order?</h3>
                    <p className="text-muted-foreground text-sm">
                      You'll receive a tracking number via email once your order ships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
