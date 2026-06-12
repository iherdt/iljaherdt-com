import Link from 'next/link'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import { getAllPosts, PostMeta } from '../lib/posts'

interface HomeProps {
  recentPosts: PostMeta[]
}

export default function HomePage({ recentPosts }: HomeProps) {
  return (
    <Layout>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-brand-600 font-medium mb-3">Hi, I&apos;m Ilja</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Builder,<br />maker, and commute optimizer.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              I build tools that solve real problems. From iOS apps that make daily commutes
              effortless to data integration platforms that connect the world&apos;s systems.
              Based in the San Francisco Bay Area.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className="inline-flex items-center px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition">
                View Projects
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="/about" className="inline-flex items-center px-5 py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition">
                About Me
              </Link>
            </div>
          </div>
          <img
            src="/profile.jpg"
            alt="Ilja Herdt"
            className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl object-cover shadow-sm shrink-0"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6"><hr className="border-gray-100" /></div>

      {/* Featured Project */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Projects</h2>
          <Link href="/projects" className="text-sm text-brand-600 font-medium hover:text-brand-700 transition">
            All projects &rarr;
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <ProjectCard
            title="Lanekeeper"
            icon="🚦"
            description="Multi-user AI agent orchestration with per-user isolation, one-shot consent onboarding, and capped per-user memory with compaction. A resident orchestrator spawns user-bound child agents on demand or on a schedule. Built on Arcade and Claude."
            tags={['Python', 'Claude', 'Arcade', 'OAuth', 'Agents']}
            href="https://github.com/iherdt/lanekeeper"
            featured
            status="Active"
          />
          <ProjectCard
            title="CalRun"
            iconSrc="/calrun-icon.png"
            description="A Caltrain schedule and commute companion for daily riders. Live train tracking on an interactive map, pinned routes with departure and arrival reminders, commute stats, and service alerts. Built with SwiftUI, MapKit, and real-time GTFS data."
            tags={['Swift', 'SwiftUI', 'MapKit', 'StoreKit 2', 'GTFS', 'iOS']}
            href="/projects/calrun"
            internal
            featured
            status="Live"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6"><hr className="border-gray-100" /></div>

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <>
          <div className="max-w-5xl mx-auto px-6"><hr className="border-gray-100" /></div>
          <section className="max-w-5xl mx-auto px-6 py-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Recent Writing</h2>
              <Link href="/blog" className="text-sm text-brand-600 font-medium hover:text-brand-700 transition">
                All posts &rarr;
              </Link>
            </div>
            <div className="space-y-1">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block group py-4 border-b border-gray-50 last:border-0"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-medium text-gray-900 group-hover:text-brand-600 transition">{post.title}</h3>
                    <time className="text-xs text-gray-400 whitespace-nowrap mt-0.5 shrink-0">
                      {new Date(post.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </time>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </>
      )}

      {/* What I Do */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">What I Work On</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center">
              <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="font-semibold text-gray-900">iOS Apps</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Native Swift and SwiftUI apps with polished UX, from concept to App Store.
            </p>
          </div>
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center">
              <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>
            </div>
            <h3 className="font-semibold text-gray-900">Data Integration</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Connecting systems, building connectors, and making data flow where it needs to go.
            </p>
          </div>
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center">
              <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="font-semibold text-gray-900">Automation</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Scripts, agents, and workflows that eliminate busywork and keep things moving.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const recentPosts = getAllPosts().slice(0, 5)
  return { props: { recentPosts } }
}
