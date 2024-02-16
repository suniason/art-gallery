import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Art Gallery | Homepage</title>
      </Head>
      <main className="my-10">
        <Image
          src={'/image/3.svg'}
          alt=""
          width={350}
          height={350}
          className="w-full"
        />
        <div className="grid grid-cols-2">
          <div className="p-10 flex flex-col justify-center">
            <h1 className="text-4xl font-bold">
              Welcome to Our Art Gallery App
            </h1>
            <p className="text-lg text-text my-8">
              Discover and explore a world of creativity. Browse through our
              diverse collection of art pieces.
            </p>
          </div>
          <div className="flex  items-center justify-center">
            <Image
              src={'/image/4.svg'}
              alt=""
              width={350}
              height={350}
              className="w-full"
            />
          </div>
        </div>
        <div className="w-full">
          <ul className="p-10 my-10">
            <li className="grid grid-cols-2">
              <div className="w-full h-full p-5 flex flex-col justify-center">
                <div className="text-2xl font-bold">Upload and Showcase:</div>
                <div className="text-xl m-10">
                  Easily upload your artwork and create a stunning portfolio
                  that reflects your artistic journey. Customize your profile to
                  make it uniquely yours.
                </div>
              </div>
              <div className="order-first flex w-full justify-center items-center">
                <Image src={'/image/1.svg'} alt="" width={350} height={350} />
              </div>
            </li>
            <li className="grid grid-cols-2">
              <div className="w-full h-full p-5 flex flex-col justify-center">
                <div className="text-2xl font-bold">Discover and Connect:</div>
                <div className="text-xl m-10">
                  Explore a diverse range of artwork from talented artists
                  across the globe. Connect with fellow creatives, share
                  insights, and inspire each other to reach new heights.
                </div>
              </div>
              <div className="flex w-full justify-center items-center">
                <Image src={'/image/2.svg'} alt="" width={350} height={350} />
              </div>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}
