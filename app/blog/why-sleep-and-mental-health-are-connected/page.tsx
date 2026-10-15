import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Sleep and Mental Health Are Connected',
  description: 'Learn how sleep and mental health influence each other, what the research shows, and practical steps that may help you rest and feel better.',
  alternates: { canonical: '/blog/why-sleep-and-mental-health-are-connected' },
  openGraph: {
    title: 'Why Sleep and Mental Health Are Connected',
    description: 'Learn how sleep and mental health influence each other, what the research shows, and practical steps that may help you rest and feel better.',
    url: 'https://www.bluewillowpsych.com/blog/why-sleep-and-mental-health-are-connected',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Why Sleep and Mental Health Are Connected',
    description: 'Learn how sleep and mental health influence each other, what the research shows, and practical steps that may help you rest and feel better.',
  },
}

const tips = [
  'Keep a consistent wake time, even on weekends, to steady your body clock.',
  'Dim lights and put screens away for the last hour before bed.',
  'Limit caffeine in the afternoon and avoid heavy meals or alcohol close to bedtime.',
  'Keep your bedroom cool, dark and quiet, and use the bed only for sleep.',
  'Get daylight and some physical activity earlier in the day.',
  'Write down worries earlier in the evening so they are not waiting for you at bedtime.',
]

const related = [
  { title: 'Our Services', href: '/services', desc: 'See the kinds of mental health care offered at the practice.' },
  { title: 'Conditions We Treat', href: '/conditions', desc: 'Learn about common mental health conditions and how they are approached.' },
  { title: 'More Resources', href: '/blog', desc: 'Browse patient education articles from Blue Willow Psychiatry.' },
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Why Sleep and Mental Health Are Connected</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-why-sleep-and-mental-health-are-connected.jpg"} alt={"A person peacefully sleeping with an eye mask, wrapped in a purple blanket on a white background."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          It is 2 a.m., and your mind will not slow down. You replay the day, rehearse tomorrow, and watch the clock. By morning you feel foggy, irritable and discouraged, which makes the next night harder still. If this cycle sounds familiar, you are not alone, and it is not a personal failing. Sleep and mental health are deeply intertwined, and understanding that link is a powerful first step toward feeling better.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How Sleep Affects the Mind</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Sleep is not simply rest. While you sleep, your brain consolidates memories, clears metabolic waste, and regulates the systems that manage mood and stress. Areas involved in emotional processing, such as the amygdala and prefrontal cortex, depend on adequate sleep to work together well. When sleep falls short, emotional reactions tend to become stronger while the ability to think through and calm them becomes weaker.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          That is why even a few poor nights can leave you more anxious, more easily frustrated, and less able to concentrate or make decisions.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">A Two-Way Relationship</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          For many years, sleep problems were viewed mainly as a symptom of conditions like depression or anxiety. Research now shows the connection runs in both directions. Mental health conditions can disrupt sleep, and ongoing sleep problems can raise the risk of developing or worsening those conditions.
        </p>
        <ul className="space-y-3 mb-4">
          {[
            'Depression is commonly linked with insomnia, early waking, or sleeping far more than usual.',
            'Anxiety can keep the body in a state of alertness that makes falling asleep difficult.',
            'Bipolar disorder often involves marked changes in the need for sleep during mood episodes.',
            'Trauma and post-traumatic stress can bring nightmares and fragmented sleep.',
            'ADHD is frequently associated with delayed sleep timing and restless nights.',
          ].map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant animate-fade-up">
          Research now shows the connection runs in both directions.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Anyone can be affected. Teenagers, whose body clocks naturally shift later, new parents, shift workers, older adults, and people under heavy stress are all vulnerable to sleep disruption. Those who already live with a mental health condition are especially likely to notice that sleep and mood rise and fall together. Studies have found that insomnia is a risk factor for later depression, and that treating sleep difficulties can improve mood outcomes for many people.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Signs Sleep May Be Affecting Your Mental Health</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Occasional bad nights are normal. It may be time to pay closer attention if you notice that:
        </p>
        <ul className="space-y-3 mb-4">
          {[
            'Trouble falling or staying asleep happens most nights for several weeks.',
            'You feel persistently sad, worried, or on edge during the day.',
            'Concentration, memory, or motivation have noticeably declined.',
            'You rely on alcohol or other substances to fall asleep.',
            'Daytime exhaustion interferes with work, relationships, or safe driving.',
          ].map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps for Better Sleep</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Healthy sleep habits, often called sleep hygiene, will not solve every problem, but they form a helpful foundation. Consider these steps:
        </p>
        <ul className="space-y-3 mb-4">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If you cannot fall asleep after a while, get up, do something quiet in low light, and return to bed when sleepy. Lying awake frustrated can teach the brain to associate bed with stress.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Professional Help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Self-help strategies are valuable, but they are not always enough. When sleep trouble lasts more than a few weeks, or comes with low mood, anxiety, racing thoughts, or thoughts of self-harm, a professional evaluation can help sort out what is driving the problem. Treatment may include therapy approaches designed for insomnia, care for an underlying condition, a review of medications, or a combination. Because sleep and mood affect each other, addressing one often helps the other.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If you are in crisis or thinking about harming yourself, call or text 988 (the Suicide and Crisis Lifeline) or call 911 right away. Otherwise, you can reach Blue Willow Psychiatry in Tooele, UT at (435) 200-3430 to talk about your concerns. You deserve rest, and support is available.
        </p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">From Blue Willow Psychiatry</p>
          <p className="text-[var(--color-muted)] text-sm mt-2 leading-relaxed">This article is for general education and does not replace personal medical advice, diagnosis, or treatment.</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((r) => (
            <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.25v13m0-13C10.8 5.5 9.2 5 7.5 5S4.2 5.5 3 6.25v13C4.2 18.5 5.8 18 7.5 18s3.3.5 4.5 1.25m0-13C13.2 5.5 14.8 5 16.5 5s3.3.5 4.5 1.25v13C19.8 18.5 18.2 18 16.5 18s-3.3.5-4.5 1.25" /></svg>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">{r.title}</h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">{r.desc}</p>
            </a>
          ))}
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