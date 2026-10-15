import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recognizing the Signs of Depression | Blue Willow',
  description: 'Learn the emotional, physical and behavioral signs of depression, who it affects, and when to reach out for professional mental health care in Tooele, UT.',
  alternates: { canonical: '/blog/recognizing-the-signs-of-depression' },
  openGraph: {
    title: 'Recognizing the Signs of Depression | Blue Willow',
    description: 'Learn the emotional, physical and behavioral signs of depression, who it affects, and when to reach out for professional mental health care in Tooele, UT.',
    url: 'https://www.bluewillowpsych.com/blog/recognizing-the-signs-of-depression',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Recognizing the Signs of Depression | Blue Willow',
    description: 'Learn the emotional, physical and behavioral signs of depression, who it affects, and when to reach out for professional mental health care in Tooele, UT.',
  },
}

const signs = [
  'A persistent sad, empty or hopeless mood most of the day',
  'Loss of interest or pleasure in activities you once enjoyed',
  'Changes in appetite or weight without trying',
  'Sleeping far too much or struggling with insomnia',
  'Fatigue or low energy, even after rest',
  'Difficulty concentrating, remembering or making decisions',
  'Feelings of worthlessness or excessive guilt',
  'Thoughts of death or suicide',
]

const steps = [
  'Write down what you notice, including when it started and how often it happens',
  'Talk with someone you trust about how you have been feeling',
  'Keep up basic routines such as regular sleep, meals and gentle movement',
  'Schedule an appointment with a mental health professional for an evaluation',
]

const related = [
  { href: '/services', title: 'Our Services', desc: 'Explore the mental health care offered at our practice.' },
  { href: '/conditions', title: 'Conditions We Treat', desc: 'Learn about common mental health conditions and their care.' },
  { href: '/blog', title: 'All Resources', desc: 'Browse more patient education articles from our blog.' },
]

function Check() {
  return (
    <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Recognizing the Signs of Depression</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read · Reviewed by Blue Willow Psychiatry</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-recognizing-the-signs-of-depression.jpg"} alt={"A vintage typewriter with the word 'Depression' typed on paper, conveying a mental health theme."} width={1200} height={627} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Some days it feels like the color has drained out of everything. Getting out of bed takes enormous effort, favorite activities feel flat, and even people you love seem far away. If that sounds familiar, you are not weak and you are not alone. Depression is a real, common and treatable medical condition, and learning to recognize its signs is often the first step toward feeling better.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Depression Is (and Is Not)</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Everyone feels sad or discouraged at times, especially after a loss or a stressful event. Depression, often called major depressive disorder, is different. It involves a low mood or loss of interest that lasts for at least two weeks and interferes with daily life, work, relationships and health. It is not a character flaw, and it is not something a person can simply &quot;snap out of.&quot; Genetics, brain chemistry, life experiences, medical conditions and stress can all play a role.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Common Signs and Symptoms</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Depression looks different from person to person. Clinicians generally look for a cluster of symptoms that last most of the day, nearly every day. These may include:
        </p>
        <ul className="space-y-3 mb-6">
          {signs.map((s) => (
            <li key={s} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <Check />
              <span>{s}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Depression can also show up physically, through unexplained aches, headaches or digestive problems. Some people feel irritable or angry rather than sad, which is common in teens and in men, and can make depression easy to miss.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Depression is a real, common and treatable medical condition, and learning to recognize its signs is often the first step toward feeling better.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Depression can affect anyone, at any age and from any background. According to the National Institute of Mental Health, roughly one in five U.S. adults will experience a major depressive episode at some point in their lives. It is also seen in children and adolescents, in new parents, and in older adults, where it is sometimes mistaken for a normal part of aging. Risk can be higher with a family history of depression, chronic illness, trauma, major life changes or ongoing stress.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Recognizing It Early Matters</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Untreated depression can affect sleep, appetite, concentration, physical health and relationships, and it is linked with other conditions such as anxiety, substance use and heart disease. Research consistently shows that depression responds well to treatment, including psychotherapy, medication, or a combination of both. Earlier support often means a shorter, less disruptive episode and a lower chance of symptoms returning.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What You Can Do Today</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          You do not have to have everything figured out to begin. Small steps count:
        </p>
        <ul className="space-y-3 mb-6">
          {steps.map((s) => (
            <li key={s} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <Check />
              <span>{s}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If you are supporting someone you love, listen without judgment, avoid offering quick fixes, and gently encourage them to seek professional help.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Help Right Away</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If you or someone you know is thinking about suicide or self-harm, please seek help immediately. In the United States you can call or text 988 to reach the Suicide and Crisis Lifeline at any time, or call 911 in an emergency.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the Next Step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If several of these signs sound familiar, reaching out for an evaluation is a sign of strength, not failure. Blue Willow Psychiatry provides mental health care in Tooele, UT. You can call us at (435) 200-3430 or visit us at 28 North Main Street, Tooele, UT 84074 to talk about what you are experiencing and what support may be right for you.
        </p>
      </article>

      <section className="px-6">
        <div className="animate-fade-up bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
            <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
            </svg>
          </div>
          <div>
            <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">Reviewed by Blue Willow Psychiatry</p>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed mt-1">This article is for general education and is not a substitute for personal medical advice, diagnosis or treatment.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v10.5m-5.25-5.25h10.5" />
                </svg>
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{r.desc}</p>
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