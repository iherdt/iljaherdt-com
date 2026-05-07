import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { getAllSlugs, getPostBySlug } from '../../lib/posts'

interface PostProps {
  post: {
    slug: string
    title: string
    date: string
    excerpt: string
    tags: string[]
    contentHtml: string
  }
}

export default function PostPage({ post }: PostProps) {
  return (
    <Layout title={post.title} description={post.excerpt}>
      <article className="max-w-3xl mx-auto px-6 pt-16 pb-16">
        <Link href="/blog" className="inline-flex items-center text-sm text-brand-600 hover:text-brand-700 mb-8 transition">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Blog
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">{post.title}</h1>
          <div className="flex items-center gap-3">
            <time className="text-sm text-gray-400">{formatDate(post.date)}</time>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded bg-gray-50 text-gray-400 border border-gray-100">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        <div
          className="prose prose-gray max-w-none prose-headings:font-semibold prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-brand-600 prose-a:font-medium hover:prose-a:text-brand-700 prose-strong:text-gray-900 prose-code:text-sm prose-code:bg-gray-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </Layout>
  )
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllSlugs()
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params!.slug as string)
  return { props: { post } }
}
