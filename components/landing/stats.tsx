"use client"

import { useScrollAnimation } from "@/lib/hooks/use-scroll-animation"
import Image from "next/image"

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-12 px-6 lg:px-8">
      <div ref={ref} className={`container mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by RE/MAX Agents</h2>
          <p className="text-gray-600">Empowering real estate professionals to achieve more</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-gray-600">Hours Saved Weekly</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">30%</div>
            <div className="text-sm text-gray-600">More Deals Closed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">1000+</div>
            <div className="text-sm text-gray-600">Active Users</div>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Image
            src="https://i.ibb.co/VqKJ8Md/remax-logo.png"
            alt="RE/MAX Logo"
            width={180}
            height={60}
            className="h-15 w-auto opacity-80"
          />
        </div>
      </div>
    </section>
  )
} 