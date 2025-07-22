"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { User, Mail, Phone, MapPin, Calendar, Edit, Save } from "lucide-react"
import { useState } from "react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 border border-white/20">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="relative h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white font-black text-3xl tracking-wider" style={{ fontFamily: "serif" }}>
                    A
                  </span>
                  <div className="absolute top-2 right-2 w-3 h-3 bg-yellow-400 rounded-full opacity-80"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-cyan-300 rounded-full opacity-60"></div>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gradient">John Doe</h1>
                  <p className="text-gray-400">Premium Member</p>
                  <Badge className="mt-2 bg-gradient-to-r from-yellow-500 to-orange-500">Gold Member</Badge>
                </div>
              </div>
              <Button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                {isEditing ? (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </>
                ) : (
                  <>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </>
                )}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white mb-4">Personal Information</h2>

                <div>
                  <Label htmlFor="firstName" className="text-white">
                    First Name
                  </Label>
                  <div className="relative mt-2">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="firstName"
                      defaultValue="John"
                      disabled={!isEditing}
                      className="pl-10 glass-effect border-white/20 bg-white/5 text-white"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="lastName" className="text-white">
                    Last Name
                  </Label>
                  <div className="relative mt-2">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="lastName"
                      defaultValue="Doe"
                      disabled={!isEditing}
                      className="pl-10 glass-effect border-white/20 bg-white/5 text-white"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      defaultValue="john.doe@example.com"
                      disabled={!isEditing}
                      className="pl-10 glass-effect border-white/20 bg-white/5 text-white"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white">
                    Phone
                  </Label>
                  <div className="relative mt-2">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="phone"
                      defaultValue="+977-9841234567"
                      disabled={!isEditing}
                      className="pl-10 glass-effect border-white/20 bg-white/5 text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white mb-4">Account Details</h2>

                <div className="glass-effect rounded-xl p-4 border border-white/10">
                  <div className="flex items-center space-x-3 mb-3">
                    <Calendar className="h-5 w-5 text-blue-400" />
                    <span className="text-white font-medium">Member Since</span>
                  </div>
                  <p className="text-gray-400">January 15, 2024</p>
                </div>

                <div className="glass-effect rounded-xl p-4 border border-white/10">
                  <div className="flex items-center space-x-3 mb-3">
                    <MapPin className="h-5 w-5 text-green-400" />
                    <span className="text-white font-medium">Default Address</span>
                  </div>
                  <p className="text-gray-400">
                    New Road, Kathmandu 44600
                    <br />
                    Nepal
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Order Statistics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-effect rounded-xl p-4 border border-white/10 text-center">
                      <div className="text-2xl font-bold text-gradient">12</div>
                      <div className="text-sm text-gray-400">Total Orders</div>
                    </div>
                    <div className="glass-effect rounded-xl p-4 border border-white/10 text-center">
                      <div className="text-2xl font-bold text-gradient">Rs 2,45,000</div>
                      <div className="text-sm text-gray-400">Total Spent</div>
                    </div>
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
