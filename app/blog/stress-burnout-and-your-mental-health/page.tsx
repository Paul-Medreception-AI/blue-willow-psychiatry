import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stress, Burnout, and Your Mental Health',
  description: 'Learn how chronic stress becomes burnout, how to recognize the warning signs, and practical steps to protect your mental health and when to seek help.',
  alternates: { canonical: '/blog/stress-burnout-and-your-mental-health' },
  openGraph: {
    title: 'Stress, Burnout, and Your Mental Health',
    description: 'Learn how chronic stress becomes burnout, how to recognize the warning signs, and practical steps to protect your mental health and when to seek help.',
    url: 'https://www.bluewillowpsych.com/blog/stress-burnout-and-your-mental-health',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Stress, Burnout, and Your Mental Health',
    description: 'Learn how chronic stress becomes burnout, how to recognize the warning signs, and practical steps to protect your mental health and when to seek help.',
  },
}

const tips = [
  'Protect your sleep by keeping a consistent bedtime and winding down without screens.',
  'Move your body most days, even a short walk can lower tension.',
  'Set clear limits on work hours and notifications whenever you can.',
  'Stay connected with people you trust instead of withdrawing.',
  'Take real breaks during the day, including meals away from your desk.',
  'Limit alcohol and caffeine, which can worsen anxiety and sleep.',
]

const signs = [
  'Persistent exhaustion that rest does not seem to fix',
  'Growing cynicism, detachment, or irritability about work or responsibilities',
  'Feeling ineffective or that nothing you do matters',
  'Trouble concentrating, forgetfulness, or indecision',
  'Headaches, stomach problems, muscle tension, or frequent illness',
  'Changes in sleep or appetite, or a loss of interest in things you enjoy',
]

function Check() {
  return (
    <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Stress, Burnout, and Your Mental Health</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-stress-burnout-and-your-mental-health.jpg"} alt={"A skeleton covered in sticky notes with 'burnout' on one, symbolizing work stress and exhaustion."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base animate-fade-up">
          You wake up already tired. The to-do list grows faster than you can shorten it, small problems feel enormous, and the things that once brought you joy feel like one more obligation. If this sounds familiar, you are far from alone. Stress is a normal part of life, but when it never lets up, it can quietly wear down your body, your mood, and your sense of self. Understanding the difference between everyday stress and burnout is an important first step toward feeling better.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Stress, and When Does It Become a Problem?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Stress is your body&apos;s response to a demand or threat. In short bursts, it can sharpen focus and help you meet a deadline. The body releases hormones such as cortisol and adrenaline, your heart rate rises, and your muscles tense. Once the challenge passes, your system is meant to settle back down.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Problems arise when the stress response stays switched on for weeks or months. Chronic stress has been linked in research to sleep problems, high blood pressure, digestive trouble, weakened immune function, anxiety, and depression. It does not always feel dramatic. Often it shows up as a slow, steady drain.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Understanding Burnout</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          The World Health Organization describes burnout as an occupational phenomenon resulting from chronic workplace stress that has not been successfully managed. It is characterized by three dimensions: feelings of energy depletion or exhaustion, increased mental distance from or negativity toward one&apos;s job, and reduced professional effectiveness.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Burnout is not a personal failing or a sign of weakness. It tends to develop when demands consistently outweigh resources, when people feel little control, or when effort goes unrecognized. While the term began in the workplace, similar exhaustion can affect caregivers, students, and parents.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Common Signs to Watch For</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Burnout and chronic stress can look different from person to person. Common signs include:
        </p>
        <ul className="space-y-3 mb-4">
          {signs.map((s) => (
            <li key={s} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <Check />
              <span>{s}</span>
            </li>
          ))}
        </ul>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Burnout is not a personal failing or a sign of weakness.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Anyone can experience burnout. It is commonly discussed among healthcare workers, teachers, first responders, and other helping professions, but it also affects office workers, small business owners, students, and full-time caregivers. People juggling many roles, those with limited support, and those who set very high standards for themselves may be at greater risk. Stress also overlaps with conditions such as anxiety and depression, which is why it is worth paying attention to how long symptoms last and how much they interfere with daily life.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters for Your Mental Health</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Prolonged stress and burnout can raise the risk of depression, anxiety, and substance use, and they can strain relationships and physical health. Burnout and depression share symptoms such as fatigue, low motivation, and hopelessness, and they can occur together. A professional evaluation can help sort out what is happening so that the right kind of support can be put in place. Getting help early often makes recovery easier.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps You Can Start Today</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Small, consistent changes can make a real difference. Evidence supports regular physical activity, good sleep habits, social connection, and mindfulness or relaxation practices as ways to reduce stress. Consider these ideas:
        </p>
        <ul className="space-y-3 mb-4">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <Check />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Self-care helps, but it cannot fix every cause. If your workload, environment, or responsibilities are the main drivers, it may also help to talk with a supervisor, ask for support, or rethink what is realistic.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Professional Help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Reach out for professional support if symptoms last more than a couple of weeks, make it hard to function at work or home, or come with persistent sadness, panic, or changes in sleep and appetite. Treatment for stress-related concerns may include talk therapy, skill-building, lifestyle guidance, and, when appropriate, medication. If you ever have thoughts of harming yourself, call or text 988, the Suicide &amp; Crisis Lifeline, or call 911 in an emergency.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You do not have to wait until you reach a breaking point. If stress or burnout is taking a toll, Blue Willow Psychiatry in Tooele, UT is here to talk. Call (435) 200-3430 or reach out through our contact page to take the next step toward feeling like yourself again.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">From Blue Willow Psychiatry</p>
          <p className="text-[var(--color-muted)] text-sm mt-2 leading-relaxed">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/blog" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <p className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Resources Hub</p>
              <p className="text-sm text-[var(--color-muted)]">Browse all of our patient education articles.</p>
            </a>
            <a href="/services" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <p className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Our Services</p>
              <p className="text-sm text-[var(--color-muted)]">Learn about the care we provide.</p>
            </a>
            <a href="/contact" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <p className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Contact Us</p>
              <p className="text-sm text-[var(--color-muted)]">Get in touch with the practice.</p>
            </a>
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