import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Preparing for Follow-Up Medication Visits',
  description: 'Practical tips to prepare for a follow-up medication visit in mental health care: what to track, what to ask, and how to make the appointment count.',
  alternates: { canonical: '/blog/preparing-for-follow-up-medication-visits' },
  openGraph: {
    title: 'Preparing for Follow-Up Medication Visits',
    description: 'Practical tips to prepare for a follow-up medication visit in mental health care: what to track, what to ask, and how to make the appointment count.',
    url: 'https://www.bluewillowpsych.com/blog/preparing-for-follow-up-medication-visits',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Preparing for Follow-Up Medication Visits',
    description: 'Practical tips to prepare for a follow-up medication visit in mental health care: what to track, what to ask, and how to make the appointment count.',
  },
}

const checkIcon = (
  <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const trackItems = [
  'Mood, anxiety, sleep, appetite, and energy changes since your last visit',
  'Any side effects, including when they started and how long they lasted',
  'Missed doses, and the reasons they were missed',
  'Triggers, stressful events, or life changes that affected how you felt',
  'Other medications, supplements, alcohol, or caffeine you use',
]

const askItems = [
  'What is this medication meant to improve, and how will we know it is working?',
  'How long should I expect to take it before reassessing?',
  'What should I do if I miss a dose?',
  'Are there side effects that should prompt me to call right away?',
  'Is there anything I should avoid while taking this medication?',
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Preparing for Follow-Up Medication Visits</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read · Reviewed by Blue Willow Psychiatry</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-preparing-for-follow-up-medication-visits.jpg"} alt={"Doctor in white coat consulting patient in a modern office setting."} width={1200} height={627} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base animate-fade-up">
          You started a new medication, or adjusted an old one, and now the follow-up appointment is on the calendar. Maybe you feel better. Maybe you are not sure. Maybe you have been wondering whether that nagging headache is related. Whatever the case, the follow-up visit is one of the most valuable moments in treatment, and a little preparation can help you get far more out of it.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why follow-up visits matter</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Psychiatric medications rarely work perfectly on the first try. Many take several weeks to show their full effect, and dose adjustments are common. Follow-up visits give your prescriber a chance to see how you are responding, check for side effects, and decide whether to continue, change, or add to your plan.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Research on depression and anxiety treatment consistently shows that regular monitoring early in treatment is linked to better outcomes. Stopping a medication suddenly or skipping appointments can also lead to withdrawal-type symptoms or a return of the original problem, so staying connected matters.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who benefits from preparing</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Anyone taking medication for depression, anxiety, ADHD, bipolar disorder, sleep difficulties, or other mental health concerns can benefit. Memory of the past few weeks is often blurry, especially when mood or concentration is affected. Writing things down means the visit is guided by what actually happened, not just how you feel on the day.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What to track between visits</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          You do not need a perfect journal. A few notes on your phone or a simple calendar can be enough. Helpful things to record include:
        </p>
        <ul className="space-y-3">
          {trackItems.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">{checkIcon}<span>{t}</span></li>
          ))}
        </ul>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Psychiatric medications rarely work perfectly on the first try.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Be honest about side effects and missed doses</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Side effects such as nausea, drowsiness, sexual difficulties, or weight changes are common reasons people stop medication on their own. They are also often manageable. Adjusting the dose, the timing, or the medication itself can make a real difference, but only if your prescriber knows. Missed doses are equally important to mention. They are very common, and sharing them helps your prescriber judge whether a medication is truly not working or simply has not had a fair trial. There is no judgment in this conversation.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Questions worth asking</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Bring a short list so nothing gets forgotten in the moment. Consider asking:
        </p>
        <ul className="space-y-3">
          {askItems.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">{checkIcon}<span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical tips for the day of your visit</h2>
        <ul className="space-y-3">
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">{checkIcon}<span>Bring your medication bottles or an up-to-date list, including doses.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">{checkIcon}<span>Note your top two or three concerns so the most important ones come first.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">{checkIcon}<span>Consider bringing a trusted person if they have noticed changes you have not.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">{checkIcon}<span>Ask for anything that was unclear to be repeated or written down.</span></li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When not to wait for the next appointment</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Some changes should not wait. Contact your prescriber promptly if you have severe side effects, an allergic reaction, or a sudden change in mood or behavior. If you ever have thoughts of harming yourself, call or text 988 (the Suicide and Crisis Lifeline) or call 911 right away.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the next step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Follow-up visits are a partnership. The more clearly you can describe your experience, the better your care can fit you. If you are looking for mental health care in Tooele, UT, Blue Willow Psychiatry is located at 28 North Main Street. You can reach the practice at (435) 200-3430 to ask about next steps.
        </p>
        <p className="text-xs text-[var(--color-muted)] mt-8">This article is for general education and is not a substitute for personal medical advice.</p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">Reviewed by Blue Willow Psychiatry</p>
          <p className="text-[var(--color-muted)] mt-1">Published October 2026</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/blog" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">Resources Hub</h4>
              <p className="text-[var(--color-muted)]">Browse all patient education articles.</p>
            </a>
            <a href="/services" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">Our Services</h4>
              <p className="text-[var(--color-muted)]">Learn about the care offered at the practice.</p>
            </a>
            <a href="/contact" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">Contact Us</h4>
              <p className="text-[var(--color-muted)]">Reach out with questions about your care.</p>
            </a>
          </div>
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