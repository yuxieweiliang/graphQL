import { product } from './type/type'

/**
 * 登陆
 */
export default {

  updateProduct: function () {

    return this.ajax.get({url: product.list})
      .then(function(data) {

        return data
      })
  },
  saveProduct: function (data) {

    return this.ajax.post({url: product.save}, data)
      .then(function(data) {

        return data
      })
  },
  removeProduct: function () {

    return this.ajax.get({url: product.remove})
      .then(function(data) {

        return data
      })
  },
}

