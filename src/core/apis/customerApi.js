import ApiProvider from './provider'

export default (() => ({
  signup(data) {
    return ApiProvider.customers('post')(data)
  },
  login(data) {
    return ApiProvider.customers('post', 'login')(data)
  }
}))()
