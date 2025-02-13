"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/lib/hooks/use-scroll-animation"

const integrations = [
  { name: "Salesforce", logo: "https://i.ibb.co/xGh3Qhz/salesforce.png" },
  { name: "Zoom", logo: "https://i.ibb.co/Kj8RpKy/zoom.png" },
  { name: "Google Calendar", logo: "https://i.ibb.co/0MKJnMX/google-calendar.png" },
  { name: "DocuSign", logo: "https://i.ibb.co/Jn4LC6B/docusign.png" },
  { name: "Mailchimp", logo: "https://i.ibb.co/VwB7mNk/mailchimp.png" },
]

export default function Integrations() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 lg:px-8">
      <div ref={ref} className={`container mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Seamless Integrations</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 items-center">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={integration.logo}
                alt={integration.name}
                width={120}
                height={40}
                className="h-8 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 