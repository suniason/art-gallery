import AddArtworkForm from '@/components/form/addartworkform'
import config from '@/config/config'
import { checkAuth } from '@/hooks/auth'
import usePost from '@/hooks/usepost'
import { useState } from 'react'

const AddArtwork = () => {
  checkAuth()
  const [credentials, setCredentials] = useState({
    name: '',
    description: '',
    image: '',
  })

  const [usePostHandler, data, loading] = usePost(
    `${config.beport}/api/artworks`
  )

  async function handleAddArtwork() {
    await usePostHandler(credentials, true)
  }

  return (
    <div>
      <header>
        <div>Add New Artwork</div>
      </header>
      <div>
        <AddArtworkForm
          handleAddArtwork={handleAddArtwork}
          credentials={credentials}
          setCredentials={setCredentials}
          loading={loading}
        />
      </div>
    </div>
  )
}

export default AddArtwork
