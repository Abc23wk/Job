import axios from 'axios/index' // 导入axios
import { apiRoot } from './config' //导入config文件
import { prompt } from './utils'//错误提示
import { HttpStatus } from './httpStatus'

axios.defaults.baseURL = apiRoot // 设置基础url
axios.defaults.timeout = 30000  // 请求超时时间设置
axios.defaults.headers['Content-Type'] = 'application/json'

// 添加响应拦截器, 需要可添加，不需要可以不看这里，
axios.interceptors.response.use(function (response) {
 // 对响应数据做点什么（意思就是获取到的数据，需要做什么处理）
  return response
}, function (error) {
  // 对响应错误做点什么
  console.log('from interceptor: ' + error)
  if (error && error.response) {
    switch (error.response.status) {
      case HttpStatus.noPermission.code:
        prompt(HttpStatus.noPermission.message)
        break
      default:
        break
    }
  }
  return Promise.reject(error)
})

// 重点内容
const HttpLib = {
  get: async function (url, params = null) {
    try {
      let res = await axios.get(url, {
        params,
      })
      return res.data // 返回内容，根据后台返回数据 自行调整
    } catch (error) {
      console.log(error.message)
    }
  },
  post: async function (url, data = {}) {
    try {
      let res = await axios.post(url, data)

      return res.data
    } catch (error) {
      console.log(error.message)
    }
  },
  delete: async function (url, params) {
    try {
      let res = await axios.delete(url, {params})

      return res.data
    } catch (error) {
      console.log(error.message)
    }
  }
}

export { HttpLib }