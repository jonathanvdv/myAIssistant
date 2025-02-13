import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Testimonial() {
  return (
    <section id="testimonials" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-8 flex flex-col md:flex-row items-center">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Sarah Johnson"
              width={100}
              height={100}
              className="rounded-full mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <blockquote className="text-lg mb-4">
                "RealRemind has been a game-changer for my real estate business. I've seen a significant decrease in
                missed appointments and my clients appreciate the professional reminders. It's saved me countless hours
                and helped me close more deals!"
              </blockquote>
              <cite className="font-semibold">Sarah Johnson, Top Real Estate Agent</cite>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

