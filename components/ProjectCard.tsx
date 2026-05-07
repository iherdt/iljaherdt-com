interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  href?: string
  featured?: boolean
  status?: string
  icon?: string
}

export default function ProjectCard({ title, description, tags, href, featured, status, icon }: ProjectCardProps) {
  const Wrapper = href ? 'a' : 'div'
  const wrapperProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <Wrapper
      {...(wrapperProps as any)}
      className={`block rounded-2xl border transition-all duration-200 ${
        featured
          ? 'border-brand-200 bg-gradient-to-br from-brand-50 to-white shadow-sm hover:shadow-md hover:border-brand-300'
          : 'border-gray-100 bg-white hover:shadow-md hover:border-gray-200'
      } ${href ? 'cursor-pointer' : ''}`}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            {icon && <span className="text-2xl">{icon}</span>}
            <h3 className={`font-semibold ${featured ? 'text-lg' : 'text-base'} text-gray-900`}>
              {title}
            </h3>
          </div>
          {status && (
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
              status === 'Live' ? 'bg-green-100 text-green-700' :
              status === 'Beta' ? 'bg-amber-100 text-amber-700' :
              'bg-gray-100 text-gray-600'
            }`}>
              {status}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-xs font-medium px-2 py-1 rounded-md bg-gray-50 text-gray-500 border border-gray-100">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}
