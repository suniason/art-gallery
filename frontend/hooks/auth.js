import { checkToken, getUser } from '@/utils/session'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const checkAuth = (route) => {
  useEffect(() => {
    if (!checkToken()) {
      route.replace('/auth/login')
    }
  }, [])
}

const checkArtworkUser = (id) => {
  return id !== JSON.stringify(getUser().id)
}

const checkGuest = (route) => {
  useEffect(() => {
    if (checkToken()) {
      route.push('/gallery')
    }
  }, [])
}

export { checkAuth, checkGuest, checkArtworkUser }
