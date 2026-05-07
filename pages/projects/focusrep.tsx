import Link from 'next/link'
import Layout from '../../components/Layout'

export default function FocusRepPage() {
  const features = [
    {
      title: 'Progressive Overload Tracking',
      description: 'Log weights, reps, and sets for every exercise. FocusRep tracks your progress and highlights personal records.',
    },
    {
      title: 'Workout Templates',
      description: 'Create reusable workout templates for your routines. Start a session with one tap.',
    },
    {
      title: 'Strength Visualization',
      description: 'See your gains over time with charts that track volume, max weight, and estimated 1RM.',
    },
    {
      title: 'Minimal Design',
      description: 'No social features, no noise. Just a clean interface built for focused training.',
    },
  ]

  return (
    <Layout title="FocusRep" description="Workout tracking app focused on progressive overload and strength gains.">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12">
        <Link href="/projects" className="inline-flex items-center text-sm text-brand-600 hover:text-brand-700 mb-8 transition">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Projects
        </Link>

        <div className="flex items-start gap-5 mb-6">
          <span className="text-5xl">🏋️</span>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-gray-900">FocusRep</h1>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-amber-100 text-amber-700">Beta</span>
            </div>
            <p className="text-lg text-gray-600">
              Workout tracking built for lifters who care about progressive overload, not social feeds.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6"><hr className="border-gray-100" /></div>

      {/* Screenshots placeholder */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Screenshots</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory">
          {['Workout Log', 'Exercise Detail', 'Progress Chart', 'Templates'].map((label) => (
            <div
              key={label}
              className="shrink-0 w-[200px] h-[433px] rounded-2xl bg-gradient-to-b from-gray-100 to-gray-50 border border-gray-100 flex items-center justify-center snap-start"
            >
              <span className="text-sm text-gray-300 font-medium">{label}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-2">Screenshots coming soon.</p>
      </section>

      <div className="max-w-4xl mx-auto px-6"><hr className="border-gray-100" /></div>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Features</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.title} className="space-y-2">
              <h3 className="font-semibold text-gray-900">{f.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6"><hr className="border-gray-100" /></div>

      {/* Tech Stack */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Built With</h2>
        <div className="flex flex-wrap gap-2">
          {['Swift', 'SwiftUI', 'CoreData', 'HealthKit', 'Charts'].map((t) => (
            <span key={t} className="text-sm font-medium px-3 py-1.5 rounded-lg bg-gray-50 text-gray-600 border border-gray-100">
              {t}
            </span>
          ))}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6"><hr className="border-gray-100" /></div>

      {/* Legal */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Legal</h2>
        <div className="flex gap-6">
          <Link href="/focusrep/privacy" className="text-sm text-brand-600 hover:text-brand-700 font-medium transition">
            Privacy Policy
          </Link>
          <Link href="/focusrep/terms" className="text-sm text-brand-600 hover:text-brand-700 font-medium transition">
            Terms of Use
          </Link>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6"><hr className="border-gray-100" /></div>

      {/* Contact */}
      <section className="max-w-4xl mx-auto px-6 py-12 pb-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Support</h2>
        <p className="text-sm text-gray-600">
          Questions or feedback? Reach out at{' '}
          <a href="mailto:i.herdt@gmail.com" className="text-brand-600 hover:text-brand-700 font-medium transition">i.herdt@gmail.com</a>{' '}
          or use the <Link href="/contact" className="text-brand-600 hover:text-brand-700 font-medium transition">contact form</Link>.
        </p>
      </section>
    </Layout>
  )
}
