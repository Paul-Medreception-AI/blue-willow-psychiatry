import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Supporting a Family Member With Mental Illness',
  description: 'Practical, compassionate guidance for supporting a loved one with mental illness, including how to listen, set boundaries, and care for yourself.',
  alternates: { canonical: '/blog/supporting-a-family-member-with-mental-illness' },
  openGraph: {
    title: 'Supporting a Family Member With Mental Illness',
    description: 'Practical, compassionate guidance for supporting a loved one with mental illness, including how to listen, set boundaries, and care for yourself.',
    url: 'https://www.bluewillowpsych.com/blog/supporting-a-family-member-with-mental-illness',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Supporting a Family Member With Mental Illness',
    description: 'Practical, compassionate guidance for supporting a loved one with mental illness, including how to listen, set boundaries, and care for yourself.',
  },
}

const tips = [
  'Ask open, caring questions and listen without rushing to fix things.',
  'Learn about the condition from reliable medical sources.',
  'Offer help with practical tasks such as appointments, meals, or errands.',
  'Keep expectations realistic and celebrate small steps forward.',
  'Set kind but firm boundaries to protect your own health.',
  'Know the warning signs of a crisis and have a plan ready.',
]

const related = [
  { href: '/blog', label: 'Blog', title: 'More Mental Health Resources', text: 'Browse patient education articles from Blue Willow Psychiatry.' },
  { href: '/services', label: 'Services', title: 'Our Services', text: 'Learn about the care offered at our Tooele practice.' },
  { href: '/conditions', label: 'Conditions', title: 'Conditions We Address', text: 'Read about common mental health conditions and their treatment.' },
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Supporting a Family Member With Mental Illness</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read · Reviewed by Blue Willow Psychiatry</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-supporting-a-family-member-with-mental-illness.jpg"} alt={"Young man in thoughtful pose indoors with family members in the background, expressing contemplation and care."} width={1200} height={627} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          When someone you love is struggling with their mental health, your own world can shift overnight. You may feel worried, helpless, or unsure what to say. You are not alone in this. Mental illness touches families everywhere, and the way relatives respond can make a real difference in a person&apos;s path toward healing.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Understanding Mental Illness in the Family</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Mental illnesses are medical conditions that affect mood, thinking, and behavior. Depression, anxiety disorders, bipolar disorder, schizophrenia, and post-traumatic stress disorder are among the many conditions people live with. Roughly one in five adults in the United States experiences a mental health condition in a given year, according to national surveys, so chances are good that most families will be affected at some point.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          These conditions are not a character flaw, a lack of willpower, or the result of poor parenting. They arise from a mix of biology, life experience, and environment. Understanding this can soften blame and open the door to compassion for your loved one and for yourself.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Family Support Matters</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Research consistently shows that strong social support is linked with better outcomes for people living with mental health conditions. Family involvement is associated with improved engagement in treatment, fewer relapses, and a greater sense of hope. Programs that educate families about illness and coping skills have been shown to benefit both the person with the condition and their relatives.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          You do not need to have all the answers to be a steady, caring presence.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How to Start the Conversation</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Choose a calm, private moment. Begin with what you have noticed and why you care, using gentle &quot;I&quot; statements such as &quot;I&apos;ve noticed you seem exhausted lately, and I&apos;m worried about you.&quot; Avoid labels, ultimatums, and arguments about whether something is &quot;real.&quot; Listening matters more than advice. Reflect back what you hear, and let silences happen.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          If your loved one is not ready to talk, that is okay. Let them know the door is open, and return to the topic another day. Encouraging a visit with a primary care or mental health professional can be a helpful next step.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Ways to Help</h2>
        <ul className="space-y-3 my-6">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start text-[var(--color-ink)] leading-relaxed">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Recognizing a Crisis</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Talk of suicide, self-harm, hopelessness, sudden withdrawal, severe confusion, or dangerous behavior should always be taken seriously. Ask directly if your loved one is thinking about suicide; research shows that asking does not plant the idea and may bring relief. In the United States you can call or text 988, the Suicide and Crisis Lifeline, at any time. If there is immediate danger, call 911.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Caring for Yourself Too</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Caregiver stress is real. Many relatives experience exhaustion, guilt, anxiety, and grief. Protect your sleep, keep up friendships, and make time for activities that restore you. Boundaries are an act of care, not a lack of it. Support groups for families and your own counseling can provide understanding and practical tools. You can only offer lasting support when your own well-being is looked after.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Encouraging Professional Help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Mental health conditions are treatable, and care often combines therapy, medication, and lifestyle support tailored to the individual. If you are concerned about someone you love, a professional evaluation is a meaningful step. Blue Willow Psychiatry in Tooele, Utah, provides mental health care, and you are welcome to call (435) 200-3430 or visit us at 28 North Main Street to ask questions about next steps.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">Reviewed by Blue Willow Psychiatry</p>
          <p className="text-sm text-[var(--color-muted)] mt-2 leading-relaxed">This article is for general education and does not replace personal medical advice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
                <p className="text-sm text-[var(--color-ink)] leading-relaxed">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">Our team is here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition-colors border border-white/40">Contact Us</a>
        </div>
      </section>
    </main>
  )
}