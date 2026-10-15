import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medication, Therapy, or Both? | Blue Willow Psychiatry',
  description: 'Learn how medication, therapy, or a combination can help with anxiety, depression and more, and how to talk with a professional about the right fit.',
  alternates: { canonical: '/blog/medication-therapy-or-both' },
  openGraph: {
    title: 'Medication, Therapy, or Both? | Blue Willow Psychiatry',
    description: 'Learn how medication, therapy, or a combination can help with anxiety, depression and more, and how to talk with a professional about the right fit.',
    url: 'https://www.bluewillowpsych.com/blog/medication-therapy-or-both',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Medication, Therapy, or Both? | Blue Willow Psychiatry',
    description: 'Learn how medication, therapy, or a combination can help with anxiety, depression and more, and how to talk with a professional about the right fit.',
  },
}

const tips = [
  'Write down your symptoms, when they started, and how they affect daily life.',
  'List every medication and supplement you take, including over-the-counter products.',
  'Share your preferences, worries and past experiences with treatment openly.',
  'Ask what improvement should look like and how long it may take.',
  'Plan follow-up visits so your treatment can be adjusted as you change.',
]

const related = [
  { href: '/blog', title: 'Mental Health Resources', text: 'Browse all of our patient education articles.' },
  { href: '/services', title: 'Our Services', text: 'See the kinds of care offered at the practice.' },
  { href: '/contact', title: 'Contact the Practice', text: 'Reach out with questions or to start a conversation.' },
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Medication, Therapy, or Both?</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-medication-therapy-or-both.jpg"} alt={"Vibrant pink and blue capsules scattered on a light textured background."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          When you finally decide to get help for anxiety, low mood, or racing thoughts, a new question often appears right away: what kind of help is right? Pills, talking, or some mix of the two? It is a fair question, and it deserves a thoughtful answer rather than a one-size-fits-all rule. Understanding your options can make that first step feel much less overwhelming.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What each approach does</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Psychiatric medication works on the brain&apos;s chemistry and signaling. Depending on the condition, it may help lift mood, calm persistent worry, steady energy and sleep, or reduce symptoms such as intrusive thoughts. Medication does not change your personality; the goal is to ease symptoms so you can feel more like yourself.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Therapy, also called psychotherapy, focuses on thoughts, emotions, behavior and relationships. Approaches such as cognitive behavioral therapy (CBT) teach practical skills for noticing unhelpful patterns and responding differently. Other approaches explore past experiences, build coping strategies, or strengthen communication.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the research suggests</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Research over several decades shows that both medication and psychotherapy can be effective for common conditions such as depression and anxiety disorders. For mild to moderate symptoms, therapy alone is often a reasonable starting point. For moderate to severe symptoms, or when symptoms interfere heavily with work, sleep or relationships, medication may be recommended, often alongside therapy.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Studies comparing the two approaches frequently find that combining them helps some people more than either alone, particularly with longer-lasting or more complex symptoms. Therapy may also help people keep skills that protect against relapse after treatment ends. Some conditions, such as bipolar disorder and schizophrenia, generally call for medication as a core part of care, with therapy and support added.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Medication does not change your personality; the goal is to ease symptoms so you can feel more like yourself.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When medication may make sense</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Medication is often considered when symptoms are severe, have lasted a long time, or make it hard to take part in therapy. It may also be discussed if you have a personal or family history that suggests a biological component, or if earlier attempts with therapy alone did not bring enough relief. Starting medication is a decision, not a life sentence. Many people use it for a period of time and then review it with their prescriber.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When therapy may be the better first step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Therapy is often a good fit when symptoms are tied to a specific stressor, life transition, grief, or habit pattern, or when you would prefer to avoid medication side effects. It can also be the preferred option during times such as pregnancy, when any medication decision needs careful individual review. Benefits often build gradually as you practice new skills between sessions.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why the answer can change over time</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          The best plan today may not be the best plan six months from now. Some people begin with medication to get steady enough to engage in therapy, then taper later. Others start with therapy and add medication if progress stalls. Regular check-ins let your treatment adapt to your life, your response, and your goals.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How to prepare for the conversation</h2>
        <ul className="space-y-4 mt-4">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Taking the next step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You do not have to figure this out alone or choose perfectly on the first try. A mental health professional can review your symptoms, history and preferences, then help you weigh the options. If you are in Tooele, UT and would like to talk, call Blue Willow Psychiatry at (435) 200-3430 or visit the practice at 28 North Main Street. If you are in crisis or thinking about harming yourself, call or text 988 or go to the nearest emergency room.
        </p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">From Blue Willow Psychiatry</p>
          <p className="text-[var(--color-muted)] text-sm mt-2 leading-relaxed">This article is for general education and is not a substitute for individual medical advice.</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-white/80 mb-8">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] border border-white/40 text-white px-8 py-3 rounded-full transition-colors">Contact Us</a>
        </div>
      </section>
    </main>
  )
}