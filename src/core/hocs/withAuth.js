import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Cookies from 'utils/cookie'
import { TOKEN_KEY, USER_KEY } from 'configs/constants'

const withAuth = (WrappedComponent) => {
  return (props) => {
    if (typeof window !== 'undefined') {
      const Router = useRouter()

      const accessToken = Cookies.get(TOKEN_KEY)
      const user = Cookies.get(USER_KEY)
      const userJson = user ? JSON.parse(user) : undefined

      if (!accessToken) {
        Router.replace('/login')
        return null
      }

      return <WrappedComponent {...{ ...props, accessToken, user: userJson }} />
    }
    return null
  }
}

export default withAuth
