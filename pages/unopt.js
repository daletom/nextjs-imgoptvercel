import Link from 'next/link'

export default function unopt() {
    return (
        <>
        <section>
          <p>Tom Dale</p>
          <h1 className="title">
          Back <Link href="/"><a>Home</a></Link>
          </h1>
          <h2>
            This is an example of serving images locally on a Next.js project and deploying them on Vercel without any image optimization. Although they all look smaller, these imageas are about 20 MB just for these 8 images.
          </h2>
        </section>
        <div class="row">
          <div class="column">
            <img
              src="/images/beach_zeek.jpg"
              alt="Image"
            />
            <img
              src="/images/disney.jpg"
              alt="Image"
            />
          </div>
          <div class="column">
            <img
                src="/images/terrarium.jpg"
                alt="Image"
              />
              <img
                src="/images/geiranger.jpg"
                alt="Image"
              />
          </div>
          <div class="column">
            <img
                src="/images/zeek_yellow.jpg"
                alt="Image"
              />
              <img
                src="/images/zeekgraffiti.jpg"
                alt="Image"
              />
          </div>
          <div class="column">
            <img
                src="/images/denmark.jpg"
                alt="Image"
              />
              <img
                src="/images/kids_skateboard.jpg"
                alt="Image"
              />
          </div>
        </div>
        </>
    )
  }