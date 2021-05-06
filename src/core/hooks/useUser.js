import { useEffect, useCallback, useState } from 'react'
import Router from 'next/router'
import decode from 'jwt-decode'

import Cookies from 'utils/cookie'

const TOKEN_KEY = 'token'
const USER_KEY = 'user'

const getUser = () => {
  return Cookies.get(USER_KEY)
}

const getToken = () => {
  return Cookies.get(TOKEN_KEY)
}

const useUser = ({ redirectTo, redirectIfFound }) => {
  const [user, setUser] = useState(getUser)

  const hasUser = !!user

  const set = useCallback((jwt) => {
    const decoded = decode(jwt)

    Cookies.set(TOKEN_KEY, jwt)
    Cookies.set(USER_KEY, decoded)
    setUser(decoded)
  }, [])

  const revoke = useCallback(() => {
    Cookies.remove(TOKEN_KEY)
    Cookies.remove(USER_KEY)
  }, [])

  useEffect(() => {
    // if (!redirectTo) return
    if ((redirectTo && !redirectIfFound && !hasUser) || (redirectIfFound && hasUser))
      Router.push(redirectTo)
  }, [redirectTo, redirectIfFound, hasUser])

  return [user, { set, revoke, getUser, getToken }]
}

export default useUser
