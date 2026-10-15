import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Grief and Mental Health | Blue Willow Psychiatry',
  description: 'Learn how grief affects mental health, when it becomes prolonged or overlaps with depression, and how to find support in Tooele, UT.',
  alternates: { canonical: '/blog/grief-and-mental-health' },
  openGraph: {
    title: 'Grief and Mental Health | Blue Willow Psychiatry',
    description: 'Learn how grief affects mental health, when it becomes prolonged or overlaps with depression, and how to find support in Tooele, UT.',
    url: 'https://www.bluewillowpsych.com/blog/grief-and-mental-health',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Grief and Mental Health | Blue Willow Psychiatry',
    description: 'Learn how grief affects mental health, when it becomes prolonged or overlaps with depression, and how to find support in Tooele, UT.',
  },
}

const tips = [
  'Let yourself feel what comes, without judging it or setting a deadline for it to end.',
  'Keep basic routines going: regular meals, light movement, and a consistent sleep schedule.',
  'Lean on trusted people, and tell them specifically what would help.',
  'Mark anniversaries and difficult dates with a plan, such as a ritual or company.',
  'Limit alcohol and other substances, which can deepen low mood and disrupt sleep.',
  'Consider a support group or counseling where others understand what you are facing.',
  'Reach out to a professional if daily life feels unmanageable or you have thoughts of harming yourself.',
]

const related = [
  { title: 'Depression Services', href: '/conditions/depression', tag: 'Condition' },
  { title: 'Anxiety Care', href: '/conditions/anxiety', tag: 'Condition' },
  { title: 'More Mental Health Resources', href: '/blog', tag: 'Resource Hub' },
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Grief and Mental Health</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-grief-and-mental-health.jpg"} alt={"Desperate African American female with curly hair wiping face with tissue while crying from sadness on windowsill and looking away"} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          One phone call, one diagnosis, one empty chair at the table. Loss can rearrange your world in an instant, and the days that follow rarely feel like anything you were prepared for. If you are grieving, you may be wondering whether what you feel is normal, whether it will ease, and when it might be time to ask for help. Those are important questions, and you deserve honest answers.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Grief Really Is</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Grief is the natural response to loss. Most people associate it with the death of a loved one, but it can also follow a divorce, the end of a friendship, a job loss, a serious health diagnosis, a miscarriage, or the death of a pet. Grief is not only sadness. It can include numbness, anger, guilt, anxiety, relief, yearning, and confusion, sometimes all in the same hour.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          You may have heard of the &quot;five stages of grief.&quot; While those stages can be a helpful vocabulary, research and clinical experience show that grief does not follow a tidy sequence. It tends to come in waves, often triggered by reminders, and it can loop back unexpectedly.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How Grief Affects the Mind and Body</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Grief is a whole-person experience. Common emotional responses include sadness, irritability, and difficulty feeling pleasure. Physical effects are just as real: fatigue, changes in appetite, trouble sleeping, headaches, and a sense of heaviness in the chest. Concentration and memory often suffer, which can make work and everyday tasks feel overwhelming.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Studies have found that the period after a significant loss is linked with higher rates of sleep problems, depression, and anxiety, and bereaved people may be more vulnerable to health problems as stress takes its toll. This does not mean something is wrong with you. It means loss is a major stressor, and care matters.
        </p>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Grief is not a problem to be solved, but an experience that deserves support.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Grief, Depression, and Prolonged Grief</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Grief and depression share many features, which can make them hard to tell apart. In general, grief comes in waves tied to memories of the loss, and positive feelings and moments of connection often remain possible. Depression tends to be more constant, with persistent low mood, feelings of worthlessness, and loss of interest in nearly everything. The two can also occur together, and a major loss can trigger a depressive episode.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Some people experience prolonged grief disorder, a recognized condition in which intense longing or preoccupation with the deceased persists well beyond what is expected for a person&apos;s culture and context, and significantly interferes with daily life. Clinicians generally consider this diagnosis only after a substantial period has passed since the loss, and effective, grief-focused therapies exist for it.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Everyone who loves will eventually grieve. Still, some people face greater risk of complicated reactions, including those who have experienced a sudden or traumatic loss, those with a history of depression, anxiety, or trauma, people with limited social support, and caregivers who have spent months or years caring for someone who was ill. Children and teens grieve too, though they may show it through behavior, school difficulties, or play rather than words.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Ways to Care for Yourself</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          There is no right way to grieve, but small, steady habits can make the weight more bearable.
        </p>
        <ul className="space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-relaxed">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Professional Help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Consider reaching out if your grief feels unrelenting, if you cannot function at work or home, if you are withdrawing from everyone, if you are relying on alcohol or drugs to cope, or if you feel hopeless. Treatment can include talk therapy, grief-focused counseling, and, when depression or anxiety develop, a careful evaluation of whether medication could help. If you are having thoughts of ending your life, call or text 988, the Suicide and Crisis Lifeline, or go to the nearest emergency room right away.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Asking for support is not a sign that you are grieving the wrong way. If you are in Tooele, UT and would like to talk with someone about what you are going through, Blue Willow Psychiatry is here to listen. You can call (435) 200-3430 or reach out through our contact page.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">From Blue Willow Psychiatry</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.tag}</p>
                <p className="font-cormorant text-2xl text-[var(--color-primary)]">{r.title}</p>
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