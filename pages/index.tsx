'use client'

import NavBar from '../components/NavBar'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen scroll-smooth">
      <NavBar />

      {/* Hero Section */}
      <div className="relative w-full h-[40vh] bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Welcome to Your Site
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-6">
            A brief tagline describing what this site is about.
          </p>
          <Link
            href="/about"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            LEARN MORE
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          About This Project
        </h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
          Replace this with a description of your project or organization.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  )
}
