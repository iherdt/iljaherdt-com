import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

export default function ProjectsPage() {
  return (
    <Layout title="Projects" description="Apps, tools, and open source projects by Ilja Herdt.">
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Projects</h1>
        <p className="text-gray-600 max-w-xl">
          A collection of things I&apos;ve built, from shipped apps to hardware experiments.
        </p>
      </section>

      {/* Apps */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Apps</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          <ProjectCard
            title="CalRun"
            icon="🚆"
            description="Caltrain schedule companion with live train tracking on an interactive map, pinned routes, departure and arrival reminders, commute stats, and service alerts. Built for daily riders who want to know exactly when to leave."
            tags={['Swift', 'SwiftUI', 'MapKit', 'StoreKit 2', 'GTFS']}
            href="https://apps.apple.com/app/calrun/id6759998408"
            featured
            status="Live"
          />
          <ProjectCard
            title="FocusRep"
            icon="🏋️"
            description="Workout tracking app focused on progressive overload. Log sets, track personal records, and visualize strength gains over time."
            tags={['Swift', 'SwiftUI', 'CoreData', 'HealthKit']}
            status="Beta"
          />
        </div>
      </section>

      {/* Hardware & Creative */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Hardware &amp; Creative</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          <ProjectCard
            title="WLED Spectra"
            icon="💡"
            description="Custom firmware for ESP32-based LED controllers. Audio-reactive lighting effects synced to music for live events and installations."
            tags={['C++', 'ESP32', 'WS2812B', 'FFT']}
            href="https://github.com/iherdt/WLED-spectra"
          />
          <ProjectCard
            title="JazzLights"
            icon="🎵"
            description="Collaborative LED art project for Burning Man and other events. Synchronized light patterns across distributed controllers."
            tags={['C++', 'ESP32', 'Networking', 'Art']}
            href="https://github.com/iherdt/jazzlights"
          />
        </div>
      </section>

      {/* Tools & Open Source */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Open Source</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          <ProjectCard
            title="Airbyte Contributions"
            icon="🔌"
            description="Connector development and data integration tooling for the Airbyte open source ecosystem."
            tags={['Python', 'Connectors', 'ELT', 'Data']}
            href="https://github.com/iherdt/airbyte"
          />
          <ProjectCard
            title="herdt.top"
            icon="🌐"
            description="Personal link hub and domain experiments."
            tags={['Web', 'DNS']}
            href="https://github.com/iherdt/herdt-top"
          />
        </div>
      </section>
    </Layout>
  )
}
