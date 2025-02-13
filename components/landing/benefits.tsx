import Image from "next/image"

export default function Benefits() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="order-2 lg:order-1">
          <Image
            src="https://i.ibb.co/Jk6Bq7M/time-management.jpg"
            alt="Time Management Solution"
            width={600}
            height={400}
            className="rounded-lg shadow-xl w-full"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-center lg:text-left">
            The #1 Struggle for Realtors?
            <br />
            <span className="text-primary">Time Management</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-6 text-center lg:text-left">
            As a real estate professional, you're juggling countless tasks daily: coordinating with clients, managing
            back-and-forth showings, sending reminders, and handling all the paperwork. The constant follow-ups alone
            keep you from focusing on what matters most.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="h-6 w-6 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                ✓
              </span>
              <span>Automate repetitive tasks</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-6 w-6 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                ✓
              </span>
              <span>Streamline client communications</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-6 w-6 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                ✓
              </span>
              <span>Focus on closing deals</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
} 