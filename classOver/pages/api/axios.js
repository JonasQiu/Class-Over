import axios from 'axios'
import urls from './url.js'

// 创建请求模板
const req = axios.create({
  baseURL: urls.baseURL,
  params: {

  }
})

// 发送请求拦截
req.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log(config)
  config.params = {
    ...config.params
  }
  return config
}, function (error) {
// 对请求错误做些什么
  return Promise.reject(error)
})

// 响应拦截
req.interceptors.response.use(response => {
  // const { status } = response
  // const { baseURL, url } = response.config

  // if (status === 200) {
  //   if (url === baseURL + 'video') {
  //     return {
  //       count: response.data.count,
  //       data: response.data.data
  //     }
  //   }
  //   return response.data.data
  // }
  // return response
})

export default req
