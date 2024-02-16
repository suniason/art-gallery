import { useRouter } from 'next/router'
import { useState } from 'react'
import config from '@/config/config'
import usePatch from './usepatch'
import useDelete from './usedelete'

const useEditArtwork = () => {
  const router = useRouter()

  const [isDisabled, setIsDisabled] = useState(true)
  const [credentials, setCredentials] = useState({
    name: '',
    slug: '',
    image: '',
    description: '',
  })
  const [prevCredentials, setPrevCredentials] = useState({
    name: '',
    slug: '',
    image: '',
    description: '',
  })
  const [usePatchHandler, patching] = usePatch(
    `${config.beport}/api/artworks/${credentials.slug}`
  )

  const [useDeleteHandler, deleting] = useDelete(
    `${config.beport}/api/artworks/${credentials.slug}`
  )

  function handleEdit() {
    setIsDisabled(false)
  }
  async function handleSave() {
    await usePatchHandler(credentials, true)
    router.reload()
  }
  async function handleDelete() {
    await useDeleteHandler(true)
    router.replace('/my-profile')
  }

  function handleCancel() {
    setIsDisabled(true)
    setCredentials(prevCredentials)
  }

  return {
    isDisabled,
    setIsDisabled,
    setPrevCredentials,
    credentials,
    setCredentials,
    handleEdit,
    handleSave,
    handleDelete,
    handleCancel,
    deleting,
    patching,
  }
}

export default useEditArtwork
