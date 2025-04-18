import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12">
      <div className="container grid gap-8 px-4 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden">
              <Image src="/images/logo.png" alt="SBD LED Logo" fill className="object-contain" />
            </div>
            <span className="text-xl font-bold text-white">SBD LED</span>
          </div>
          <p className="text-sm text-slate-400">
            Professional LED installation and maintenance services for businesses.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://www.instagram.com/sbd_led_bussines_media_systems/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-white"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.facebook.com/boopathi.naresh.7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-white"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="mailto:sbdledvision97@gmail.com" className="text-slate-400 transition-colors hover:text-white">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link href="tel:7550255910" className="text-slate-400 transition-colors hover:text-white">
              <Phone className="h-5 w-5" />
              <span className="sr-only">Phone</span>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-medium text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-slate-400 transition-colors hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-slate-400 transition-colors hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-slate-400 transition-colors hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="text-slate-400 transition-colors hover:text-white">
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-medium text-white">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-slate-400 transition-colors hover:text-white">
                LED Installation
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-slate-400 transition-colors hover:text-white">
                LED Maintenance
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-slate-400 transition-colors hover:text-white">
                Business Media Systems
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-slate-400 transition-colors hover:text-white">
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-medium text-white">Contact</h3>
          <address className="not-italic">
            <p className="mb-2 text-sm text-slate-400">
              No.1, 1st Floor, 1st Main Road, Vilvarayanallur Village, New Manbakkam Post, Pillaiyar Koil street,
              Madurantakam - 603306
            </p>
            <p className="mb-2 text-sm text-slate-400">
              <span className="font-medium text-white">Phone:</span> 7550255910, 7200366910, 9787572715
            </p>
            <p className="mb-2 text-sm text-slate-400">
              <span className="font-medium text-white">Email:</span> sbdledvision97@gmail.com
            </p>
            <p className="text-sm text-slate-400">
              <span className="font-medium text-white">GSTIN:</span> 33FTEPD0539R1ZG
            </p>
          </address>
        </div>
      </div>
      <div className="container mt-8 border-t border-slate-800 pt-8">
        <p className="text-center text-xs text-slate-400">
          © {new Date().getFullYear()} SBD LED Business Media Systems. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
