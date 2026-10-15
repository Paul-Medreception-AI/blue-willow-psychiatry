// Written by the MedReception website builder from the site's final route set (code,
// not a model). Data-driven pages are mapped from lib/data, so pages appended there
// are listed automatically.
import type { MetadataRoute } from 'next'
import { SERVICES as DATA_0 } from '../lib/data/services'
import { CONDITIONS as DATA_1 } from '../lib/data/conditions'

type Freq = 'daily' | 'weekly' | 'monthly' | 'yearly'
const BASE = "https://www.bluewillowpsych.com"
const STATIC: [string, number, Freq][] = [
  ["/", 1.00, 'weekly'],
  ["/about", 0.70, 'monthly'],
  ["/blog", 0.70, 'weekly'],
  ["/blog/adhd-and-anxiety-when-they-overlap", 0.60, 'monthly'],
  ["/blog/adult-adhd-signs-you-may-have-missed", 0.60, 'monthly'],
  ["/blog/alcohol-use-and-your-mental-health", 0.60, 'monthly'],
  ["/blog/building-healthy-routines-for-mental-wellness", 0.60, 'monthly'],
  ["/blog/coping-with-seasonal-mood-changes", 0.60, 'monthly'],
  ["/blog/finding-hope-after-a-long-struggle", 0.60, 'monthly'],
  ["/blog/getting-a-second-opinion-on-a-mental-health-diagnosis", 0.60, 'monthly'],
  ["/blog/grief-and-mental-health", 0.60, 'monthly'],
  ["/blog/how-lab-tests-can-support-a-psychiatric-diagnosis", 0.60, 'monthly'],
  ["/blog/how-to-know-if-you-need-a-psychiatric-assessment", 0.60, 'monthly'],
  ["/blog/how-to-talk-to-a-loved-one-about-getting-help", 0.60, 'monthly'],
  ["/blog/insomnia-when-sleeplessness-needs-treatment", 0.60, 'monthly'],
  ["/blog/is-a-free-consultation-right-for-you", 0.60, 'monthly'],
  ["/blog/living-with-bipolar-disorder", 0.60, 'monthly'],
  ["/blog/managing-panic-attacks", 0.60, 'monthly'],
  ["/blog/medication-therapy-or-both", 0.60, 'monthly'],
  ["/blog/mood-swings-or-bipolar-disorder", 0.60, 'monthly'],
  ["/blog/obsessive-compulsive-disorder-more-than-neatness", 0.60, 'monthly'],
  ["/blog/postpartum-mood-changes-when-to-seek-help", 0.60, 'monthly'],
  ["/blog/preparing-for-follow-up-medication-visits", 0.60, 'monthly'],
  ["/blog/questions-to-ask-your-psychiatric-provider", 0.60, 'monthly'],
  ["/blog/recognizing-psychosis-early", 0.60, 'monthly'],
  ["/blog/recognizing-the-signs-of-depression", 0.60, 'monthly'],
  ["/blog/self-pay-psychiatry-what-to-know", 0.60, 'monthly'],
  ["/blog/stress-burnout-and-your-mental-health", 0.60, 'monthly'],
  ["/blog/substance-use-and-mental-health", 0.60, 'monthly'],
  ["/blog/supporting-a-family-member-with-mental-illness", 0.60, 'monthly'],
  ["/blog/taking-the-first-step-toward-mental-health-care", 0.60, 'monthly'],
  ["/blog/treatment-resistant-depression-explained", 0.60, 'monthly'],
  ["/blog/understanding-anxiety-beyond-everyday-worry", 0.60, 'monthly'],
  ["/blog/understanding-psychiatric-medications", 0.60, 'monthly'],
  ["/blog/understanding-ptsd-and-trauma-responses", 0.60, 'monthly'],
  ["/blog/understanding-schizophrenia-and-schizoaffective-disorder", 0.60, 'monthly'],
  ["/blog/using-insurance-for-mental-health-care", 0.60, 'monthly'],
  ["/blog/what-is-a-psychiatric-aprn", 0.60, 'monthly'],
  ["/blog/what-is-brief-solution-focused-therapy", 0.60, 'monthly'],
  ["/blog/what-to-expect-at-your-first-psychiatry-visit", 0.60, 'monthly'],
  ["/blog/when-treatment-after-treatment-has-not-worked", 0.60, 'monthly'],
  ["/blog/why-sleep-and-mental-health-are-connected", 0.60, 'monthly'],
  ["/compare/insurance-vs-self-pay-psychiatry", 0.70, 'monthly'],
  ["/compare/medication-management-vs-combined-care", 0.70, 'monthly'],
  ["/compare/medication-vs-therapy", 0.70, 'monthly'],
  ["/compare/psychiatric-assessment-vs-primary-care-evaluation", 0.70, 'monthly'],
  ["/compare/second-opinion-vs-continuing-treatment", 0.70, 'monthly'],
  ["/conditions", 0.90, 'weekly'],
  ["/contact", 0.70, 'monthly'],
  ["/faq", 0.70, 'monthly'],
  ["/insurance", 0.70, 'monthly'],
  ["/locations/tooele-ut", 0.80, 'monthly'],
  ["/new-patients", 0.70, 'monthly'],
  ["/privacy-sms", 0.30, 'yearly'],
  ["/reviews", 0.70, 'monthly'],
  ["/services", 0.90, 'weekly'],
  ["/team", 0.70, 'monthly'],
  ["/telehealth", 0.70, 'monthly'],
  ["/terms-sms", 0.30, 'yearly'],
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const seen = new Set<string>()
  const out: MetadataRoute.Sitemap = []
  const add = (path: string, priority: number, changeFrequency: Freq) => {
    if (seen.has(path)) return
    seen.add(path)
    // With no origin (no usable target_domain) the URLs stay root-relative: '/' for home, never ''.
    out.push({ url: BASE ? BASE + (path === '/' ? '' : path) : path, lastModified: now, changeFrequency, priority })
  }
  for (const [path, priority, freq] of STATIC) add(path, priority, freq)
  for (const x of DATA_0) add("/services/" + x.slug, 0.85, 'monthly')
  for (const x of DATA_1) add("/conditions/" + x.slug, 0.85, 'monthly')
  return out
}
