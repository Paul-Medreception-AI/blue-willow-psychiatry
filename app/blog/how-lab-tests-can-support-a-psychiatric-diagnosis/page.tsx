import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Lab Tests Can Support a Psychiatric Diagnosis',
  description: 'Learn how blood and urine tests can rule out medical causes of mood and thinking changes and support a more accurate psychiatric diagnosis.',
  alternates: { canonical: '/blog/how-lab-tests-can-support-a-psychiatric-diagnosis' },
  openGraph: {
    title: 'How Lab Tests Can Support a Psychiatric Diagnosis',
    description: 'Learn how blood and urine tests can rule out medical causes of mood and thinking changes and support a more accurate psychiatric diagnosis.',
    url: 'https://www.bluewillowpsych.com/blog/how-lab-tests-can-support-a-psychiatric-diagnosis',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'How Lab Tests Can Support a Psychiatric Diagnosis',
    description: 'Learn how blood and urine tests can rule out medical causes of mood and thinking changes and support a more accurate psychiatric diagnosis.',
  },
}

const checkIcon = (
  <svg className="w-5 h-5 mt-1 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

export default function Page() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">How Lab Tests Can Support a Psychiatric Diagnosis</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read · Reviewed by Blue Willow Psychiatry</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-how-lab-tests-can-support-a-psychiatric-diagnosis.jpg"} alt={"Flat lay of pink laboratory and office supplies promoting breast cancer awareness."} width={1200} height={627} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="animate-fade-up">If you have been feeling exhausted, anxious, foggy, or low for weeks, you may wonder whether something is wrong with your mind, your body, or both. It is a fair question. Mental health symptoms rarely come from a single source, and sometimes the body is quietly contributing. That is where lab tests can help: they add information so that your care is based on the full picture rather than a guess.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Can a Blood Test Diagnose a Mental Health Condition?</h2>
        <p>No. There is currently no blood or urine test that can diagnose depression, anxiety, bipolar disorder, ADHD, or schizophrenia on its own. Psychiatric diagnosis rests on a careful conversation about your symptoms, history, and daily functioning. Lab tests play a supporting role. They help clinicians rule out medical conditions that can look like psychiatric ones, and they help guide safe treatment choices.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Medical Conditions That Can Mimic Psychiatric Symptoms</h2>
        <p>Many physical conditions can change mood, energy, sleep, concentration, and anxiety levels. Treating a mood symptom without noticing its physical cause can leave you feeling worse for longer. Common examples include:</p>
        <ul className="my-6 space-y-3">
          <li className="flex gap-3">{checkIcon}<span><strong>Thyroid problems.</strong> An underactive thyroid can cause fatigue, low mood, and slowed thinking, while an overactive thyroid can cause anxiety, restlessness, and racing thoughts.</span></li>
          <li className="flex gap-3">{checkIcon}<span><strong>Vitamin deficiencies.</strong> Low vitamin B12, folate, or vitamin D have been linked with depressive symptoms, fatigue, and memory difficulties.</span></li>
          <li className="flex gap-3">{checkIcon}<span><strong>Anemia.</strong> Low iron or red blood cell counts can cause tiredness, irritability, and trouble concentrating.</span></li>
          <li className="flex gap-3">{checkIcon}<span><strong>Blood sugar changes.</strong> Diabetes or low blood sugar can affect mood, energy, and clarity of thought.</span></li>
          <li className="flex gap-3">{checkIcon}<span><strong>Infections and inflammation.</strong> Some illnesses can affect attention, sleep, and emotional well-being.</span></li>
        </ul>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Lab tests play a supporting role.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Common Labs Used in Psychiatric Evaluation</h2>
        <p>Which tests make sense depends on your symptoms, medical history, and any medications you take. Labs that are often considered include:</p>
        <ul className="my-6 space-y-3">
          <li className="flex gap-3">{checkIcon}<span><strong>Complete blood count (CBC)</strong> to check for anemia and other blood abnormalities.</span></li>
          <li className="flex gap-3">{checkIcon}<span><strong>Thyroid panel (such as TSH)</strong> to assess thyroid function.</span></li>
          <li className="flex gap-3">{checkIcon}<span><strong>Comprehensive metabolic panel</strong> to review kidney function, liver function, electrolytes, and blood sugar.</span></li>
          <li className="flex gap-3">{checkIcon}<span><strong>Vitamin B12, folate, and vitamin D</strong> to look for deficiencies.</span></li>
          <li className="flex gap-3">{checkIcon}<span><strong>Urine drug screening</strong> when substances may be affecting symptoms or when it is relevant to safe prescribing.</span></li>
        </ul>
        <p>These tests are routine, and a normal result is useful information too. It helps point attention back toward psychiatric causes and supports a clearer treatment plan.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How Labs Help Guide Medication Safety</h2>
        <p>Labs are also valuable after a diagnosis is made. Some psychiatric medications are processed by the liver or kidneys, and some can affect weight, blood sugar, cholesterol, or sodium levels. Baseline results let your prescriber choose medications that fit your body, and follow-up testing can catch changes early. For certain medications, such as lithium, periodic blood monitoring is a standard part of safe care.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Tells Us</h2>
        <p>Research consistently shows that physical and mental health are closely connected. Studies have found higher rates of depression in people with thyroid disorders, diabetes, and chronic inflammatory conditions, and cognitive and mood symptoms are well documented with vitamin B12 deficiency. At the same time, lab abnormalities do not always explain symptoms, and correcting one does not guarantee that mood will fully recover. This is why results are interpreted alongside a thorough clinical evaluation rather than on their own.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How to Prepare for Your Evaluation</h2>
        <ul className="my-6 space-y-3">
          <li className="flex gap-3">{checkIcon}<span>Bring a list of all medications, vitamins, and supplements you take.</span></li>
          <li className="flex gap-3">{checkIcon}<span>Share any recent lab results or medical records you have.</span></li>
          <li className="flex gap-3">{checkIcon}<span>Note when your symptoms began and whether they changed with illness, stress, or medication changes.</span></li>
          <li className="flex gap-3">{checkIcon}<span>Be open about sleep, alcohol, caffeine, and substance use. This information helps keep your care safe, not judged.</span></li>
          <li className="flex gap-3">{checkIcon}<span>Ask questions about why a test is recommended and what the results may mean.</span></li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the Next Step Toward Clarity</h2>
        <p>Struggling with your mental health is not a personal failing, and wanting answers is a healthy instinct. If you are looking for mental health care in Tooele, UT, Blue Willow Psychiatry is located at 28 North Main Street and can be reached at (435) 200-3430. If you are ever in crisis or thinking about harming yourself, call or text 988 or go to the nearest emergency room right away.</p>
        <p className="mt-4 text-sm text-[var(--color-muted)]">This article is for general education and is not a substitute for personalized medical advice.</p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">Reviewed by Blue Willow Psychiatry</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">Patient education on mental health care from Tooele, UT.</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/blog" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <p className="font-cormorant text-xl text-[var(--color-primary)]">Resources Hub</p>
              <p className="text-sm text-[var(--color-muted)] mt-2">Browse all patient education articles.</p>
            </a>
            <a href="/services" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <p className="font-cormorant text-xl text-[var(--color-primary)]">Our Services</p>
              <p className="text-sm text-[var(--color-muted)] mt-2">See the mental health care we provide.</p>
            </a>
            <a href="/conditions" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <p className="font-cormorant text-xl text-[var(--color-primary)]">Conditions We Treat</p>
              <p className="text-sm text-[var(--color-muted)] mt-2">Learn about common mental health conditions.</p>
            </a>
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