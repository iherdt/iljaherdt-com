import Layout from '../components/Layout'

export default function AboutPage() {
  return (
    <Layout title="About" description="About Ilja Herdt, software engineer based in the Bay Area.">
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-16">
        <div className="flex items-center gap-6 mb-8">
          <img
            src="/profile.jpg"
            alt="Ilja Herdt"
            className="w-20 h-20 rounded-2xl object-cover shadow-sm"
          />
          <h1 className="text-3xl font-bold text-gray-900">About</h1>
        </div>

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

          <p className="text-sm text-gray-500 mb-6">13+ years in customer-facing technical roles across data infrastructure, ad tech, and developer tools.</p>

          <div className="not-prose space-y-0 relative ml-1">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-100" />

            {[
              {
                period: 'Jun 2025 - Present',
                role: 'Enterprise Solutions Architect',
                company: 'Airbyte',
                companyNote: 'Open-source data integration, $180M raised',
                location: 'San Francisco, CA',
                highlights: [
                  'Own technical success for ~25 enterprise accounts, embedding with engineering teams to scope, build, and ship data pipelines.',
                  'Built custom MCP server integrations, AI agent skills, and operations pipelines that synthesize data from 15+ sources into prioritized action lists.',
                  'Designed CI/CD architecture for a Fortune 500 customer (Airbyte API + Terraform): automated drift detection, config snapshotting, and workspace migration.',
                  'Scaled internal tooling with Cursor, Claude, and Devin AI, tripling effective account capacity.',
                ],
              },
              {
                period: 'Oct 2023 - May 2025',
                role: 'Senior Solutions Architect',
                company: 'mParticle',
                companyNote: 'Acquired by Rokt for $300M',
                location: 'San Francisco, CA',
                highlights: [
                  'Architected multi-brand data pipelines (BigQuery, Snowflake) for a $6M ARR enterprise portfolio.',
                  'Designed custom data quality solutions (AWS Lambda, SQL, Python) for rapid enterprise onboarding.',
                  'Engineered production-ready partner integrations using API frameworks to close product gaps.',
                ],
              },
              {
                period: 'Aug 2019 - Oct 2023',
                role: 'Solutions Consultant',
                company: 'mParticle',
                location: 'New York, NY',
                highlights: [
                  'Delivered 30+ CDP implementations: SDK integration, data pipeline configuration, event schema design.',
                  'Consulted across Fintech, Retail, Media, and QSR on data activation across 350+ MarTech platforms.',
                  'Built reusable automation scripts (Python, Postman), improving team delivery efficiency by 23%.',
                ],
              },
              {
                period: 'Mar 2016 - Aug 2019',
                role: 'Technical Solutions Consultant',
                company: 'Xandr',
                companyNote: 'AppNexus, acquired by AT&T for $2B',
                location: 'New York, NY',
                highlights: [
                  'Drove $1B+ in annual ad spend by optimizing Real-Time Bidding integrations with Criteo and Google Marketing Platform.',
                  'Built a Bash automation library (400+ functions), increasing team efficiency by 45%.',
                ],
              },
              {
                period: 'Aug 2013 - Mar 2016',
                role: 'Product Specialist',
                company: 'AppNexus',
                location: 'London, UK',
                highlights: [
                  'Primary EMEA escalation contact with 95% client satisfaction. Managed advertising campaigns at scale.',
                ],
              },
              {
                period: 'Aug 2012 - Aug 2013',
                role: 'Technical Solutions Engineer',
                company: 'Criteo',
                companyNote: 'IPO 2013',
                location: 'London, UK',
                highlights: [
                  'Onboarded 500+ mid-market clients, expanding Criteo\u2019s EU customer base by 67%.',
                ],
              },
            ].map((item, i) => (
              <div key={i} className="relative pl-7 pb-8 last:pb-0">
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-gray-200 bg-white z-10" />
                <p className="text-xs text-gray-400 mb-1">{item.period} &middot; {item.location}</p>
                <p className="text-sm font-semibold text-gray-900">{item.role}</p>
                <p className="text-sm text-brand-600 mb-2">
                  {item.company}
                  {item.companyNote && <span className="text-gray-400 font-normal"> &middot; {item.companyNote}</span>}
                </p>
                <ul className="space-y-1.5">
                  {item.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-gray-500 leading-relaxed flex">
                      <span className="text-gray-300 mr-2 mt-0.5 shrink-0">&bull;</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold text-gray-900 pt-6">Education</h2>

          <div className="not-prose space-y-0 relative ml-1">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-100" />

            <div className="relative pl-7 pb-6">
              <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-gray-200 bg-white z-10" />
              <p className="text-xs text-gray-400 mb-1">2022 - 2024 &middot; Palo Alto, CA</p>
              <p className="text-sm font-semibold text-gray-900">Stanford Continuing Studies</p>
              <ul className="space-y-1 mt-1.5">
                {[
                  'AI Bootcamp for Product and Business Managers',
                  'Statistics for AI, Machine Learning, and Data Science',
                  'Accelerate Your Startup Idea',
                  'Building Multi-Sided Platform Marketplaces',
                ].map((c, i) => (
                  <li key={i} className="text-sm text-gray-500 flex">
                    <span className="text-gray-300 mr-2 shrink-0">&bull;</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative pl-7 pb-0">
              <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-gray-200 bg-white z-10" />
              <p className="text-xs text-gray-400 mb-1">2004 - 2012 &middot; Munich, Germany</p>
              <p className="text-sm font-semibold text-gray-900">M.Sc. Computer Science (Dipl. Inf.)</p>
              <p className="text-sm text-brand-600">Technical University Munich</p>
              <p className="text-sm text-gray-500 mt-1">Thesis: Mobile Device Security with OS-Level Virtualization (Fraunhofer AISEC)</p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 pt-8">Side Projects</h2>

          <div className="not-prose space-y-0 relative ml-1">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-100" />

            {[
              {
                period: '2026 - Present',
                role: 'Indie Developer',
                company: 'CalRun & FocusRep',
                highlights: ['Designing and shipping iOS apps with SwiftUI, MapKit, StoreKit 2, and real-time transit data.'],
              },
              {
                period: '2025 - Present',
                role: 'Founder',
                company: 'Heart Fusion Camp',
                highlights: ['Burning Man theme camp building interactive LED art installations powered by custom ESP32 firmware.'],
              },
            ].map((item, i) => (
              <div key={i} className="relative pl-7 pb-6 last:pb-0">
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-gray-200 bg-white z-10" />
                <p className="text-xs text-gray-400 mb-1">{item.period}</p>
                <p className="text-sm font-semibold text-gray-900">{item.role}</p>
                <p className="text-sm text-brand-600 mb-1">{item.company}</p>
                <p className="text-sm text-gray-500">{item.highlights[0]}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-400 pt-4">
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
