import Link from 'next/link'
import { GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import { getAllPosts, PostMeta } from '../../lib/posts'

interface BlogProps {
  posts: PostMeta[]
}

export default function BlogPage({ posts }: BlogProps) {
  return (
    <Layout title="Blog" description="Thoughts on building software, hardware, and things in between.">
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Blog</h1>
        <p className="text-gray-600">
          Thoughts on building software, hardware, and things in between.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-16">
        {posts.length === 0 ? (
          <p className="text-gray-400 text-sm">No posts yet. Check back soon.</p>
        ) : (
          <div className="space-y-1">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group py-5 border-b border-gray-50 last:border-0"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h2 className="font-semibold text-gray-900 group-hover:text-brand-600 transition">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">{post.excerpt}</p>
                    )}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {post.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-0.5 rounded bg-gray-50 text-gray-400 border border-gray-100">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <time className="text-xs text-gray-400 whitespace-nowrap mt-1 shrink-0">
                    {formatDate(post.date)}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </Layout>
  )
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts()
  return { props: { posts } }
}
