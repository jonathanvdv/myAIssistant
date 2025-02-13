import Image from "next/image"

export default function Benefits() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <Image
          src="https://sjc.microlink.io/2EchSqtTnVzzGjtZAeoMiJsjSRlN1SaCIlHTOu2nLspct1kv3uWpC2ggAvY8ea0uuSou4U-XCcAYhVxnT22ODw.jpeg"
          alt="Time Management Solution"
          width={600}
          height={400}
          className="rounded-lg shadow-xl"
        />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The #1 Struggle for Realtors?
            <br />
            <span className="text-primary">Time Management</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            As a real estate professional, you're juggling countless tasks daily: coordinating with clients, managing
            back-and-forth showings, sending reminders, and handling all the paperwork. The constant follow-ups alone
            keep you from focusing on what matters most.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                ✓
              </span>
              <span>Automate repetitive tasks</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                ✓
              </span>
              <span>Streamline client communications</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
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

