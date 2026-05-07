import Layout from '../components/Layout'

export default function AboutPage() {
  return (
    <Layout title="About" description="About Ilja Herdt, software engineer based in the Bay Area.">
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">About</h1>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
          <p className="text-lg">
            I&apos;m a software engineer based in the San Francisco Bay Area. I work at the
            intersection of data, developer tools, and product, with a focus on building
            things that are genuinely useful.
          </p>

          <p>
            By day, I work in Solutions Engineering, helping teams connect their data systems
            and build integration pipelines. By night, I build iOS apps that scratch my own
            itch, starting with <a href="/projects" className="text-brand-600 hover:text-brand-700 font-medium">CalRun</a>,
            a Caltrain companion app born from my daily commute.
          </p>

          <p>
            I believe the best tools are the ones that get out of your way. Whether it&apos;s a
            train schedule app that opens in under a second or a data connector that just
            works, I care about the details that make software feel right.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4">Background</h2>

          <p>
            I have a background in advertising technology, data engineering, and full-stack
            development. I&apos;ve worked across startups and enterprise, from building
            programmatic ad platforms to designing data integration architectures.
          </p>

          <p>
            Outside of code, I founded{' '}
            <a href="https://heartfusioncamp.com/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 font-medium">Heart Fusion Camp</a>,
            a Burning Man theme camp centered on interactive LED art installations. We build
            glowing heart labyrinths, cuddle domes, and audio-reactive light sculptures powered
            by custom ESP32 firmware. When I&apos;m not on the playa, I&apos;m running, studying,
            or optimizing things that probably don&apos;t need optimizing.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4">Experience</h2>

          <div className="not-prose space-y-0 relative ml-1">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-100" />

            {[
              { period: '2023 - Present', role: 'Solutions Engineer', company: 'Airbyte', description: 'Helping teams build data integration pipelines. Connector development, technical enablement, and customer architecture.' },
              { period: '2025 - Present', role: 'Founder', company: 'Heart Fusion Camp', description: 'Burning Man theme camp building interactive LED art installations powered by custom ESP32 firmware.' },
              { period: '2026 - Present', role: 'Indie Developer', company: 'CalRun & FocusRep', description: 'Designing and shipping iOS apps. SwiftUI, MapKit, StoreKit 2, real-time transit data.' },
              { period: '2018 - 2023', role: 'Solutions Engineer', company: 'Xandr (Microsoft)', description: 'Programmatic advertising platform. Built integrations, managed technical partnerships, and designed data pipelines at scale.' },
              { period: '2015 - 2018', role: 'Technical Account Manager', company: 'AppNexus', description: 'Pre-acquisition. Technical consulting for enterprise ad-tech clients, API integrations, and platform optimization.' },
            ].map((item, i) => (
              <div key={i} className="relative pl-7 pb-6 last:pb-0">
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-gray-200 bg-white z-10" />
                <p className="text-xs text-gray-400 mb-1">{item.period}</p>
                <p className="text-sm font-semibold text-gray-900">{item.role}</p>
                <p className="text-sm text-brand-600 mb-1">{item.company}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-400 pt-2">
            Full details on <a href="https://linkedin.com/in/iherdt" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 font-medium">LinkedIn</a>.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4">Tech I Use</h2>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4 not-prose">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Swift', 'Python', 'TypeScript', 'C++'].map(t => (
                  <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 border border-gray-100">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {['SwiftUI', 'MapKit', 'Next.js', 'Tailwind', 'React'].map(t => (
                  <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 border border-gray-100">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Xcode', 'Cursor', 'Git', 'Docker', 'GCP'].map(t => (
                  <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 border border-gray-100">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {['Data Integration', 'iOS', 'Embedded', 'AI Agents'].map(t => (
                  <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 border border-gray-100">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
