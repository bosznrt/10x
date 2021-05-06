import ApiProvider from './provider'

export default (() => ({
  myProfile() {
    return ApiProvider.users('get', 'me')()
  },
  updateProfile(data) {
    return ApiProvider.users('post')(data)
  }
}))()