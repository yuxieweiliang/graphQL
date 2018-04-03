
// 分类
import { Classify } from './classify'

// 设置
import { Banner } from './banner'

// 产品
import { Product } from './products'

// 用户
import { User } from './user'

// 企业
import { Enterprise } from './enterprise'

const statics = {
  fetch: function (cd) {
    return this
      .find({})
      .sort('mate.updateAt')
      .exec(cd)
  },
  findById: function(id, cd) {
    return this
      .findOne({_id: id})
      .exec(cd)
  }
};


Classify.statics = statics;
Banner.statics = statics;
Product.statics = statics;
User.statics = statics;
Enterprise.statics = statics;


export {
  Classify,
  Banner,
  Product,
  User,
  Enterprise,

}