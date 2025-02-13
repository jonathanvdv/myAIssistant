import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-block px-4 py-1 mb-4 md:mb-6 rounded-full bg-primary/10 text-primary text-sm md:text-base">
            Free Discovery Calls for a Limited Time →
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
            We Handle Admin
            <br />
            <span className="block">
              You <span className="text-primary">Close Deals</span>
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
            Helping agents save 10+ hours a week by automating scheduling, follow-ups, and contracts to focus on{" "}
            <span className="italic">Growing Sales and Revenue</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 w-full sm:w-auto">
              Get a Demo
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 flex items-center justify-center gap-2 w-full sm:w-auto">
              <Play className="h-4 w-4" /> Watch Video
            </Button>
          </div>
          <div className="mt-6 text-sm text-gray-600 flex items-center gap-2 justify-center lg:justify-start">
            <span className="text-amber-400">★★★★★</span> Trusted by top real estate agents & brokers
          </div>
        </div>
        <div className="relative mt-8 lg:mt-0">
          <Image
            src="https://i.ibb.co/ksbwPnWg/laptop-mockup.png"
            alt="Platform Interface"
            width={600}
            height={400}
            priority
            className="rounded-lg shadow-xl w-full"
          />
        </div>
      </div>
    </section>
  )
} 