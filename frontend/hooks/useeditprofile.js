import { useRouter } from 'next/router'
import { useState } from 'react'
import config from '@/config/config'
import usePatch from './usepatch'

const useEditProfile = () => {
  const router = useRouter()

  const [isDisabled, setIsDisabled] = useState(true)
  const [prevCredentials, setPrevCredentials] = useState({
    name: '',
    username: '',
    profile: '',
    contact: '',
    photo: '',
  })
  const [credentials, setCredentials] = useState({
    name: '',
    username: '',
    profile: '',
    contact: '',
    photo: '',
  })
  const [usePatchHandler, loading] = usePatch(
    `${config.beport}/api/users/${prevCredentials.username}`
  )

  function handleEdit() {
    setIsDisabled(false)
  }
  async function handleSave() {
    await usePatchHandler(credentials, true)
    router.reload()
  }

  function handleCancel() {
    setIsDisabled(true)
    setCredentials(prevCredentials)
  }

  return {
    isDisabled,
    setIsDisabled,
    prevCredentials,
    setPrevCredentials,
    credentials,
    setCredentials,
    handleEdit,
    handleSave,
    handleCancel,
    loading,
  }
}

export default useEditProfile
