import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Blue Willow Psychiatry | Tooele, UT',
  description: 'Contact Blue Willow Psychiatry in Tooele, UT. Call (435) 200-3430 or email to schedule a visit or ask about a free 15 minute consultation.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Blue Willow Psychiatry | Tooele, UT',
    description: 'Contact Blue Willow Psychiatry in Tooele, UT. Call (435) 200-3430 or email to schedule a visit or ask about a free 15 minute consultation.',
    url: 'https://www.bluewillowpsych.com/contact',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Blue Willow Psychiatry | Tooele, UT',
    description: 'Contact Blue Willow Psychiatry in Tooele, UT. Call (435) 200-3430 or email to schedule a visit or ask about a free 15 minute consultation.',
  },
}

export default function ContactPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-cormorant text-6xl font-light">Get In Touch</h1>
          <p className="mt-6 text-lg text-white/90">
            We&apos;d love to hear from you. Reach out to schedule an appointment or ask a question.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div id="form" className="animate-fade-up bg-white rounded-2xl p-10 shadow-sm border border-[var(--color-border)] self-start">
            {/* TODO(optimize): wire a real contact form (Studio ingest) before launch */}
            <h2 className="font-cormorant text-3xl mb-8 text-[var(--color-primary)]">Send Us a Message</h2>
            <p className="text-[var(--color-ink)] mb-8">
              The quickest way to reach us is to call or email. Tell us what you need and we will help you with the next step.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:(435) 200-3430"
                className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white px-6 py-3 rounded-xl font-semibold"
              >
                Call (435) 200-3430
              </a>
              <a
                href="mailto:Kristi@BlueWillowPsych.com"
                className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-light)] transition-colors px-6 py-3 rounded-xl font-semibold"
              >
                Email us
              </a>
            </div>
            <p className="text-[var(--color-muted)] text-xs mt-4">
              Please do not send medical details or personal health information by email. Email is not a secure way to share private health information.
            </p>
          </div>

          <div className="space-y-8">
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)]">
              <svg className="w-8 h-8 stroke-[var(--color-primary)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">Visit Us</h3>
              <p className="text-[var(--color-ink)]">28 North Main Street</p>
              <p className="text-[var(--color-ink)]">Tooele, UT 84074</p>
            </div>

            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)]">
              <svg className="w-8 h-8 stroke-[var(--color-primary)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.5l1.5 4-2 1.5a11 11 0 005.5 5.5L16 12l4 1.5V16a2 2 0 01-2 2A15 15 0 013 5z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">Call</h3>
              <a href="tel:(435) 200-3430" className="font-cormorant text-3xl font-bold text-[var(--color-primary)] hover:text-[var(--color-dark)] transition-colors">
                (435) 200-3430
              </a>
              <p className="mt-3 text-[var(--color-ink)]">
                Email:{' '}
                <a href="mailto:Kristi@BlueWillowPsych.com" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] underline">
                  Kristi@BlueWillowPsych.com
                </a>
              </p>
            </div>

            <div className="animate-fade-up bg-[var(--color-light)] rounded-2xl p-8">
              <svg className="w-8 h-8 stroke-[var(--color-primary)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">Hours</h3>
              <p className="text-[var(--color-ink)]">Call for availability</p>
            </div>

            <div className="animate-fade-up bg-[var(--color-primary)] text-white rounded-2xl p-8">
              <svg className="w-8 h-8 mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M8 3v4M16 3v4" />
              </svg>
              <h3 className="font-cormorant text-2xl mb-2">Book an Appointment</h3>
              <p className="text-white/90 mb-6">
                Start with a free 15 minute consultation to ask questions and see if we are a good fit.
              </p>
              <a
                href="#form"
                className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white px-6 py-3 rounded-xl font-semibold"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}