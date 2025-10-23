'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'

type Currency = 'USD' | 'CAD'
type CurrencyContextType = { currency: Currency, setCurrency: (c: Currency) => void }

const CurrencyContext = createContext<CurrencyContextType>({ currency: 'USD', setCurrency: () => {} })

export function useCurrency() {
  return useContext(CurrencyContext)
}

export default function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('USD')

  useEffect(() => {
    async function detect() {
      try {
        const res = await fetch('https://ipapi.co/json')
        const data = await res.json()
        if (data && data.country === 'CA') setCurrency('CAD')
        else setCurrency('USD')
      } catch {
        setCurrency('USD')
      }
    }
    detect()
  }, [])

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  )
}
