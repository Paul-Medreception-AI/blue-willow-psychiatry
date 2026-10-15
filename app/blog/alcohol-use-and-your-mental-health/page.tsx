import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alcohol Use and Your Mental Health | Blue Willow Psychiatry',
  description: 'Learn how alcohol affects anxiety, depression, sleep and mood, the warning signs of problem drinking, and when to reach out for professional support.',
  alternates: { canonical: '/blog/alcohol-use-and-your-mental-health' },
  openGraph: {
    title: 'Alcohol Use and Your Mental Health | Blue Willow Psychiatry',
    description: 'Learn how alcohol affects anxiety, depression, sleep and mood, the warning signs of problem drinking, and when to reach out for professional support.',
    url: 'https://www.bluewillowpsych.com/blog/alcohol-use-and-your-mental-health',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Alcohol Use and Your Mental Health | Blue Willow Psychiatry',
    description: 'Learn how alcohol affects anxiety, depression, sleep and mood, the warning signs of problem drinking, and when to reach out for professional support.',
  },
}

const tips = [
  'Notice how you feel the day after drinking, not just during the evening',
  'Set clear limits ahead of time and track how much you actually drink',
  'Plan alcohol-free days and find other ways to unwind, such as walking or time with friends',
  'Avoid drinking as a way to cope with stress, sadness, or worry',
  'Tell someone you trust if you are trying to cut back',
  'Talk with a mental health professional if cutting back feels hard',
]

const related = [
  { title: 'Our Services', desc: 'Explore the mental health care we provide.', href: '/services' },
  { title: 'Conditions We Treat', desc: 'Learn about common mental health conditions.', href: '/conditions' },
  { title: 'More Patient Resources', desc: 'Browse all of our educational articles.', href: '/blog' },
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Alcohol Use and Your Mental Health</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-alcohol-use-and-your-mental-health.jpg"} alt={"A man sits on a couch, drinking wine in a dimly lit room, conveying a contemplative mood."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          For many people, a drink at the end of a hard day feels like relief. It softens the edges, quiets the racing thoughts, and helps the evening pass. But for a lot of us, that relief does not last. The next morning can bring more worry, a heavier mood, and a nagging sense that something is off. If you have ever wondered whether alcohol is helping or hurting your mental health, you are asking an important question, and you are far from alone.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How Alcohol Affects the Brain</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Alcohol is a depressant. It slows activity in the central nervous system and changes the balance of chemical messengers in the brain, including GABA and glutamate, which influence calm, alertness, and mood. In the short term, this can lower inhibition and create a brief feeling of ease.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          As the alcohol wears off, the brain tries to rebalance itself. That rebound can leave you feeling anxious, irritable, or low. With regular drinking, the brain adapts, and many people find they need more alcohol to get the same effect while feeling worse when they are not drinking.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">The Link Between Alcohol, Anxiety, and Depression</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Research has long shown that alcohol use disorders and mood and anxiety disorders often occur together. The relationship goes in both directions. Heavy drinking can contribute to depression and anxiety, and people who already live with these conditions may turn to alcohol to cope, which can make symptoms harder to treat.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Alcohol can also interfere with sleep. Although it may help you fall asleep faster, it tends to fragment sleep later in the night and reduce restorative sleep. Poor sleep, in turn, worsens mood, concentration, and stress tolerance, creating a cycle that is difficult to break alone.
        </p>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          The relationship goes in both directions.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Alcohol-related problems can affect people of any age, background, or profession. Stress, trauma, grief, loneliness, and untreated mental health conditions can all raise the risk of drinking in ways that become harmful. Problem drinking does not always look dramatic. Many people function well at work and at home while quietly struggling, which is one reason it often goes unrecognized for years.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Warning Signs to Watch For</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          You do not need to hit a crisis point to deserve support. Consider reaching out if you notice any of the following:
        </p>
        <ul className="space-y-3 mb-4">
          {[
            'Drinking more or longer than you intended',
            'Trying to cut back and finding it difficult',
            'Using alcohol to manage anxiety, sadness, or sleep problems',
            'Feeling shaky, anxious, or irritable when you are not drinking',
            'Problems at work, school, or in relationships because of drinking',
            'Continuing to drink despite knowing it affects your health or mood',
          ].map((item) => (
            <li key={item} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If you are physically dependent on alcohol, stopping suddenly can be dangerous and may cause withdrawal symptoms such as tremors, sweating, or seizures. Speak with a medical professional before making major changes.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps You Can Take</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Small, honest steps can make a real difference. These ideas may help you understand your relationship with alcohol:
        </p>
        <ul className="space-y-3 mb-4">
          {tips.map((item) => (
            <li key={item} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Treatment and Support Are Possible</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Mental health care can address both alcohol use and the conditions that often accompany it. Depending on your needs, care may include a thorough evaluation, talk therapy, medication when appropriate, and support from peers or community programs. Treating anxiety, depression, or trauma alongside drinking tends to give people a stronger footing for lasting change. Seeking help is not a failure of willpower. It is a practical step toward feeling better.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the First Step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If alcohol is affecting your mood, sleep, or relationships, you deserve care without judgment. Blue Willow Psychiatry provides mental health care in Tooele, UT. Call (435) 200-3430 or visit us at 28 North Main Street to start a conversation about what you are experiencing. If you are in crisis or thinking about harming yourself, call or text 988 or call 911 right away.
        </p>
      </article>

      <section className="px-6">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
          </div>
          <div>
            <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">From Blue Willow Psychiatry</p>
            <p className="text-[var(--color-muted)] text-sm mt-2">This article is for general education and is not a substitute for personal medical advice.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] text-sm">{r.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-white/80 mb-8">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition-colors border border-white/40">Contact Us</a>
        </div>
      </section>
    </main>
  )
}