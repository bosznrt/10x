const generator = (fetcher) => (path = '') => (method = '', subPathOrId = '') => (data = {}, options = {}) => {
  return ['get', 'delete'].includes(method?.toLowerCase())
    ? fetcher[method](`${path}/${subPathOrId}`, { params: data, ...options })
    : fetcher[method](`${path}/${subPathOrId}`, data, options)
}

export default generator
