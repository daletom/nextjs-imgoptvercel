This is a example template for optimizing images with [Next.js version 10](https://nextjs.org/blog/next-10#images-on-the-web).

You can read more about this on my [Dev.to Blog](https://dev.to/daletom/optimizing-images-with-next-js-vercel-3m3n).

## Adding Image Optimization to a Next.js Project

Instead of using an img tag, you can drop in <Image> instead.  All you have to do is 
```
import Image from 'next/Image'
```
then replace the img tag with Image tag for a local image in the public folder and add a width and height.
```
<Image
  src="/images/terrarium.jpg"
  alt="Terrarium"
  width={1600}
  height={1200}
  loading="lazy"
  quality={35}
  sizes="(max-width: 600px) 100vw, (max-width: 1023px) 48vw, 23vw"
/>
```

## Cloning this Project

```
npx create-next-app nextjs-imgopt --use-npm --example "https://github.com/daletom/nextjs-imgblog"
```
then run a 
```
npm install
```
to install the dependencies. The go into the project
```
cd nextjs-imgopt
```
and run the site in development
```
npm run dev
```
