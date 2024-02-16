import ArtCard from '@/components/card/artcard'
import config from '@/config/config'
import { checkAuth } from '@/hooks/auth'
import useGet from '@/hooks/useget'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const ArtworkGalleryPage = () => {
  const route = useRouter()
  checkAuth(route)
  const [fetchData, data, loading] = useGet(
    `${config.beport}/api/artworks`,
    true
  )

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Head>
        <title>Art Gallery | Artworks</title>
      </Head>
      <div>
        <header className="py-20 font-bold">
          <div className="text-text">
            <div className="text-4xl my-2 font-bold">Explore</div>
            <div className="my-2 text-xl">
              Unveil the spectrum of artistic wonders with a world of
              masterpieces.
            </div>
          </div>
          <Link href="/artwork/add-new">
            <div className="w-fit text-primary bg-accent px-10 py-2">
              Add New Artwork
            </div>
          </Link>
        </header>
        {loading ? (
          <p>Loading..</p>
        ) : (
          <div className="flex h-40 relative gap-5 justify-stretch">
            {data?.map((val, index) => (
              <ArtCard
                key={index}
                image={val.image}
                name={val.name}
                slug={val.slug}
                username={val.user.username ?? ''}
                artist={val.user.name ?? ''}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default ArtworkGalleryPage
