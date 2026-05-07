import Layout from './Layout'
import Link from 'next/link'

interface Section {
  heading?: string
  body: string
}

interface LegalPageProps {
  appName: string
  title: string
  lastUpdated: string
  sections: Section[]
}

export default function LegalPage({ appName, title, lastUpdated, sections }: LegalPageProps) {
  return (
    <Layout title={`${title} - ${appName}`} description={`${title} for ${appName}`}>
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-16">
        <Link href="/projects" className="inline-flex items-center text-sm text-brand-600 hover:text-brand-700 mb-6 transition">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Projects
        </Link>

        <h1 className="text-2xl font-bold text-gray-900 mb-1">{title} for {appName}</h1>
        <p className="text-sm text-gray-400 mb-8">Last updated: {lastUpdated}</p>

        <div className="space-y-6">
          {sections.map((s, i) => (
            <div key={i}>
              {s.heading && (
                <h2 className="text-base font-semibold text-gray-900 mb-2">{s.heading}</h2>
              )}
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
