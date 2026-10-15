import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coping With Seasonal Mood Changes | Blue Willow Psychiatry',
  description: 'Learn why mood shifts with the seasons, who is affected, and practical strategies for coping with seasonal depression, plus when to seek professional help.',
  alternates: { canonical: '/blog/coping-with-seasonal-mood-changes' },
  openGraph: {
    title: 'Coping With Seasonal Mood Changes | Blue Willow Psychiatry',
    description: 'Learn why mood shifts with the seasons, who is affected, and practical strategies for coping with seasonal depression, plus when to seek professional help.',
    url: 'https://www.bluewillowpsych.com/blog/coping-with-seasonal-mood-changes',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Coping With Seasonal Mood Changes | Blue Willow Psychiatry',
    description: 'Learn why mood shifts with the seasons, who is affected, and practical strategies for coping with seasonal depression, plus when to seek professional help.',
  },
}

const Check = () => (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const tips = [
  'Get outside within an hour or two of waking, even on cloudy days, since morning daylight helps anchor your body clock.',
  'Keep a steady sleep schedule, going to bed and waking at consistent times.',
  'Move your body most days. A brisk walk counts, and exercise has been shown to support mood.',
  'Stay connected. Plan regular contact with friends or family, even when you feel like withdrawing.',
  'Eat regular meals and notice cravings for heavy carbohydrates without judging yourself.',
  'Break big tasks into small steps so low energy does not turn into overwhelm.',
]

const related = [
  { href: '/blog', title: 'All Mental Health Resources', text: 'Browse patient education articles from our blog.' },
  { href: '/services', title: 'Our Services', text: 'See the types of care available at our practice.' },
  { href: '/contact', title: 'Contact Our Practice', text: 'Reach out to ask questions or request an appointment.' },
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Coping With Seasonal Mood Changes</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read · Reviewed by Blue Willow Psychiatry</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-coping-with-seasonal-mood-changes.jpg"} alt={"Colorful maple leaves held in hand symbolizing fall season's beauty."} width={1200} height={627} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p>
          The days grow shorter, the mornings turn dark, and something inside you slows down. You may find yourself sleeping more, pulling away from people you love, or feeling a heaviness that was not there in July. If this pattern returns year after year, you are not imagining it, and you are not alone. Seasonal mood changes are real, well studied, and treatable.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Are Seasonal Mood Changes?</h2>
        <p>
          Many people notice that their energy and outlook shift with the seasons. For some, this is a mild case of the &quot;winter blues.&quot; For others, it becomes seasonal affective disorder (SAD), a form of major depression that follows a seasonal pattern. Symptoms typically begin in late fall or early winter and ease in spring, although a smaller number of people experience the reverse, with symptoms appearing in spring or summer.
        </p>
        <p className="mt-4">
          Common signs include persistent low mood, loss of interest in activities, low energy, oversleeping, changes in appetite (especially craving carbohydrates), difficulty concentrating, irritability, and feelings of hopelessness or worthlessness.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected?</h2>
        <p>
          Seasonal depression can affect anyone, but it is more commonly diagnosed in adult women than in men, and it often begins in young adulthood. People who live farther from the equator, where winter daylight is shorter, tend to be affected more often. A personal or family history of depression, bipolar disorder, or SAD also raises the likelihood. Having seasonal symptoms does not mean you are weak or doing something wrong. It reflects how your body and brain respond to environmental change.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Does the Research Say?</h2>
        <p>
          Researchers believe several factors work together. Reduced sunlight can disrupt the body&apos;s internal clock, known as the circadian rhythm, which influences sleep, hormones, and mood. Less light may also affect serotonin, a brain chemical involved in mood regulation, and increase production of melatonin, which promotes sleepiness. Lower vitamin D levels have also been studied, though the evidence that supplements treat SAD is mixed.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Seasonal mood changes are real, well studied, and treatable.
        </div>

        <p>
          Evidence-based treatments include light therapy, cognitive behavioral therapy adapted for SAD, medication, and lifestyle changes. Studies have found that cognitive behavioral therapy can produce lasting benefits, and that bright light therapy can help many people when used consistently and correctly.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Ways to Cope</h2>
        <p className="mb-4">Small, consistent habits can make a meaningful difference, especially when started early in the season:</p>
        <ul className="space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3">
              <Check />
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Light Therapy and Other Treatments</h2>
        <p>
          Light therapy uses a special lamp that provides bright light, usually 10,000 lux, while filtering harmful ultraviolet rays. It is often used for a set time each morning. Because light therapy can affect people with certain eye conditions or bipolar disorder, it is wise to talk with a clinician before starting. Psychotherapy helps you notice and change unhelpful thought patterns and build activities that keep you engaged. Medication, such as antidepressants, may also be appropriate for some people, and a qualified professional can help you weigh the options.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Professional Help</h2>
        <p>
          Consider reaching out if your symptoms last more than a couple of weeks, interfere with work, relationships, or daily life, or if you are using alcohol or other substances to cope. If you have thoughts of harming yourself or ending your life, seek help immediately by calling or texting 988, the Suicide &amp; Crisis Lifeline, or by calling 911.
        </p>
        <p className="mt-4">
          You do not have to wait for spring to feel better. If the changing seasons are weighing on you, Blue Willow Psychiatry in Tooele, UT is here to talk. Call (435) 200-3430 or visit our contact page to start the conversation.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
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
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
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
          <p className="mb-8 text-white/80">Our team is here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition-colors border border-white/40">Contact Us</a>
        </div>
      </section>
    </main>
  )
}