import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ | Blue Willow Psychiatry in Tooele, UT',
  description: 'Answers to common questions about assessments, medication management, therapy, insurance and what to expect at Blue Willow Psychiatry in Tooele, UT.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ | Blue Willow Psychiatry in Tooele, UT',
    description: 'Answers to common questions about assessments, medication management, therapy, insurance and what to expect at Blue Willow Psychiatry in Tooele, UT.',
    url: 'https://www.bluewillowpsych.com/faq',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'FAQ | Blue Willow Psychiatry in Tooele, UT',
    description: 'Answers to common questions about assessments, medication management, therapy, insurance and what to expect at Blue Willow Psychiatry in Tooele, UT.',
  },
}

const faqs = [
  {
    q: 'What does Blue Willow Psychiatry do?',
    a: 'Blue Willow Psychiatry provides mental health care in Tooele, UT, including in-depth assessment and diagnosis, individualized treatment, medication management, and brief solution-focused therapy. Care is led by Kristi Lawrence, APRN. The goal is a plan that fits your life and needs rather than a one-size-fits-all approach. Medication and therapy can be combined when that makes sense for you.',
  },
  {
    q: 'What is the free 15 minute consultation?',
    a: 'The free 15 minute consultation is a brief, low-pressure conversation where you can ask questions and see whether the practice is a good fit for you. It is not a full evaluation or a treatment visit. Think of it as a first step before deciding whether to schedule an assessment. To arrange one, call (435) 200-3430 or use the contact page.',
  },
  {
    q: 'How do I schedule an appointment?',
    a: 'You can call the office at (435) 200-3430 or reach out through the contact page. Let us know what kind of visit you are interested in, such as a new patient assessment, a second opinion, or a free consultation. Please have your insurance information handy so we can verify coverage when you schedule. If you are unsure which option fits, the free consultation is a good place to start.',
  },
  {
    q: 'What should I expect at my first visit?',
    a: 'Your new patient consult runs 60 to 80 minutes so we can understand your history, symptoms, and concerns in depth. You will have time to talk through what has and has not helped in the past. Depending on your situation, the assessment may include lab tests or other specialized testing. By the end, you should have a clearer understanding of next steps in your care.',
  },
  {
    q: 'Why is the first appointment so long?',
    a: 'Accurate diagnosis depends on understanding the whole picture, including medical history, past treatments, family history, sleep, stress, and daily functioning. A longer visit allows time to listen and ask thorough questions rather than rushing to conclusions. This is especially valuable if you have tried treatment before without relief. A careful assessment helps guide a more effective plan.',
  },
  {
    q: 'What kinds of testing might be part of an assessment?',
    a: 'Some mental health symptoms can overlap with medical conditions such as thyroid problems, vitamin deficiencies, or other health issues. For that reason, an in-depth assessment may include lab tests or other specialized testing when appropriate. Not everyone needs testing, and the provider will explain what is recommended and why. Ask about this during your visit if you have questions.',
  },
  {
    q: 'Can I get a second opinion on a diagnosis?',
    a: 'Yes. If you received a diagnosis elsewhere and want another perspective, the practice offers second opinion visits. Your history and concerns are reviewed carefully so you can feel confident in your diagnosis and plan. It can be helpful to bring records of prior diagnoses, medications you have tried, and any test results you have.',
  },
  {
    q: 'What is medication management?',
    a: 'Medication management involves ongoing visits to monitor how your medication is working, check for side effects, and adjust the plan as needed. Patients with straightforward treatment plans may qualify for a shorter 15 minute appointment. Medication decisions are made together with you and are based on your symptoms, history, and goals. Never stop or change a medication on your own without talking to your provider.',
  },
  {
    q: 'What is brief solution-focused therapy?',
    a: 'Brief solution-focused therapy is a practical, goal-oriented approach that focuses on what you want to change and the strengths you already have. It is included with medication management visits. The aim is to help you build skills and move toward specific changes in your life. It is not a substitute for emergency care if you are in crisis.',
  },
  {
    q: 'Will I need medication, therapy, or both?',
    a: 'That depends on your symptoms, history, and preferences. Sometimes medication is the right choice, sometimes therapy is enough, and often a combination works best. The practice combines medication management and therapy so your care stays connected. Your plan can be adjusted over time as your needs change.',
  },
  {
    q: 'Do you accept my insurance?',
    a: 'We accept several different insurance plans, including some types of Medicaid, United Healthcare, PEHP, DMBA, Regence/BCBS, SelectHealth and University of Utah Health Plans. Please call (435) 200-3430 to verify coverage when you schedule your appointment. See our Insurance & Fees page for details.',
  },
  {
    q: 'How much does a visit cost?',
    a: 'For those who do not have insurance, we offer self pay rates. New patient consults are 60 to 80 minutes and are $250. Return visits are 20 to 30 minutes and $185. Both include medication management and brief solution-focused therapy. For patients who only need medication management and do not have complicated treatment plans, a 15 minute appointment is available for $150. Payment is due at the time of service, and we accept cash, credit card, check, and Venmo.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Missed appointments or appointments cancelled within 24 hours are charged a cancellation fee of $200 for new patients and $100 for return patients. If you need to change an appointment, please call (435) 200-3430 as early as you can.',
  },
  {
    q: 'Do I need a referral?',
    a: 'You can call to schedule directly. Some insurance plans have their own referral rules, so it is worth checking with your plan. If your primary care provider recommended you, bringing relevant records to your first visit can help.',
  },
  {
    q: 'Do you offer telehealth or evening appointments?',
    a: 'Yes. We offer both in-office and virtual visits, and evening and weekend appointments are available.',
  },
  {
    q: 'Do you prescribe controlled substances?',
    a: 'We can, and often will, prescribe controlled substances, but only on an individual basis when we agree that the benefit outweighs the risks. Controlled substances are not prescribed at your first visit, and you will need to be seen in office periodically if you receive them from us. We might ask for outside records or drug screens to ensure your safety and well-being.',
  },
  {
    q: 'Is the practice taking new patients?',
    a: 'Availability can change, so the best way to find out is to contact the office directly. Call (435) 200-3430 or send a message through the contact page. You can also ask about the free 15 minute consultation, which is a simple way to start the conversation.',
  },
  {
    q: 'What should I bring to my first appointment?',
    a: 'Bring a list of your current medications and supplements, along with any past diagnoses and the names of treatments you have tried. Records or recent lab results are helpful if you have them. Your insurance card is also useful if you plan to use coverage. Writing down your main concerns and questions ahead of time can help you make the most of the visit.',
  },
  {
    q: 'Is my information kept private?',
    a: 'Health care providers are required to protect your health information under federal privacy law, including HIPAA. You are welcome to ask the office how your records are handled and shared. Please avoid sending detailed medical information through unsecured channels such as regular email or contact forms. When in doubt, call the office at (435) 200-3430.',
  },
  {
    q: 'What if I am in crisis or having thoughts of suicide?',
    a: 'This practice is not an emergency service, and the contact form is not monitored for emergencies. If you are thinking about harming yourself or are in emotional crisis, call or text 988 to reach the 988 Suicide & Crisis Lifeline, available around the clock in the United States. If you or someone else is in immediate danger, call 911 or go to the nearest emergency room. Reaching out for help is a strong and important step.',
  },
  {
    q: 'Where is the practice located?',
    a: 'Blue Willow Psychiatry is located at 28 North Main Street, Tooele, UT 84074. You can reach the office by phone at (435) 200-3430. If you have questions about parking, directions, or what to bring, call before your visit.',
  },
]

export default function FaqPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-white/80 mb-6">
            <Link href="/" className="hover:underline">Home</Link> › <span>FAQ</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light">Frequently Asked Questions</h1>
          <p className="mt-6 text-lg text-white/90">Everything you need to know about our practice and services</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          {faqs.map((f) => (
            <details key={f.q} className="group border border-[var(--color-border)] rounded-xl mb-3 bg-white animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center gap-4">
                <span>{f.q}</span>
                <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light">Still have questions?</h2>
          <p className="mt-4 text-white/80">Call (435) 200-3430 or reach out online. A free 15 minute consultation is a simple way to see if we are a good fit.</p>
          <Link href="/contact" className="inline-block mt-8 px-8 py-3 rounded-lg bg-[var(--color-accent)] text-white font-semibold transition-colors hover:bg-[var(--color-accent-dark)]">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}