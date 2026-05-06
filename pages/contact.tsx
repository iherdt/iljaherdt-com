'use client'

import { useState } from 'react'
import NavBar from '../components/NavBar'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(e.target as HTMLFormElement)
      })

      if (res.ok) {
        setFormData({ name: '', email: '', message: '' })
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavBar />
      <div className="max-w-xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact</h1>
        <p className="text-center text-gray-700 mb-8">
          Have questions? Get in touch using the form below.
        </p>

        {status === 'success' && (
          <p className="text-green-600 font-semibold text-center mb-4">
            Thanks for reaching out! We'll be in touch soon.
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-600 font-semibold text-center mb-4">
            Something went wrong. Please try again.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-black"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-black"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-black text-white py-2 rounded-md text-lg hover:bg-gray-800 transition disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : 'SEND'}
          </button>
        </form>
      </div>
    </div>
  )
}
