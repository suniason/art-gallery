import LoginForm from '@/components/form/loginform'
import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import usePost from '@/hooks/usepost'
import { storeToken, storeUser } from '@/utils/session'
import config from '@/config/config'
import { checkGuest } from '@/hooks/auth'
import { AuthContext } from '@/context/authcontext'

const LoginPage = () => {
  checkGuest()
  const { setUserRole } = useContext(AuthContext)

  const router = useRouter()
  const [credentials, setCredentials] = useState({ email: '', password: '' })

  const [usePostHandler, data, loading] = usePost(`${config.beport}/api/login`)
  async function handleLogin() {
    await usePostHandler(credentials)
  }

  useEffect(() => {
    if (data) {
      storeToken(data.token)
      storeUser(data.user)
      setUserRole('auth')
      router.replace('/gallery')
    }
  }, [data])

  return (
    <>
      <Head>
        <title>Art Gallery | Log In</title>
      </Head>
      <div>
        <LoginForm
          handleLogin={handleLogin}
          credentials={credentials}
          setCredentials={setCredentials}
          loading={loading}
        />
      </div>
    </>
  )
}

export default LoginPage
