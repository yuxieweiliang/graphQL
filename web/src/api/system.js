import { system } from './type/type'

export default {
  /**
   * 登陆
   */
  login: function (params) {
    return this.ajax.get({url: system.login, params})
  },

  /**
   * 注册
   */
  register: function (option) {
    return this.ajax.post({url: system.register}, option)
  }
}

