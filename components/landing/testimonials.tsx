"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useScrollAnimation } from "@/lib/hooks/use-scroll-animation"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Real Estate Agent",
    company: "Keller Williams",
    image: "https://i.ibb.co/8X85mj4/placeholder-1.jpg",
    quote:
      "myAssistant has completely transformed how I manage my real estate business. I save countless hours every week on administrative tasks.",
  },
  {
    name: "Michael Chen",
    role: "Broker",
    company: "RE/MAX",
    image: "https://i.ibb.co/VCkm2Ts/placeholder-2.jpg",
    quote:
      "The automated follow-ups and scheduling features have helped me close 30% more deals this year. It's a game-changer.",
  },
  {
    name: "Emily Rodriguez",
    role: "Real Estate Agent",
    company: "Century 21",
    image: "https://i.ibb.co/K74zZPL/placeholder-3.jpg",
    quote:
      "I can focus on building relationships with clients while myAssistant handles all the administrative work. Highly recommended!",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { ref, isVisible } = useScrollAnimation()

  const next = () => {
    setCurrentIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1))
  }

  const previous = () => {
    setCurrentIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  return (
    <section className="py-20 px-6 lg:px-8">
      <div ref={ref} className={`container mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="relative max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  width={80}
                  height={80}
                  className="rounded-full mb-4"
                />
                <blockquote className="text-lg mb-4">"{testimonials[currentIndex].quote}"</blockquote>
                <cite className="not-italic">
                  <div className="font-semibold">{testimonials[currentIndex].name}</div>
                  <div className="text-gray-600">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </div>
                </cite>
              </div>
            </CardContent>
          </Card>
          <div className="flex justify-center gap-4 mt-6">
            <Button variant="outline" size="icon" onClick={previous} className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={next} className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 