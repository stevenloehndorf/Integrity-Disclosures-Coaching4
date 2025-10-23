'use client'
import CheckoutButton from '@/components/CheckoutButton'
import { useCurrency } from '@/components/CurrencyProvider'

export default function Recovery() {
  const { currency } = useCurrency()
  const isCAD = currency === 'CAD'
  const amount = isCAD ? '90 CAD' : '80 USD'
  const priceId = isCAD ? process.env.NEXT_PUBLIC_PRICE_RECOVERY_CAD! : process.env.NEXT_PUBLIC_PRICE_RECOVERY_USD!

  return (
    <section className="container py-16">
      <h1 className="h1">Recovery Coaching – Individual</h1>
      <p className="lead max-w-3xl mt-2">
        50-minute, trauma-informed, client-guided coaching focused on neuroplastic habit design, values-based action,
        and multiple pathways (secular and non-secular options).
      </p>
      <div className="card mt-8 max-w-2xl">
        <h2 className="h2">Session Rate ({isCAD ? 'Canada' : 'United States / International'})</h2>
        <p className="mt-2 text-gray-700"><strong>{amount}</strong> per 50-minute session</p>
        <div className="flex gap-3 mt-6">
          <CheckoutButton priceId={priceId} label={`Book – ${amount}`} />
          <a className="btn" href="/book">Schedule</a>
        </div>
        <p className="text-xs text-gray-500 mt-4">Pricing auto-localizes based on your region.</p>
      </div>
    </section>
  )
}
