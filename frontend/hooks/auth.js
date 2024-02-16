import { checkToken } from '@/utils/session'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const checkAuth = () => {
  const route = useRouter()
  useEffect(() => {
    if (!checkToken()) {
      route.push('/auth/login')
    }
  }, [])
}

const checkGuest = () => {
  const route = useRouter()
  useEffect(() => {
    if (checkToken()) {
      route.push('/gallery')
    }
  }, [])
}

export { checkAuth, checkGuest }
