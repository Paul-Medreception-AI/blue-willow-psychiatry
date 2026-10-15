import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Managing Panic Attacks | Blue Willow Psychiatry',
  description: 'Learn what panic attacks are, why they happen, and evidence-based ways to manage them, including grounding skills, therapy, and when to seek help.',
  alternates: { canonical: '/blog/managing-panic-attacks' },
  openGraph: {
    title: 'Managing Panic Attacks | Blue Willow Psychiatry',
    description: 'Learn what panic attacks are, why they happen, and evidence-based ways to manage them, including grounding skills, therapy, and when to seek help.',
    url: 'https://www.bluewillowpsych.com/blog/managing-panic-attacks',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Managing Panic Attacks | Blue Willow Psychiatry',
    description: 'Learn what panic attacks are, why they happen, and evidence-based ways to manage them, including grounding skills, therapy, and when to seek help.',
  },
}

const tips = [
  'Remind yourself that a panic attack is intense but temporary, and it will pass.',
  'Slow your breathing: inhale for four counts, then exhale gently for six.',
  'Ground yourself by naming five things you see, four you feel, three you hear, two you smell, and one you taste.',
  'Release muscle tension one group at a time, starting with your hands and shoulders.',
  'Stay where you are if it is safe, rather than rushing to escape the situation.',
  'Limit caffeine, nicotine, and alcohol, which can trigger or worsen symptoms.',
]

const related = [
  { href: '/blog', label: 'Resources', title: 'Browse All Patient Resources', text: 'Explore more articles on mental health care from our practice.' },
  { href: '/services', label: 'Services', title: 'Our Services', text: 'See the kinds of care available at Blue Willow Psychiatry.' },
  { href: '/contact', label: 'Contact', title: 'Contact Our Practice', text: 'Reach out to ask questions or start the conversation about care.' },
]

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white">Home</a> › <a href="/blog" className="hover:text-white">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Managing Panic Attacks</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read · Reviewed by Blue Willow Psychiatry</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-managing-panic-attacks.jpg"} alt={"A woman sitting with 'PANIC ATTACK' on her hood, showing anxiety indoors."} width={1200} height={627} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="text-lg">Your heart pounds, your chest tightens, and a wave of dread rises out of nowhere. You may feel certain something is terribly wrong. If you have lived through a panic attack, you know how frightening it can be, and how much it can shake your trust in your own body. The good news is that panic attacks are common, understood, and very treatable.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is a Panic Attack?</h2>
        <p>A panic attack is a sudden surge of intense fear or discomfort that typically peaks within minutes. It is driven by the body&apos;s alarm system, the same fight-or-flight response that protects us from real danger, firing when no clear threat is present.</p>
        <p className="mt-4">Common symptoms include:</p>
        <ul className="mt-4 space-y-2 list-disc pl-6">
          <li>Racing or pounding heart</li>
          <li>Shortness of breath or a feeling of choking</li>
          <li>Chest tightness or pain</li>
          <li>Sweating, trembling, or chills</li>
          <li>Dizziness or lightheadedness</li>
          <li>Numbness or tingling</li>
          <li>Feeling detached from yourself or your surroundings</li>
          <li>Fear of losing control or of dying</li>
        </ul>
        <p className="mt-4">Because chest pain and breathlessness can also signal other medical problems, it is important to seek emergency care if you are unsure, especially the first time symptoms appear.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected?</h2>
        <p>Panic attacks can affect people of any age, background, or lifestyle. Many people experience one or two in their lifetime, often during a period of high stress. Panic disorder is diagnosed when attacks happen repeatedly and are followed by ongoing worry about having more, or by changes in behavior to avoid them. Anxiety disorders, depression, trauma, major life changes, certain medical conditions, and substance use can all be associated with panic symptoms, and a family history may raise the likelihood.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters</h2>
        <p>The attack itself passes, but the fear of the next one can quietly shrink a person&apos;s world. Some people begin avoiding driving, crowds, exercise, work, or social events. This avoidance may feel protective, yet it often strengthens anxiety over time. Getting support early can help prevent panic from taking over daily life.</p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          A panic attack is intense but temporary, and it will pass.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Shows</h2>
        <p>Panic disorder is among the most studied anxiety conditions, and treatment works for many people. Cognitive behavioral therapy (CBT) is well supported by research. It helps people understand the cycle of panic, challenge catastrophic thoughts about bodily sensations, and gradually face feared situations. Some people also benefit from medication, such as certain antidepressants, prescribed and monitored by a qualified clinician. Regular physical activity, consistent sleep, and mindfulness-based practices may also help reduce overall anxiety. The right plan depends on the individual, which is why a personal evaluation matters.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Ways to Cope in the Moment</h2>
        <p>These skills will not feel natural at first, so practice them when you are calm.</p>
        <ul className="mt-4 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Building Long-Term Resilience</h2>
        <p>Beyond coping during an attack, daily habits can lower your baseline level of stress. Keep a regular sleep schedule, move your body most days, eat regularly, and make time for activities that help you unwind. Keeping a simple journal of when attacks occur can reveal patterns and triggers worth discussing with a professional. Lean on trusted friends or family, and be patient with yourself. Recovery is rarely a straight line.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Professional Help</h2>
        <p>Consider reaching out if attacks are recurring, if you are avoiding places or activities, if worry about the next attack is constant, or if panic is affecting your work, relationships, or sleep. If you ever have thoughts of harming yourself, call or text 988 in the U.S., or call 911 right away.</p>
        <p className="mt-4">You do not have to manage panic alone. Blue Willow Psychiatry provides mental health care in Tooele, UT. Call (435) 200-3430 or visit us at 28 North Main Street to talk about next steps.</p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">Reviewed by Blue Willow Psychiatry</p>
          <p className="text-sm text-[var(--color-muted)] mt-2">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 transition hover:shadow-lg">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-ink)] text-sm leading-relaxed">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/90">Our team is here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition border border-white/40">Contact Us</a>
        </div>
      </section>
    </main>
  )
}