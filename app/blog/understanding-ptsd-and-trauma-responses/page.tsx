import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Understanding PTSD and Trauma Responses',
  description: 'Learn what PTSD is, how trauma affects the mind and body, who is at risk, and which treatments and coping steps can help you heal.',
  alternates: { canonical: '/blog/understanding-ptsd-and-trauma-responses' },
  openGraph: {
    title: 'Understanding PTSD and Trauma Responses',
    description: 'Learn what PTSD is, how trauma affects the mind and body, who is at risk, and which treatments and coping steps can help you heal.',
    url: 'https://www.bluewillowpsych.com/blog/understanding-ptsd-and-trauma-responses',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Understanding PTSD and Trauma Responses',
    description: 'Learn what PTSD is, how trauma affects the mind and body, who is at risk, and which treatments and coping steps can help you heal.',
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

export default function Page() {
  const tips = [
    'Keep a steady routine for sleep, meals and movement, which helps calm an overactive stress response.',
    'Use grounding skills, such as naming five things you can see, when flashbacks or panic begin.',
    'Limit alcohol and other substances, which can deepen symptoms over time.',
    'Reach out to one trusted person rather than carrying the weight alone.',
    'Notice and gently plan for known triggers instead of avoiding life entirely.',
    'Talk with a mental health professional about therapy and medication options.',
  ]
  const related = [
    { t: 'Our Services', d: 'See the mental health care offered at our Tooele practice.', h: '/services' },
    { t: 'Conditions We Treat', d: 'Explore anxiety, depression and related concerns.', h: '/conditions' },
    { t: 'More Patient Resources', d: 'Browse more articles on mental health and wellbeing.', h: '/blog' },
  ]
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Understanding PTSD and Trauma Responses</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read · Reviewed by Blue Willow Psychiatry</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-understanding-ptsd-and-trauma-responses.jpg"} alt={"Military personnel discuss mental health in a supportive group therapy session."} width={1200} height={627} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p>
          Some moments change us. A car accident, an assault, a sudden loss, years of living in fear: the body and mind register these events as threats, and sometimes they do not let go when the danger is over. If you find yourself on edge, reliving memories, or feeling numb long after something terrible happened, nothing is wrong with your character. You may be experiencing a trauma response, and help is available.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is PTSD?</h2>
        <p>
          Post-traumatic stress disorder (PTSD) is a mental health condition that can develop after experiencing or witnessing a traumatic event. Many people have strong reactions in the days after trauma, including trouble sleeping, fear and sadness. For most, these reactions ease over time. When symptoms last longer than a month and interfere with daily life, PTSD may be the cause.
        </p>
        <p className="mt-4">Clinicians generally group symptoms into four areas:</p>
        <ul className="mt-4 space-y-3">
          <li className="flex gap-3">{check}<span><strong>Intrusion:</strong> unwanted memories, nightmares and flashbacks that feel as if the event is happening again.</span></li>
          <li className="flex gap-3">{check}<span><strong>Avoidance:</strong> steering clear of people, places, conversations or thoughts that serve as reminders.</span></li>
          <li className="flex gap-3">{check}<span><strong>Negative changes in mood and thinking:</strong> guilt, shame, detachment, loss of interest, or persistent negative beliefs.</span></li>
          <li className="flex gap-3">{check}<span><strong>Arousal and reactivity:</strong> being easily startled, irritable, hypervigilant or unable to sleep.</span></li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How the Body and Brain Respond to Trauma</h2>
        <p>
          Trauma activates the body&apos;s survival system. The amygdala, which detects danger, becomes highly alert, while the prefrontal cortex, which helps with reasoning and perspective, can become less effective at calming it. Stress hormones such as adrenaline and cortisol surge. This is the familiar fight, flight or freeze response, and it is protective in the moment.
        </p>
        <p className="mt-4">
          In PTSD, that alarm system stays switched on. Memories may be stored in fragmented, sensory ways, which is why a smell or sound can bring back the full emotional force of an event. Understanding this can reduce self-blame, because these reactions are biological, not a sign of weakness.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Understanding this can reduce self-blame, because these reactions are biological, not a sign of weakness.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected?</h2>
        <p>
          PTSD can affect anyone at any age. It is often associated with military combat, but it also follows physical or sexual assault, serious accidents, natural disasters, medical emergencies, childhood abuse or neglect, and the sudden death of a loved one. First responders and healthcare workers may be exposed repeatedly to distressing events.
        </p>
        <p className="mt-4">
          Not everyone exposed to trauma develops PTSD. Risk is higher with prolonged or severe trauma, earlier trauma in life, a personal or family history of mental health conditions, and limited social support. Research suggests women are diagnosed more often than men, in part because of differences in the types of trauma experienced. PTSD frequently occurs alongside depression, anxiety and substance use, which is one reason a thorough evaluation matters.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Research Says About Treatment</h2>
        <p>
          PTSD is treatable. Decades of research support trauma-focused psychotherapies as first-line care, including cognitive processing therapy, prolonged exposure therapy and eye movement desensitization and reprocessing (EMDR). These approaches help people process memories and change unhelpful beliefs about the event, so the memories lose some of their power.
        </p>
        <p className="mt-4">
          Medication can also help. Certain antidepressants, including sertraline and paroxetine, are approved for PTSD, and a prescriber may consider other medicines to address specific symptoms such as sleep disturbance or nightmares. Many people do best with a plan that combines therapy and medication, tailored to their needs and preferences. Recovery is not always a straight line, but many people see meaningful improvement with consistent care.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps That Can Help</h2>
        <p className="mb-4">Self-care does not replace treatment, but these habits can support healing:</p>
        <ul className="space-y-3">
          {tips.map((x) => (
            <li key={x} className="flex gap-3">{check}<span>{x}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Professional Help</h2>
        <p>
          Consider reaching out if symptoms last more than a month, disrupt work or relationships, or leave you relying on alcohol or other substances to cope. If you have thoughts of harming yourself, call or text 988 (the Suicide and Crisis Lifeline) or call 911 right away.
        </p>
        <p className="mt-4">
          You do not have to have everything figured out before asking for support. Blue Willow Psychiatry provides mental health care in Tooele, UT. To talk about your concerns, call (435) 200-3430 or visit us at 28 North Main Street, Tooele, UT 84074. Healing from trauma is possible, and the first step is a conversation.
        </p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-primary)]">Reviewed by Blue Willow Psychiatry</p>
          <p className="text-sm text-[var(--color-muted)] mt-2 leading-relaxed">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.t} href={r.h} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v12m0-12C10.5 5.5 8 5 4.5 5v12c3.5 0 6 .5 7.5 1.75m0-12C13.5 5.5 16 5 19.5 5v12c-3.5 0-6 .5-7.5 1.75" />
                </svg>
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.t}</h4>
                <p className="text-sm text-[var(--color-muted)]">{r.d}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">Our team is here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition-colors border border-white/40">Contact Us</a>
        </div>
      </section>
    </main>
  )
}