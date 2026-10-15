import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Living With Bipolar Disorder | Blue Willow Psychiatry',
  description: 'Learn what bipolar disorder is, who it affects, how it is treated, and practical daily strategies for managing mood episodes and building stability.',
  alternates: { canonical: '/blog/living-with-bipolar-disorder' },
  openGraph: {
    title: 'Living With Bipolar Disorder | Blue Willow Psychiatry',
    description: 'Learn what bipolar disorder is, who it affects, how it is treated, and practical daily strategies for managing mood episodes and building stability.',
    url: 'https://www.bluewillowpsych.com/blog/living-with-bipolar-disorder',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Living With Bipolar Disorder | Blue Willow Psychiatry',
    description: 'Learn what bipolar disorder is, who it affects, how it is treated, and practical daily strategies for managing mood episodes and building stability.',
  },
}

const tips = [
  'Keep a consistent sleep and wake schedule, even on weekends.',
  'Track your mood, sleep, and energy daily to spot early warning signs.',
  'Take medication exactly as prescribed, and talk to your prescriber before changing anything.',
  'Limit alcohol and avoid recreational drugs, which can trigger episodes.',
  'Build a support plan with trusted people who know your warning signs.',
  'Keep regular routines for meals, movement, and time with others.',
]

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Living With Bipolar Disorder</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-living-with-bipolar-disorder.jpg"} alt={"A contemplative man sits in a corner of a dimly lit bedroom, reflecting deep emotions."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)]">
        <p className="leading-loose text-base">
          One month you feel unstoppable, sleeping little and chasing every idea. The next, getting out of bed feels impossible. If this pattern sounds familiar, you are not alone, and it is not a personal failing. Bipolar disorder is a medical condition, and with the right care, many people live full, steady, meaningful lives.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Bipolar Disorder Is</h2>
        <p className="leading-loose text-base mb-4">
          Bipolar disorder is a mood disorder marked by distinct shifts in mood, energy, activity, and sleep. These shifts go well beyond ordinary ups and downs. They can last days or weeks and can interfere with work, relationships, and safety.
        </p>
        <p className="leading-loose text-base mb-4">
          Episodes fall into a few types. Manic episodes involve unusually elevated or irritable mood, racing thoughts, decreased need for sleep, and risky decisions. Hypomanic episodes are similar but milder. Depressive episodes bring persistent sadness, loss of interest, fatigue, and trouble concentrating. Clinicians describe bipolar I, bipolar II, and cyclothymic disorder based on the pattern and severity of episodes.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who It Affects</h2>
        <p className="leading-loose text-base mb-4">
          Bipolar disorder affects people of every background. It often first appears in late adolescence or early adulthood, though it can begin earlier or later. Research shows that genetics play a significant role, so having a close relative with the condition raises the likelihood. Stress, trauma, and major life changes can contribute to when episodes begin.
        </p>
        <p className="leading-loose text-base mb-4">
          Because depressive episodes are often the first or most common experience, bipolar disorder is sometimes mistaken for major depression. This can delay an accurate diagnosis, which is why sharing any history of elevated mood or reduced need for sleep with your clinician matters.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Treatment Matters</h2>
        <p className="leading-loose text-base mb-4">
          Untreated bipolar disorder tends to cause repeated episodes that can strain finances, careers, family bonds, and physical health. It is also linked to a higher risk of suicidal thoughts. The encouraging news is that the condition is treatable, and consistent care reduces the frequency and intensity of episodes.
        </p>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Bipolar disorder is a medical condition, and with the right care, many people live full, steady, meaningful lives.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Shows About Treatment</h2>
        <p className="leading-loose text-base mb-4">
          Medication is the foundation of treatment for most people. Mood stabilizers such as lithium, certain anticonvulsants, and some second-generation antipsychotics have strong evidence for preventing relapse. Finding the right medication and dose often takes time and adjustment, and regular follow-up helps keep treatment safe and effective.
        </p>
        <p className="leading-loose text-base mb-4">
          Therapy adds meaningful benefit alongside medication. Psychoeducation, cognitive behavioral therapy, family-focused therapy, and interpersonal and social rhythm therapy help people recognize triggers, manage stress, and keep daily routines stable. Studies consistently show that combining medication and therapy leads to better long-term outcomes than either alone.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Strategies for Daily Life</h2>
        <p className="leading-loose text-base mb-4">
          Day-to-day habits can make a real difference in staying well. These steps are commonly recommended alongside professional treatment:
        </p>
        <ul className="space-y-3 my-6">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Supporting Someone You Love</h2>
        <p className="leading-loose text-base mb-4">
          If a family member or friend lives with bipolar disorder, learning about the condition is a powerful first step. Listen without judgment, learn the early warning signs together, and encourage ongoing treatment. Take care of your own wellbeing too; supporters need rest and support as well.
        </p>
        <p className="leading-loose text-base mb-4">
          If you or someone you know is thinking about self-harm or is in crisis, call or text 988 (the Suicide and Crisis Lifeline) or call 911 right away.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Taking the Next Step</h2>
        <p className="leading-loose text-base mb-4">
          Living with bipolar disorder is a long-term journey, but you do not have to navigate it alone. If you recognize these patterns in yourself or someone close to you, a conversation with a mental health professional can bring clarity and a plan. Blue Willow Psychiatry in Tooele, UT offers mental health care; you can reach the practice at (435) 200-3430.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">From Blue Willow Psychiatry</p>
          <p className="text-sm text-[var(--color-muted)] mt-2 leading-relaxed">This article is for general education and is not a substitute for personal medical advice, diagnosis, or treatment.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/conditions/bipolar-disorder" className="animate-fade-up block bg-white rounded-2xl border border-[var(--color-border)] p-6 hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" /></svg>
              <h4 className="font-cormorant text-xl font-semibold text-[var(--color-ink)] mb-2">Bipolar Disorder</h4>
              <p className="text-sm text-[var(--color-muted)]">Learn about symptoms, diagnosis, and care options.</p>
            </a>
            <a href="/services/medication-management" className="animate-fade-up block bg-white rounded-2xl border border-[var(--color-border)] p-6 hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <h4 className="font-cormorant text-xl font-semibold text-[var(--color-ink)] mb-2">Medication Management</h4>
              <p className="text-sm text-[var(--color-muted)]">How ongoing medication care supports stability.</p>
            </a>
            <a href="/blog" className="animate-fade-up block bg-white rounded-2xl border border-[var(--color-border)] p-6 hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v12m0-12C10.5 5.5 8 5 5 5v12c3 0 5.5.5 7 1.75M12 6.75C13.5 5.5 16 5 19 5v12c-3 0-5.5.5-7 1.75" /></svg>
              <h4 className="font-cormorant text-xl font-semibold text-[var(--color-ink)] mb-2">Resources Hub</h4>
              <p className="text-sm text-[var(--color-muted)]">Browse all patient education articles.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/90">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full border border-white/40">Contact Us</a>
        </div>
      </section>
    </main>
  )
}