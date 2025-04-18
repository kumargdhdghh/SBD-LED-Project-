"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", phone: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-950 py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">Contact Us</h1>
            <p className="mt-4 text-slate-400 md:text-xl/relaxed">
              Get in touch with us for all your LED installation and maintenance needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="bg-slate-900 py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Send Us a Message</CardTitle>
                <CardDescription className="text-slate-400">
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="rounded-lg bg-green-500/10 p-4 text-green-500">
                    <p className="font-medium">Thank you for your message!</p>
                    <p className="text-sm">We'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-200">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-200">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className="border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-slate-200">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        required
                        className="border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-200">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        required
                        className="min-h-[120px] border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-500"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-sbd-blue hover:bg-sbd-blue/90" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 h-5 w-5 text-sbd-blue" />
                    <div>
                      <p className="font-medium text-white">Phone</p>
                      <p className="text-slate-400">7550255910</p>
                      <p className="text-slate-400">7200366910</p>
                      <p className="text-slate-400">9787572715</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 h-5 w-5 text-sbd-blue" />
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <p className="text-slate-400">sbdledvision97@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-5 w-5 text-sbd-blue" />
                    <div>
                      <p className="font-medium text-white">Address</p>
                      <p className="text-slate-400">
                        No.1, 1st Floor, 1st Main Road, Vilvarayanallur Village, New Manbakkam Post, Pillaiyar Koil
                        street, Madurantakam - 603306
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Business Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400">
                    <span className="font-medium text-white">GSTIN:</span> 33FTEPD0539R1ZG
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Link
                      href="https://www.instagram.com/sbd_led_bussines_media_systems/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-gradient-to-br from-purple-600 to-pink-500 p-3 text-white transition-transform hover:scale-110"
                    >
                      <Instagram className="h-6 w-6" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                      href="https://www.facebook.com/boopathi.naresh.7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-blue-600 p-3 text-white transition-transform hover:scale-110"
                    >
                      <Facebook className="h-6 w-6" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
