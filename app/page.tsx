import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative w-full h-[60vh] md:h-[72vh]">
        <Image
          src="https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=2000&auto=format&fit=crop"
          alt="Lighthouse overlooking a calm ocean"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full">
          <div className="container h-full flex flex-col justify-center max-w-4xl">
            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
              Guidance through calm and storm
            </h1>
            <p className="text-white/90 mt-4 text-lg md:text-xl max-w-2xl">
              Trauma-informed, client-guided coaching (ICF Member, ERCEM-trained) to cultivate empathy,
              accountability, and sustainable recovery.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/services" className="btn btn-primary">View Services</Link>
              <Link href="/book" className="btn">Book a Session</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="container py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="font-semibold text-lg">Recovery Coaching</h3>
            <p className="text-gray-600 mt-2">Trauma-aware, client-directed growth using neuroplasticity and values-based plans.</p>
            <Link href="/services/recovery" className="btn mt-4">Learn more</Link>
          </div>
          <div className="card">
            <h3 className="font-semibold text-lg">ERCEM-Informed Couples Work</h3>
            <p className="text-gray-600 mt-2">Safety, empathy, and structured communication (e.g., AVR) to rebuild trust.</p>
            <Link href="/services/ercem" className="btn mt-4">Learn more</Link>
          </div>
          <div className="card">
            <h3 className="font-semibold text-lg">Help Her Heal – 12 Weeks</h3>
            <p className="text-gray-600 mt-2">Small-group coaching for men (2–3 participants), 1.5 hours weekly for 12 weeks.</p>
            <Link href="/services/help-her-heal" className="btn mt-4">Learn more</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
