import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Know If You Need a Psychiatric Assessment',
  description: 'Not sure if it is time to see a psychiatrist? Learn the signs that a psychiatric assessment may help and what to expect from the process.',
  alternates: { canonical: '/blog/how-to-know-if-you-need-a-psychiatric-assessment' },
  openGraph: {
    title: 'How to Know If You Need a Psychiatric Assessment',
    description: 'Not sure if it is time to see a psychiatrist? Learn the signs that a psychiatric assessment may help and what to expect from the process.',
    url: 'https://www.bluewillowpsych.com/blog/how-to-know-if-you-need-a-psychiatric-assessment',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'How to Know If You Need a Psychiatric Assessment',
    description: 'Not sure if it is time to see a psychiatrist? Learn the signs that a psychiatric assessment may help and what to expect from the process.',
  },
}

const signs = [
  'Sadness, irritability or emptiness that lasts two weeks or longer',
  'Worry or panic that feels hard to control or interferes with daily life',
  'Major changes in sleep, appetite or energy that you cannot explain',
  'Trouble concentrating, remembering or making decisions at work or school',
  'Pulling away from friends, family or activities you used to enjoy',
  'Using alcohol or other substances to cope with how you feel',
  'Mood swings, racing thoughts or periods of unusually high energy',
  'Thoughts of hopelessness, self-harm or suicide (seek help right away)',
]

const steps = [
  'Write down your symptoms, when they started and how they affect your days',
  'List current medications, supplements and past mental health treatment',
  'Note your family history of mental health conditions, if you know it',
  'Bring questions and any concerns about treatment options',
]

const related = [
  { title: 'Our Services', href: '/services', text: 'Explore the mental health care we provide in Tooele.' },
  { title: 'Conditions We Treat', href: '/conditions', text: 'Learn about common mental health conditions and their symptoms.' },
  { title: 'More Resources', href: '/blog', text: 'Browse additional patient education articles.' },
]

function Check() {
  return (
    <svg className="w-5 h-5 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">How to Know If You Need a Psychiatric Assessment</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-how-to-know-if-you-need-a-psychiatric-assessment.jpg"} alt={"A psychologist and patient discuss a Rorschach inkblot test during a therapy session."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="animate-fade-up">Many people live with worry, low mood or racing thoughts for months, even years, before asking for help. They tell themselves it is just stress, that others have it worse, or that they should be able to push through. If that sounds familiar, you are not alone, and you are not weak. Knowing when to seek a psychiatric assessment can be the first step toward feeling like yourself again.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is a Psychiatric Assessment?</h2>
        <p>A psychiatric assessment is a structured conversation with a mental health professional about your thoughts, feelings, behavior and overall health. The goal is to understand what you are experiencing, identify whether a condition such as depression, anxiety, ADHD or bipolar disorder may be involved, and talk through options for support. It is not a test you can pass or fail. It is a chance to be heard and to get clarity.</p>
        <p className="mt-4">An assessment usually covers your current symptoms, personal and family history, medical conditions, medications, sleep, substance use and daily functioning. Sometimes questionnaires or screening tools are used to help organize the picture. Because physical health and mental health influence each other, a clinician may also ask about medical issues or suggest further evaluation.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected by Mental Health Conditions?</h2>
        <p>Mental health conditions are common. According to the National Institute of Mental Health, more than one in five adults in the United States lives with a mental illness in a given year. Conditions can begin in childhood, adolescence or adulthood, and they affect people of every background, profession and age. Many people function well on the outside while struggling privately, which is one reason symptoms often go unrecognized.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Signs It May Be Time to Seek an Assessment</h2>
        <p>Everyone has hard days. What matters is how long symptoms last, how intense they are, and how much they interfere with life. Consider an assessment if you notice any of the following:</p>
        <ul className="mt-6 space-y-3">
          {signs.map((s) => (
            <li key={s} className="flex gap-3"><Check /><span>{s}</span></li>
          ))}
        </ul>
        <p className="mt-6">If you are having thoughts of harming yourself, do not wait for an appointment. Call or text 988, the Suicide and Crisis Lifeline, or call 911 if you are in immediate danger.</p>

        <blockquote className="font-cormorant bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl">
          Everyone has hard days. What matters is how long symptoms last, how intense they are, and how much they interfere with life.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Early Evaluation Matters</h2>
        <p>Research consistently shows that earlier treatment of mental health conditions is linked with better outcomes. Untreated symptoms can affect relationships, work performance, physical health and sleep, and they may grow harder to manage over time. Depression and anxiety, for example, are both associated with a higher risk of other health problems when left unaddressed. The good news is that many mental health conditions respond well to treatment, which may include therapy, medication, lifestyle changes or a combination.</p>
        <p className="mt-4">An assessment can also bring relief on its own. Putting a name to what you are experiencing often reduces self-blame and helps you and your clinician choose a plan that fits your needs and goals.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How to Prepare for Your Visit</h2>
        <p>You do not need to have everything figured out. A little preparation can still help the conversation go smoothly:</p>
        <ul className="mt-6 space-y-3">
          {steps.map((s) => (
            <li key={s} className="flex gap-3"><Check /><span>{s}</span></li>
          ))}
        </ul>
        <p className="mt-6">Be as honest as you can. Clinicians are trained to listen without judgment, and the more accurate the information, the more useful the assessment will be.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Happens After the Assessment?</h2>
        <p>After the conversation, your clinician will share their impressions and discuss possible next steps. Depending on what you are experiencing, that might include counseling, medication management, follow-up visits, or referrals for additional evaluation. You stay part of every decision, and you can ask questions about benefits, side effects and alternatives. Treatment is a collaborative process, and plans can be adjusted as you progress.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the Next Step</h2>
        <p>If you have been wondering whether what you feel is serious enough to talk to someone, that question is reason enough. You do not need to be in crisis to deserve support. If you are in Tooele and would like to talk about mental health care, Blue Willow Psychiatry is located at 28 North Main Street, and you can reach the practice at (435) 200-3430.</p>
        <p className="mt-4 text-sm text-[var(--color-muted)]">This article is for general education and is not a substitute for professional medical advice, diagnosis or treatment.</p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">From Blue Willow Psychiatry</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">Published October 2026</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.title} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-white/80 mb-8">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full border border-white/40 transition-colors">Contact Us</a>
        </div>
      </section>
    </main>
  )
}