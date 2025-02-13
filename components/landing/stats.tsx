"use client"

import { useScrollAnimation } from "@/lib/hooks/use-scroll-animation"
import Image from "next/image"

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-8 md:py-12 px-4 md:px-6 lg:px-8">
      <div ref={ref} className={`container mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Trusted by RE/MAX Agents</h2>
          <p className="text-gray-600 text-sm md:text-base">Empowering real estate professionals to achieve more</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
          <div className="text-center p-4 md:p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">10+</div>
            <div className="text-xs md:text-sm text-gray-600">Hours Saved Weekly</div>
          </div>
          <div className="text-center p-4 md:p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">30%</div>
            <div className="text-xs md:text-sm text-gray-600">More Deals Closed</div>
          </div>
          <div className="text-center col-span-2 md:col-span-1 p-4 md:p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">1000+</div>
            <div className="text-xs md:text-sm text-gray-600">Active Users</div>
          </div>
        </div>
        <div className="mt-8 md:mt-12 flex justify-center">
          <Image
            src="https://i.ibb.co/VqKJ8Md/remax-logo.png"
            alt="RE/MAX Logo"
            width={180}
            height={60}
            className="h-10 md:h-15 w-auto opacity-80"
          />
        </div>
      </div>
    </section>
  )
} 