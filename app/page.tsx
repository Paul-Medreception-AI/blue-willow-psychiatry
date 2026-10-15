import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Mental Health Care in Tooele, UT | Blue Willow Psychiatry',
  description: 'Blue Willow Psychiatry in Tooele, UT offers in-depth assessment, medication management and solution-focused therapy with Kristi Lawrence, APRN.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Mental Health Care in Tooele, UT | Blue Willow Psychiatry',
    description: 'Blue Willow Psychiatry in Tooele, UT offers in-depth assessment, medication management and solution-focused therapy with Kristi Lawrence, APRN.',
    url: 'https://www.bluewillowpsych.com/',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Mental Health Care in Tooele, UT | Blue Willow Psychiatry',
    description: 'Blue Willow Psychiatry in Tooele, UT offers in-depth assessment, medication management and solution-focused therapy with Kristi Lawrence, APRN.',
  },
}

const trust = [
  'Personalized Care Plans',
  'In-Depth Assessment and Diagnosis',
  'Medication Management and Therapy Combined',
  'Free 15 Minute Consultations Available',
]

const services = [
  {
    name: 'Assessments',
    description: 'Get clarity if you know something is not right, want a second opinion, or have tried treatment after treatment without relief. Our in-depth assessment and diagnosis may include lab tests or other specialized testing.',
    icon: (
      <svg className="w-10 h-10 stroke-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 4h6a1 1 0 011 1v1H8V5a1 1 0 011-1z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h5M16 5h2a2 2 0 012 2v3" />
        <circle cx="16" cy="16" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.5 18.5L21 21" />
      </svg>
    ),
  },
  {
    name: 'Treatment',
    description: 'Individualized treatment built around your life and needs. Sometimes it is medication, sometimes therapy, and often a combination of both.',
    icon: (
      <svg className="w-10 h-10 stroke-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 1.5-.5 2.8-1.3 3.9" />
        <rect x="14" y="15" width="8" height="4" rx="2" transform="rotate(-30 18 17)" />
      </svg>
    ),
  },
  {
    name: 'Medication Management',
    description: 'Ongoing visits to monitor, adjust, and support your medications. Patients with straightforward treatment plans may qualify for a shorter 15 minute appointment.',
    icon: (
      <svg className="w-10 h-10 stroke-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <rect x="2" y="8.5" width="20" height="7" rx="3.5" transform="rotate(-45 12 12)" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 9.5l5 5" />
      </svg>
    ),
  },
]

const steps = [
  { number: '01', title: 'Reach Out', description: 'Call or email to schedule, or book a free 15 minute consultation to ask questions. We can also help you verify your insurance coverage.' },
  { number: '02', title: 'Comprehensive Assessment', description: 'Your new patient consult runs 60 to 80 minutes so we can understand your history and concerns. This may include lab tests or other specialized testing.' },
  { number: '03', title: 'Personalized Treatment', description: 'We develop a plan that may include medication, therapy, or both. Follow-up visits keep your care on track and adjusted to your needs.' },
]

