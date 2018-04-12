import { product, classify } from './type/type'

/**
 * 登陆
 */
export default {

  /**
   * 加载产品分类
   */
  updateClass: function () {
    return this.ajax.get({url: classify.list})
      .then(function(data) {

        return data
      })
  },

  /**
   * 加载产品分类
   */
  updateOneProduct: function (_id) {
    return this.ajax.get({url: product.list, params: {_id}})
      .then(function(data) {

        return data
      })
  },

  /**
   * 创建产品分类
   * @param data
   */
  newClass: function(data) {
    console.log(data)
    return this.ajax.post({url: classify.save}, data)
      .then(function(data) {

        return data
      })
  },

  /**
   * 删除产品分类
   */
  removeClass: function() {
    return this.ajax.get({url: classify.remove})
      .then(function(data) {

        return data
      })
  },

  updateProduct: function (_id) {
    const params = _id ? {_id} : null

    return this.ajax.get({url: product.list, params})
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

  editProduct: function (data) {
    return this.ajax.post({url: product.edit}, data)
      .then(function(data) {

        return data
      })
  },


  addProductImg: function (data) {
    this.ajax.option.processData = false;
    this.ajax.option.contentType = false;
    return this.ajax.post({url: product.image}, data)
      .then(function(data) {

        return data
      })
  },

  removeProduct: function (params) {

    console.log(params)
    return this.ajax.get({url: product.remove, params})
      .then(function(data) {

        return data
      })
  },
}

