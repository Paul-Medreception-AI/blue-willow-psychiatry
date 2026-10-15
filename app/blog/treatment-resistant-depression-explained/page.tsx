import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Treatment-Resistant Depression Explained',
  description: 'Learn what treatment-resistant depression is, who it affects, and which options may help when standard depression treatments have not brought relief.',
  alternates: { canonical: '/blog/treatment-resistant-depression-explained' },
  openGraph: {
    title: 'Treatment-Resistant Depression Explained',
    description: 'Learn what treatment-resistant depression is, who it affects, and which options may help when standard depression treatments have not brought relief.',
    url: 'https://www.bluewillowpsych.com/blog/treatment-resistant-depression-explained',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Treatment-Resistant Depression Explained',
    description: 'Learn what treatment-resistant depression is, who it affects, and which options may help when standard depression treatments have not brought relief.',
  },
}

const tips = [
  'Keep a simple daily log of mood, sleep, appetite, and side effects to share with your prescriber.',
  'Take medications exactly as directed, and talk with your prescriber before changing or stopping any of them.',
  'Ask whether other conditions, such as anxiety, sleep apnea, thyroid problems, or substance use, could be playing a role.',
  'Ask about psychotherapy alongside medication, since the combination often works better than either alone.',
  'Lean on trusted people, and tell someone close to you how you are really doing.',
]

const related = [
  { title: 'Depression: Symptoms and Treatment', href: '/conditions/depression', label: 'Condition' },
  { title: 'Medication Management', href: '/services/medication-management', label: 'Service' },
  { title: 'Resources and Articles', href: '/blog', label: 'Resource Hub' },
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Treatment-Resistant Depression Explained</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read · Reviewed by Blue Willow Psychiatry</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-treatment-resistant-depression-explained.jpg"} alt={"Therapist takes notes while patient discusses problems on a couch during a session."} width={1200} height={627} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You have done what you were told to do. You started the medication, gave it time, maybe tried a second or third. Yet the heaviness is still there, and you may be wondering whether something is wrong with you. Nothing is. For many people, depression does not lift with the first treatment, and that is a medical reality, not a personal failure. This is often called treatment-resistant depression, and there are still meaningful paths forward.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Treatment-Resistant Depression?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Treatment-resistant depression (TRD) is generally defined as major depression that has not improved enough after trying at least two different antidepressants, each taken at an adequate dose for an adequate length of time. The word &quot;resistant&quot; can sound final, but it really means that the first approaches have not been enough and that a closer look is needed.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Symptoms are the same as in other forms of major depression: persistent sadness or emptiness, loss of interest, fatigue, changes in sleep or appetite, trouble concentrating, feelings of worthlessness, and sometimes thoughts of death or suicide.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Does It Affect?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Research suggests that roughly one in three adults treated for major depression does not reach remission after the first medication, and a meaningful share continue to struggle after several attempts. Treatment-resistant depression can affect people of any age, background, or lifestyle. Some factors are linked with a higher chance of it, including long-lasting or severe episodes, co-occurring anxiety, chronic medical illness, substance use, trauma history, and ongoing life stress.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Standard Treatment Sometimes Falls Short</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Depression is not one single condition with one single cause. Brain chemistry, genetics, hormones, inflammation, sleep, and life circumstances all contribute, and they differ from person to person. A medication that works well for one person may do little for another.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Before concluding that depression is truly treatment-resistant, a careful clinician will usually review several questions:
        </p>
        <ul className="mt-4 space-y-3">
          {['Was the diagnosis accurate, or could it be bipolar disorder, a thyroid disorder, or another condition?', 'Was the dose high enough and the trial long enough?', 'Were medications taken consistently, and were side effects a barrier?', 'Are other conditions, such as anxiety, ADHD, sleep disorders, or substance use, going untreated?'].map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Treatment-resistant depression is a medical reality, not a personal failure.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Shows About Options</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Large studies, including the well-known STAR*D trial, found that many people who did not respond to a first antidepressant improved after changing the plan, though each additional step brought somewhat lower odds. This is why a thoughtful, stepwise approach matters. Options that clinicians may consider include:
        </p>
        <ul className="mt-4 space-y-3">
          {['Adjusting the dose or switching to a different antidepressant.', 'Adding a second medication to strengthen the effect, known as augmentation.', 'Evidence-based psychotherapy such as cognitive behavioral therapy.', 'Brain stimulation treatments, including transcranial magnetic stimulation and electroconvulsive therapy.', 'Esketamine, a prescription nasal spray given under medical supervision.'].map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Which of these is appropriate depends on your history, your health, and your preferences. Not every option is available in every setting, and a prescriber can explain what fits your situation.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps You Can Take</h2>
        <ul className="mt-4 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Daily habits such as regular sleep, movement, sunlight, and time with others will not replace treatment, but they can support it.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Help Right Away</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If you are having thoughts of harming yourself, please do not wait for an appointment. Call or text 988, the Suicide and Crisis Lifeline, or call 911 if you are in immediate danger.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">You Do Not Have to Face This Alone</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Having tried treatments that did not work can be exhausting, and hope may feel hard to hold. But a lack of response so far does not mean you will never feel better. If you live in or near Tooele, Utah and want to talk through your options, Blue Willow Psychiatry is at 28 North Main Street. Call (435) 200-3430 or reach out through our contact page to start the conversation.
        </p>
        <p className="text-sm text-[var(--color-muted)] leading-relaxed mt-6">
          This article is for general education and is not a substitute for personal medical advice, diagnosis, or treatment.
        </p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">Reviewed by Blue Willow Psychiatry</p>
          <p className="text-[var(--color-muted)] text-sm mt-1 leading-relaxed">Patient education on mental health care from our practice in Tooele, Utah.</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <p className="font-cormorant text-2xl text-[var(--color-primary)]">{r.title}</p>
                <span className="inline-block mt-4 text-sm text-[var(--color-accent)]">Read more →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-white/80 mb-8">Our team is here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] border border-white/40 text-white px-8 py-3 rounded-full transition-colors">Contact Us</a>
        </div>
      </section>
    </main>
  )
}