export default function Home() {
  return (
    <main>
      {/* Home hero, from Paul's mockups (2026-10-15): the carafe of eucalyptus on a marble table in soft
          window light (eucalyptus-marble-table.jpg: her original photo, mirrored, extended onto a marble
          tabletop and relit with Stability on Bedrock, then upscaled), on the photo's own light warm
          gray wall, running up behind the translucent header. Desktop: copy on the left, photo on the
          right, masked so it dissolves before the copy. Phones and tablets: the leaves across the top,
          the copy below them (the carafe under the fold looked out of place, Paul 2026-10-15). */}
      <section className="relative -mt-20 overflow-hidden hero-wall">
        <div className="absolute inset-y-0 right-0 hidden lg:block w-[62%] hero-photo-fade" aria-hidden="true">
          <Image src="/images/eucalyptus-marble-table.jpg" alt="" fill priority quality={85} sizes="62vw" className="object-cover object-right" />
        </div>
        <div className="absolute top-0 inset-x-0 h-[400px] md:h-[280px] overflow-hidden lg:hidden hero-leaves-fade" aria-hidden="true">
          <Image src="/images/eucalyptus-marble-table.jpg" alt="" width={2400} height={1924} priority quality={80} sizes="200vw" className="absolute top-0 -left-[40%] w-[200%] md:-left-[24%] md:w-[160%] max-w-none h-auto" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-[290px] md:pt-[260px] pb-16 lg:pt-44 lg:pb-36 lg:min-h-[88vh] flex items-center">
          <div className="w-full lg:max-w-[46%]">
            <p className="flex items-center gap-4 font-dm-sans text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Kristi Lawrence, APRN
              <span className="inline-block w-12 h-px bg-[var(--color-muted)]" aria-hidden="true" />
            </p>
            <h1 className="font-cormorant text-5xl sm:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-tight text-[var(--color-ink)] mt-6">
              Mental health care that understands <em>you</em>.
            </h1>
            <p className="mt-6 text-lg text-[var(--color-ink)]/80 leading-relaxed max-w-xl">
              Blue Willow Psychiatry in Tooele, UT. In-office and virtual visits, with evening and weekend appointments available.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-dark)] text-white px-8 py-4 rounded-lg font-semibold shadow-md transition-colors">
                Schedule a Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
              <Link href="/services" className="font-semibold text-[var(--color-primary)] underline decoration-2 underline-offset-8 hover:text-[var(--color-dark)]">
                Learn More
              </Link>
            </div>
            <p className="mt-8 text-sm text-[var(--color-muted)]">Have questions first? Call <a href="tel:4352003430" className="font-semibold text-[var(--color-primary)] underline">(435) 200-3430</a> for a free 15 minute consultation.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 border-b border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-4">
          {trust.map((t) => (
            <div key={t} className="flex items-center gap-2">
              <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              <span className="font-bold text-[var(--color-ink)] text-sm">{t}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl text-center text-[var(--color-ink)] mb-4">How We Can Help</h2>
          <p className="text-center text-[var(--color-muted)] mb-16">Mental health care in Tooele, UT, tailored to you.</p>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.name} className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {s.icon}
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">{s.name}</h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">{s.description}</p>
                <Link href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-5 items-center">
          <div className="lg:col-span-3 animate-fade-up">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)]">Care That Fits Your Life and Your Needs</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mt-6">
              Blue Willow Psychiatry was built on the belief that mental health care should feel understanding, not rushed or one-size-fits-all. It was founded in 2023 by Kristi Lawrence, APRN, a Grantsville native who is board certified as both a Family Nurse Practitioner and a Psychiatric Mental Health Nurse Practitioner, so she looks at the whole person, not just pieces.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mt-4">
              Our approach begins with thorough assessment. Many people arrive unsure what is wrong, carrying a diagnosis they question, or having tried treatment after treatment without success. We take the time to understand your history and challenges, and when helpful, we use lab tests or other specialized testing.
            </p>
            <Link href="/team" className="inline-block text-[var(--color-primary)] font-semibold mt-6 hover:underline">
              Meet Kristi →
            </Link>
          </div>
          <div className="lg:col-span-2 animate-fade-up">
            <Link href="/team" className="block rounded-2xl overflow-hidden shadow-xl max-w-sm mx-auto">
              <Image src="/images/kristi-lawrence-aprn.jpg" alt="Kristi Lawrence, APRN" width={825} height={1100} sizes="(max-width: 1024px) 384px, 33vw" className="block w-full h-auto" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-16">Getting Started Is Simple</h2>
          <div className="grid gap-12 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.number} className="animate-fade-up">
                <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-60">{s.number}</div>
                <h3 className="font-cormorant text-2xl mt-2">{s.title}</h3>
                <p className="font-sans text-sm text-white/70 mt-3 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl font-light mb-6">Mental health care that understands you</h2>
          <Link href="/contact" className="inline-block bg-white text-[var(--color-dark)] font-bold px-12 py-5 rounded-2xl shadow-2xl hover:-translate-y-1 transition-all text-lg">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}