import { createContext, useState } from 'react'

export const AuthContext = createContext()

function AuthContextProvider({ children }) {
  const [userRole, setUserRole] = useState('auth')

  return (
    <AuthContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
