"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/lib/hooks/use-scroll-animation"

const partners = [
  { name: "Keller Williams", logo: "https://i.ibb.co/M6zBB9R/keller-williams.png" },
  { name: "Century 21", logo: "https://i.ibb.co/VjFBv1X/century21.png" },
  { name: "RE/MAX", logo: "https://i.ibb.co/VqKJ8Md/remax-logo.png" },
  { name: "Coldwell Banker", logo: "https://i.ibb.co/Nt98nL6/coldwell-banker.png" },
  { name: "Berkshire Hathaway", logo: "https://i.ibb.co/Lx6S2Qc/berkshire-hathaway.png" },
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
                src={partner.logo}
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