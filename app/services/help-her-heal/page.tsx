'use client'
import CheckoutButton from '@/components/CheckoutButton'
import { useCurrency } from '@/components/CurrencyProvider'

export default function HHH() {
  const { currency } = useCurrency()
  const isCAD = currency === 'CAD'
  const weeklyPrice = isCAD ? '70 CAD' : '60 USD'
  const upfrontPrice = isCAD ? '750 CAD' : '650 USD'
  const priceWeekly = isCAD ? process.env.NEXT_PUBLIC_PRICE_HHH_CAD_WEEKLY! : process.env.NEXT_PUBLIC_PRICE_HHH_USD_WEEKLY!
  const priceUpfront = isCAD ? process.env.NEXT_PUBLIC_PRICE_HHH_CAD_UPFRONT! : process.env.NEXT_PUBLIC_PRICE_HHH_USD_UPFRONT!

  return (
    <section className="container py-16">
      <h1 className="h1">Help Her Heal – 12-Week Men’s Empathy Program</h1>
      <p className="lead max-w-3xl mt-2">
        A small-group, coaching-based series that integrates the Help Her Heal workbook in a trauma-informed setting.
      </p>
      <ul className="mt-6 text-gray-700 list-disc ml-6 space-y-2">
        <li>1.5-hour sessions, weekly for 12 weeks</li>
        <li>2–3 participants per cohort</li>
        <li>Skills: empathy, attunement, accountability, repair</li>
      </ul>
      <div className="card mt-8 max-w-2xl">
        <h2 className="h2">Pricing ({isCAD ? 'Canada' : 'United States / International'})</h2>
        <p className="mt-2 text-gray-700"><strong>{weeklyPrice}</strong> per session (weekly) • <strong>{upfrontPrice}</strong> upfront</p>
        <div className="flex gap-3 mt-6">
          <CheckoutButton priceId={priceUpfront} label={`Pay Upfront – ${upfrontPrice}`} />
          <CheckoutButton priceId={priceWeekly} label={`Pay Weekly – ${weeklyPrice}`} />
          <a className="btn" href="mailto:integritydisclosures@gmail.com">Contact for start date</a>
        </div>
        <p className="text-xs text-gray-500 mt-4">Pricing auto-localizes based on your region.</p>
      </div>
    </section>
  )
}
