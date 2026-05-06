import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [mouseActive, setMouseActive] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isOpen && !mouseActive) {
      timer = setTimeout(() => {
        if (!isHovered) setIsOpen(false)
      }, 2000)
    }
    return () => clearTimeout(timer)
  }, [isOpen, mouseActive, isHovered])

  return (
    <nav className="bg-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight hover:opacity-80 transition"
        >
          Site Name
        </Link>

        {/* Desktop Links */}
        <div className="space-x-6 text-lg font-bold hidden md:flex justify-end">
          <Link href="/" className="hover:underline transition">Home</Link>
          <Link href="/about" className="hover:underline transition">About</Link>
          <Link href="/contact" className="hover:underline transition">Contact</Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-6 h-0.5 bg-black transition-transform"></span>
          <span className="block w-6 h-0.5 bg-black transition-transform"></span>
          <span className="block w-6 h-0.5 bg-black transition-transform"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden flex flex-col items-end space-y-3 mt-4 px-6 text-lg font-bold bg-white shadow-lg rounded-lg transition-all duration-300"
          onMouseEnter={() => { setIsHovered(true); setMouseActive(true) }}
          onMouseLeave={() => { setIsHovered(false); setMouseActive(false) }}
          onMouseMove={() => setMouseActive(true)}
        >
          <Link href="/" className="hover:underline transition">Home</Link>
          <Link href="/about" className="hover:underline transition">About</Link>
          <Link href="/contact" className="hover:underline transition">Contact</Link>
        </div>
      )}
    </nav>
  )
}
