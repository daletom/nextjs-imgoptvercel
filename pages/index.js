import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingLg}>
        <h1 className="title">
          Image Optimization with Next.js 10 deployed using Vercel
        </h1>
        <h4>
          This is a demo website showing how to optimize images with Next.js 10.  You can find more about this article on my <Link href="https://dev.to/daletom/optimizing-images-with-next-js-vercel-3m3n"><a>Dev.to blog.</a></Link>
        </h4>
        <h3 className="title">
        If you would like to see a copy of these images without being optimized, click <Link href="/unopt"><a>here.</a></Link>
        </h3>
      </section>
      <div class="row">
        <div class="column">
          <Image
            src="/images/beach_zeek.jpg"
            alt="Image"
            width={1200}
            height={1600}
            loading="lazy"
            quality={35}
            sizes="(max-width: 600px) 100vw, (max-width: 1023px) 48vw, 23vw"
          />
          <Image
            src="/images/disney.jpg"
            alt="Image"
            width={1600}
            height={1200}
            loading="lazy"
            quality={35}
            sizes="(max-width: 600px) 100vw, (max-width: 1023px) 48vw, 23vw"
          />
        </div>
        <div class="column">
          <Image
              src="/images/terrarium.jpg"
              alt="Image"
              width={1200}
              height={1600}
              loading="lazy"
              quality={35}
              sizes="(max-width: 600px) 100vw, (max-width: 1023px) 48vw, 23vw"
            />
            <Image
              src="/images/geiranger.jpg"
              alt="Image"
              width={1600}
              height={1200}
              loading="lazy"
              quality={35}
              sizes="(max-width: 600px) 100vw, (max-width: 1023px) 48vw, 23vw"
            />
        </div>
        <div class="column">
          <Image
              src="/images/zeek_yellow.jpg"
              alt="Image"
              width={1200}
              height={1600}
              loading="lazy"
              quality={35}
              sizes="(max-width: 600px) 100vw, (max-width: 1023px) 48vw, 23vw"
            />
            <Image
              src="/images/zeekgraffiti.jpg"
              alt="Image"
              width={1600}
              height={1200}
              loading="lazy"
              quality={35}
              sizes="(max-width: 600px) 100vw, (max-width: 1023px) 48vw, 23vw"
            />
        </div>
        <div class="column">
          <Image
              src="/images/denmark.jpg"
              alt="Image"
              width={1200}
              height={1600}
              loading="lazy"
              quality={35}
              sizes="(max-width: 600px) 100vw, (max-width: 1023px) 48vw, 23vw"
            />
            <Image
              src="/images/kids_skateboard.jpg"
              alt="Image"
              width={1600}
              height={1200}
              loading="lazy"
              quality={35}
              sizes="(max-width: 600px) 100vw, (max-width: 1023px) 48vw, 23vw"
            />
        </div>
      </div>
    </Layout>
  )
}