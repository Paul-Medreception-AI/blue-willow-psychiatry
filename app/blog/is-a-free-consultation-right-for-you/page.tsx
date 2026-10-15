import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Is a Free Consultation Right for You?',
  description: 'Wondering whether a free consultation is the right first step for mental health care? Learn what to expect, what to ask, and how to decide.',
  alternates: { canonical: '/blog/is-a-free-consultation-right-for-you' },
  openGraph: {
    title: 'Is a Free Consultation Right for You?',
    description: 'Wondering whether a free consultation is the right first step for mental health care? Learn what to expect, what to ask, and how to decide.',
    url: 'https://www.bluewillowpsych.com/blog/is-a-free-consultation-right-for-you',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Is a Free Consultation Right for You?',
    description: 'Wondering whether a free consultation is the right first step for mental health care? Learn what to expect, what to ask, and how to decide.',
  },
}

const tips = [
  'Write down the symptoms that worry you most and how long they have been present.',
  'List any medications or supplements you currently take.',
  'Note questions about approach, scheduling, and what ongoing care might look like.',
  'Think about what you hope will change, even if it feels small.',
  'Ask what information you would need to bring to a first full appointment.',
]

const related = [
  { href: '/blog', title: 'Browse All Resources', text: 'Articles on mental health care and what to expect from treatment.' },
  { href: '/services', title: 'Our Services', text: 'Learn about the types of care offered at the practice.' },
  { href: '/contact', title: 'Contact the Practice', text: 'Reach out with questions or to ask about next steps.' },
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Is a Free Consultation Right for You?</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-is-a-free-consultation-right-for-you.jpg"} alt={"Calm female sitting on armchair and giving interview to concentrated woman in light room"} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You have been thinking about it for weeks, maybe longer. The sleepless nights, the worry that will not quiet down, the heaviness that makes ordinary days feel like uphill climbs. You wonder if it is &ldquo;bad enough&rdquo; to see someone, and the idea of committing to a full appointment feels like a lot. For many people, that hesitation is the biggest barrier to getting help. A free consultation can lower that barrier, but it is worth understanding what it is and whether it fits your needs.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What a Free Consultation Is</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          A consultation is generally a short, introductory conversation between you and a mental health practice. It is not a full evaluation and it is not treatment. Its purpose is to help you decide whether the practice seems like a good match, and to help the practice understand what kind of support you are looking for. Formats and length vary from one practice to another, so it is reasonable to ask how it works when you call.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Tends to Benefit</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Mental health conditions are common. According to the National Institute of Mental Health, more than one in five adults in the United States lives with a mental illness in a given year. Yet many people wait a long time before seeking care. A consultation may be especially helpful if you:
        </p>
        <ul className="my-6 space-y-3 text-[var(--color-ink)] leading-loose text-base">
          {[
            'Have never talked to a mental health professional before',
            'Feel unsure whether what you are experiencing needs treatment',
            'Want to learn how a practice works before sharing personal details',
            'Have had a difficult past experience with care and want to feel more comfortable',
            'Are looking for a better fit after trying other options',
          ].map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why the First Step Matters</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Research consistently shows that early care tends to lead to better outcomes for conditions such as depression and anxiety. Delays can allow symptoms to deepen and affect work, relationships, and physical health. The therapeutic relationship itself is also one of the more reliable predictors of how well treatment goes, which is why feeling comfortable with a provider matters. An early conversation gives you a chance to sense that comfort before you commit.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          The therapeutic relationship itself is also one of the more reliable predictors of how well treatment goes, which is why feeling comfortable with a provider matters.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When a Consultation May Not Be Enough</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          A consultation is not designed for emergencies. If you are having thoughts of harming yourself or others, call or text 988, the Suicide &amp; Crisis Lifeline, or call 911 or go to the nearest emergency room. Likewise, a brief introductory conversation cannot provide a diagnosis or a treatment plan. Those require a full evaluation. Think of the consultation as a doorway, not the whole house.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How to Prepare</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You do not need to have everything figured out. A little preparation can still help you use the time well.
        </p>
        <ul className="my-6 space-y-3 text-[var(--color-ink)] leading-loose text-base">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Making the Decision</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Ask yourself a few honest questions. Do you want information before committing? Would a low-pressure conversation make it easier to take the next step? Are you carrying questions that keep you from reaching out? If the answer to any of these is yes, a consultation may suit you well. If you already know you want a full appointment, you can simply ask about scheduling one.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-6">
          Whatever you decide, reaching out is a sign of strength, not weakness. If you are in or near Tooele, Utah, Blue Willow Psychiatry at 28 North Main Street can answer your questions about how to get started. Call (435) 200-3430 or use the contact page, and ask what the first conversation involves.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">From Blue Willow Psychiatry</p>
          <p className="text-sm text-[var(--color-muted)] mt-2 leading-relaxed">This article is for general education and is not a substitute for professional medical advice, diagnosis, or treatment.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((r) => (
            <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{r.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition-colors border border-white/30">Contact Us</a>
        </div>
      </section>
    </main>
  )
}