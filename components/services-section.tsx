import { LightbulbIcon, WrenchIcon, PresentationIcon } from "lucide-react"

const services = [
  {
    icon: <LightbulbIcon className="h-10 w-10" />,
    title: "LED Installation",
    description: "Professional installation of LED displays and lighting systems for businesses of all sizes.",
  },
  {
    icon: <WrenchIcon className="h-10 w-10" />,
    title: "LED Maintenance",
    description: "Regular maintenance and repair services to keep your LED systems running at optimal performance.",
  },
  {
    icon: <PresentationIcon className="h-10 w-10" />,
    title: "Business Media Systems",
    description: "Complete media system solutions for business presentations, advertising, and information displays.",
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">Our Services</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-slate-400 md:text-xl/relaxed">
            We provide professional LED installation and maintenance services
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="rounded-xl bg-slate-800/50 p-6 shadow-lg">
              <div className="mb-4 rounded-full bg-sbd-blue/20 p-3 text-sbd-blue">{service.icon}</div>
              <h3 className="mb-2 text-xl font-bold text-white">{service.title}</h3>
              <p className="text-slate-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
