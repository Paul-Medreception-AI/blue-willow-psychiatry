import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Adult ADHD: Signs You May Have Missed',
  description: 'Adult ADHD often looks different from childhood ADHD. Learn the subtle signs, who it affects, and when to seek an evaluation for mental health care.',
  alternates: { canonical: '/blog/adult-adhd-signs-you-may-have-missed' },
  openGraph: {
    title: 'Adult ADHD: Signs You May Have Missed',
    description: 'Adult ADHD often looks different from childhood ADHD. Learn the subtle signs, who it affects, and when to seek an evaluation for mental health care.',
    url: 'https://www.bluewillowpsych.com/blog/adult-adhd-signs-you-may-have-missed',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Adult ADHD: Signs You May Have Missed',
    description: 'Adult ADHD often looks different from childhood ADHD. Learn the subtle signs, who it affects, and when to seek an evaluation for mental health care.',
  },
}

const signs = [
  'Chronic lateness or losing track of time, even when you care deeply about being on time',
  'Starting many projects but struggling to finish them',
  'Difficulty prioritizing, leading to a constant sense of being behind',
  'Misplacing keys, phone, wallet, or paperwork again and again',
  'Interrupting others or finishing sentences without meaning to',
  'Feeling restless inside, even when you look calm outside',
  'Intense focus on interesting tasks, but real trouble starting boring ones',
  'Strong emotional reactions and a short fuse under stress',
]

const steps = [
  'Write down specific examples of how symptoms affect work, home, and relationships',
  'Note whether similar difficulties were present in childhood, as best you can recall',
  'Bring a list of current medications, supplements, and caffeine use',
  'Mention sleep, mood, and anxiety concerns, since these can overlap with ADHD',
  'Ask a trusted family member or friend for their observations',
]

const related = [
  { href: '/blog', title: 'Resources Hub', text: 'Browse all patient education articles from Blue Willow Psychiatry.' },
  { href: '/contact', title: 'Schedule an Appointment', text: 'Reach out to the practice to ask about an evaluation.' },
  { href: '/services', title: 'Our Services', text: 'Learn about the mental health care offered in Tooele, UT.' },
]

function Check() {
  return (
    <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Adult ADHD: Signs You May Have Missed</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-adult-adhd-signs-you-may-have-missed.jpg"} alt={"African American woman with health messages about nutrition and obesity awareness."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="animate-fade-up">You have always been told you are smart, yet you feel like you are working twice as hard as everyone else just to keep up. Deadlines sneak past you, your desk looks like a storm passed through, and you wonder why simple tasks feel so heavy. For many adults, these struggles are not a character flaw. They may be undiagnosed attention-deficit/hyperactivity disorder (ADHD), a condition that is easy to overlook once childhood has passed.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Adult ADHD?</h2>
        <p>ADHD is a neurodevelopmental condition that affects attention, impulse control, and the brain&apos;s ability to organize and regulate behavior. It begins in childhood, but symptoms often continue into adulthood. Research suggests that a substantial share of children with ADHD continue to have symptoms as adults, and many adults are never diagnosed because their symptoms were missed, minimized, or attributed to something else.</p>
        <p className="mt-4">In adults, ADHD rarely looks like the stereotype of a boy bouncing off the walls. Hyperactivity often softens into inner restlessness, while difficulties with planning, time management, and follow-through take center stage.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Signs That Are Easy to Miss</h2>
        <p className="mb-4">Adult ADHD can hide behind stress, perfectionism, or &quot;just being disorganized.&quot; Some signs that people commonly overlook include:</p>
        <ul className="space-y-3">
          {signs.map((s) => (
            <li key={s} className="flex gap-3"><Check /><span>{s}</span></li>
          ))}
        </ul>
        <p className="mt-4">Having one or two of these does not mean you have ADHD. What matters is a long-standing pattern that causes real difficulty in more than one area of life.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Does It Affect?</h2>
        <p>ADHD affects people of every gender, background, and profession. Women and girls are frequently diagnosed later than men, in part because inattentive symptoms, such as daydreaming and disorganization, are less disruptive and easier to miss. Many high-achieving adults compensate for years through intense effort, only to feel overwhelmed when life demands increase, such as a new job, parenthood, or a major move.</p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant animate-fade-up">
          What matters is a long-standing pattern that causes real difficulty in more than one area of life.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters</h2>
        <p>Untreated ADHD can quietly shape a person&apos;s life. Research links it with higher rates of anxiety, depression, sleep problems, and substance use, as well as strain at work and in relationships. Years of feeling criticized or &quot;not living up to potential&quot; can also wear down self-esteem. Recognizing ADHD is often a relief, because it reframes lifelong struggles as a treatable condition rather than a personal failing.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Evidence Says About Evaluation and Treatment</h2>
        <p>There is no single test for ADHD. A careful evaluation typically involves a clinical interview, a review of symptoms across settings and across time, rating scales, and screening for other conditions that can look similar, such as anxiety, depression, thyroid problems, or sleep disorders. Treatment is individualized. Clinical guidelines support a combination of approaches, which may include medication, psychotherapy such as cognitive behavioral therapy, coaching, and practical strategies for organization and routine. Many people find that learning about how their brain works is as helpful as any single intervention.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How to Prepare for a Conversation With a Professional</h2>
        <ul className="space-y-3">
          {steps.map((s) => (
            <li key={s} className="flex gap-3"><Check /><span>{s}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Taking the Next Step</h2>
        <p>If this article sounds uncomfortably familiar, you are not alone, and it is not too late to get answers. A mental health professional can help you understand what is going on and discuss options that fit your life. Blue Willow Psychiatry is located at 28 North Main Street in Tooele, UT. You can call the practice at (435) 200-3430 to start the conversation. This article is for education only and is not a substitute for personal medical advice.</p>
      </article>

      <section className="max-w-3xl mx-auto my-12 px-6">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
            <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
            </svg>
          </div>
          <div>
            <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">From Blue Willow Psychiatry</p>
            <p className="text-[var(--color-muted)] mt-1">Patient education from a mental health practice in Tooele, UT.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl border border-[var(--color-border)] p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)]">{r.text}</p>
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