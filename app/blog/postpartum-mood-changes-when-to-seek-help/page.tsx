import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Postpartum Mood Changes: When to Seek Help',
  description: 'Learn the difference between baby blues and postpartum depression or anxiety, the warning signs to watch for, and when to reach out for professional support.',
  alternates: { canonical: '/blog/postpartum-mood-changes-when-to-seek-help' },
  openGraph: {
    title: 'Postpartum Mood Changes: When to Seek Help',
    description: 'Learn the difference between baby blues and postpartum depression or anxiety, the warning signs to watch for, and when to reach out for professional support.',
    url: 'https://www.bluewillowpsych.com/blog/postpartum-mood-changes-when-to-seek-help',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Postpartum Mood Changes: When to Seek Help',
    description: 'Learn the difference between baby blues and postpartum depression or anxiety, the warning signs to watch for, and when to reach out for professional support.',
  },
}

const signs = [
  'Sadness, emptiness, or hopelessness that lasts most of the day, nearly every day',
  'Persistent worry, racing thoughts, or a constant sense of dread',
  'Trouble sleeping even when the baby is asleep, or sleeping far too much',
  'Loss of interest in things you usually enjoy',
  'Difficulty bonding with your baby or feeling numb toward them',
  'Intense irritability, anger, or feeling overwhelmed by small tasks',
  'Changes in appetite that are not explained by new-parent routines',
]

const tips = [
  'Tell one trusted person exactly how you have been feeling',
  'Write down your symptoms and when they started so you can share them with a clinician',
  'Protect a block of sleep when you can, and ask others to take a feeding or shift',
  'Accept practical help with meals, laundry, and errands',
  'Get gentle movement or time outdoors when you are able',
  'Schedule an appointment instead of waiting to see if it passes',
]

function Check() {
  return (
    <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

const related = [
  { href: '/blog', title: 'More Mental Health Resources', tag: 'Resource Hub' },
  { href: '/services', title: 'Our Mental Health Services', tag: 'Services' },
  { href: '/conditions', title: 'Conditions We Support', tag: 'Conditions' },
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Postpartum Mood Changes: When to Seek Help</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-postpartum-mood-changes-when-to-seek-help.jpg"} alt={"A woman in bed showing signs of anxiety. Soft light indoors."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="text-lg">
          You brought home a baby, and everyone expects you to be glowing. Instead, you may be crying in the kitchen at 3 a.m., feeling anxious in ways you cannot explain, or wondering why you do not feel what you thought you would. If that sounds familiar, you are not failing, and you are far from alone. Postpartum mood changes are common, treatable, and nothing to be ashamed of.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Are Postpartum Mood Changes?</h2>
        <p>
          Having a baby brings sudden shifts in hormones, sleep, identity, and daily responsibilities. It is no surprise that emotions shift too. Clinicians generally describe a spectrum, from short-lived &quot;baby blues&quot; to more lasting conditions such as postpartum depression, postpartum anxiety, and, rarely, postpartum psychosis.
        </p>
        <p className="mt-4">
          The baby blues often appear within the first few days after birth and can include tearfulness, mood swings, and feeling overwhelmed. They typically ease within about two weeks. When symptoms are stronger, last longer than two weeks, or interfere with daily life, it may be something more than the blues.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected?</h2>
        <p>
          Any new parent can be affected, including birth mothers, adoptive parents, and partners. Research suggests that roughly one in seven women experiences depression after childbirth, and fathers and partners can also develop depression or anxiety in the months after a baby arrives. Risk is higher with a personal or family history of depression or anxiety, a difficult pregnancy or delivery, limited support, major life stress, or a history of loss.
        </p>
        <p className="mt-4">
          Still, postpartum mood problems can occur without any obvious risk factor. They are not a character flaw, and they are not caused by something you did or did not do.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Warning Signs to Watch For</h2>
        <p className="mb-4">Feeling tired and emotional is expected. These signs suggest it may be time to talk with a professional:</p>
        <ul className="space-y-3">
          {signs.map((s) => (
            <li key={s} className="flex gap-3"><Check /><span>{s}</span></li>
          ))}
        </ul>

        <blockquote className="font-cormorant bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl">
          Postpartum mood changes are common, treatable, and nothing to be ashamed of.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Getting Help Early Matters</h2>
        <p>
          Untreated postpartum depression and anxiety can affect a parent&apos;s health, relationships, and ability to enjoy early months with their child. Studies have linked untreated perinatal depression with difficulties in bonding and, in some cases, with later challenges for the child&apos;s emotional development. The encouraging news is that these conditions respond well to care, and earlier support generally means faster relief.
        </p>
        <p className="mt-4">
          Evidence-based options include talk therapy such as cognitive behavioral therapy and interpersonal therapy, peer and community support, and, when appropriate, medication. Medication decisions, including those for people who are breastfeeding, should be made together with a qualified clinician who can weigh benefits and risks for your situation.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Urgent Situations</h2>
        <p>
          Seek immediate help if you have thoughts of harming yourself or your baby, hear or see things others do not, feel confused or extremely agitated, or have not slept for days without feeling tired. These can be signs of a medical emergency. Call 911 or go to the nearest emergency room. In the United States, you can also call or text 988 to reach the Suicide &amp; Crisis Lifeline at any time.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps You Can Take Now</h2>
        <ul className="space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3"><Check /><span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Reaching Out for Support</h2>
        <p>
          Asking for help is one of the strongest things a new parent can do. If your mood has felt off for more than a couple of weeks, or if you are simply unsure, a conversation with a mental health professional can bring clarity and relief. Blue Willow Psychiatry provides mental health care in Tooele, UT. You can call (435) 200-3430 or visit us at 28 North Main Street, Tooele, UT 84074 to start the conversation.
        </p>
        <p className="mt-4 text-sm text-[var(--color-muted)]">
          This article is for general education and is not a substitute for personal medical advice, diagnosis, or treatment.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">From Blue Willow Psychiatry</p>
          <p className="text-[var(--color-muted)] mt-1">Published October 2026</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.title} href={r.href} className="animate-fade-up block bg-white rounded-2xl border border-[var(--color-border)] p-6 hover:shadow-lg transition-shadow">
                <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
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