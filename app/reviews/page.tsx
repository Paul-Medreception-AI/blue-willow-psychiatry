import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Patient Reviews | Blue Willow Psychiatry in Tooele, UT',
  description: 'Share your experience with Blue Willow Psychiatry in Tooele, UT. We value feedback from patients about their mental health care.',
  alternates: { canonical: '/reviews' },
  openGraph: {
    title: 'Patient Reviews | Blue Willow Psychiatry in Tooele, UT',
    description: 'Share your experience with Blue Willow Psychiatry in Tooele, UT. We value feedback from patients about their mental health care.',
    url: 'https://www.bluewillowpsych.com/reviews',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Patient Reviews | Blue Willow Psychiatry in Tooele, UT',
    description: 'Share your experience with Blue Willow Psychiatry in Tooele, UT. We value feedback from patients about their mental health care.',
  },
}

export default function ReviewsPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light mb-4">Patient Reviews</h1>
          <p className="text-lg text-white/90">
            Your experience matters to us, and we welcome the chance to hear how we can care for you better.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center animate-fade-up">
          <svg className="w-8 h-8 mx-auto mb-6 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6m-9 8l3-3h11a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14z" />
          </svg>
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-4">We&apos;d Love Your Feedback</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-8">
            If you have been a patient at Blue Willow Psychiatry, we would be grateful to hear about your experience. Your feedback helps us keep improving the care we provide. Reach out through our contact page and let us know how we did.
          </p>
          {/* TODO(optimize): drop in real Google/Healthgrades reviews here once available */}
          <Link
            href="/contact"
            className="inline-block rounded-full bg-[var(--color-accent)] px-8 py-3 font-medium text-white transition-colors hover:bg-[var(--color-accent-dark)]"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-4">Mental Health Care That Truly Understands You</h2>
          <p className="text-white/90 mb-8">
            Free 15 minute consultations are available. Call (435) 200-3430 or reach out online to get started.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white px-8 py-3 font-medium text-[var(--color-dark)] transition-colors hover:bg-[var(--color-light)]"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}