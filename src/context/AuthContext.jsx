import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')
    return token ? { token, user: user ? JSON.parse(user) : null } : null
  })

  useEffect(() => {
    if (auth && auth.token) {
      localStorage.setItem('token', auth.token)
      if (auth.user) localStorage.setItem('user', JSON.stringify(auth.user))
    } else {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    }
  }, [auth])

  const login = (token, user = null) => setAuth({ token, user })
  const logout = () => setAuth(null)

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthContext
