import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Understanding Schizophrenia and Schizoaffective Disorder',
  description: 'Learn the symptoms, causes and treatment options for schizophrenia and schizoaffective disorder, and when to seek professional mental health care.',
  alternates: { canonical: '/blog/understanding-schizophrenia-and-schizoaffective-disorder' },
  openGraph: {
    title: 'Understanding Schizophrenia and Schizoaffective Disorder',
    description: 'Learn the symptoms, causes and treatment options for schizophrenia and schizoaffective disorder, and when to seek professional mental health care.',
    url: 'https://www.bluewillowpsych.com/blog/understanding-schizophrenia-and-schizoaffective-disorder',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Understanding Schizophrenia and Schizoaffective Disorder',
    description: 'Learn the symptoms, causes and treatment options for schizophrenia and schizoaffective disorder, and when to seek professional mental health care.',
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Understanding Schizophrenia and Schizoaffective Disorder</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read · Reviewed by Blue Willow Psychiatry</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-understanding-schizophrenia-and-schizoaffective-disorder.jpg"} alt={"Woman with spiders on face and body holding sign reading 'Arachnophobia'."} width={1200} height={627} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="animate-fade-up">When a person you love begins to hear voices no one else hears, or becomes convinced that others are working against them, the change can feel frightening and confusing. Families often wonder what went wrong and where to turn. The most important thing to know is that schizophrenia and schizoaffective disorder are real, medical conditions of the brain, they are not anyone&apos;s fault, and effective treatment exists. Understanding them is the first step toward recovery.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Schizophrenia?</h2>
        <p>Schizophrenia is a chronic mental health condition that affects how a person thinks, feels, and perceives the world. It is not the same as &quot;split personality,&quot; a common myth. Instead, it involves a disruption in the way the brain processes information, which can make it hard to tell what is real.</p>
        <p className="mt-4">Symptoms are usually grouped into three categories:</p>
        <ul className="mt-4 space-y-3">
          <li className="flex gap-3">{check}<span><strong>Positive symptoms:</strong> experiences added to reality, such as hallucinations (often hearing voices), delusions, and disorganized speech or behavior.</span></li>
          <li className="flex gap-3">{check}<span><strong>Negative symptoms:</strong> a reduction in normal functioning, including flattened emotions, reduced motivation, social withdrawal, and less speech.</span></li>
          <li className="flex gap-3">{check}<span><strong>Cognitive symptoms:</strong> trouble with attention, memory, and planning or organizing tasks.</span></li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Schizoaffective Disorder?</h2>
        <p>Schizoaffective disorder combines symptoms of schizophrenia with a major mood disorder, either depression or bipolar-type mania. A person may experience hallucinations or delusions along with prolonged periods of low mood or elevated, energized mood. A key feature is that psychotic symptoms occur for at least two weeks even when mood symptoms are not present, which helps clinicians tell it apart from a mood disorder with psychotic features.</p>
        <p className="mt-4">Because the two conditions overlap, diagnosis takes time and careful evaluation. A thorough assessment looks at symptom history, timing, family history, substance use, and medical causes that can mimic psychosis.</p>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          These are real, medical conditions of the brain, they are not anyone&apos;s fault, and effective treatment exists.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected?</h2>
        <p>Schizophrenia affects roughly 1 in 100 people worldwide. Symptoms typically first appear in the late teens to early thirties, often earlier in men than in women. Schizoaffective disorder is considered less common than schizophrenia. Both conditions occur across all backgrounds and cultures.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Causes These Conditions?</h2>
        <p>Research points to a combination of factors rather than a single cause. Genetics play a role: having a close relative with schizophrenia raises risk, though most people with a family history never develop it. Differences in brain chemistry, especially involving dopamine and glutamate, and in brain development are also involved. Environmental influences, such as complications during pregnancy, significant stress or trauma, and heavy cannabis use during adolescence, may raise risk in people who are already vulnerable.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Early Treatment Matters</h2>
        <p>Studies consistently show that earlier treatment of a first episode of psychosis is linked to better long-term outcomes, including fewer relapses and better day-to-day functioning. Untreated psychosis can strain relationships, work, and school, and raises risk for substance use and other health problems. Many people with these conditions live meaningful, productive lives with the right support.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Treatment Options</h2>
        <p>Care is most effective when it combines several approaches:</p>
        <ul className="mt-4 space-y-3">
          <li className="flex gap-3">{check}<span><strong>Medication:</strong> antipsychotic medications help reduce hallucinations and delusions. Mood stabilizers or antidepressants may be added for schizoaffective disorder.</span></li>
          <li className="flex gap-3">{check}<span><strong>Psychotherapy:</strong> cognitive behavioral therapy for psychosis and supportive therapy help people manage symptoms and stress.</span></li>
          <li className="flex gap-3">{check}<span><strong>Family education and support:</strong> involving loved ones improves understanding and lowers relapse risk.</span></li>
          <li className="flex gap-3">{check}<span><strong>Skills and community support:</strong> help with work, school, housing, and daily routines supports lasting recovery.</span></li>
        </ul>
        <p className="mt-4">Medication plans are individualized, and side effects should always be discussed openly with a prescriber rather than stopping medicine on your own.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How to Support Someone You Love</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">{check}<span>Listen calmly without arguing about hallucinations or delusions.</span></li>
          <li className="flex gap-3">{check}<span>Encourage them to see a mental health professional and stay with treatment.</span></li>
          <li className="flex gap-3">{check}<span>Learn the early warning signs of relapse, such as poor sleep or growing withdrawal.</span></li>
          <li className="flex gap-3">{check}<span>Take care of your own well-being and seek support for yourself.</span></li>
        </ul>
        <p className="mt-4">If someone is in immediate danger or may harm themselves or others, call 911 or the 988 Suicide &amp; Crisis Lifeline right away.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Taking the Next Step</h2>
        <p>If you or someone you care about is experiencing unusual thoughts, perceptions, or mood changes, you do not have to wait for things to get worse. Blue Willow Psychiatry provides mental health care in Tooele, UT. Call (435) 200-3430 or visit us at 28 North Main Street to start a conversation about what you are experiencing.</p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">Reviewed by Blue Willow Psychiatry</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <a href="/blog" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
            <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Resources</p>
            <p className="font-cormorant text-2xl text-[var(--color-primary)]">Blog: Mental Health Articles</p>
          </a>
          <a href="/services" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
            <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Services</p>
            <p className="font-cormorant text-2xl text-[var(--color-primary)]">Our Services</p>
          </a>
          <a href="/contact" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
            <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Contact</p>
            <p className="font-cormorant text-2xl text-[var(--color-primary)]">Contact Blue Willow Psychiatry</p>
          </a>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">Our team is here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full border border-white/40 transition-colors">Contact Us</a>
        </div>
      </section>
    </main>
  )
}