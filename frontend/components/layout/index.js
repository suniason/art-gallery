import '@uploadthing/react/styles.css'
import Link from 'next/link'
import LayoutOption from './option'
import ModeButton from '../mode/modebutton'
import FormButton from '../form/input/formbutton'
import config from '@/config/config'
import { checkToken, removeToken, removeUser } from '@/utils/session'
import { useRouter } from 'next/router'
import useLogoutPost from '@/hooks/usepostlogout'
import { useContext, useEffect } from 'react'
import { AuthContext } from '@/context/authcontext'

const Layout = ({ children }) => {
  const router = useRouter()
  const { userRole, setUserRole } = useContext(AuthContext)

  useEffect(() => {
    if (checkToken()) {
      setUserRole('auth')
    } else {
      setUserRole('guest')
    }
  }, [userRole])

  const options = [
    { name: 'Log In', path: '/auth/login', access: 'guest' },
    { name: 'Register', path: '/auth/register', access: 'guest' },
    { name: 'Artwork Gallery', path: '/gallery', access: 'auth' },
    { name: 'My Profile', path: '/my-profile', access: 'auth' },
  ]

  const filteredOptions = options.filter((option) => {
    if (userRole === 'auth') {
      return option.access !== 'guest' || option.access === ''
    } else {
      return option.access === 'guest' || option.access === ''
    }
  })

  const [usePostHandler, , loading] = useLogoutPost(
    `${config.beport}/api/logout`,
    true
  )
  async function handleLogout() {
    await usePostHandler()
    removeToken()
    removeUser()
    setUserRole('guest')
    router.replace('/auth/login')
  }

  return (
    <div className={'text-text'}>
      <div className="flex justify-between p-4">
        <div className="text-2xl font-bold">
          <Link href={'/'}>Art Gallery</Link>
        </div>
        <ul className="flex space-x-4">
          {filteredOptions.map((option, index) => (
            <LayoutOption key={index} name={option.name} path={option.path} />
          ))}
          {userRole === 'auth' && (
            <li>
              <FormButton
                handleClick={handleLogout}
                name="Logout"
                isLoading={loading}
              />
            </li>
          )}
          <li>
            <ModeButton />
          </li>
        </ul>
      </div>
      {children}
    </div>
  )
}

export default Layout
