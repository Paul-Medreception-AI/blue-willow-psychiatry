import type { Metadata } from 'next'
import Script from 'next/script'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import SiteHeader from '../components/SiteHeader'

import { GoogleAnalytics } from '@next/third-parties/google'
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-cormorant' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600'], variable: '--font-dm-sans' })


const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bluewillowpsych.com'),
  title: 'Blue Willow Psychiatry | Mental health care that understands you',
  description: 'Blue Willow Psychiatry offers in-depth assessment and individualized treatment designed to fit your life and needs. Whether you need answers, a second opinion, or a plan that finally works, Kristi Lawrence, APRN is here to help you get back to living your best life.',
  icons: {
    // A eucalyptus leaf like the hero's, white on the site blue (2026-10-15). favicon.png used to be an
    // .ico file under a .png name, so iOS had no home-screen icon.
    icon: [{ url: '/favicon.ico', sizes: '48x48' }, { url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Blue Willow Psychiatry | Mental health care that understands you',
    description: 'Blue Willow Psychiatry offers in-depth assessment and individualized treatment designed to fit your life and needs. Whether you need answers, a second opinion, or a plan that finally works, Kristi Lawrence, APRN is here to help you get back to living your best life.',
    url: 'https://www.bluewillowpsych.com',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Blue Willow Psychiatry | Mental health care that understands you',
    description: 'Blue Willow Psychiatry offers in-depth assessment and individualized treatment designed to fit your life and needs. Whether you need answers, a second opinion, or a plan that finally works, Kristi Lawrence, APRN is here to help you get back to living your best life.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear()
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-[family-name:var(--font-dm-sans)] bg-[var(--color-cream)] text-[var(--color-ink)]">
        <SiteHeader />
        <main>{children}</main>
        <footer className="bg-[var(--color-ink)] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <span className="font-cormorant text-2xl font-semibold text-white">Blue Willow Psychiatry</span>
                <p className="mt-4 text-sm text-white/70 max-w-xs">Mental health care that understands you.</p>
                <p className="mt-4 text-sm text-white/70">In-office and virtual visits. Evening and weekend appointments available.</p>
                <a href="https://www.psychologytoday.com/profile/1115781" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm text-white/70 underline underline-offset-2 hover:text-white transition-colors">Kristi Lawrence on Psychology Today</a>
              </div>
              <div>
                <h3 className="font-cormorant text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                  <li><a href="/conditions" className="hover:text-white transition-colors">Conditions</a></li>
                  <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="/team" className="hover:text-white transition-colors">Meet Kristi</a></li>
                  <li><a href="/telehealth" className="hover:text-white transition-colors">Telehealth</a></li>
                  <li><a href="/insurance" className="hover:text-white transition-colors">Insurance and Fees</a></li>
                  <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-cormorant text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>28 North Main Street, Tooele, UT 84074</li>
                  <li><a href="tel:4352003430" className="hover:text-white transition-colors">(435) 200-3430</a></li>
                  <li><a href="mailto:Kristi@BlueWillowPsych.com" className="hover:text-white transition-colors">Kristi@BlueWillowPsych.com</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10 text-xs text-white/60 space-y-3">
              <p>This website does not collect protected health information. Please do not send medical details by email or through the contact form. If you are in crisis, call or text 988, or call 911.</p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p>© {year} Blue Willow Psychiatry</p>
                <p className="flex flex-wrap items-center gap-2">
                  <a href="/privacy-sms" className="hover:text-white transition-colors">Privacy Policy</a>
                  <span>|</span>
                  <a href="/terms-sms" className="hover:text-white transition-colors">Terms of Service</a>
                  <span>|</span>
                  <a href="/terms-sms#sms-terms" className="hover:text-white transition-colors">SMS Terms</a>
                  <span>|</span>
                  <a href="/patient-form-sms" className="hover:text-white transition-colors">Text Message Sign-Up</a>
                </p>
              </div>
            </div>
            {/* site-credits:start */}
            <p className="mt-6 text-center sm:text-left text-xs opacity-60">Photos by <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">Pexels</a>{' · '}Website built by <a href="https://www.medreception.ai/" target="_blank" rel="noopener" className="underline-offset-2 hover:underline">MedReception AI</a></p>
            {/* site-credits:end */}
          </div>
        </footer>
      </body>
      {/* MedReception patient widget: callback, appointment request and the AI chat, all filed on
          Blue Willow Psychiatry's Studio board (qa-api lambdaWidget, client id 'blue-willow-psychiatry',
          STUDIO_ONLY). Same embed as body1md and gables-pain. */}
      <Script src="https://widget.medreception.ai/embed.js" data-client-id="blue-willow-psychiatry" strategy="afterInteractive" />
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}

    </html>
  )
}