'use client'
import { useState } from 'react'

export default function CheckoutButton({ priceId, label }: { priceId: string, label: string }) {
  const [loading, setLoading] = useState(false)
  async function go() {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId })
      })
      const data = await res.json()
      if (data.url) window.location.href = data.url
    } finally {
      setLoading(false)
    }
  }
  return (
    <button onClick={go} className="btn btn-primary" disabled={loading}>
      {loading ? 'Redirecting…' : label}
    </button>
  )
}
