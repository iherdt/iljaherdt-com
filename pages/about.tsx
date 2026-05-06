import NavBar from '../components/NavBar'

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <NavBar />
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">About</h1>
        <p className="mb-4 text-lg">
          Replace this with information about your project or organization.
        </p>
        <p className="mb-4 text-lg">
          Add more paragraphs, images, or sections as needed.
        </p>
      </div>
    </div>
  )
}
