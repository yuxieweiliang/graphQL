import { product } from './type/type'

/**
 * 登陆
 */
export default {

  postImg2: function (option) {
    let _this = this;

    console.log(this);
    return this.fetch(common.postImg2, option)
      .then(function(data) {

        return data
      })
  }
}

