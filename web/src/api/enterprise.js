import { enterprise } from './type/type'

/**
 * 登陆
 */
export default {
  // 获取 企业动态
  getEnterpriseDynamic: function () {
    return this.ajax.get({ url: enterprise.list })
  },
  updateEnterpriseDynamic: function (dynamic) {
    return this.ajax.post({ url: enterprise.dynamic }, dynamic)
  },

}

