'use client'
import CheckoutButton from '@/components/CheckoutButton'
import { useCurrency } from '@/components/CurrencyProvider'

export default function ERCEM() {
  const { currency } = useCurrency()
  const isCAD = currency === 'CAD'
  const amount = isCAD ? '120 CAD' : '100 USD'
  const priceId = isCAD ? process.env.NEXT_PUBLIC_PRICE_ERCEM_CAD! : process.env.NEXT_PUBLIC_PRICE_ERCEM_USD!

  return (
    <section className="container py-16">
      <h1 className="h1">ERCEM-Informed Couples Work</h1>
      <p className="lead max-w-3xl mt-2">
        75-minute, empathy-centered coaching guided by the Early Recovery Couples Empathy Model (ERCEM). Educational coaching, not psychotherapy.
      </p>
      <div className="card mt-8 max-w-2xl">
        <h2 className="h2">Session Rate ({isCAD ? 'Canada' : 'United States / International'})</h2>
        <p className="mt-2 text-gray-700"><strong>{amount}</strong> per 75-minute session</p>
        <div className="flex gap-3 mt-6">
          <CheckoutButton priceId={priceId} label={`Book – ${amount}`} />
          <a className="btn" href="/book">Schedule</a>
        </div>
        <p className="text-xs text-gray-500 mt-4">Pricing auto-localizes based on your region.</p>
      </div>
    </section>
  )
}
