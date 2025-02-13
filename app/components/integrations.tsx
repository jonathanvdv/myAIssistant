"use client"

import Image from "next/image"
import { useScrollAnimation } from "../hooks/use-scroll-animation"

const integrations = [
  { name: "Salesforce", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Zoom", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Google Calendar", logo: "/placeholder.svg?height=40&width=120" },
  { name: "DocuSign", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Mailchimp", logo: "/placeholder.svg?height=40&width=120" },
]

export default function Integrations() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 px-6 lg:px-8">
      <div ref={ref} className={`container mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <h2 className="text-3xl font-bold text-center mb-12">Seamless Integrations</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={integration.logo || "/placeholder.svg"}
                alt={integration.name}
                width={120}
                height={40}
                className="h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

