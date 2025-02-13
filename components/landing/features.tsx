"use client"

import { Clock, BarChart, Calendar, MessageSquare } from "lucide-react"
import { useScrollAnimation } from "@/lib/hooks/use-scroll-animation"

const features = [
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Automated Scheduling",
    description: "Save time with intelligent appointment scheduling and reminders",
  },
  {
    icon: <BarChart className="h-6 w-6 text-primary" />,
    title: "Performance Tracking",
    description: "Monitor your success with detailed analytics and insights",
  },
  {
    icon: <Calendar className="h-6 w-6 text-primary" />,
    title: "Smart Calendar",
    description: "Seamlessly manage your appointments and viewings",
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    title: "Automated Follow-ups",
    description: "Never miss a follow-up with automated communication",
  },
]

export default function Features() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="features" className="py-20 px-6 lg:px-8">
      <div ref={ref} className={`container mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Features Built for Realtors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform is designed specifically for real estate professionals to automate administrative tasks and
            focus on what matters most.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 