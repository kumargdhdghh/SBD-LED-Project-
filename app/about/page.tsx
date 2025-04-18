import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Users, Award, Clock, ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-950 py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  About SBD LED
                </h1>
                <p className="text-slate-400 md:text-xl/relaxed">
                  Your trusted partner for LED installation and maintenance services
                </p>
              </div>
              <div className="flex max-w-[600px] flex-col gap-2 text-slate-400">
                <p>
                  SBD LED Business Media Systems is a leading provider of LED installation and maintenance services. We
                  specialize in creating custom LED solutions for businesses of all sizes.
                </p>
                <p>
                  With years of experience in the industry, our team of experts is dedicated to delivering high-quality
                  LED systems that enhance your business visibility and operations.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-sbd-blue shadow-lg">
                <Image src="/images/logo.png" alt="SBD LED Logo" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-slate-900 py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">Our Mission</h2>
            <p className="mt-4 text-slate-400 md:text-xl/relaxed">
              To provide businesses with high-quality LED solutions that enhance visibility, improve operations, and
              contribute to energy efficiency. We are committed to excellence in every installation and maintenance
              service we provide.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-950 py-20">
        <div className="container px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter text-white sm:text-4xl">
            Why Choose Us
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Users className="h-10 w-10" />,
                title: "Expert Team",
                description: "Our team consists of experienced professionals in LED installation and maintenance",
              },
              {
                icon: <Award className="h-10 w-10" />,
                title: "Quality Service",
                description: "We are committed to providing the highest quality service to our clients",
              },
              {
                icon: <Clock className="h-10 w-10" />,
                title: "Timely Delivery",
                description: "We ensure that all our projects are completed on time and within budget",
              },
              {
                icon: <CheckCircle2 className="h-10 w-10" />,
                title: "Customer Satisfaction",
                description: "Our primary goal is to ensure complete satisfaction of our clients",
              },
            ].map((item, index) => (
              <Card key={index} className="border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="mb-4 rounded-full bg-sbd-blue/20 p-3 text-sbd-blue">{item.icon}</div>
                  <CardTitle className="text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">Ready to Get Started?</h2>
            <p className="mt-4 text-slate-400 md:text-xl/relaxed">
              Contact us today to discuss your LED installation and maintenance needs
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-sbd-blue hover:bg-sbd-blue/90">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
