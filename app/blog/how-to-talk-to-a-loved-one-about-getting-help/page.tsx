import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Talk to a Loved One About Getting Help',
  description: 'Practical, compassionate guidance on starting a conversation with a loved one about mental health care, from choosing a moment to offering support.',
  alternates: { canonical: '/blog/how-to-talk-to-a-loved-one-about-getting-help' },
  openGraph: {
    title: 'How to Talk to a Loved One About Getting Help',
    description: 'Practical, compassionate guidance on starting a conversation with a loved one about mental health care, from choosing a moment to offering support.',
    url: 'https://www.bluewillowpsych.com/blog/how-to-talk-to-a-loved-one-about-getting-help',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'How to Talk to a Loved One About Getting Help',
    description: 'Practical, compassionate guidance on starting a conversation with a loved one about mental health care, from choosing a moment to offering support.',
  },
}

const tips = [
  'Choose a private, unhurried moment when neither of you is angry or rushed.',
  'Start with specific observations and your care for them, not labels or diagnoses.',
  'Ask open questions and then listen without interrupting.',
  'Offer to help with practical steps, such as finding a provider or going along to a first visit.',
  'Accept that the first conversation may not end in a decision.',
]

const related = [
  { href: '/blog', title: 'Blue Willow Psychiatry Resources', desc: 'Browse all of our patient education articles on mental health care.' },
  { href: '/services', title: 'Our Services', desc: 'Learn about the care offered at our Tooele practice.' },
  { href: '/contact', title: 'Contact the Practice', desc: 'Reach out with questions or to ask about next steps.' },
]

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white">Home</a> › <a href="/blog" className="hover:text-white">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">How to Talk to a Loved One About Getting Help</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read · Reviewed by Blue Willow Psychiatry</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-how-to-talk-to-a-loved-one-about-getting-help.jpg"} alt={"Therapist and patient in conversation during a counseling session indoors."} width={1200} height={627} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p>You have noticed the changes. Maybe they have stopped returning calls, seem exhausted all the time, or are not themselves in ways that are hard to name. You want to say something, but you are afraid of saying the wrong thing. That worry is understandable, and it is a sign of how much you care. A kind, well-timed conversation can be the first step toward someone getting the support they deserve.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why this conversation matters</h2>
        <p>Mental health conditions are common. National surveys in the United States estimate that more than one in five adults experiences a mental illness in a given year. Yet many people wait a long time before seeking care. Reasons include stigma, fear of being judged, cost or logistics worries, and the belief that they should handle things alone. Sometimes the person does not recognize that what they are going through is treatable.</p>
        <p>Research consistently shows that social support influences whether people seek treatment and how they do in recovery. A caring conversation from someone they trust can make a real difference.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Signs it may be time to speak up</h2>
        <p>No single sign tells the whole story, but patterns that last two weeks or more deserve attention. Things to watch for include:</p>
        <ul className="my-4 space-y-2 list-disc pl-6">
          <li>Persistent sadness, irritability, or anxiety</li>
          <li>Withdrawing from friends, family, or activities once enjoyed</li>
          <li>Major changes in sleep or appetite</li>
          <li>Difficulty concentrating or keeping up with work or school</li>
          <li>Increased use of alcohol or other substances</li>
          <li>Talk of hopelessness or of being a burden</li>
        </ul>
        <p>If your loved one talks about suicide or self-harm, or you believe they are in immediate danger, call or text 988, the Suicide &amp; Crisis Lifeline, or call 911.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Prepare before you begin</h2>
        <p>Take a little time to get ready. Think about what you have actually seen and heard, such as &ldquo;you have seemed down for a few weeks and you have been skipping things you love.&rdquo; Specific, nonjudgmental observations are easier to hear than broad statements. Check your own feelings too. If you are frightened or frustrated, give yourself time to settle so that worry does not come across as blame.</p>
        <p>It also helps to learn a bit about the condition you are concerned about, and to know what the first steps toward care might look like, so you can answer simple questions if they come up.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What to say, and what to avoid</h2>
        <p>Begin with connection, not a diagnosis. Phrases like &ldquo;I care about you and I have been worried&rdquo; open the door without putting someone on the defensive. Use &ldquo;I&rdquo; statements, ask what they are experiencing, and listen to the answer.</p>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Begin with connection, not a diagnosis.
        </blockquote>

        <p>Try to avoid:</p>
        <ul className="my-4 space-y-2 list-disc pl-6">
          <li>Ultimatums, threats, or ambushing them in front of others</li>
          <li>Minimizing, such as &ldquo;just think positive&rdquo; or &ldquo;everyone feels this way&rdquo;</li>
          <li>Labeling them with a diagnosis you suspect</li>
          <li>Arguing if they disagree or deny a problem</li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical tips for the conversation</h2>
        <ul className="my-4 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">If they say no</h2>
        <p>Resistance is common and does not mean you failed. Let them know the offer stands, and check in again later without pressure. Motivational approaches used by clinicians emphasize respecting a person&rsquo;s autonomy, since people are more likely to change when they feel heard rather than pushed. Meanwhile, remain steady, keep including them in daily life, and take care of your own well-being. Supporting someone is demanding, and you may benefit from support too.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Taking the next step together</h2>
        <p>When your loved one is ready, a first appointment with a mental health professional can feel less daunting with a supportive person nearby. Blue Willow Psychiatry is located at 28 North Main Street in Tooele, UT. If you have questions about reaching out, you can call (435) 200-3430. Starting the conversation is a meaningful act of care, and you do not have to have all the answers to begin.</p>
        <p className="mt-4 text-sm text-[var(--color-muted)]">This article is for general education and is not a substitute for professional medical advice.</p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">Reviewed by Blue Willow Psychiatry</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">Published October 2026</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((r) => (
            <a key={r.title} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
              <p className="text-[var(--color-ink)] text-sm leading-relaxed">{r.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/90">Our team is here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition-colors border border-white/40">Contact Us</a>
        </div>
      </section>
    </main>
  )
}