import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Using Insurance for Mental Health Care',
  description: 'Learn how to understand your benefits, check coverage, and get the most from insurance when seeking mental health care. Practical tips for patients.',
  alternates: { canonical: '/blog/using-insurance-for-mental-health-care' },
  openGraph: {
    title: 'Using Insurance for Mental Health Care',
    description: 'Learn how to understand your benefits, check coverage, and get the most from insurance when seeking mental health care. Practical tips for patients.',
    url: 'https://www.bluewillowpsych.com/blog/using-insurance-for-mental-health-care',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Using Insurance for Mental Health Care',
    description: 'Learn how to understand your benefits, check coverage, and get the most from insurance when seeking mental health care. Practical tips for patients.',
  },
}

const tips = [
  'Call the member services number on the back of your insurance card.',
  'Ask whether psychiatric evaluations and medication management are covered.',
  'Ask about your deductible, copay, and coinsurance for mental health visits.',
  'Confirm whether you need a referral or prior authorization.',
  'Write down the date, the representative\u2019s name, and a reference number for the call.',
  'Ask the practice\u2019s office to help you understand what information they need from you.',
]

const related = [
  { title: 'Mental Health Conditions We Support', href: '/conditions', label: 'Conditions' },
  { title: 'Our Services', href: '/services', label: 'Services' },
  { title: 'More Patient Resources', href: '/blog', label: 'Resources' },
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Using Insurance for Mental Health Care</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read · Reviewed by Blue Willow Psychiatry</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-using-insurance-for-mental-health-care.jpg"} alt={"Flat lay of health insurance concept with planner and pills."} width={1200} height={627} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You finally decide it is time to get help. You find a provider, pick up the phone, and then a new worry arrives: what will this cost, and what will my insurance actually cover? For many people, confusing benefits become one more hurdle between them and the care they need. The good news is that a little preparation can make the process far less intimidating.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Insurance Questions Matter</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Mental health conditions such as depression, anxiety, and ADHD are common, and research consistently shows that treatment helps many people feel better. Yet cost and confusion about coverage are frequently reported reasons people delay or skip care. Understanding your benefits ahead of time lets you focus on your health instead of worrying about surprise bills.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Mental health care is not a luxury. It is part of overall health, and many health plans treat it that way.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Law Says About Coverage</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          In the United States, federal parity law generally requires that group health plans covering mental health and substance use disorder services do so on terms comparable to medical and surgical benefits. The Affordable Care Act also lists mental health and substance use disorder services among the essential health benefits for many plans. In practice, this means most plans include some level of coverage, though the details vary widely by plan, employer, and state.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          A little preparation can make the process far less intimidating.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Key Insurance Terms to Know</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Insurance language can feel like a foreign tongue. A few terms come up again and again:
        </p>
        <ul className="space-y-3 mb-4 text-[var(--color-ink)] leading-loose text-base">
          <li><strong>Premium:</strong> the amount you pay to keep your plan active.</li>
          <li><strong>Deductible:</strong> what you pay out of pocket before the plan begins to share costs.</li>
          <li><strong>Copay:</strong> a set amount you pay for a visit.</li>
          <li><strong>Coinsurance:</strong> a percentage of the cost you pay after the deductible.</li>
          <li><strong>In-network:</strong> providers that have a contract with your plan, which usually means lower costs.</li>
          <li><strong>Out-of-network:</strong> providers without that contract, which may mean higher costs or limited coverage.</li>
          <li><strong>Prior authorization:</strong> approval your plan may require before certain services.</li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Steps to Check Your Benefits</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Before your first appointment, take a few minutes to gather information. These steps can help:
        </p>
        <ul className="space-y-3 mb-4">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Common Obstacles and How to Handle Them</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Some people find that their plan has a high deductible, limits the number of visits, or requires a referral. Others discover that a preferred provider is out-of-network. None of these are dead ends. You can ask your plan about out-of-network benefits, request a written explanation of coverage, or appeal a denied claim. Many plans have a formal appeals process, and persistence often pays off.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If a bill looks wrong, ask for an itemized statement and compare it with your explanation of benefits. Errors in billing codes are more common than most people expect.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Protecting Your Privacy</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Many patients worry about who sees their information when insurance is involved. Health privacy laws such as HIPAA set rules for how your health information may be used and shared. If you have concerns, ask your provider\u2019s office how your information is handled and what your plan will receive when a claim is filed.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the Next Step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Questions about insurance should never keep you from seeking support. If you are in Tooele, UT and considering mental health care, Blue Willow Psychiatry can answer questions about the process. Call (435) 200-3430 or visit us at 28 North Main Street, Tooele, UT 84074. If you are ever in crisis, call or text 988 to reach the Suicide and Crisis Lifeline, or call 911.
        </p>
      </article>

      <section className="px-6">
        <div className="animate-fade-up bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
            <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" />
              <path strokeLinecap="round" d="M4 20c0-4 4-6 8-6s8 2 8 6" />
            </svg>
          </div>
          <div>
            <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">Reviewed by Blue Willow Psychiatry</p>
            <p className="text-[var(--color-muted)] text-sm mt-2 leading-relaxed">This article is for general education and is not a substitute for personal medical advice.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <p className="font-cormorant text-2xl text-[var(--color-primary)]">{r.title}</p>
              </a>
            ))}
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