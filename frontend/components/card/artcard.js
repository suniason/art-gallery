import { useRouter } from 'next/router'
import Image from 'next/image'

const ArtCard = ({ image, name, slug, artist, username }) => {
  const router = useRouter()
  const handleCardClicked = (e) => {
    e.preventDefault()
    router.push(`/artwork/${slug}`)
  }

  const handleNameClicked = (e) => {
    e.preventDefault()
    e.stopPropagation()
    router.push(`/artist/${username}`)
  }

  return (
    <div
      className="h-full relative cursor-pointer overflow-hidden group"
      onClick={(e) => handleCardClicked(e)}
    >
      <Image
        className="h-full w-full"
        src={image}
        alt={name}
        width={200}
        height={200}
      />
      <div className="absolute z-10 bottom-0 left-0 bg-black/50 text-white w-full translate-y-full transition-all group-hover:translate-y-0">
        <div className="p-2">
          <div className="font-semibold text-base">{name}</div>
          <div className="text-xs">
            by{' '}
            <span
              onClick={(e) => handleNameClicked(e)}
              className=" cursor-pointer hover:underline underline-white"
            >
              {artist}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtCard
