import './globals.css'
import Link from 'next/link'
import CurrencyProvider from '@/components/CurrencyProvider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b">
          <div className="container flex items-center justify-between py-4">
            <Link href="/" className="font-semibold">
              {process.env.NEXT_PUBLIC_SITE_NAME || 'Coach Site'}
            </Link>
            <nav className="flex gap-6 text-sm">
              <Link href="/services">Services</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/book">Book</Link>
              <Link href="/about">About</Link>
            </nav>
          </div>
        </header>
        <CurrencyProvider>
          <main>{children}</main>
        </CurrencyProvider>
      </body>
    </html>
  )
}
