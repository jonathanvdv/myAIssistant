"use client"

import Image from "next/image"
import { useScrollAnimation } from "../hooks/use-scroll-animation"

const partners = [
  { name: "Keller Williams", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Century 21", logo: "/placeholder.svg?height=40&width=120" },
  { name: "RE/MAX", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Coldwell Banker", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Berkshire Hathaway", logo: "/placeholder.svg?height=40&width=120" },
]

export default function SocialProof() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-12 px-6 lg:px-8">
      <div ref={ref} className={`container mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <h3 className="text-center text-gray-600 mb-8">Trusted by leading real estate brands</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

