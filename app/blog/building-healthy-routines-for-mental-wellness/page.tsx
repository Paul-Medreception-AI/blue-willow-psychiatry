import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Building Healthy Routines for Mental Wellness',
  description: 'Learn how sleep, movement, meals, and daily structure support mental wellness, with practical steps for building routines that last.',
  alternates: { canonical: '/blog/building-healthy-routines-for-mental-wellness' },
  openGraph: {
    title: 'Building Healthy Routines for Mental Wellness',
    description: 'Learn how sleep, movement, meals, and daily structure support mental wellness, with practical steps for building routines that last.',
    url: 'https://www.bluewillowpsych.com/blog/building-healthy-routines-for-mental-wellness',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Building Healthy Routines for Mental Wellness',
    description: 'Learn how sleep, movement, meals, and daily structure support mental wellness, with practical steps for building routines that last.',
  },
}

const tips = [
  'Keep a consistent wake time, even after a rough night',
  'Move your body for a short stretch every day',
  'Eat regular meals so energy and mood stay steadier',
  'Get outside light early in the day',
  'Schedule one small thing you enjoy',
  'Set a screen-free wind-down before bed',
]

const related = [
  { title: 'Our Services', href: '/services', desc: 'See the mental health care offered at our Tooele practice.' },
  { title: 'Conditions We Treat', href: '/conditions', desc: 'Learn about common mental health conditions and their care.' },
  { title: 'More Patient Resources', href: '/blog', desc: 'Browse more educational articles from our practice.' },
]

function Check() {
  return (
    <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Building Healthy Routines for Mental Wellness</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-building-healthy-routines-for-mental-wellness.jpg"} alt={"A woman performing a yoga pose on a mat in an urban park setting during fall."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Some days, the hardest part of caring for your mind is simply getting started. When stress, low mood, or anxiety is heavy, even small tasks can feel enormous. The good news is that you do not need a dramatic life overhaul to feel better. Small, repeatable habits can quietly build a steadier foundation, one day at a time.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Routines Matter for Mental Health</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          A routine is a set of predictable actions that give your day shape. For the brain, predictability can be calming. When sleep, meals, activity, and rest happen at fairly regular times, the body&apos;s internal clock stays more balanced, and that clock influences mood, energy, concentration, and stress response.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Routines also reduce the number of decisions you have to make. When you are depleted, fewer decisions mean more energy left for the things that matter to you.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Benefits From Daily Structure</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Nearly everyone can benefit, but structure can be especially helpful for people living with depression, anxiety, bipolar disorder, attention difficulties, trauma-related symptoms, or major life changes such as a job loss, a move, or grief. Routines are not a replacement for treatment when a condition is present, but they often work alongside it and make other care easier to follow through on.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Suggests</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Research has linked several everyday habits to better mental health outcomes. Regular physical activity has been shown to reduce symptoms of depression and anxiety for many people. Consistent sleep schedules are associated with steadier mood, and sleep disruption is a well-known early warning sign for mood episodes in some conditions. Exposure to natural daylight helps regulate circadian rhythms, and regular social contact is tied to greater resilience.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Behavioral activation, a structured approach used in therapy for depression, is built on a similar idea: scheduling meaningful activities can lift mood even before motivation returns. Action often comes first, and motivation follows.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Action often comes first, and motivation follows.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Habits to Start With</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Choose one or two habits rather than all of them. Success with a small change builds confidence for the next one.
        </p>
        <ul className="space-y-3 mb-4">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <Check />
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Make Routines Realistic and Kind</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          A routine should support you, not become another source of pressure. Start smaller than feels necessary: a five-minute walk, a glass of water and a simple breakfast, or a set bedtime on weeknights. Attach new habits to ones you already have, such as stretching after brushing your teeth.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Expect missed days. Skipping a day does not erase progress. Simply return to the routine at the next opportunity without self-criticism. Flexibility is part of what makes a habit last.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When Routines Are Not Enough</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Healthy habits help, but they cannot always resolve a mental health condition on their own. Consider reaching out for professional support if you notice persistent sadness or worry, changes in sleep or appetite that last for weeks, withdrawal from people or activities, difficulty functioning at work or home, or thoughts of harming yourself.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          If you are in crisis or thinking about suicide, call or text 988 (the Suicide &amp; Crisis Lifeline) or call 911 right away.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If you are in the Tooele area and would like to talk through how you have been feeling, Blue Willow Psychiatry is here to help. Call (435) 200-3430 or reach out through our contact page. Asking for support is a sign of strength, and you do not have to build a healthier routine alone.
        </p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">From Blue Willow Psychiatry</p>
          <p className="text-[var(--color-muted)] text-sm mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{r.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full border border-white/40 transition-colors">Contact Us</a>
        </div>
      </section>
    </main>
  )
}