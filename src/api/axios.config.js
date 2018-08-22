import axios from 'axios'

import { Message } from 'element-ui'

const Axios = axios.create({
  // baseURL: "https://api.douban.com"
})

Axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

Axios.interceptors.response.use(
  function({ data }) {
    return data
  },
  function({ response: { data } }) {
    Message({
      type: 'error',
      message: data.msg
    })
    return Promise.reject(data)
  }
)

export default Axios
