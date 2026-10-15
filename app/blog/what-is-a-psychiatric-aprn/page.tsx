import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Is a Psychiatric APRN? | Blue Willow Psychiatry',
  description: 'Learn what a psychiatric APRN is, what training they have, what they treat, and how they support mental health care in Tooele, UT.',
  alternates: { canonical: '/blog/what-is-a-psychiatric-aprn' },
  openGraph: {
    title: 'What Is a Psychiatric APRN? | Blue Willow Psychiatry',
    description: 'Learn what a psychiatric APRN is, what training they have, what they treat, and how they support mental health care in Tooele, UT.',
    url: 'https://www.bluewillowpsych.com/blog/what-is-a-psychiatric-aprn',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'What Is a Psychiatric APRN? | Blue Willow Psychiatry',
    description: 'Learn what a psychiatric APRN is, what training they have, what they treat, and how they support mental health care in Tooele, UT.',
  },
}

const Check = () => (
  <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">What Is a Psychiatric APRN?</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read · Reviewed by Blue Willow Psychiatry</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-what-is-a-psychiatric-aprn.jpg"} alt={"A therapy session featuring a diverse group discussing issues with a mental health professional."} width={1200} height={627} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          When you are struggling with anxiety, low mood, or racing thoughts, reaching out is already a brave step. Then comes a confusing one: figuring out who to see. Psychiatrist, therapist, counselor, psychiatric APRN. The titles can feel like alphabet soup. Understanding who a psychiatric APRN is can make that first appointment feel far less intimidating.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What APRN Means</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          APRN stands for Advanced Practice Registered Nurse. This is a registered nurse who has completed graduate-level education, typically a master's or doctoral degree, and met licensing requirements to provide advanced care. A psychiatric APRN, often called a psychiatric mental health nurse practitioner (PMHNP), specializes in diagnosing and treating mental health conditions across the lifespan or within a specific age group.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Their training combines nursing's whole-person focus with advanced study in psychiatric assessment, diagnosis, psychopharmacology, and psychotherapy approaches. Clinical hours working directly with patients are a required part of that education.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What a Psychiatric APRN Does</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Scope of practice is set by each state, but in general a psychiatric APRN can:
        </p>
        <ul className="space-y-3 mb-6 text-[var(--color-ink)] leading-loose text-base">
          <li className="flex gap-3"><Check /><span>Conduct comprehensive psychiatric evaluations and make diagnoses</span></li>
          <li className="flex gap-3"><Check /><span>Develop individualized treatment plans</span></li>
          <li className="flex gap-3"><Check /><span>Prescribe and manage psychiatric medications, where permitted by state law</span></li>
          <li className="flex gap-3"><Check /><span>Provide supportive counseling and education about your condition</span></li>
          <li className="flex gap-3"><Check /><span>Coordinate care with therapists, primary care clinicians, and other providers</span></li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Conditions They Commonly Treat</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Mental health conditions are common. The National Institute of Mental Health estimates that more than one in five U.S. adults lives with a mental illness in a given year. Psychiatric APRNs commonly care for people with depression, anxiety disorders, ADHD, bipolar disorder, post-traumatic stress disorder, obsessive-compulsive disorder, and sleep difficulties tied to mood or stress. Many people live with more than one of these at once, which is why a thorough evaluation matters.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Reaching out is already a brave step.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">APRN vs. Psychiatrist: What Is the Difference?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          A psychiatrist is a physician who completed medical school and a psychiatry residency. A psychiatric APRN follows a nursing pathway with advanced graduate education. Both can evaluate, diagnose, and treat mental health conditions, and both often prescribe medication. Differences usually lie in training route and in state rules about independent practice or physician collaboration. Research on nurse practitioner care in primary and mental health settings has generally found comparable outcomes for many common conditions, and many patients value the time and relationship-focused approach nurse practitioners bring.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          How is this different from a therapist? Therapists such as psychologists, counselors, and social workers focus mainly on talk therapy. Many people benefit from both, and an APRN can work alongside your therapist.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What to Expect at a First Visit</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          A first appointment is a conversation, not a test. You can expect questions about your symptoms, history, sleep, stress, family background, and goals. To prepare, consider:
        </p>
        <ul className="space-y-3 mb-6 text-[var(--color-ink)] leading-loose text-base">
          <li className="flex gap-3"><Check /><span>Writing down symptoms and when they began</span></li>
          <li className="flex gap-3"><Check /><span>Listing current medications and supplements</span></li>
          <li className="flex gap-3"><Check /><span>Noting past mental health care and what helped or did not</span></li>
          <li className="flex gap-3"><Check /><span>Bringing questions about treatment options and side effects</span></li>
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Treatment decisions are made together. Medication is one option among several, and lifestyle changes, therapy, and regular follow-up often play important roles.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Taking the Next Step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          You do not need to wait until things feel unbearable to ask for support. If symptoms are affecting your work, relationships, sleep, or sense of well-being, a professional evaluation can bring clarity and a plan. If you are in crisis or having thoughts of harming yourself, call or text 988 (the Suicide and Crisis Lifeline) or call 911 right away. To reach Blue Willow Psychiatry in Tooele, UT, call (435) 200-3430 or visit us at 28 North Main Street.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">Reviewed by Blue Willow Psychiatry</p>
          <p className="text-sm text-[var(--color-muted)] mt-2 leading-relaxed">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/blog" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">Blog Resources</h4>
              <p className="text-sm text-[var(--color-muted)]">Browse all patient education articles on mental health care.</p>
            </a>
            <a href="/services" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">Our Services</h4>
              <p className="text-sm text-[var(--color-muted)]">See the types of mental health care offered at the practice.</p>
            </a>
            <a href="/contact" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">Contact Us</h4>
              <p className="text-sm text-[var(--color-muted)]">Get in touch with Blue Willow Psychiatry in Tooele, UT.</p>
            </a>
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