import axios from 'utils/axios'
import apiGenerator from 'utils/apiGenerator'

const createRequest = apiGenerator(axios)

export default (() => ({
  users: createRequest('/user'),
}))()