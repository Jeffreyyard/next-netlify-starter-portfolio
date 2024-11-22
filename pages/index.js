import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Jeffrey Yard!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome!" />
        <p className="description">
          Recent Work
        </p>
        <p className="description">
          Photography
        </p>
        <p className="description">
          PaperMaking, Basketweaving, Tinkering
        </p>
        <p className="description">
          Painting, Surface Work
        </p>
        <p className="description">
          Back to start or Do it again <code><a href="https://yard.studio/">Yard Studio & Past Projects</a></code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
