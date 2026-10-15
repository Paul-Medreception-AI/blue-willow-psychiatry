import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Finding Hope After a Long Struggle | Blue Willow Psychiatry',
  description: 'Practical, compassionate guidance for finding hope after a long mental health struggle, including what research shows and when to seek professional help.',
  alternates: { canonical: '/blog/finding-hope-after-a-long-struggle' },
  openGraph: {
    title: 'Finding Hope After a Long Struggle | Blue Willow Psychiatry',
    description: 'Practical, compassionate guidance for finding hope after a long mental health struggle, including what research shows and when to seek professional help.',
    url: 'https://www.bluewillowpsych.com/blog/finding-hope-after-a-long-struggle',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Finding Hope After a Long Struggle | Blue Willow Psychiatry',
    description: 'Practical, compassionate guidance for finding hope after a long mental health struggle, including what research shows and when to seek professional help.',
  },
}

const tips = [
  'Name what you are feeling without judging it. Naming an emotion often reduces its intensity.',
  'Choose one small, specific action each day, such as a short walk or a glass of water.',
  'Keep a regular sleep and wake time, even when the nights are hard.',
  'Tell one trusted person how you are really doing.',
  'Notice small improvements and write them down, however modest.',
  'Ask a professional about an evaluation if symptoms have lasted more than a couple of weeks.',
]

const related = [
  { href: '/blog', label: 'Resources', title: 'Browse All Mental Health Resources', text: 'Read more patient education articles from our practice.' },
  { href: '/services', label: 'Services', title: 'Our Services', text: 'Learn about the mental health care we provide in Tooele.' },
  { href: '/conditions', label: 'Conditions', title: 'Conditions We Treat', text: 'Explore common concerns and how they are approached.' },
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Finding Hope After a Long Struggle</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-finding-hope-after-a-long-struggle.jpg"} alt={"Inspiring message with a pink ribbon symbolizing breast cancer survival and awareness."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          When you have been struggling for a long time, hope can feel like something that belongs to other people. Months or years of low mood, anxiety, or exhaustion can wear down the belief that things could be different. If that sounds familiar, please know this: feeling hopeless is a symptom of what you are going through, not a verdict on your future.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Long Struggles Wear Down Hope</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Mental health conditions such as depression, anxiety disorders, and trauma-related conditions can last a long time, especially when they go unrecognized or untreated. Over time, the brain begins to expect more of the same. Thoughts become more negative, energy drops, and it becomes harder to imagine a different outcome.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Many people also carry shame about how long it has taken. They wonder why they cannot just move on. Mental health conditions are not a matter of willpower, and a long struggle does not mean you have failed. It often means you have been carrying something heavy, mostly alone.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Prolonged emotional struggles touch people of every age, background, and walk of life. According to national surveys, roughly one in five adults in the United States lives with a mental illness in any given year. Many go months or even years before seeking help, often because of stigma, cost concerns, or the belief that they should handle it themselves.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Feeling hopeless is a symptom of what you are going through, not a verdict on your future.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Tells Us</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          The evidence is encouraging. Decades of research show that depression and anxiety disorders are treatable, and that many people improve with psychotherapy, medication, or a combination of both. Even people whose symptoms have lasted for years can experience meaningful relief.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Studies also show that when a first treatment does not work well, other options often do. Adjusting a medication, trying a different type of therapy, or addressing contributing factors such as sleep problems, medical conditions, or substance use can change the picture. Needing more than one approach is common and does not mean you are beyond help.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Research on recovery also highlights the value of social connection, physical activity, and consistent routines. These do not replace treatment, but they support it.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Small Steps That Can Help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Hope often returns gradually, through small experiences that gently contradict the story that nothing will change. Consider these starting points:
        </p>
        <ul className="space-y-4">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Reach Out for Professional Help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Consider reaching out if low mood, anxiety, or hopelessness has lasted more than two weeks, if it interferes with work, relationships, or daily tasks, or if you are using alcohol or other substances to cope. A mental health professional can listen to your history, talk through your symptoms, and discuss options that fit your situation.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If you are having thoughts of harming yourself, please do not wait. Call or text 988, the Suicide and Crisis Lifeline, or call 911 in an emergency.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Taking the Next Step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You do not have to have everything figured out before asking for support. If you are in the Tooele area and ready to talk, Blue Willow Psychiatry at 28 North Main Street can be reached at (435) 200-3430. A long struggle is not the end of the story, and reaching out can be the first step toward feeling like yourself again.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-primary)]">From Blue Willow Psychiatry</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl border border-[var(--color-border)] p-6 hover:shadow-lg transition-shadow">
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
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition-colors border border-white/40">Contact Us</a>
        </div>
      </section>
    </main>
  )
}