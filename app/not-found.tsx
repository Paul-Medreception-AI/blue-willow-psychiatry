import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="bg-[var(--color-cream)] min-h-screen flex items-center justify-center px-6">
      <div className="text-center animate-fade-up">
        <p className="font-cormorant text-9xl text-[var(--color-primary)] opacity-20 leading-none">404</p>
        <h1 className="font-cormorant text-4xl text-[var(--color-ink)] mt-4">Page Not Found</h1>
        <p className="text-[var(--color-muted)] mt-2">The page you&apos;re looking for doesn&apos;t exist.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-dark)]"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-light)]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}