import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Mail, Phone } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="bg-slate-950 py-20 md:py-32">
      {/* Content */}
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                LED BUSINESS MEDIA SYSTEM
              </h1>
              <p className="max-w-[600px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Professional LED installation and maintenance services for your business
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact">
                <Button size="lg" className="bg-sbd-blue hover:bg-sbd-blue/90">
                  Get a Quote
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6 rounded-xl bg-slate-900/50 p-6">
            <div className="flex items-center justify-center">
              <div className="relative h-32 w-32 overflow-hidden">
                <Image src="/images/logo.png" alt="SBD LED Logo" fill className="object-contain" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-slate-800/50 p-4">
                <h3 className="mb-2 text-sm font-medium text-slate-300">Contact Information</h3>
                <div className="space-y-2 text-sm text-slate-400">
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-sbd-blue" />
                    <span>7550255910, 7200366910, 9787572715</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-sbd-blue" />
                    <span>sbdledvision97@gmail.com</span>
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-slate-800/50 p-4">
                <h3 className="mb-2 text-sm font-medium text-slate-300">Business Details</h3>
                <p className="text-sm text-slate-400">
                  <span className="font-medium text-white">GSTIN:</span> 33FTEPD0539R1ZG
                </p>
              </div>
              <div className="rounded-lg bg-slate-800/50 p-4">
                <h3 className="mb-2 text-sm font-medium text-slate-300">Address</h3>
                <p className="text-sm text-slate-400">
                  No.1, 1st Floor, 1st Main Road, Vilvarayanallur Village, New Manbakkam Post, Pillaiyar Koil street,
                  Madurantakam - 603306
                </p>
              </div>
              <div className="flex justify-center space-x-4">
                <Link
                  href="https://www.instagram.com/sbd_led_bussines_media_systems/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gradient-to-br from-purple-600 to-pink-500 p-2 text-white"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="https://www.facebook.com/boopathi.naresh.7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-blue-600 p-2 text-white"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
