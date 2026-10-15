import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Blue Willow Psychiatry | Tooele, UT',
  description: 'Learn about Blue Willow Psychiatry in Tooele, UT, where Kristi Lawrence, APRN provides thorough assessment and individualized mental health care.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Blue Willow Psychiatry | Tooele, UT',
    description: 'Learn about Blue Willow Psychiatry in Tooele, UT, where Kristi Lawrence, APRN provides thorough assessment and individualized mental health care.',
    url: 'https://www.bluewillowpsych.com/about',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'About Blue Willow Psychiatry | Tooele, UT',
    description: 'Learn about Blue Willow Psychiatry in Tooele, UT, where Kristi Lawrence, APRN provides thorough assessment and individualized mental health care.',
  },
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <nav className="mb-6 text-sm text-white/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">About</span>
          </nav>
          <h1 className="font-cormorant text-6xl font-light">Care That Fits Your Life and Your Needs</h1>
          <p className="mt-4 text-xl text-white/80">Understanding, thorough, and individualized mental health care in Tooele, UT.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-5">
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)] lg:col-span-3 lg:pr-12">
            <p>Blue Willow Psychiatry was built on the belief that mental health care should feel understanding, not rushed or one-size-fits-all. Led by Kristi Lawrence, APRN, the practice focuses on listening first so that every plan reflects the person behind the diagnosis.</p>
            <p>Our approach begins with thorough assessment. Many people arrive unsure what is wrong, carrying a diagnosis they question, or having tried treatment after treatment without success. We take the time to understand your history and challenges, and when helpful, we use lab tests or other specialized testing.</p>
            <p>Treatment is individualized. For some people that means medication, for others therapy, and often it is a combination. Medication management visits include brief solution-focused therapy, and our goal is to help you get back to living your best life.</p>
          </div>

          <aside className="lg:col-span-2">
            <div className="animate-fade-up rounded-2xl border border-[var(--color-border)] bg-white p-8">
              <h2 className="font-cormorant text-3xl text-[var(--color-primary)]">Visit Us</h2>
              <div className="mt-6 space-y-5 text-[var(--color-ink)]">
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-6 w-6 shrink-0 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.38 12.035 12.035 0 01-7.143-7.143 1.125 1.125 0 01.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102A1.125 1.125 0 005.872 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span>(435) 200-3430</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-6 w-6 shrink-0 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span>28 North Main Street, Tooele, UT 84074</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-6 w-6 shrink-0 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>[Hours to be added]</span>
                </div>
              </div>
              <Link href="/contact" className="mt-8 inline-block rounded-full bg-[var(--color-accent)] px-8 py-3 font-medium text-white transition-colors hover:bg-[var(--color-accent-dark)]">
                Schedule a Consultation
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-16 text-center font-cormorant text-4xl text-[var(--color-primary)]">Our Approach</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="animate-fade-up rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-8">
              <svg className="h-8 w-8 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <h3 className="mt-4 font-cormorant text-xl font-bold text-[var(--color-primary)]">Thorough Understanding</h3>
              <p className="mt-3 text-[var(--color-muted)]">We take time to learn your history, challenges, and goals before settling on a diagnosis. When helpful, lab tests or specialized testing add clarity.</p>
            </div>
            <div className="animate-fade-up rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-8">
              <svg className="h-8 w-8 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <h3 className="mt-4 font-cormorant text-xl font-bold text-[var(--color-primary)]">Individualized Treatment</h3>
              <p className="mt-3 text-[var(--color-muted)]">No two people are alike, so no two plans should be. Your care may include medication, therapy, or a combination built around your life.</p>
            </div>
            <div className="animate-fade-up rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-8">
              <svg className="h-8 w-8 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
              <h3 className="mt-4 font-cormorant text-xl font-bold text-[var(--color-primary)]">Listening First</h3>
              <p className="mt-3 text-[var(--color-muted)]">Care should feel understanding, not rushed. You are heard, your questions are welcome, and your plan is adjusted as your needs change.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-cormorant text-4xl">Ready to Get Started?</h2>
          <p className="mt-4 text-white/80">Reach out to ask questions or schedule a free 15 minute consultation.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-medium text-[var(--color-dark)] transition-colors hover:bg-[var(--color-light)]">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}