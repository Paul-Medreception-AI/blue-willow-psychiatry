import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Second Opinion on a Mental Health Diagnosis',
  description: 'Unsure about a mental health diagnosis? Learn when a second opinion helps, how to prepare, and what questions to ask during the evaluation.',
  alternates: { canonical: '/blog/getting-a-second-opinion-on-a-mental-health-diagnosis' },
  openGraph: {
    title: 'Second Opinion on a Mental Health Diagnosis',
    description: 'Unsure about a mental health diagnosis? Learn when a second opinion helps, how to prepare, and what questions to ask during the evaluation.',
    url: 'https://www.bluewillowpsych.com/blog/getting-a-second-opinion-on-a-mental-health-diagnosis',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Second Opinion on a Mental Health Diagnosis',
    description: 'Unsure about a mental health diagnosis? Learn when a second opinion helps, how to prepare, and what questions to ask during the evaluation.',
  },
}

const Check = () => (
  <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Getting a Second Opinion on a Mental Health Diagnosis</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read · Reviewed by Blue Willow Psychiatry</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-getting-a-second-opinion-on-a-mental-health-diagnosis.jpg"} alt={"Scrabble tiles spelling 'Talking' on wooden surface, symbolizing communication."} width={1200} height={627} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          A diagnosis is supposed to bring clarity. But sometimes it brings doubt instead. Maybe the label does not match your lived experience, the treatment has not helped, or you simply feel unheard. If that sounds familiar, you are not being difficult. Asking for another perspective is a reasonable, common step in good health care.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What a Second Opinion Really Is</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          A second opinion is an independent evaluation by a different clinician. The goal is to review your history, symptoms, and current treatment with fresh eyes. It may confirm the original diagnosis, refine it, or suggest a different explanation for what you are experiencing. It does not mean you are abandoning your current provider, and many people return to their first clinician with new information.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Mental Health Diagnoses Can Be Hard to Pin Down</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Unlike a broken bone or an infection, mental health conditions cannot be confirmed with a single blood test or scan. Clinicians rely on your reported symptoms, history, observed behavior, and standardized criteria. Many conditions share symptoms. Trouble concentrating, irritability, poor sleep, and low energy can appear in depression, anxiety, ADHD, bipolar disorder, trauma-related conditions, and even thyroid problems or sleep disorders.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Research has long shown that conditions such as bipolar disorder can take years to be correctly identified, partly because people often seek help during a depressive episode. Symptoms can also change over time, which means a diagnosis made during one difficult season may need revisiting later.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Signs You May Want Another Opinion</h2>
        <ul className="space-y-3 mb-6">
          {[
            'The diagnosis does not seem to fit your experience or history.',
            'You have tried treatment as prescribed and are not improving.',
            'Medications have caused side effects that were not adequately addressed.',
            'You received a diagnosis after a very brief appointment.',
            'You have been given several different diagnoses over time.',
            'Your symptoms have changed significantly since the original evaluation.',
            'You feel your concerns were dismissed or not fully explored.',
          ].map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base"><Check />{t}</li>
          ))}
        </ul>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Asking for another perspective is a reasonable, common step in good health care.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Medical Conditions That Can Look Like Mental Illness</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          A thorough evaluation considers the whole person. Thyroid disorders, vitamin deficiencies, sleep apnea, hormonal changes, chronic pain, and side effects of certain medications or substances can all mimic or worsen psychiatric symptoms. A careful second opinion often includes questions about your physical health, and may involve coordinating with your primary care provider for lab work.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How to Prepare</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          A little preparation helps the new clinician understand your story quickly.
        </p>
        <ul className="space-y-3 mb-6">
          {[
            'Gather prior records, diagnoses, and any testing or questionnaires.',
            'List all current and past medications, doses, and how you responded.',
            'Write a timeline of when symptoms began and what made them better or worse.',
            'Note family history of mental health conditions, if you know it.',
            'Track sleep, mood, energy, and substance use for a week or two.',
            'Bring a list of questions, and consider bringing a trusted person.',
          ].map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base"><Check />{t}</li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Questions Worth Asking</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Ask how the clinician reached their conclusions, what other explanations were considered, and what evidence supports the recommended treatment. It is also fair to ask what you should expect over the coming weeks, how progress will be measured, and what the next step is if the first approach does not work.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What to Do With Differing Opinions</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          If the second opinion agrees with the first, you may feel reassured and more confident in your plan. If it differs, do not panic. Diagnoses involve clinical judgment, and reasonable clinicians can emphasize different features. Share the new information with everyone involved in your care, and avoid stopping or changing medication on your own, since that can cause withdrawal effects or a return of symptoms.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the Next Step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          You deserve care that makes sense to you. If you are in Tooele, UT and have questions about your diagnosis or treatment, Blue Willow Psychiatry is here to talk. Call (435) 200-3430 or visit us at 28 North Main Street, Tooele, UT 84074. If you are in crisis or thinking about harming yourself, call or text 988 or go to the nearest emergency room.
        </p>
        <p className="text-sm text-[var(--color-muted)] leading-relaxed">
          This article is for education only and is not a substitute for personalized medical advice.
        </p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">Reviewed by Blue Willow Psychiatry</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">Published October 2026</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: 'Blog Resources', d: 'Browse more patient education articles on mental health care.', h: '/blog' },
            { t: 'Our Services', d: 'Learn about the care offered at Blue Willow Psychiatry.', h: '/services' },
            { t: 'Contact the Practice', d: 'Reach out with questions or to start a conversation.', h: '/contact' },
          ].map((c) => (
            <a key={c.h} href={c.h} className="animate-fade-up block bg-white rounded-2xl border border-[var(--color-border)] p-6 hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v13.5M12 6.75C10.5 5.25 8 4.5 4.5 4.5v13.5c3.5 0 6 .75 7.5 2.25 1.5-1.5 4-2.25 7.5-2.25V4.5c-3.5 0-6 .75-7.5 2.25z" />
              </svg>
              <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{c.t}</h4>
              <p className="text-sm text-[var(--color-muted)]">{c.d}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">Our team is here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full border border-white/40">Contact Us</a>
        </div>
      </section>
    </main>
  )
}