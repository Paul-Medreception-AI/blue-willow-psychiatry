import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Obsessive-Compulsive Disorder: More Than Neatness',
  description: 'OCD is far more than being tidy. Learn the signs, causes and proven treatments for obsessive-compulsive disorder, and when to seek professional help.',
  alternates: { canonical: '/blog/obsessive-compulsive-disorder-more-than-neatness' },
  openGraph: {
    title: 'Obsessive-Compulsive Disorder: More Than Neatness',
    description: 'OCD is far more than being tidy. Learn the signs, causes and proven treatments for obsessive-compulsive disorder, and when to seek professional help.',
    url: 'https://www.bluewillowpsych.com/blog/obsessive-compulsive-disorder-more-than-neatness',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Obsessive-Compulsive Disorder: More Than Neatness',
    description: 'OCD is far more than being tidy. Learn the signs, causes and proven treatments for obsessive-compulsive disorder, and when to seek professional help.',
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const tips = [
  'Notice and name the pattern: "This is an obsession, not a fact."',
  'Try to delay or shorten a compulsion rather than fighting the thought itself.',
  'Avoid seeking repeated reassurance from family and friends.',
  'Keep a simple log of triggers, thoughts and rituals to share with a clinician.',
  'Protect sleep, movement and routines, since stress tends to make symptoms louder.',
  'Reach out for professional support early instead of waiting for things to worsen.',
]

const related = [
  { href: '/blog', label: 'Blog', title: 'More Mental Health Resources', text: 'Browse our library of patient education articles.' },
  { href: '/contact', label: 'Contact', title: 'Talk With Our Practice', text: 'Reach out to ask about care in Tooele, UT.' },
  { href: '/about', label: 'About', title: 'About Blue Willow Psychiatry', text: 'Learn more about our approach to mental health care.' },
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Obsessive-Compulsive Disorder: More Than Neatness</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-obsessive-compulsive-disorder-more-than-neatness.jpg"} alt={"A woman poses with a pillow labeled 'insomnia' highlighting sleep disorders and mental health awareness."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p>
          You wash your hands, and then a voice says you missed a spot. You leave the house, and then you wonder whether the stove is still on. You check, and check again, and still the doubt will not quiet down. If this sounds familiar, you are not being dramatic, and you are not simply &quot;particular.&quot; You may be living with obsessive-compulsive disorder (OCD), a real and treatable condition.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What OCD Actually Is</h2>
        <p>
          OCD is a mental health condition marked by two linked parts: obsessions and compulsions. Obsessions are unwanted, intrusive thoughts, images or urges that cause distress. Compulsions are repetitive behaviors or mental acts a person feels driven to perform to reduce that distress or to prevent something feared from happening.
        </p>
        <p className="mt-4">
          The relief from a compulsion is brief. The brain learns that the ritual &quot;worked,&quot; so the urge returns, often stronger. Over time, the cycle can take up hours of the day and crowd out work, relationships and rest.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why &quot;Neat Freak&quot; Misses the Mark</h2>
        <p>
          Popular culture often treats OCD as a quirk about tidiness. Cleanliness and symmetry themes do exist, but OCD can take many forms. Common themes include:
        </p>
        <ul className="my-6 space-y-3">
          {['Contamination fears and excessive washing or cleaning', 'Checking locks, appliances or whether harm has occurred', 'Intrusive thoughts about harm, taboo subjects or morality', 'Needing things to feel &quot;just right,&quot; ordered or symmetrical', 'Mental rituals such as counting, praying or reviewing events', 'Relationship or identity doubts that feel impossible to settle'].map((t) => (
            <li key={t} className="flex gap-3">{check}<span dangerouslySetInnerHTML={{ __html: t }} /></li>
          ))}
        </ul>
        <p>
          Many people hide their symptoms out of shame, especially when the thoughts are disturbing. Having an unwanted thought does not mean you want to act on it. In OCD, those thoughts are distressing precisely because they clash with a person&apos;s values.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected</h2>
        <p>
          OCD affects children, teens and adults of every background. Symptoms often begin in childhood, adolescence or early adulthood, though they can start at other times. Research suggests that genetics, differences in brain circuits involving decision-making and habit, and life stress can all play a role. It is not caused by weak character or poor parenting.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Having an unwanted thought does not mean you want to act on it.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters to Get Help</h2>
        <p>
          Untreated OCD tends to be persistent and can grow to affect school, work, sleep and close relationships. It often occurs alongside anxiety, depression or other conditions, which can make everything feel heavier. The encouraging news is that effective treatments exist, and many people see meaningful improvement with the right care.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Evidence Supports</h2>
        <p>
          Two approaches have the strongest research support. The first is a form of cognitive behavioral therapy called exposure and response prevention (ERP). In ERP, a person gradually faces feared thoughts or situations while practicing not performing the compulsion. Over time the brain learns that the anxiety fades on its own and that the feared outcome is far less likely than it felt.
        </p>
        <p className="mt-4">
          The second is medication, most commonly a class of antidepressants called SSRIs, which are often used at higher doses for OCD than for depression and can take several weeks to show benefit. Many people do best with therapy, medication or a combination, guided by a qualified clinician who can tailor the plan to the individual.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps You Can Take</h2>
        <p>These strategies do not replace treatment, but they can help you feel more in control while you seek support:</p>
        <ul className="my-6 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3">{check}<span>{t}</span></li>
          ))}
        </ul>
        <p>
          If you are a family member, offering patience and gently reducing accommodation of rituals can help more than arguing with the fear. Encourage your loved one to seek an evaluation.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Reach Out</h2>
        <p>
          Consider professional help if obsessions or rituals take up significant time, cause distress, or get in the way of daily life. You do not have to wait until things feel unbearable. If you are in Tooele, UT and would like to talk about mental health care, Blue Willow Psychiatry is at 28 North Main Street, and you can call (435) 200-3430. If you are ever in crisis or thinking about harming yourself, call or text 988 or go to the nearest emergency room.
        </p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-primary)]">From Blue Willow Psychiatry</p>
          <p className="text-sm text-[var(--color-muted)] mt-2 leading-relaxed">This article is for general education and is not a substitute for personal medical advice, diagnosis or treatment.</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((r) => (
            <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
              <p className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</p>
              <p className="text-sm text-[var(--color-ink)]">{r.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/90">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full border border-white/40 transition-colors">Contact Us</a>
        </div>
      </section>
    </main>
  )
}