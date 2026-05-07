import Link from 'next/link'
import Layout from '../../components/Layout'

export default function CalRunPage() {
  const features = [
    {
      title: 'Live Train Map',
      description: 'Watch every active Caltrain move along the corridor in real time with smooth animation, directional arrows, and countdown timers.',
    },
    {
      title: 'Pin Your Routes',
      description: 'Bookmark your regular commute trains for instant access. Pinned routes show departure and arrival countdowns so you always know when to leave.',
    },
    {
      title: 'Smart Reminders',
      description: 'Get notified before departure and arrival with configurable timing from 1 to 60 minutes. Works in the background.',
    },
    {
      title: 'Commute Stats',
      description: 'View your commute at a glance with pinned route summaries and live Caltrain service alerts.',
    },
    {
      title: 'One-Tap Flip',
      description: 'Switch between morning and evening commute instantly. Use "Now" mode for real-time results or pick any date to plan ahead.',
    },
    {
      title: 'No Tracking',
      description: 'No accounts. No ads. No analytics. No data collection. Just your train schedule, stored locally on your device.',
    },
  ]

  return (
    <Layout title="CalRun" description="Caltrain schedule companion with live train tracking, pinned routes, and departure reminders.">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12">
        <Link href="/projects" className="inline-flex items-center text-sm text-brand-600 hover:text-brand-700 mb-8 transition">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Projects
        </Link>

        <div className="flex items-start gap-5 mb-6">
          <span className="text-5xl">🚆</span>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-gray-900">CalRun</h1>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-green-100 text-green-700">Live on App Store</span>
            </div>
            <p className="text-lg text-gray-600">
              Your Caltrain commute, simplified. Live train tracking, pinned routes, and departure reminders for daily riders.
            </p>
          </div>
        </div>

        {/* Store Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          <a
            href="https://apps.apple.com/app/calrun/id6759998408"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            App Store
          </a>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6"><hr className="border-gray-100" /></div>

      {/* Screenshots */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Screenshots</h2>

        {[
          { device: 'iPhone', folder: 'iphone', width: 'w-[180px] sm:w-[200px]' },
          { device: 'iPad', folder: 'ipad', width: 'w-[280px] sm:w-[320px]' },
        ].map((d) => (
          <div key={d.device} className="mb-8">
            <h3 className="text-sm font-medium text-gray-500 mb-3">{d.device}</h3>
            <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory">
              {[
                { file: '01-train-list.png', label: 'Train List' },
                { file: '02-train-list-filtered.png', label: 'Filtered Routes' },
                { file: '03-map-overview.png', label: 'Map Overview' },
                { file: '04-map-live.png', label: 'Live Map' },
                { file: '05-stats.png', label: 'Stats' },
                { file: '06-settings.png', label: 'Settings' },
              ].map((s) => (
                <div key={s.label} className={`shrink-0 ${d.width} snap-start`}>
                  <img
                    src={`/screenshots/calrun/${d.folder}/${s.file}`}
                    alt={`${s.label} - ${d.device}`}
                    className="w-full rounded-2xl border border-gray-100 shadow-sm"
                  />
                  <p className="text-xs text-gray-400 text-center mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
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
          {['Swift', 'SwiftUI', 'MapKit', 'StoreKit 2', 'GTFS', 'UserNotifications', 'BackgroundTasks', 'CoreLocation'].map((t) => (
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
          <Link href="/calrun/privacy" className="text-sm text-brand-600 hover:text-brand-700 font-medium transition">
            Privacy Policy
          </Link>
          <Link href="/calrun/terms" className="text-sm text-brand-600 hover:text-brand-700 font-medium transition">
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
        <p className="text-xs text-gray-400 mt-3">Transit data provided by 511.org.</p>
      </section>
    </Layout>
  )
}
