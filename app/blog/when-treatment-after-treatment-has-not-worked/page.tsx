import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'When Treatment After Treatment Has Not Worked',
  description: 'Several treatments haven\'t helped? Learn why mental health care can stall, what to review next, and how to move forward with hope.',
  alternates: { canonical: '/blog/when-treatment-after-treatment-has-not-worked' },
  openGraph: {
    title: 'When Treatment After Treatment Has Not Worked',
    description: 'Several treatments haven\'t helped? Learn why mental health care can stall, what to review next, and how to move forward with hope.',
    url: 'https://www.bluewillowpsych.com/blog/when-treatment-after-treatment-has-not-worked',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'When Treatment After Treatment Has Not Worked',
    description: 'Several treatments haven\'t helped? Learn why mental health care can stall, what to review next, and how to move forward with hope.',
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const tips = [
  'Keep a simple log of each medication or therapy: what it was, the dose, how long you tried it, and what changed.',
  'Note side effects separately from symptoms, since side effects are a common reason people stop treatment.',
  'Ask whether your diagnosis should be reviewed, especially if symptoms have shifted over time.',
  'Tell your clinician about sleep, alcohol, caffeine, other medications, and physical health conditions.',
  'Bring up practical barriers such as cost, schedule, or transportation so the plan can be realistic.',
  'Share how hopeless or unsafe you feel, even if it is hard to say aloud.',
]

const related = [
  { href: '/blog', label: 'Blog', title: 'More Mental Health Resources', text: 'Browse patient education articles from Blue Willow Psychiatry.' },
  { href: '/services', label: 'Services', title: 'Our Services', text: 'See the kinds of care offered in Tooele, UT.' },
  { href: '/contact', label: 'Contact', title: 'Contact the Practice', text: 'Reach out to ask about scheduling a visit.' },
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">When Treatment After Treatment Has Not Worked</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-when-treatment-after-treatment-has-not-worked.jpg"} alt={"Positive man in formal wear lying on sofa with notebook in hands while smiling and talking with therapist in black suit"} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p>You took the medication. You went to the appointments. You gave it weeks, maybe months. And you still do not feel better. If that sounds familiar, the exhaustion you feel is not only from the symptoms. It is from hoping, again and again, and being let down. Please know this: a treatment that did not work does not mean you cannot get better.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What “Treatment-Resistant” Really Means</h2>
        <p>In mental health care, clinicians sometimes use the term “treatment-resistant” when symptoms persist after adequate trials of more than one treatment. It is most often discussed in depression, but similar patterns can appear in anxiety, obsessive-compulsive disorder, and other conditions. The word “resistant” can sound like blame. It is not. It describes how a condition has responded so far, not how you have behaved.</p>
        <p className="mt-4">Research on depression has found that a meaningful share of people do not reach remission with their first antidepressant. Large studies such as STAR*D showed that many people need a second, third, or different kind of step before symptoms lift. Needing more than one try is common, not a personal failure.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who This Affects</h2>
        <p>Anyone living with a mental health condition can hit this wall. It can affect people of any age, background, or severity. It is especially discouraging when you have done everything asked of you. Many people in this position start to wonder whether they are “too broken” for help. That thought is a symptom of exhaustion and low mood, not a fact about you.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Treatment May Not Have Worked</h2>
        <p>There is rarely one reason. Common possibilities clinicians consider include:</p>
        <ul className="mt-4 space-y-3">
          {['The diagnosis may be incomplete, or a second condition may be present, such as anxiety alongside depression, or ADHD, trauma, or bipolar-spectrum symptoms.',
            'The dose or length of the trial may not have been enough for that treatment to show its effect.',
            'Side effects may have led to stopping early or taking medication inconsistently.',
            'Sleep problems, substance use, chronic pain, thyroid issues, or other medical conditions may be driving symptoms.',
            'The type of therapy may not have fit your needs, or life stress may be outpacing the treatment.'].map((t) => (
            <li key={t} className="flex gap-3">{check}<span>{t}</span></li>
          ))}
        </ul>
        <p className="mt-4">Individual biology also matters. People process medications differently, and there is no reliable way to know in advance which option will suit you best. That is why careful follow-up is so important.</p>

        <blockquote className="font-cormorant bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl">
          Needing more than one try is common, not a personal failure.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Options Clinicians May Consider Next</h2>
        <p>When early treatments fall short, a clinician may suggest a step-by-step review rather than starting over. Depending on your situation, options can include:</p>
        <ul className="mt-4 space-y-3">
          {['Re-evaluating the diagnosis and screening for overlapping conditions.',
            'Adjusting the dose or allowing a longer trial when appropriate.',
            'Switching to a different medication or combining medications.',
            'Adding or changing psychotherapy, such as cognitive behavioral therapy.',
            'Considering other evidence-based approaches, such as neuromodulation, when suitable and available.'].map((t) => (
            <li key={t} className="flex gap-3">{check}<span>{t}</span></li>
          ))}
        </ul>
        <p className="mt-4">Which of these makes sense depends on your history, your health, and your preferences. Any change to medication should be made with a prescriber, never abruptly on your own.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps You Can Take</h2>
        <p>You do not have to carry the whole burden of figuring this out, but a few preparations can make your next appointment more productive:</p>
        <ul className="mt-4 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3">{check}<span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Protecting Yourself While You Wait</h2>
        <p>Long stretches without relief are hard on relationships, work, and self-worth. Small supports help: regular sleep and wake times, gentle movement, time with people you trust, and limiting alcohol. These are not cures, but they can steady you while treatment is adjusted.</p>
        <p className="mt-4">If you ever have thoughts of harming yourself, please do not wait for an appointment. In the United States, call or text 988 to reach the Suicide and Crisis Lifeline, or call 911 in an emergency.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the Next Step</h2>
        <p>Feeling stuck after several treatments is a reason to seek a fresh look, not a reason to give up. If you are in or near Tooele, UT, Blue Willow Psychiatry is located at 28 North Main Street. You can call (435) 200-3430 or use our contact page to reach out and talk through your situation.</p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">From Blue Willow Psychiatry</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((r) => (
            <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
              <p className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</p>
              <p className="text-sm text-[var(--color-ink)]">{r.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] border border-white/40 text-white px-8 py-3 rounded-full transition-colors">Contact Us</a>
        </div>
      </section>
    </main>
  )
}