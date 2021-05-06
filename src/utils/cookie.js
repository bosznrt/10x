import Cookies from 'js-cookie'

// const cookies = Cookies.withAttributes({ path: '/', domain: '.example.com' })

export default (() => ({
  get(name) {
    return Cookies.get(name)
  },
  set(name, value, options) {
    const inUseOptions = {
      expires: 7,
      ...options
    }
    return Cookies.set(name, value, inUseOptions)
  },
  remove(name) {
    return Cookies.remove(name)
  }
}))()
