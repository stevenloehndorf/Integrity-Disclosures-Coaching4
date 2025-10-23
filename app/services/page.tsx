'use client'
import Link from 'next/link'
import CheckoutButton from '@/components/CheckoutButton'
import { useCurrency } from '@/components/CurrencyProvider'

export default function Services() {
  const { currency } = useCurrency()
  const isCAD = currency === 'CAD'

  const hhhWeekly = isCAD ? '70 CAD' : '60 USD'
  const hhhUpfront = isCAD ? '750 CAD' : '650 USD'
  const priceHHHWeekly = isCAD ? process.env.NEXT_PUBLIC_PRICE_HHH_CAD_WEEKLY! : process.env.NEXT_PUBLIC_PRICE_HHH_USD_WEEKLY!
  const priceHHHUpfront = isCAD ? process.env.NEXT_PUBLIC_PRICE_HHH_CAD_UPFRONT! : process.env.NEXT_PUBLIC_PRICE_HHH_USD_UPFRONT!

  const recRate = isCAD ? '90 CAD' : '80 USD'
  const priceRec = isCAD ? process.env.NEXT_PUBLIC_PRICE_RECOVERY_CAD! : process.env.NEXT_PUBLIC_PRICE_RECOVERY_USD!

  const ercemRate = isCAD ? '120 CAD' : '100 USD'
  const priceErcem = isCAD ? process.env.NEXT_PUBLIC_PRICE_ERCEM_CAD! : process.env.NEXT_PUBLIC_PRICE_ERCEM_USD!

  return (
    <section className="container py-16">
      <h1 className="h1 mb-4">Services &amp; Pathways</h1>
      <p className="lead max-w-3xl">
        Client-guided coaching with optional educational and skills-based learning experiences.
        Three complementary pathways meet you where you are and move at your pace.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="card">
          <h2 className="h2">Recovery Coaching</h2>
          <p className="mt-2 text-gray-700">50-minute, trauma-informed, client-guided coaching for sustainable growth.</p>
          <p className="mt-3"><strong>{recRate}</strong> per session</p>
          <div className="mt-4 flex gap-3">
            <CheckoutButton priceId={priceRec} label={`Book – ${recRate}`} />
            <Link href="/services/recovery" className="btn">Details</Link>
          </div>
        </div>

        <div className="card">
          <h2 className="h2">ERCEM-Informed Couples Work</h2>
          <p className="mt-2 text-gray-700">75-minute empathy-centered coaching to rebuild safety, communication, and trust.</p>
          <p className="mt-3"><strong>{ercemRate}</strong> per session</p>
          <div className="mt-4 flex gap-3">
            <CheckoutButton priceId={priceErcem} label={`Book – ${ercemRate}`} />
            <Link href="/services/ercem" className="btn">Details</Link>
          </div>
        </div>

        <div className="card">
          <h2 className="h2">Help Her Heal – 12 Weeks</h2>
          <p className="mt-2 text-gray-700">1.5-hour weekly small group (2–3 men). Coaching-based series using the Help Her Heal workbook.</p>
          <p className="mt-3"><strong>{hhhWeekly}</strong> / week or <strong>{hhhUpfront}</strong> upfront</p>
          <div className="mt-4 flex gap-3">
            <CheckoutButton priceId={priceHHHUpfront} label={`Pay Upfront – ${hhhUpfront}`} />
            <CheckoutButton priceId={priceHHHWeekly} label={`Pay Weekly – ${hhhWeekly}`} />
            <Link href="/services/help-her-heal" className="btn">Details</Link>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-8">Pricing auto-localizes based on your region (CAD in Canada, USD elsewhere).</p>
    </section>
  )
}
