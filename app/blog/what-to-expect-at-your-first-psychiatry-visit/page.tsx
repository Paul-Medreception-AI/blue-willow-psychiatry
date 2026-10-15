import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What to Expect at Your First Psychiatry Visit',
  description: 'Nervous about a first psychiatry appointment? Learn what happens, what to bring, and the questions to ask so you can walk in feeling prepared.',
  alternates: { canonical: '/blog/what-to-expect-at-your-first-psychiatry-visit' },
  openGraph: {
    title: 'What to Expect at Your First Psychiatry Visit',
    description: 'Nervous about a first psychiatry appointment? Learn what happens, what to bring, and the questions to ask so you can walk in feeling prepared.',
    url: 'https://www.bluewillowpsych.com/blog/what-to-expect-at-your-first-psychiatry-visit',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'What to Expect at Your First Psychiatry Visit',
    description: 'Nervous about a first psychiatry appointment? Learn what happens, what to bring, and the questions to ask so you can walk in feeling prepared.',
  },
}

const tips = [
  'Write down your main symptoms, when they started, and how they affect work, sleep, and relationships.',
  'Bring a list of every medication and supplement you take, including doses.',
  'Note any family history of mental health conditions, substance use, or related concerns.',
  'Gather names of previous providers and any past diagnoses or treatments you remember.',
  'Prepare a short list of questions so you do not forget them in the moment.',
  'Bring a trusted person if it helps you feel more at ease and the practice allows it.',
]

const related = [
  { href: '/blog', label: 'Blog Hub', title: 'More Mental Health Resources' },
  { href: '/services', label: 'Services', title: 'Our Mental Health Services' },
  { href: '/contact', label: 'Contact', title: 'Contact Blue Willow Psychiatry' },
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">What to Expect at Your First Psychiatry Visit</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-what-to-expect-at-your-first-psychiatry-visit.jpg"} alt={"A therapist engages in a focused psychotherapy session with a patient in an indoor setting."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You have finally decided to talk to someone about how you have been feeling. Maybe it took weeks, or years, to get here. Now a new worry appears: what actually happens in a psychiatrist&apos;s office? Not knowing can be one of the biggest barriers to getting help. This guide walks through the first visit so the unknown feels a little smaller.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is a Psychiatric Evaluation?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Psychiatry is the branch of medicine focused on diagnosing and treating mental health conditions such as depression, anxiety, ADHD, bipolar disorder, and trauma-related concerns. A first visit is usually an evaluation, which is a structured conversation designed to understand you as a whole person. It is not a test you can fail, and you do not need to have the right words. The goal is simply to gather enough information to understand what you are experiencing and what might help.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Seeks Psychiatric Care?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Far more people than you might expect. According to the National Institute of Mental Health, roughly one in five U.S. adults lives with a mental illness in a given year. People seek care for persistent sadness, constant worry, trouble concentrating, sleep problems, mood swings, or simply a sense that something is off. You do not need to be in crisis to deserve support.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Happens During the Appointment</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Expect a conversation. Your psychiatrist will typically ask about your current symptoms, how long they have been present, and how they affect daily life. Common topics include:
        </p>
        <ul className="my-4 space-y-2 text-[var(--color-ink)] leading-loose text-base list-disc pl-6">
          <li>Your mood, energy, sleep, appetite, and concentration</li>
          <li>Your medical history and any current medications</li>
          <li>Past mental health care and what did or did not help</li>
          <li>Family history of mental health conditions</li>
          <li>Stress, relationships, work, and major life events</li>
          <li>Alcohol, tobacco, or other substance use</li>
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          These questions can feel personal. Clinicians ask them because accurate details lead to better care, and what you share is treated as confidential health information under privacy laws.
        </p>

        <blockquote className="font-cormorant bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl">
          A first visit is usually an evaluation, which is a structured conversation designed to understand you as a whole person.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How to Prepare</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          A little preparation helps you make the most of your time. Consider the following:
        </p>
        <ul className="space-y-3 my-4">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Comes After the Evaluation</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          By the end of the visit, your psychiatrist may share an initial impression and discuss options. Treatment is individualized and may include psychotherapy, lifestyle strategies, medication, or a combination. Research consistently shows that combining approaches can be effective for many conditions, including depression and anxiety. If medication is discussed, you can expect an explanation of potential benefits, side effects, and alternatives, and you are free to ask questions or take time to decide. Follow-up visits are common so progress can be reviewed and plans adjusted.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Questions Worth Asking</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You are an active partner in your care. Consider asking what your diagnosis means, what the treatment options are, how long it may take to notice change, what side effects to watch for, and how to reach the office between visits. If something is unclear, ask again. Good care is built on understanding.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Taking the First Step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Reaching out is often the hardest part, and you have already done the thinking that gets you there. If you are in Tooele or the surrounding area and would like to talk with a professional, Blue Willow Psychiatry can be reached at (435) 200-3430 or at 28 North Main Street, Tooele, UT 84074. If you are ever in crisis or having thoughts of harming yourself, call or text 988 (Suicide &amp; Crisis Lifeline) or call 911 right away.
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
          <p className="text-[var(--color-muted)] text-sm mt-2 leading-relaxed">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <p className="font-cormorant text-2xl text-[var(--color-primary)]">{r.title}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-white/80 mb-8">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition-colors border border-white/40">Contact Us</a>
        </div>
      </section>
    </main>
  )
}