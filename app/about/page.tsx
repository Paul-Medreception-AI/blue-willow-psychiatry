import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'

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
      {/* Page header: from her draft Philosophy page. */}
      <PageHero title={"Care That Fits Your Life and Your Needs"} subtitle={"Understanding, thorough, and individualized mental health care in Tooele, UT."} crumb="About" image="/images/eucalyptus-white-flowers.jpg" position="object-[center_40%]" />

      <section className="bg-[var(--color-cream)] py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-5">
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)] lg:col-span-3 lg:pr-12">
            <h2 className="font-cormorant text-4xl text-[var(--color-primary)]">Our Treatment Philosophy</h2>
            <p>Our primary goal is to understand how your symptoms are impacting your daily life and keeping you from living the life you want. Once we know your goals and the challenges you face, we can design a treatment plan to allow you to stop suffering and achieve your full potential.</p>
            <p>We want this to be as easy as possible, and understand the demands on your time. We offer both in-office and virtual visits as well as offering appointments on weekends and evenings.</p>
            <p>We know you are here because you have been trying, but what you are doing hasn&apos;t worked. At Blue Willow Psychiatry, we will explore different approaches so your efforts lead to real improvement. We like to think of ourselves as a coach: you do the work, but we give you guidance, tools, techniques and exercises so all your hard work results in real improvement. Sometimes treatment is therapy, medications, lifestyle or diet changes, or a combination of these.</p>
            <p>If you already have a great therapist we want you to keep working with them, and we are happy to collaborate care. If you don&apos;t, we might suggest therapy at Blue Willow Psychiatry, or we will help you find an amazing therapist in our community that specializes in your unique needs.</p>
            <p><Link href="/team" className="text-[var(--color-primary)] font-semibold underline">Meet Kristi Lawrence, APRN</Link>, who founded Blue Willow Psychiatry in 2023.</p>
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
                  <span>In-office and virtual visits. Evening and weekend appointments available.</span>
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
              <h3 className="mt-4 font-cormorant text-xl font-bold text-[var(--color-primary)]">A Coach in Your Corner</h3>
              <p className="mt-3 text-[var(--color-muted)]">You do the work, but we give you guidance, tools, techniques and exercises so all your hard work results in real improvement.</p>
            </div>
            <div className="animate-fade-up rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-8">
              <svg className="h-8 w-8 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <h3 className="mt-4 font-cormorant text-xl font-bold text-[var(--color-primary)]">Mind and Body Together</h3>
              <p className="mt-3 text-[var(--color-muted)]">Our emotions are also experienced physically in our bodies, and our physical wellness impacts our mood, emotions, energy levels, and behavior. If needed, we can order labs or tests to understand your physical body too.</p>
            </div>
            <div className="animate-fade-up rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-8">
              <svg className="h-8 w-8 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
              <h3 className="mt-4 font-cormorant text-xl font-bold text-[var(--color-primary)]">Careful, Safe Prescribing</h3>
              <p className="mt-3 text-[var(--color-muted)]">We can, and often will, prescribe controlled substances, but only when we agree the benefit outweighs the risks. They are not prescribed at your first visit, and we may ask for outside records or drug screens to keep you safe.</p>
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