export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <span>&copy; {new Date().getFullYear()} Ilja Herdt</span>
        <div className="flex items-center space-x-6">
          <a href="https://github.com/iherdt" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition">GitHub</a>
          <a href="https://linkedin.com/in/iljaherdt" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition">LinkedIn</a>
          <a href="mailto:i.herdt@gmail.com" className="hover:text-gray-900 transition">Email</a>
        </div>
      </div>
    </footer>
  )
}
