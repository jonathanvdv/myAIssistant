import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 text-primary">
            Free Discovery Calls for a Limited Time →
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            We Handle Admin
            <br />
            <span className="block">
              You <span className="text-primary">Close Deals</span>
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Helping agents save 10+ hours a week by automating scheduling, follow-ups, and contracts to focus on{" "}
            <span className="italic">Growing Sales and Revenue</span>.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8">
              Get a Demo
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 flex items-center gap-2">
              <Play className="h-4 w-4" /> Watch Video
            </Button>
          </div>
          <div className="mt-6 text-sm text-gray-600 flex items-center gap-2">
            <span className="text-amber-400">★★★★★</span> Trusted by top real estate agents & brokers across the country
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://i.ibb.co/ksbwPnWg/laptop-mockup.png"
            alt="Platform Interface"
            width={600}
            height={400}
            priority
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  )
} 