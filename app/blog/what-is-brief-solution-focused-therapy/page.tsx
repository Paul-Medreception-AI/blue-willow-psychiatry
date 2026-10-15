import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Is Brief Solution-Focused Therapy?',
  description: 'Learn how brief solution-focused therapy works, who it may help, what the research says, and what to expect from a short, goal-oriented approach to care.',
  alternates: { canonical: '/blog/what-is-brief-solution-focused-therapy' },
  openGraph: {
    title: 'What Is Brief Solution-Focused Therapy?',
    description: 'Learn how brief solution-focused therapy works, who it may help, what the research says, and what to expect from a short, goal-oriented approach to care.',
    url: 'https://www.bluewillowpsych.com/blog/what-is-brief-solution-focused-therapy',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'What Is Brief Solution-Focused Therapy?',
    description: 'Learn how brief solution-focused therapy works, who it may help, what the research says, and what to expect from a short, goal-oriented approach to care.',
  },
}

const tips = [
  'Notice small moments when the problem is less intense, and write down what was different.',
  'Describe your preferred future in specific, observable terms rather than vague ones.',
  'Choose one small, realistic step to try this week.',
  'Give yourself credit for strengths and coping skills you already use.',
  'Track progress on a simple 0 to 10 scale to see movement over time.',
]

const related = [
  { href: '/blog', label: 'Blog', title: 'More Mental Health Resources', text: 'Browse patient education articles from Blue Willow Psychiatry.' },
  { href: '/services', label: 'Services', title: 'Our Services', text: 'Learn about the care offered at our Tooele practice.' },
  { href: '/contact', label: 'Contact', title: 'Contact the Practice', text: 'Reach out to ask questions or start a conversation about care.' },
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">What Is Brief Solution-Focused Therapy?</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read · Reviewed by Blue Willow Psychiatry</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-what-is-brief-solution-focused-therapy.jpg"} alt={"Crop anonymous African American man in casual clothes sitting on sofa and talking to female psychologist during psychotherapy session in modern studio"} width={1200} height={627} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          When life feels heavy, the idea of unpacking every painful detail of your past can feel exhausting. Many people want something different: a practical way to start feeling better, and soon. Brief solution-focused therapy was built for exactly that. Instead of dwelling on what is wrong, it helps you notice what is already working and build from there.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Brief Solution-Focused Therapy?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Brief solution-focused therapy, often called solution-focused brief therapy (SFBT), is a goal-oriented form of talk therapy. It was developed in the late 1970s and 1980s by Steve de Shazer, Insoo Kim Berg, and their colleagues in Milwaukee. Rather than analyzing the origins of a problem, the approach centers on your hopes, your strengths, and the small changes that move your life in the direction you want.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          The word “brief” matters. Sessions are typically focused and the overall course of therapy is often shorter than in many traditional approaches, though the right length depends on each person and their needs.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How Does It Work?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          A solution-focused therapist is curious and collaborative. You are treated as the expert on your own life, and the conversation is guided by a few core techniques:
        </p>
        <ul className="mt-4 space-y-3">
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose text-base"><span className="text-[var(--color-accent)] shrink-0 mt-1"><svg className="w-5 h-5" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span><span><strong>The miracle question:</strong> “If you woke up tomorrow and the problem were gone, what would you notice first?” This helps turn vague distress into a clear picture of change.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose text-base"><span className="text-[var(--color-accent)] shrink-0 mt-1"><svg className="w-5 h-5" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span><span><strong>Exceptions:</strong> Exploring times when the problem was absent or milder, and what you did differently.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose text-base"><span className="text-[var(--color-accent)] shrink-0 mt-1"><svg className="w-5 h-5" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span><span><strong>Scaling questions:</strong> Rating your situation from 0 to 10 and identifying what would move you one point higher.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose text-base"><span className="text-[var(--color-accent)] shrink-0 mt-1"><svg className="w-5 h-5" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span><span><strong>Coping questions:</strong> Recognizing how you have kept going through hard times, which highlights resilience.</span></li>
        </ul>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          You are treated as the expert on your own life, and the conversation is guided by a few core techniques.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Might Benefit?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Solution-focused methods have been used with adults, adolescents, couples, and families. People often turn to this approach for stress, mild to moderate low mood, anxiety, relationship difficulties, work or school challenges, and life transitions. It can also be a helpful complement to other care, such as medication management, when a clinician feels it is appropriate.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          It is not a complete answer for everyone. Situations involving severe symptoms, trauma that needs deeper processing, or safety concerns usually call for a broader treatment plan. A qualified professional can help determine what fits.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Does the Research Say?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Reviews of controlled studies, including meta-analyses, suggest that SFBT can be helpful for a range of concerns, particularly depression and anxiety symptoms and behavioral problems in youth, and that it often achieves results in fewer sessions. Findings are generally encouraging, but study quality varies, and researchers continue to call for larger, more rigorous trials. As with any therapy, the relationship between you and your therapist also plays a major role in how well it works.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Ideas You Can Try Today</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You do not need a therapy room to borrow the spirit of this approach. These small practices can help you shift focus toward progress:
        </p>
        <ul className="mt-4 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <span className="text-[var(--color-accent)] shrink-0 mt-1"><svg className="w-5 h-5" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Reach Out for Support</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If your worries, sadness, or stress are getting in the way of daily life, you deserve support. A mental health professional can talk with you about your goals and help you choose an approach that suits you. If you are in Tooele, Utah, you can call Blue Willow Psychiatry at (435) 200-3430 or visit us at 28 North Main Street. If you are ever in crisis or thinking about harming yourself, call or text 988 or go to the nearest emergency room.
        </p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">Reviewed by Blue Willow Psychiatry</p>
          <p className="text-sm text-[var(--color-muted)] mt-2 leading-relaxed">This article is for general education and is not a substitute for professional medical advice, diagnosis, or treatment.</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((r) => (
            <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">{r.title}</h4>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{r.text}</p>
              <span className="inline-block mt-4 text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-dark)]">Read more →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-white/80 mb-8">Our team is here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition-colors border border-white/40">Contact Us</a>
        </div>
      </section>
    </main>
  )
}