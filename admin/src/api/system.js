import { system } from './type/type'

export default {
  /**
   * 登陆
   */
  login: function (params) {
    return this.fetch.get({url: system.login, params})
  },

  /**
   * 注册
   */
  register: function (option) {
    return this.fetch.post({url: system.register}, option)
  }
}

