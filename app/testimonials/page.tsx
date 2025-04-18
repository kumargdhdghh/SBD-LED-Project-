import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Bright Displays Ltd",
    content:
      "SBD LED provided exceptional service for our retail store LED installation. Their team was professional, efficient, and the quality of work exceeded our expectations. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "Modern Interiors",
    content:
      "We've been working with SBD LED for our office lighting needs for over 2 years now. Their maintenance service is prompt and reliable. The team is always responsive to our requests.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    company: "Tech Solutions Inc",
    content:
      "The LED media system installed by SBD LED has significantly improved our conference room experience. The quality of the display is outstanding, and their after-sales support is excellent.",
    rating: 4,
  },
  {
    name: "Ananya Patel",
    company: "Glow Restaurants",
    content:
      "SBD LED transformed the ambiance of our restaurant with their custom LED installation. Our customers love the new look, and we've seen an increase in foot traffic since the upgrade.",
    rating: 5,
  },
  {
    name: "Karthik Rajan",
    company: "Digital Marketing Agency",
    content:
      "The team at SBD LED understood our requirements perfectly and delivered a solution that enhanced our office space. Their attention to detail and customer service is commendable.",
    rating: 4,
  },
  {
    name: "Meena Venkatesh",
    company: "Retail Chain Stores",
    content:
      "We've installed SBD LED systems across all our retail locations. The consistency in quality and service has been impressive. They are our go-to partners for all LED-related needs.",
    rating: 5,
  },
]

export default function TestimonialsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-950 py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Client Testimonials
            </h1>
            <p className="mt-4 text-slate-400 md:text-xl/relaxed">
              See what our clients have to say about our LED installation and maintenance services
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-slate-900 py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-600"
                        }`}
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">"{testimonial.content}"</p>
                </CardContent>
                <CardFooter>
                  <div>
                    <p className="font-medium text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-400">{testimonial.company}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl rounded-xl bg-slate-800/30 p-8 text-center backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to Experience Our Quality Service?</h2>
            <p className="mt-4 text-slate-400">
              Join our satisfied clients and elevate your business with our LED solutions
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-sbd-blue px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-sbd-blue/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
