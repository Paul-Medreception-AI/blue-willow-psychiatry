import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Questions to Ask Your Psychiatric Provider',
  description: 'Prepare for your psychiatry visit with thoughtful questions about diagnosis, medication, therapy, side effects, and follow-up care.',
  alternates: { canonical: '/blog/questions-to-ask-your-psychiatric-provider' },
  openGraph: {
    title: 'Questions to Ask Your Psychiatric Provider',
    description: 'Prepare for your psychiatry visit with thoughtful questions about diagnosis, medication, therapy, side effects, and follow-up care.',
    url: 'https://www.bluewillowpsych.com/blog/questions-to-ask-your-psychiatric-provider',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Questions to Ask Your Psychiatric Provider',
    description: 'Prepare for your psychiatry visit with thoughtful questions about diagnosis, medication, therapy, side effects, and follow-up care.',
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const diagnosisQs = [
  'What diagnosis, if any, do you think fits my symptoms, and what led you to that conclusion?',
  'Are there other conditions that could look similar, and how will we rule them out?',
  'Could a physical health issue, such as a thyroid problem or sleep disorder, be contributing?',
  'What should I expect my symptoms to look like over the coming weeks and months?',
]

const medQs = [
  'How does this medication work, and what symptoms is it meant to target?',
  'How long might it take before I notice a change?',
  'What side effects are common, and which ones should prompt me to call you?',
  'Does it interact with my other medications, supplements, caffeine, or alcohol?',
  'What happens if I miss a dose, and how should I stop the medication safely if needed?',
]

const planQs = [
  'Would therapy, medication, or a combination make the most sense for me?',
  'How will we measure whether treatment is working?',
  'What can I do on my own, such as sleep routines, movement, or reducing alcohol, to support treatment?',
  'How often will we meet, and how can I reach the office between visits?',
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Questions to Ask Your Psychiatric Provider</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-questions-to-ask-your-psychiatric-provider.jpg"} alt={"Wooden letter tiles on a rustic surface spell the word 'Therapist'."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)]">
        <p className="leading-loose text-base">
          You finally made the appointment. Maybe it took weeks, or years, to get here. Then you sit down, the room feels quiet, and every question you rehearsed seems to vanish. If that sounds familiar, you are far from alone. Walking into a psychiatric visit can feel vulnerable, and it is easy to leave with questions you wish you had asked.
        </p>
        <p className="leading-loose text-base mt-4">
          The good news is that a little preparation goes a long way. Research on shared decision-making in mental health care consistently suggests that when people understand their options and take part in choices, they tend to feel more satisfied with care and are more likely to stay with a treatment plan. This guide offers questions you can bring with you, along with tips for making the most of your time.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Asking Questions Matters</h2>
        <p className="leading-loose text-base">
          Mental health care is a partnership. Your provider brings clinical training and knowledge of the evidence; you bring the lived experience of your symptoms, your history, your values, and your goals. Neither is complete without the other. Questions help close the gap, so treatment fits your actual life rather than a generic template.
        </p>
        <p className="leading-loose text-base mt-4">
          Questions also build trust. Understanding why a recommendation is being made makes it easier to follow through, and it gives you a way to raise concerns early instead of quietly stopping treatment. Nobody should feel that asking is an inconvenience. It is part of good care.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Before the Appointment: Get Ready</h2>
        <p className="leading-loose text-base">
          Preparation reduces anxiety and makes the visit more productive. Consider gathering the following:
        </p>
        <ul className="mt-4 space-y-3">
          {[
            'A list of current medications, vitamins, and supplements, including doses.',
            'Notes on your symptoms: when they started, how often they occur, and what makes them better or worse.',
            'Relevant history, including past diagnoses, treatments, hospital stays, and family mental health history.',
            'Details on sleep, appetite, energy, substance use, and major life stressors.',
            'Your top three questions, written down so you do not forget them.',
          ].map((t) => (
            <li key={t} className="flex gap-3 leading-loose text-base">{check}<span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Questions About Your Diagnosis</h2>
        <p className="leading-loose text-base">
          A diagnosis is a way of describing a pattern of symptoms so that treatment can be chosen thoughtfully. It is not a label that defines you. Understanding it can ease uncertainty.
        </p>
        <ul className="mt-4 space-y-3">
          {diagnosisQs.map((t) => (
            <li key={t} className="flex gap-3 leading-loose text-base">{check}<span>{t}</span></li>
          ))}
        </ul>

        <blockquote className="font-cormorant bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl">
          Mental health care is a partnership.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Questions About Medication</h2>
        <p className="leading-loose text-base">
          If medication is recommended, it is reasonable to want clear answers. Many psychiatric medications take several weeks to reach their full effect, and some side effects fade with time, so knowing what to expect can prevent unnecessary worry or abrupt changes.
        </p>
        <ul className="mt-4 space-y-3">
          {medQs.map((t) => (
            <li key={t} className="flex gap-3 leading-loose text-base">{check}<span>{t}</span></li>
          ))}
        </ul>
        <p className="leading-loose text-base mt-4">
          Please do not stop or change a prescribed medication on your own. Some medications need to be tapered, and sudden changes can cause uncomfortable symptoms or a return of the original problem.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Questions About Your Treatment Plan</h2>
        <p className="leading-loose text-base">
          Evidence supports many approaches to conditions like depression and anxiety, including psychotherapy, medication, lifestyle changes, and combinations of these. The right mix depends on your symptoms, preferences, and circumstances.
        </p>
        <ul className="mt-4 space-y-3">
          {planQs.map((t) => (
            <li key={t} className="flex gap-3 leading-loose text-base">{check}<span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Questions About Safety and Support</h2>
        <p className="leading-loose text-base">
          It can help to ask what to do if symptoms worsen, or if you have thoughts of harming yourself. Ask who to contact and what steps to take. If you are ever in immediate danger or thinking about suicide, call or text 988 (the Suicide and Crisis Lifeline) or call 911.
        </p>
        <p className="leading-loose text-base mt-4">
          You can also ask about privacy, how your information is handled, and whether it is appropriate to involve a family member or trusted friend in your care.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Tips for the Conversation Itself</h2>
        <ul className="mt-4 space-y-3">
          {[
            'Be honest, even about things that feel embarrassing. Providers are there to help, not judge.',
            'Ask for plain language if a term is unclear.',
            'Take notes, or ask a trusted person to join you for support.',
            'Repeat back what you heard to confirm you understood the plan.',
            'Share if something is not working. Treatment can be adjusted.',
          ].map((t) => (
            <li key={t} className="flex gap-3 leading-loose text-base">{check}<span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Taking the Next Step</h2>
        <p className="leading-loose text-base">
          Asking for help is a strong, hopeful act, and asking questions is how you make that help your own. If you are looking for mental health care in Tooele, Utah, Blue Willow Psychiatry is located at 28 North Main Street. You can call (435) 200-3430 to reach the practice and talk through your questions. This article is for general education and is not a substitute for personal medical advice.
        </p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">From Blue Willow Psychiatry</p>
          <p className="text-[var(--color-muted)] mt-1">Patient education on mental health care for the Tooele, Utah community.</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { href: '/blog', t: 'Resources Hub', d: 'Browse all patient education articles from Blue Willow Psychiatry.' },
            { href: '/services', t: 'Our Services', d: 'Learn about the mental health care offered at the practice.' },
            { href: '/contact', t: 'Contact the Practice', d: 'Reach out with questions or to ask about scheduling.' },
          ].map((c) => (
            <a key={c.href} href={c.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v10.5m0-10.5C10.5 5.5 8 5 5.25 5v11.25C8 16.25 10.5 16.75 12 18m0-11.25C13.5 5.5 16 5 18.75 5v11.25c-2.75 0-5.25.5-6.75 1.75" />
              </svg>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">{c.t}</h4>
              <p className="text-[var(--color-muted)]">{c.d}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition-colors border border-white/30">Contact Us</a>
        </div>
      </section>
    </main>
  )
}