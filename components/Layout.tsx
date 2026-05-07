import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
}

export default function Layout({ children, title = 'Ilja Herdt', description = 'Builder, maker, and commute optimizer.' }: LayoutProps) {
  const fullTitle = title === 'Ilja Herdt' ? title : `${title} | Ilja Herdt`

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col bg-white">
        <NavBar />
        <main className="flex-1 pt-[73px]">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
