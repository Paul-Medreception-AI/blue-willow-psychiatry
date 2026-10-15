import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Taking the First Step Toward Mental Health Care',
  description: 'Thinking about reaching out for mental health care? Learn the signs, common fears, and practical ways to take that first step with confidence.',
  alternates: { canonical: '/blog/taking-the-first-step-toward-mental-health-care' },
  openGraph: {
    title: 'Taking the First Step Toward Mental Health Care',
    description: 'Thinking about reaching out for mental health care? Learn the signs, common fears, and practical ways to take that first step with confidence.',
    url: 'https://www.bluewillowpsych.com/blog/taking-the-first-step-toward-mental-health-care',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Taking the First Step Toward Mental Health Care',
    description: 'Thinking about reaching out for mental health care? Learn the signs, common fears, and practical ways to take that first step with confidence.',
  },
}

const check = (
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Taking the First Step Toward Mental Health Care</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read · Reviewed by Blue Willow Psychiatry</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-taking-the-first-step-toward-mental-health-care.jpg"} alt={"A therapist attentively takes notes while two clients engage in a counseling session indoors."} width={1200} height={627} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Many people carry worry, sadness, or exhaustion for months or even years before they ask for help. They tell themselves it will pass, that others have it worse, or that they should be able to handle it alone. If that sounds familiar, you are far from alone, and reaching out is not a sign of weakness. It is often the most important step toward feeling better.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Starting Feels So Hard</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Taking the first step toward mental health care can feel daunting for good reasons. Stigma remains a real barrier, even though attitudes are slowly changing. Some people worry about what family, friends, or coworkers might think. Others are unsure what an appointment involves, or fear being judged for what they might say.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Symptoms themselves can also get in the way. Depression can drain motivation, and anxiety can make picking up the phone feel overwhelming. Recognizing that these obstacles are common can make them easier to work through.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Mental Health Concerns Affect</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Mental health conditions are common. According to the National Institute of Mental Health, more than one in five adults in the United States lives with a mental illness in a given year. Anxiety disorders, depression, attention-deficit/hyperactivity disorder, trauma-related conditions, and sleep difficulties affect people of every age, background, and walk of life.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Research also shows that many people wait a long time between the first symptoms and their first treatment. Earlier care is associated with better outcomes for many conditions, which is one reason it helps not to wait until things feel unbearable.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Signs It May Be Time to Reach Out</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          There is no minimum level of suffering required before you deserve support. Still, certain patterns suggest that professional input could help:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            'Persistent sadness, irritability, or feeling empty that lasts two weeks or longer',
            'Constant worry, racing thoughts, or physical tension that is hard to switch off',
            'Changes in sleep or appetite that you cannot explain',
            'Pulling away from people or activities you used to enjoy',
            'Difficulty concentrating at work, school, or at home',
            'Relying on alcohol or other substances to cope',
            'Feeling hopeless, or having thoughts of harming yourself',
          ].map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">{check}<span>{t}</span></li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          If you are having thoughts of suicide or are in immediate danger, call or text 988 (the Suicide and Crisis Lifeline) or call 911 right away.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          There is no minimum level of suffering required before you deserve support.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Evidence Says About Treatment</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Mental health conditions are treatable. Decades of research support approaches such as psychotherapy, including cognitive behavioral therapy, and medication management for conditions like depression and anxiety. Many people benefit from a combination, and a care plan is typically shaped around your symptoms, history, preferences, and goals.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Lifestyle factors matter too. Regular physical activity, consistent sleep, time outdoors, and social connection are all linked to better mood and resilience. These habits support treatment, though they are not a replacement for professional care when symptoms are significant.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Ways to Take the First Step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          You do not need to have everything figured out. A few small actions can make the process feel manageable:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            'Jot down what you have noticed: symptoms, when they started, and how they affect daily life',
            'List any medications, supplements, and past treatments, along with relevant medical history',
            'Write down your questions and concerns so you do not forget them during the visit',
            'Consider telling a trusted friend or family member that you are making the call',
            'Be as honest as you can; clinicians are there to understand, not to judge',
            'Remember that you can ask questions about the process at any point',
          ].map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">{check}<span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What to Expect From a First Appointment</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          A first visit is generally a conversation. A clinician will ask about your current concerns, your history, your health, and what you hope to change. You are not expected to have a diagnosis in mind. Together you can talk through possible next steps, which might include therapy, medication, follow-up visits, or other supports. You stay in charge of your decisions throughout.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Reach Out When You Are Ready</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Asking for help is an act of self-respect, and it can change the direction of your life. If you are in Tooele, UT and are considering mental health care, Blue Willow Psychiatry is located at 28 North Main Street. You can call us at (435) 200-3430 or use our contact page to get in touch. This article is for general education and is not a substitute for personalized medical advice.
        </p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">Reviewed by Blue Willow Psychiatry</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/blog" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Resource Hub</p>
              <p className="font-cormorant text-2xl text-[var(--color-primary)]">Blog: All Resources</p>
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