import { banner } from './type/type'

/**
 * 登陆
 */
export default {
  // 获取所有 海报
  getBanner: function () {
    return this.ajax.get({ url: banner.images })
  },
  // 获取所有 海报
  removeBanner: function (params) {
    return this.ajax.get({ url: banner.remove, params })
  },

  /**
   * 上传海报
   * @param option
   */
  updateBanner: function (option) {
    this.ajax.option.processData = false;
    this.ajax.option.contentType = false;
    return this.ajax.post({ url: banner.update }, option)
  }
}

