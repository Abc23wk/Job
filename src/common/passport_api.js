import { HttpLib } from './httplib'
import { ApiRoutes } from './api_routes'

export default {
  // 登录
  async login (params) {
    let data = await HttpLib.post(ApiRoutes.auth.login(), params)
    return data
  },
  async pinlun (params) {
    let data = await HttpLib.get(ApiRoutes.auth.pinlun(), params)
    return data
  }
}