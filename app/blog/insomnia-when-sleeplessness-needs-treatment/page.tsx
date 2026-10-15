import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insomnia: When Sleeplessness Needs Treatment',
  description: 'Learn when trouble sleeping becomes insomnia, what causes it, and which evidence-based treatments help. Practical tips and when to seek professional care.',
  alternates: { canonical: '/blog/insomnia-when-sleeplessness-needs-treatment' },
  openGraph: {
    title: 'Insomnia: When Sleeplessness Needs Treatment',
    description: 'Learn when trouble sleeping becomes insomnia, what causes it, and which evidence-based treatments help. Practical tips and when to seek professional care.',
    url: 'https://www.bluewillowpsych.com/blog/insomnia-when-sleeplessness-needs-treatment',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Insomnia: When Sleeplessness Needs Treatment',
    description: 'Learn when trouble sleeping becomes insomnia, what causes it, and which evidence-based treatments help. Practical tips and when to seek professional care.',
  },
}

const tips = [
  'Keep a consistent wake time every day, including weekends.',
  'Limit caffeine after midday and avoid alcohol close to bedtime.',
  'Keep your bedroom cool, dark and quiet.',
  'Step away from screens for an hour before bed.',
  'If you cannot sleep after about 20 minutes, get up and do something calm until you feel sleepy.',
  'Reserve your bed for sleep, not work or scrolling.',
]

const related = [
  { href: '/blog', title: 'More Mental Health Articles', desc: 'Browse all of our patient education resources.' },
  { href: '/services', title: 'Our Services', desc: 'See the kinds of care offered at the practice.' },
  { href: '/contact', title: 'Contact the Practice', desc: 'Reach out with questions or to ask about an appointment.' },
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Insomnia: When Sleeplessness Needs Treatment</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read · Reviewed by Blue Willow Psychiatry</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-insomnia-when-sleeplessness-needs-treatment.jpg"} alt={"Close-up of a woman holding a pillow with 'insomnia' text, depicting sleep disorder."} width={1200} height={627} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          It is 2 a.m. and you are watching the clock again. You calculate how many hours remain before the alarm, and the math only makes your mind race faster. Almost everyone has a bad night now and then. But when sleepless nights become a pattern, they can affect your mood, your focus, your health and your relationships. If this sounds familiar, you are not failing at sleep, and you are far from alone. Insomnia is common, real and treatable.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Insomnia?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Insomnia is difficulty falling asleep, staying asleep, or waking much earlier than intended and being unable to return to sleep, despite having the opportunity to sleep. It also causes daytime problems such as fatigue, irritability, poor concentration or low mood.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Clinicians often describe two patterns. Short-term (acute) insomnia lasts days to a few weeks and is often tied to stress, illness or a life change. Chronic insomnia occurs at least three nights a week for three months or longer. Chronic insomnia is the form that most often calls for professional evaluation and treatment.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Insomnia can affect people of any age. It is more common in adults who are older, in women, and in people dealing with chronic stress, shift work or other health conditions. Researchers estimate that roughly one in ten adults has a chronic insomnia disorder, and a larger share experience occasional symptoms.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Sleep Problems Happen</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Insomnia rarely has a single cause. Common contributors include:
        </p>
        <ul className="space-y-2 mb-4 text-[var(--color-ink)] leading-loose text-base list-disc pl-6">
          <li>Anxiety, depression, trauma-related conditions and other mental health concerns</li>
          <li>Ongoing stress about work, money, family or health</li>
          <li>Irregular schedules, late-night screen use or too much caffeine</li>
          <li>Pain, breathing problems, hormonal changes or other medical conditions</li>
          <li>Certain medications and substances, including alcohol</li>
          <li>Other sleep disorders, such as sleep apnea or restless legs</li>
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          The relationship between sleep and mental health runs in both directions. Poor sleep can worsen anxiety and depression, and those conditions can make sleep harder. Over time, worry about sleep itself can keep the cycle going, even after the original trigger has passed.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          The relationship between sleep and mental health runs in both directions.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Ongoing sleep loss is linked in research to a higher risk of depression and anxiety, difficulty with memory and attention, accidents, and problems with heart and metabolic health. Insomnia is not just an inconvenience. Addressing it can improve how you feel during the day and may support recovery from other conditions.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Evidence Says About Treatment</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Cognitive behavioral therapy for insomnia (CBT-I) is widely recommended as a first-line treatment for chronic insomnia. It helps you change the habits and thought patterns that keep you awake, using strategies such as consistent sleep scheduling, stimulus control and relaxation skills. Studies show benefits that often last after treatment ends.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Medication is sometimes used, usually for a limited time and after a careful discussion of benefits and risks. Because insomnia often travels with other conditions, treating underlying anxiety, depression or a medical issue is an important part of the plan. A mental health professional can help sort out which factors are involved.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps You Can Try Tonight</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Good sleep habits will not solve every case, but they form the foundation of treatment:
        </p>
        <ul className="space-y-3 mb-4">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Professional Help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Consider reaching out if sleep trouble lasts more than a few weeks, interferes with daily life, or comes with persistent sadness, worry, or thoughts of self-harm. If you are in crisis, call or text 988 in the United States. Also seek medical care if you snore loudly, stop breathing during sleep, or feel extremely sleepy while driving.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You do not have to keep getting through the night alone. If you are in Tooele, Blue Willow Psychiatry can be reached at (435) 200-3430 to talk about your concerns and next steps toward better rest.
        </p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">Reviewed by Blue Willow Psychiatry</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for education and is not a substitute for personal medical advice.</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((r) => (
            <a key={r.title} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{r.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">Our team is here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition-colors border border-white/40">Contact Us</a>
        </div>
      </section>
    </main>
  )
}