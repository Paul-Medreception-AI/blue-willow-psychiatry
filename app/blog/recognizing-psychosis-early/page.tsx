import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recognizing Psychosis Early | Blue Willow Psychiatry',
  description: 'Learn the early warning signs of psychosis, who is affected, why early support matters, and how families can help a loved one find care in Tooele, UT.',
  alternates: { canonical: '/blog/recognizing-psychosis-early' },
  openGraph: {
    title: 'Recognizing Psychosis Early | Blue Willow Psychiatry',
    description: 'Learn the early warning signs of psychosis, who is affected, why early support matters, and how families can help a loved one find care in Tooele, UT.',
    url: 'https://www.bluewillowpsych.com/blog/recognizing-psychosis-early',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Recognizing Psychosis Early | Blue Willow Psychiatry',
    description: 'Learn the early warning signs of psychosis, who is affected, why early support matters, and how families can help a loved one find care in Tooele, UT.',
  },
}

const tips = [
  'Write down what you notice, including when changes began and how they affect daily life.',
  'Speak calmly and without judgment. Avoid arguing about whether beliefs or experiences are real.',
  'Ask open, caring questions such as "How have things been feeling lately?"',
  'Encourage an evaluation with a mental health professional as soon as possible.',
  'Reduce stress and keep routines steady, including sleep, meals, and time with trusted people.',
  'Call emergency services or 988 if someone may harm themselves or others.',
]

const related = [
  { href: '/blog', title: 'Mental Health Resources', text: 'Browse all of our patient education articles.' },
  { href: '/services', title: 'Our Services', text: 'See the types of mental health care we provide.' },
  { href: '/contact', title: 'Contact the Practice', text: 'Reach out to start a conversation about care.' },
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Recognizing Psychosis Early</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read · Reviewed by Blue Willow Psychiatry</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-recognizing-psychosis-early.jpg"} alt={"Silhouette of a person meditating by the water as the sun rises at Cove Island Park in Stamford, Connecticut."} width={1200} height={627} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          It often starts quietly. A bright student stops answering texts and seems wary of classmates. A coworker mentions hearing something no one else can. A son who loved his friends now stays in his room, convinced something is wrong. For families, these changes are frightening and confusing. The most important thing to know is this: psychosis is treatable, and the sooner someone gets support, the better the path forward tends to be.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Psychosis?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Psychosis is not a diagnosis on its own. It describes a set of experiences in which a person loses some contact with shared reality. The two most common features are hallucinations, such as hearing voices or seeing things others do not, and delusions, which are firmly held beliefs that do not match reality, such as feeling watched or targeted.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Psychosis can occur with conditions including schizophrenia, schizoaffective disorder, bipolar disorder, and severe depression. It can also be triggered by substance use, certain medical conditions, extreme sleep loss, or intense stress and trauma. Because the causes vary, a careful evaluation matters.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Psychosis can affect people of any background. Research shows that a first episode most often appears in the late teens through the twenties, though it can occur at any age. Family history, trauma, heavy cannabis or other drug use, and high stress can raise the risk, but many people with none of these factors are affected too. Having an episode is not a personal failing, and it is not caused by poor parenting or weak character.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Early Warning Signs</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Before full psychosis develops, many people go through a early phase, sometimes called the prodrome. Changes are often gradual and easy to mistake for stress or adolescence. Signs may include:
        </p>
        <ul className="space-y-3 mb-4">
          {[
            'A noticeable drop in school or work performance',
            'Trouble concentrating or thinking clearly',
            'Withdrawing from friends, family, and favorite activities',
            'Unusual suspicion or uneasiness around others',
            'Strange or intense new ideas, or a sense that things are not real',
            'Changes in sleep, appetite, or personal care',
            'Flat, absent, or inappropriate emotional reactions',
          ].map((item) => (
            <li key={item} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Any one of these can have many explanations. What matters is a pattern: several changes together, lasting weeks, and clearly different from the person&apos;s usual self.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Psychosis is treatable, and the sooner someone gets support, the better the path forward tends to be.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Early Support Matters</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Studies of coordinated specialty care for first-episode psychosis, including large U.S. research programs, have found that people who receive prompt, comprehensive treatment often have better symptom control, stay more engaged in work and school, and report better quality of life. A long gap between the start of symptoms and the start of treatment is linked to poorer outcomes.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Early care also protects relationships and goals. When symptoms are addressed sooner, people are less likely to lose jobs, housing, or trust with loved ones, and they have more room to rebuild confidence. Treatment commonly combines medication management, talk therapy, family education, and support for school or work.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How to Help a Loved One</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Approaching someone who is struggling can feel daunting. These steps can help:
        </p>
        <ul className="space-y-3 mb-4">
          {tips.map((item) => (
            <li key={item} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Remember that the person may not realize anything is wrong. That is part of the condition, not stubbornness. Patience and steady kindness go a long way.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Taking the Next Step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If you are noticing these changes in yourself or someone you love, you do not need to wait for things to get worse. Blue Willow Psychiatry provides mental health care in Tooele, UT, and you can call (435) 200-3430 or visit us at 28 North Main Street to talk about next steps. If there is immediate danger, call 911 or 988 right away.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">Reviewed by Blue Willow Psychiatry</p>
          <p className="text-sm text-[var(--color-muted)] mt-2 leading-relaxed">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((r) => (
            <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v10.5M6.75 12h10.5" /><circle cx="12" cy="12" r="9" /></svg>
              <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
              <p className="text-sm text-[var(--color-muted)]">{r.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">Our team is here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition-colors border border-white/30">Contact Us</a>
        </div>
      </section>
    </main>
  )
}