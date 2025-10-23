# ERCEM Coach Site (Integrity Disclosures)

This is the **Integrity Disclosures Coaching Website**, built using **Next.js 14** and designed to be deployed on **Vercel**.

## 🚀 Features
- Clean modular layout using Next.js App Router
- Service pages for:
  - Early Recovery Empathy Model (ERCEM)
  - Recovery Coaching
  - Help Her Heal
- Stripe-based checkout integration (via `app/api/checkout/route.ts`)
- Global styling via `globals.css`
- Currency and checkout components

## 🧩 Folder Structure
```
components/
  ├── CurrencyProvider.tsx
  └── CheckoutButton.tsx
app/
  ├── globals.css
  ├── layout.tsx
  ├── page.tsx
  ├── services/
      ├── page.tsx
      ├── recovery/page.tsx
      ├── ercem/page.tsx
      └── help-her-heal/page.tsx
  └── api/checkout/route.ts
package.json
```

## 🛠️ Setup (No coding required)
1. Upload this folder to **GitHub**
2. Go to **Vercel → Add New Project → Import GitHub Repo**
3. Click **Deploy** and you're live!

## ⚙️ Environment Variables
If you use Stripe or other services, create a `.env.local` file:
```
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key
```

## 🧑‍💼 Author
**Steven Loehndorf**  
Trauma-Informed & Recovery Coach  
Integrity Disclosures  
Website: [IntegrityDisclosures.com](https://integritydisclosures.com)
