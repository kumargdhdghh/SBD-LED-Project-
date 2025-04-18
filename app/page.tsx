import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />

      {/* Why Choose Us Section */}
      <section className="bg-slate-950 py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Why Choose SBD LED
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-slate-400 md:text-xl/relaxed">
              We are committed to providing the highest quality LED solutions for your business
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Expert Installation",
                description: "Our team of professionals ensures perfect installation every time",
              },
              {
                title: "Quality Maintenance",
                description: "Regular maintenance to keep your LED systems running smoothly",
              },
              {
                title: "Reliable Support",
                description: "24/7 customer support for all your LED system needs",
              },
              {
                title: "Customized Solutions",
                description: "Tailored LED solutions to meet your specific business requirements",
              },
              {
                title: "Energy Efficient",
                description: "Energy-saving LED systems to reduce your electricity costs",
              },
              {
                title: "Warranty Coverage",
                description: "Comprehensive warranty on all our installations and services",
              },
            ].map((item, index) => (
              <Card key={index} className="border-slate-800 bg-slate-900/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <CheckCircle2 className="h-5 w-5 text-sbd-blue" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button className="bg-sbd-blue hover:bg-sbd-blue/90">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Ready to Upgrade Your Business with LED Solutions?
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-slate-400 md:text-xl/relaxed">
              Get in touch with us today for a free consultation and quote
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
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
        </div>
      </section>
    </main>
  )
}
