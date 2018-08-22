import axios from 'axios'
import Store from '../store'
import { Message } from 'element-ui'

const Axios = axios.create({
  // baseURL: "https://api.douban.com"
})

Axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    Store.commit('requestUrl', config.url)
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

Axios.interceptors.response.use(
  function({ data, config }) {
    Store.commit('responseUrl', config.url)
    return data
  },
  function({ response: { data }, config }) {
    Store.commit('responseUrl', config.url)
    Message({
      type: 'error',
      message: data.msg
    })
    return Promise.reject(data)
  }
)

export default Axios
