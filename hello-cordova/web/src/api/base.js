import axios from 'axios'
import { Toast } from 'vant'

const Axios = axios.create();

Axios.interceptors.request.use(
  config => {
    return config
  },
  error => Promise.reject(error)
)

Axios.interceptors.response.use(response => {
  return response
}, err => {
  Toast(err.message)
  return Promise.reject(err)
})

const request = payload => {
  return Axios({
    baseURL: payload.baseURL || process.env.VUE_APP_API,
    timeout: payload.timeout || 6 * 300 * 1000,
    url: payload.url,
    method: payload.method || 'GET',
    params: (payload.method && payload.method.toUpperCase() === 'GET') ? { ...payload.data } : null,
    data: (payload.method && payload.method.toUpperCase() === 'POST') ? { ...payload.data } : null
  })
}

export default request
