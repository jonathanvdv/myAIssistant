import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-primary text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Back Your Time?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join successful real estate agents who have transformed their business with automated admin tasks.
        </p>
        <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 rounded-full px-8">
          Book Your Free Demo
        </Button>
      </div>
    </section>
  )
} 