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

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/img/gallery-images/paper1.jpg"
          alt=""
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/back21-01.jpg"
              alt="back"
              width={20}
              height={20}
            />
            Deploy nowed
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      
        
        <Header title="Welcome!" />
        <image
          src='.../img/gallery-images/back21-01.jpg'>
        </image>
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
        <p className="description">
          Past past past work, from the well <code><image src='./img/gallery-images/paper1.jpg' width="20" height="20"></image></code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
