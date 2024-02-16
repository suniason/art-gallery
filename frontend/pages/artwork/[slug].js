import config from '@/config/config'
import { checkAuth } from '@/hooks/auth'
import useGet from '@/hooks/useget'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const ArtworkPage = (props) => {
  checkAuth()
  const [artwork, setArtwork] = useState()
  const [fetchData, data, loading] = useGet(
    `${config.beport}/api/artworks/${props.slug}`,
    true
  )

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (data) {
      setArtwork(data)
    }
  }, [data])

  return (
    <>
      <Head>
        <title>{`Art Gallery | ${artwork?.name ?? ''}`}</title>
      </Head>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="grid grid-cols-2">
            <div className="p-10 flex justify-center">
              <Image
                src={artwork?.image}
                alt={artwork?.slug}
                width={300}
                height={300}
                className=" w-3/4"
              />
            </div>
            <div className="p-10">
              <div className="text-2xl font-bold py-1">{artwork?.name}</div>
              <div className="text-neutral-300">
                by{' '}
                <span className="font-semibold underline">
                  {artwork?.user.name}
                </span>
              </div>
              <div className="text-neutral-300 italic">
                Uploaded on{' '}
                {new Date(artwork?.created_at).toLocaleString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <div className="my-5 text-lg">{artwork?.description}</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export function getServerSideProps(context) {
  const { params } = context
  const { slug } = params

  return { props: { slug: slug } }
}

export default ArtworkPage
