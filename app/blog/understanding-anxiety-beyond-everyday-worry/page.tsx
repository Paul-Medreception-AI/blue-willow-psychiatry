import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Understanding Anxiety Beyond Everyday Worry',
  description: 'Learn how anxiety differs from everyday worry, who it affects, common signs, what research shows, and practical steps for seeking support.',
  alternates: { canonical: '/blog/understanding-anxiety-beyond-everyday-worry' },
  openGraph: {
    title: 'Understanding Anxiety Beyond Everyday Worry',
    description: 'Learn how anxiety differs from everyday worry, who it affects, common signs, what research shows, and practical steps for seeking support.',
    url: 'https://www.bluewillowpsych.com/blog/understanding-anxiety-beyond-everyday-worry',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Understanding Anxiety Beyond Everyday Worry',
    description: 'Learn how anxiety differs from everyday worry, who it affects, common signs, what research shows, and practical steps for seeking support.',
  },
}

const tips = [
  'Notice and write down when worry shows up, what triggers it, and how long it lasts.',
  'Practice slow breathing: inhale for four counts, exhale for six, for a few minutes.',
  'Keep regular sleep and wake times, since sleep loss can intensify anxious feelings.',
  'Move your body most days; even a brisk walk can ease tension.',
  'Limit caffeine and alcohol, which can aggravate physical anxiety symptoms.',
  'Face avoided situations in small, gradual steps rather than steering clear of them entirely.',
  'Talk with someone you trust, and reach out to a professional when worry will not let up.',
]

const related = [
  { href: '/blog', title: 'Blue Willow Psychiatry Resources', text: 'Browse all of our patient education articles.' },
  { href: '/services', title: 'Our Services', text: 'See the types of mental health care we provide.' },
  { href: '/contact', title: 'Contact the Practice', text: 'Reach out to ask questions or start a conversation about care.' },
]

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Understanding Anxiety Beyond Everyday Worry</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read · Reviewed by Blue Willow Psychiatry</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-understanding-anxiety-beyond-everyday-worry.jpg"} alt={"Blue letter blocks spelling 'worry' on a bold orange background. Bright and conceptual design."} width={1200} height={627} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p>
          Your heart pounds before a conversation that should be routine. Your mind replays the same &quot;what if&quot; thoughts at 2 a.m. You are exhausted from bracing for something that has not happened. If this sounds familiar, you are far from alone, and what you are feeling may be more than ordinary stress. Understanding the difference can be the first step toward feeling better.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Everyday Worry vs. an Anxiety Disorder</h2>
        <p>
          Worry is a normal human response. Before an exam, a medical appointment, or a big move, a little apprehension can help us prepare. It usually fades once the situation passes, and it stays in proportion to the circumstances.
        </p>
        <p className="mt-4">
          Anxiety becomes a concern when it is persistent, hard to control, and out of proportion to what is happening. Clinicians consider how long symptoms last, how intense they are, and how much they interfere with work, school, relationships, and rest. For generalized anxiety disorder, for example, excessive worry that occurs on more days than not for at least six months is a common benchmark.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Signs That Go Beyond Nervousness</h2>
        <p>
          Anxiety is not only a feeling; it affects the whole body. Common signs include:
        </p>
        <ul className="mt-4 space-y-2 list-disc pl-6">
          <li>Restlessness, feeling keyed up, or a sense of dread</li>
          <li>Difficulty concentrating or a mind that goes blank</li>
          <li>Muscle tension, headaches, or stomach upset</li>
          <li>A racing heart, shortness of breath, or sweating</li>
          <li>Trouble falling or staying asleep</li>
          <li>Irritability and avoidance of situations that feel threatening</li>
        </ul>
        <p className="mt-4">
          Some people experience sudden surges of intense fear, often called panic attacks. Others feel intense fear in social settings, or around specific objects or situations. These patterns fall under different anxiety-related conditions, and each can be addressed.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected</h2>
        <p>
          Anxiety disorders are among the most common mental health conditions. National survey data suggest that nearly one in three adults in the United States will experience an anxiety disorder at some point in life. Children, teens, and older adults can be affected too. Anxiety is more commonly diagnosed in women, but it occurs in people of every background.
        </p>
        <p className="mt-4">
          Causes are rarely simple. Genetics, brain chemistry, personality, medical conditions, major life stress, and past difficult experiences can all play a part. Having anxiety is not a character flaw or a sign of weakness.
        </p>

        <blockquote className="font-cormorant bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl">
          Having anxiety is not a character flaw or a sign of weakness.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters to Address Anxiety</h2>
        <p>
          Left unaddressed, anxiety can quietly shrink a person&apos;s life. People may skip social events, turn down opportunities, or rely on avoidance to feel safe, which often strengthens anxiety over time. Anxiety is also linked with depression, sleep problems, substance use, and physical health concerns such as headaches and digestive trouble. The encouraging news is that these effects are not inevitable, and support can interrupt the cycle.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Shows About Treatment</h2>
        <p>
          Anxiety disorders are treatable. Decades of research support cognitive behavioral therapy (CBT), which helps people identify unhelpful thought patterns and gradually face feared situations. Certain medications, including some antidepressants, are also well studied and may be recommended depending on the person and diagnosis. Many people benefit from a combination of approaches, and lifestyle strategies such as exercise, sleep regularity, and mindfulness practices can add meaningful support.
        </p>
        <p className="mt-4">
          The right plan depends on your symptoms, history, other health conditions, and preferences. A careful evaluation helps clarify what is going on and which options fit you.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps You Can Start Today</h2>
        <p>Small habits will not replace professional care, but they can make symptoms easier to manage:</p>
        <ul className="mt-4 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Professional Help</h2>
        <p>
          Consider reaching out if worry is present most days, if it affects your sleep, work, or relationships, if you are avoiding things you care about, or if you have physical symptoms with no clear cause. If you ever have thoughts of harming yourself, call or text 988, the Suicide &amp; Crisis Lifeline, or call 911 in an emergency.
        </p>
        <p className="mt-4">
          You do not have to wait until things feel unbearable. If you are in or near Tooele, UT, Blue Willow Psychiatry at 28 North Main Street can be reached at (435) 200-3430 to talk about mental health care and next steps. Asking for help is a sign of strength, and relief is possible.
        </p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">Reviewed by Blue Willow Psychiatry</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice, diagnosis, or treatment.</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((r) => (
            <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v12m0-12C10.5 5.25 7.5 4.5 4.5 4.5v12c3 0 6 .75 7.5 2.25m0-12c1.5-1.5 4.5-2.25 7.5-2.25v12c-3 0-6 .75-7.5 2.25" />
              </svg>
              <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
              <p className="text-[var(--color-muted)]">{r.text}</p>
            </a>
          ))}
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