import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mood Swings or Bipolar Disorder? Know the Signs',
  description: 'Learn how ordinary mood swings differ from bipolar disorder, the warning signs to watch for, and when to seek a professional mental health evaluation.',
  alternates: { canonical: '/blog/mood-swings-or-bipolar-disorder' },
  openGraph: {
    title: 'Mood Swings or Bipolar Disorder? Know the Signs',
    description: 'Learn how ordinary mood swings differ from bipolar disorder, the warning signs to watch for, and when to seek a professional mental health evaluation.',
    url: 'https://www.bluewillowpsych.com/blog/mood-swings-or-bipolar-disorder',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Mood Swings or Bipolar Disorder? Know the Signs',
    description: 'Learn how ordinary mood swings differ from bipolar disorder, the warning signs to watch for, and when to seek a professional mental health evaluation.',
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

export default function Page() {
  const tips = [
    'Track your mood, sleep, and energy each day for a few weeks.',
    'Note how long each high or low period lasts, and what it changes in your life.',
    'Ask trusted family or friends what changes they have noticed.',
    'Keep a list of medications, supplements, caffeine, and alcohol use.',
    'Share your family history of mood disorders with a professional.',
    'Seek help promptly if you have thoughts of harming yourself.',
  ]
  const related = [
    { t: 'Resources Hub', d: 'Browse more patient education articles from the practice.', h: '/blog' },
    { t: 'Our Services', d: 'Learn about the mental health care we provide in Tooele.', h: '/services' },
    { t: 'Conditions We Treat', d: 'Explore mental health conditions and how they are approached.', h: '/conditions' },
  ]
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white">Home</a> › <a href="/blog" className="hover:text-white">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Mood Swings or Bipolar Disorder?</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read · Reviewed by Blue Willow Psychiatry</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-mood-swings-or-bipolar-disorder.jpg"} alt={"A serene sunset silhouette of a woman sitting on a swing by the seashore, evoking tranquility and reflection."} width={1200} height={627} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="animate-fade-up">One hour you feel fine, the next you are irritable, tearful, or wound up, and you wonder whether something deeper is going on. Almost everyone has days when their mood shifts. But when the shifts feel extreme, last for days, or disrupt your work and relationships, it is fair to ask whether they are more than ordinary ups and downs. Understanding the difference can be the first step toward feeling steady again.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Are Normal Mood Swings?</h2>
        <p>Mood changes are a normal part of being human. Stress, poor sleep, hormonal shifts, hunger, conflict, and major life events can all affect how we feel. Typical mood swings are usually tied to a trigger, pass within hours or a day or two, and do not stop you from functioning. You may feel snappy after a rough night, yet still get through work, care for your family, and enjoy things once the stress eases.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Bipolar Disorder?</h2>
        <p>Bipolar disorder is a medical condition that causes distinct episodes of unusually elevated or irritable mood, called mania or hypomania, and often episodes of depression. These are not just strong emotions. They are sustained changes in mood, energy, sleep, and behavior that are noticeably different from a person's usual self.</p>
        <p className="mt-4">During a manic or hypomanic episode, a person may need much less sleep without feeling tired, talk rapidly, have racing thoughts, take on risky behavior, or spend money impulsively. During a depressive episode, they may feel hopeless, exhausted, unable to concentrate, and withdrawn. Mania typically lasts at least a week, and hypomania at least four days, while depressive episodes usually last two weeks or longer.</p>

        <blockquote className="font-cormorant bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl">
          Bipolar disorder is a medical condition, not a character flaw or a lack of willpower.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Key Differences to Notice</h2>
        <p>Several features help separate everyday mood changes from a possible mood disorder:</p>
        <ul className="mt-4 space-y-3">
          <li className="flex gap-3">{check}<span><strong>Duration:</strong> bipolar episodes last days to weeks, not just hours.</span></li>
          <li className="flex gap-3">{check}<span><strong>Intensity:</strong> the changes are marked and out of character, not a mild reaction.</span></li>
          <li className="flex gap-3">{check}<span><strong>Triggers:</strong> episodes can arise with no clear cause.</span></li>
          <li className="flex gap-3">{check}<span><strong>Impact:</strong> work, school, finances, or relationships are affected.</span></li>
          <li className="flex gap-3">{check}<span><strong>Sleep and energy:</strong> big shifts, such as feeling rested after only a few hours.</span></li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected and What the Research Shows</h2>
        <p>Bipolar disorder affects around 2 to 3 percent of adults over their lifetime, and it affects men and women alike. It often first appears in the late teens or early adulthood, though it can begin at other ages. Research shows that genetics play a significant role, so having a close relative with bipolar disorder raises the likelihood. Stress, substance use, and sleep disruption can trigger episodes.</p>
        <p className="mt-4">Bipolar disorder is frequently mistaken for depression, anxiety, ADHD, or personality difficulties, and it can take years to be correctly identified. This matters because treatments differ. For example, antidepressants used alone may not be appropriate for someone with bipolar disorder. An accurate evaluation helps guide safer, more effective care.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Getting Answers Matters</h2>
        <p>Untreated mood episodes can strain relationships, careers, and physical health, and bipolar disorder is associated with a higher risk of suicidal thoughts. The encouraging news is that it is treatable. A combination of medication, psychotherapy, consistent routines, and support helps many people reach stable, fulfilling lives. Earlier recognition generally means fewer disruptive episodes.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps You Can Take</h2>
        <ul className="space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3">{check}<span>{t}</span></li>
          ))}
        </ul>
        <p className="mt-6">Only a qualified clinician can diagnose bipolar disorder. A thorough evaluation considers your history, symptoms, and other possible causes such as thyroid problems, substance effects, or medication side effects.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Reach Out</h2>
        <p>If your mood shifts feel unpredictable, intense, or hard to manage, you do not have to sort it out alone. Blue Willow Psychiatry provides mental health care in Tooele, Utah. Call (435) 200-3430 or visit us at 28 North Main Street to ask about next steps. If you are in crisis or having thoughts of harming yourself, call or text 988, the Suicide and Crisis Lifeline, or call 911 right away.</p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">Reviewed by Blue Willow Psychiatry</p>
          <p className="text-sm text-[var(--color-muted)] mt-2">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.h} href={r.h} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 transition hover:shadow-lg">
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.t}</h4>
                <p className="text-sm text-[var(--color-muted)]">{r.d}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">Our team is here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition border border-white/40">Contact Us</a>
        </div>
      </section>
    </main>
  )
}