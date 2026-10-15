import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ADHD and Anxiety: When They Overlap',
  description: 'Learn why ADHD and anxiety often occur together, how symptoms overlap, and what steps can help you find clarity and relief.',
  alternates: { canonical: '/blog/adhd-and-anxiety-when-they-overlap' },
  openGraph: {
    title: 'ADHD and Anxiety: When They Overlap',
    description: 'Learn why ADHD and anxiety often occur together, how symptoms overlap, and what steps can help you find clarity and relief.',
    url: 'https://www.bluewillowpsych.com/blog/adhd-and-anxiety-when-they-overlap',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'ADHD and Anxiety: When They Overlap',
    description: 'Learn why ADHD and anxiety often occur together, how symptoms overlap, and what steps can help you find clarity and relief.',
  },
}

const tips = [
  'Keep a simple log of when worry, restlessness, or distraction shows up, and what was happening at the time.',
  'Break large tasks into small, concrete steps so that the pressure of a looming deadline feels more manageable.',
  'Protect sleep, regular movement, and regular meals, since all three affect attention and anxiety.',
  'Limit caffeine if you notice it increases jitteriness, racing thoughts, or a pounding heart.',
  'Tell a clinician about all of your symptoms, not only the one that bothers you most.',
]

const related = [
  { href: '/blog', title: 'More Mental Health Resources', text: 'Browse all of our patient education articles in the Resources hub.' },
  { href: '/contact', title: 'Talk With the Practice', text: 'Reach out to ask questions or start a conversation about your concerns.' },
  { href: '/blog', title: 'Resources Hub', text: 'Explore articles on mood, focus, stress, and everyday well-being.' },
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">ADHD and Anxiety: When They Overlap</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read · Reviewed by Blue Willow Psychiatry</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-adhd-and-anxiety-when-they-overlap.jpg"} alt={"Creative illustration highlighting ADHD awareness with colorful brain imagery."} width={1200} height={627} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p>You sit down to start a task, and your mind darts everywhere. Then the worry arrives: you are going to fall behind, forget something important, or let someone down. By the end of the day you are exhausted, and you are not sure whether you are distracted, anxious, or both. If this sounds familiar, you are far from alone. Attention-deficit/hyperactivity disorder (ADHD) and anxiety frequently occur together, and understanding how they interact can be the first step toward feeling better.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What ADHD and Anxiety Are</h2>
        <p>ADHD is a neurodevelopmental condition marked by patterns of inattention, impulsivity, and sometimes hyperactivity that interfere with daily life. It begins in childhood, though many adults are not diagnosed until later. Anxiety disorders involve persistent, excessive fear or worry that is hard to control and can show up as muscle tension, a racing heart, trouble sleeping, or avoidance of situations that feel threatening.</p>
        <p className="mt-4">Each condition is common on its own. Together, they can create a cycle in which difficulty with focus and organization produces real consequences, and the worry about those consequences makes focus even harder.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected</h2>
        <p>Research consistently finds that anxiety disorders are more common among people with ADHD than among those without it. Studies in both children and adults suggest that a substantial share of people with ADHD also experience an anxiety disorder at some point. The overlap can affect people of any age, gender, or background, though it often goes unrecognized in adults, and in women and girls whose ADHD may look more like inattentive daydreaming than outward restlessness.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why the Two Conditions Overlap</h2>
        <p>There is no single explanation, but several factors likely contribute:</p>
        <ul className="mt-4 space-y-2">
          <li>Shared genetic and brain-based factors may raise the risk of both conditions.</li>
          <li>Living with unmanaged ADHD, such as missed deadlines, lost items, and strained relationships, can create ongoing stress and a sense of always being behind.</li>
          <li>Anxiety can look like ADHD, because worry consumes mental bandwidth and makes it hard to concentrate.</li>
        </ul>
        <p className="mt-4">That last point matters. Restlessness, trouble concentrating, and irritability appear in both conditions, which is why careful evaluation is so important.</p>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Restlessness, trouble concentrating, and irritability appear in both conditions, which is why careful evaluation is so important.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How to Tell Them Apart</h2>
        <p>Some patterns can offer clues, though only a professional evaluation can sort them out. ADHD-related distraction tends to be present across settings and since childhood, even when you are not worried about anything. Anxiety-related distraction usually tracks with specific fears or stressful periods, and the mind is often pulled toward a feared outcome rather than toward whatever is novel or interesting.</p>
        <p className="mt-4">A thorough assessment typically looks at your history, when symptoms began, how they affect work, school, and relationships, and whether other factors such as sleep problems, depression, or medical conditions are involved.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Treating Both Matters</h2>
        <p>When anxiety goes unaddressed, it can make ADHD symptoms look worse. When ADHD goes unaddressed, daily friction can keep anxiety high. Treatment is usually most effective when it considers the whole picture. Options a clinician may discuss include psychotherapy such as cognitive behavioral therapy, skills coaching for organization and time management, lifestyle changes, and, when appropriate, medication. Because some ADHD medications can affect anxiety in certain people, close communication with your prescriber matters, and the plan is often adjusted over time.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps You Can Start Today</h2>
        <ul className="mt-4 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Professional Help</h2>
        <p>If focus problems, constant worry, or both are getting in the way of work, school, relationships, or your peace of mind, it is worth talking with a professional. You do not need to have it all figured out beforehand. Describing what your days feel like is enough to begin. If you are in Tooele, UT, you can reach Blue Willow Psychiatry at (435) 200-3430 or visit 28 North Main Street. If you ever feel unsafe or are thinking about harming yourself, call or text 988 or go to the nearest emergency room right away.</p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">Reviewed by Blue Willow Psychiatry</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.title} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v10.5m-5.25-5.25h10.5" /></svg>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">{r.title}</h4>
                <p className="text-sm text-[var(--color-muted)]">{r.text}</p>
              </a>
            ))}
          </div>
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