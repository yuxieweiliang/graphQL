import { banner } from './type/type'

/**
 * 登陆
 */
export default {
  // 获取所有 海报
  getBanner: function () {
    let token = this.method.local.get('token')
    return this.fetch.get({ url: banner.images })
  },

  /**
   * 上传海报
   * @param option
   */
  updateBanner: function (option) {
    let _this = this;

    return this.fetch.post({ url: banner.update },option)
  }
}

