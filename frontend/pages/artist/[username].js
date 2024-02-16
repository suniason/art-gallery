import ArtCard from '@/components/card/artcard'
import config from '@/config/config'
import { checkAuth } from '@/hooks/auth'
import useGet from '@/hooks/useget'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const ArtistPage = (props) => {
  const route = useRouter()
  checkAuth(route)
  const [fetchData, data, loading] = useGet(
    `${config.beport}/api/artist/${props.username}`,
    true
  )

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Head>
        <title>{`Art Gallery | ${data?.name ?? ''}`}</title>
      </Head>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="grid grid-cols-2 mb-16">
            <div className="flex w-full justify-center items-center">
              <div className="p-5 relative w-52 h-52 overflow-hidden flex items-center rounded-full bg-black">
                <Image
                  className="w-52"
                  src={data?.photo}
                  alt={data?.name}
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div className="p-5">
              <div className="text-3xl font-bold">{data?.name}</div>
              <div className="font-semibold text-lg">{data?.username}</div>
              <div className="text-neutral-400">
                Email:{' '}
                <a href={`mailto:${data?.email}`} className="italic">
                  {data?.email}
                </a>
              </div>
              <div className="text-neutral-400">
                Contact Number: <span className="italic">{data?.contact}</span>
              </div>
              <div className="my-3">
                <div className="font-bold text-xl">Profile</div>
                <div className="text-lg">{data?.profile}</div>
              </div>
            </div>
          </div>
          <hr className=" border-t-2 border-black/70" />
          <div className="mt-16">
            <div>List of Artworks</div>
            {data && (
              <div className="flex h-52 relative gap-5 justify-stretch">
                {data?.artwork.map((val, index) => (
                  <ArtCard
                    key={index}
                    image={val.image}
                    name={val.name}
                    slug={val.slug}
                    username={data.username ?? ''}
                    artist={data.name ?? ''}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export function getServerSideProps(context) {
  const { params } = context
  const { username } = params

  return { props: { username: username } }
}

export default ArtistPage
