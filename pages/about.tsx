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
            by custom ESP32 firmware. When I&apos;m not on the playa, I&apos;m running, lifting,
            or optimizing things that probably don&apos;t need optimizing.
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
