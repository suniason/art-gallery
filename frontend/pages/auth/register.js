import RegisterForm from '@/components/form/registerform'
import config from '@/config/config'
import { checkGuest } from '@/hooks/auth'
import usePost from '@/hooks/usepost'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const RegisterPage = () => {
  const route = useRouter()
  checkGuest(route)
  const [credentials, setCredentials] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    profile: '',
    contact: '',
    photo: '',
  })

  const [usePostHandler, data, loading] = usePost(`${config.beport}/api/users`)

  const handleRegister = async () => {
    await usePostHandler(credentials, true)
  }

  useEffect(() => {
    if (data) route.push('/auth/login')
  }, [data])

  return (
    <>
      <Head>
        <title>Art Gallery | Register</title>
      </Head>
      <div>
        <RegisterForm
          handleRegister={handleRegister}
          credentials={credentials}
          setCredentials={setCredentials}
          loading={loading}
        />
      </div>
    </>
  )
}

export default RegisterPage
