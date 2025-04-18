"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Testimonials", href: "/testimonials" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden md:h-12 md:w-12">
            <Image src="/images/logo.png" alt="SBD LED Logo" fill className="object-contain" priority />
          </div>
          <span className="text-xl font-bold text-white md:text-2xl">SBD LED</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-200 transition-colors hover:text-white"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact">
            <Button variant="default" className="bg-sbd-blue hover:bg-sbd-blue/90">
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "absolute left-0 right-0 top-16 z-50 border-b border-slate-800 bg-slate-950 md:hidden",
          isOpen ? "block" : "hidden",
        )}
      >
        <div className="container mx-auto space-y-4 px-4 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-2 text-base font-medium text-slate-200 transition-colors hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <Button variant="default" className="mt-2 w-full bg-sbd-blue hover:bg-sbd-blue/90">
              Get a Quote
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
