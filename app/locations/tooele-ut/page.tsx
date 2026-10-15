import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mental Health Care Tooele UT | Blue Willow Psychiatry',
  description: 'Looking for mental health care in Tooele, UT? Blue Willow Psychiatry is at 28 North Main Street, Tooele. Call (435) 200-3430 or request a visit.',
  alternates: { canonical: '/locations/tooele-ut' },
  openGraph: {
    title: 'Mental Health Care Tooele UT | Blue Willow Psychiatry',
    description: 'Looking for mental health care in Tooele, UT? Blue Willow Psychiatry is at 28 North Main Street, Tooele. Call (435) 200-3430 or request a visit.',
    url: 'https://www.bluewillowpsych.com/locations/tooele-ut',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Mental Health Care Tooele UT | Blue Willow Psychiatry',
    description: 'Looking for mental health care in Tooele, UT? Blue Willow Psychiatry is at 28 North Main Street, Tooele. Call (435) 200-3430 or request a visit.',
  },
}

const services = [
  {
    title: 'Psychiatric Evaluation',
    desc: 'A thorough conversation about your symptoms, history and goals to help guide a care plan.',
    href: '/services',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    title: 'Anxiety & Depression Care',
    desc: 'Support for common mood and anxiety concerns, tailored to the person rather than the diagnosis.',
    href: '/services',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    title: 'Medication Management',
    desc: 'Ongoing review of medications, benefits and side effects as part of a collaborative treatment plan.',
    href: '/services',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  },
]

const faqs = [
  {
    q: 'Where is the office?',
    a: 'The office is at 28 North Main Street, Tooele, UT 84074. Enter that address in your preferred map app for turn-by-turn directions from wherever you are starting.',
  },
  {
    q: 'Are new patients being seen?',
    a: 'Please call (435) 200-3430 or send a message through our contact page to ask about current availability and next steps.',
  },
  {
    q: 'What should I bring to my first visit?',
    a: 'It helps to bring a photo ID, a list of current medications and supplements, any relevant records, and notes on your symptoms and questions. If you have insurance, bring your card.',
  },
  {
    q: 'How do I book an appointment?',
    a: 'Call (435) 200-3430 or use the contact page to request a visit. The practice will follow up with you about scheduling.',
  },
]

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm text-white/80 mb-6">
            <Link href="/" className="hover:underline">Home</Link> › Locations › <span>Tooele, UT</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light mb-6">Mental Health Care Near Tooele, UT</h1>
          <p className="text-xl text-white/90 mb-8">Serving Tooele, Grantsville, Erda, Stansbury, Stockton, and surrounding areas, in person or by virtual visit.</p>
          <Link href="/contact" className="inline-block rounded-full bg-[var(--color-accent)] px-8 py-3 font-medium text-white border border-white/40 transition hover:bg-[var(--color-accent-dark)]">Schedule in Tooele</Link>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/location-tooele-ut.jpg"} alt={"A stunning aerial perspective of snow-dusted Salt Lake City, highlighting its winter landscape and surrounding mountains."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl text-[var(--color-primary)] mb-6">Serving the Tooele Area</h2>
          <p className="text-[var(--color-ink)] leading-relaxed mb-4">
            Blue Willow Psychiatry is located at 28 North Main Street in Tooele, UT 84074, and serves residents of Grantsville, Erda, Stansbury, Tooele, Stockton, and surrounding areas. Founder Kristi Lawrence, APRN is a Grantsville native. Use the address in your map app for directions from your starting point, and call (435) 200-3430 if you have questions before you come in.
          </p>
          <p className="text-[var(--color-ink)] leading-relaxed mb-8">
            Patients from Tooele can expect a respectful, unhurried conversation about what brings them in and what they hope to change. Mental health care works best as a partnership, so your questions and preferences are part of every step in planning your care.
          </p>
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center text-[var(--color-primary)]">
            <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-primary)] mb-12">Services Available to Tooele Patients</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="animate-fade-up rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-8 transition hover:shadow-lg">
                <div className="text-[var(--color-accent)] mb-4">
                  <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </div>
                <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-3">{s.title}</h3>
                <p className="text-[var(--color-muted)] mb-4">{s.desc}</p>
                <Link href={s.href} className="text-[var(--color-accent)] font-medium hover:text-[var(--color-accent-dark)]">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-primary)] mb-10">Tooele Patient Questions</h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="animate-fade-up rounded-2xl bg-white border border-[var(--color-border)] p-6">
                <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{f.q}</h3>
                <p className="text-[var(--color-ink)] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-6">Get Care Close to Home</h2>
          <p className="text-white/90 mb-8">Call (435) 200-3430 or reach out online to start the conversation.</p>
          <Link href="/contact" className="inline-block rounded-full bg-[var(--color-accent)] px-8 py-3 font-medium text-white border border-white/40 transition hover:bg-[var(--color-accent-dark)]">Contact Us</Link>
        </div>
      </section>
    </main>
  )
}