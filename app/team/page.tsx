import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const TITLE = 'Kristi Lawrence, APRN | Psychiatric NP in Tooele, UT'
const DESCRIPTION = 'Meet Kristi Lawrence, APRN, a family and psychiatric mental health nurse practitioner who founded Blue Willow Psychiatry in Tooele, UT in 2023.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/team' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.bluewillowpsych.com/team',
    siteName: 'Blue Willow Psychiatry',
    type: 'profile',
    images: [{ url: '/images/kristi-lawrence-aprn.jpg', width: 825, height: 1100, alt: 'Kristi Lawrence, APRN' }],
  },
  twitter: {
    card: 'summary',
    title: TITLE,
    description: DESCRIPTION,
  },
}

const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kristi Lawrence',
  honorificSuffix: 'APRN',
  jobTitle: 'Psychiatric Mental Health Nurse Practitioner',
  image: 'https://www.bluewillowpsych.com/images/kristi-lawrence-aprn.jpg',
  url: 'https://www.bluewillowpsych.com/team',
  sameAs: ['https://www.psychologytoday.com/profile/1115781'],
  worksFor: {
    '@type': 'MedicalBusiness',
    name: 'Blue Willow Psychiatry',
    telephone: '+1-435-200-3430',
    address: { '@type': 'PostalAddress', streetAddress: '28 North Main Street', addressLocality: 'Tooele', addressRegion: 'UT', postalCode: '84074', addressCountry: 'US' },
  },
}

const CREDENTIALS = [
  'Family Nurse Practitioner (FNP)',
  'Psychiatric Mental Health Nurse Practitioner (PMHNP), her second board certification',
  'More than 16 years caring for patients as a nurse and nurse practitioner',
  'Founded Blue Willow Psychiatry in 2023',
]

const COMMUNITIES = ['Grantsville', 'Erda', 'Stansbury', 'Tooele', 'Stockton']

export default function TeamPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }} />

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <p className="font-dm-sans text-sm uppercase tracking-widest text-white/80">Meet Kristi</p>
            <h1 className="font-cormorant text-5xl md:text-6xl font-light mt-3">Kristi Lawrence, APRN</h1>
            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              Family Nurse Practitioner and Psychiatric Mental Health Nurse Practitioner, and the founder of Blue Willow Psychiatry in Tooele, UT.
            </p>
            <p className="mt-4 text-lg text-white/90 leading-relaxed italic">
              &ldquo;We all have the ability to recover, heal, and grow.&rdquo;
            </p>
          </div>
          <div className="lg:col-span-2 w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/images/kristi-lawrence-aprn.jpg" alt="Kristi Lawrence, APRN" width={825} height={1100} priority quality={90} sizes="(max-width: 1024px) 384px, 40vw" className="block w-full h-auto" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
          <h2 className="font-cormorant text-4xl text-[var(--color-primary)]">About Kristi</h2>
          <p>
            Kristi has been caring for patients for more than 16 years as a nurse and nurse practitioner. In her years working as a Family Nurse Practitioner she discovered both her passion for, and talents in, mental health care, and earned a second board certification as a Psychiatric Mental Health Nurse Practitioner to focus her services in this area.
          </p>
          <p>
            Kristi believes that we all have the ability to recover, heal, and grow. In 2023 she started Blue Willow Psychiatry to serve the residents of Grantsville, Erda, Stansbury, Tooele, Stockton, and surrounding areas. As a Grantsville native, she understands both the unique joys and challenges of living and working in Tooele County, and loves the people and places that make our community special.
          </p>
          <p>
            Most of her career has been spent serving those who are often overlooked, including those who have been, or are currently, incarcerated, those with substance use or addiction issues, persons facing homelessness, and those who are uninsured or underinsured.
          </p>
          <p>
            She is the proud Mama of three children. When not busy with her kids, she spends her time cultivating her collection of an inappropriate number of house plants, sneaking vegetables into the meals she cooks for her family, painting, reading, and if she is really lucky, on her waterski.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mb-5">Training and Experience</h2>
            <ul className="space-y-3">
              {CREDENTIALS.map((c) => (
                <li key={c} className="flex items-start gap-3 text-[var(--color-ink)]">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-[var(--color-muted)]">
              Verified profile on{' '}
              <a href="https://www.psychologytoday.com/profile/1115781" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] underline">Psychology Today</a>
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mb-5">Caring for the Whole Person</h2>
            <p className="text-[var(--color-ink)] leading-relaxed">
              Being both a Family Nurse Practitioner and a Psychiatric Mental Health Nurse Practitioner provides a broad foundation to look at the whole person, not just pieces. If needed, we can order labs or tests to understand not just your mind, but your physical body.
            </p>
            <h3 className="font-dm-sans text-sm uppercase tracking-wide text-[var(--color-primary)] font-semibold mt-6 mb-3">Serving Tooele County</h3>
            <p className="text-[var(--color-ink)]">{COMMUNITIES.join(', ')}, and surrounding areas, in the office in Tooele or by virtual visit.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light">Have Questions? Let&apos;s Talk.</h2>
          <p className="mt-4 text-white/80">Not sure if we are a good fit? Call (435) 200-3430 for a free 15 minute consultation.</p>
          <Link
            href="/contact"
            className="inline-block mt-8 px-8 py-3 rounded-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white font-semibold"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
