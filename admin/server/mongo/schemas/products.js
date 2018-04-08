import mongoose, { Schema } from 'mongoose';
let ObjectId = Schema.Types.ObjectId;

const ProductSchema = new Schema({

  // 简介
  introduction:  String,

  // 名字
  name:   String,

  id: Schema.Types.ObjectId,

  // 分类
  classify: [{
    type: ObjectId,
    ref: 'Classify'
  }],
  // 封面图片地址
  images:   {
    large: String,
    small: String
  },

  // 状态
  status: String,// 'published'
  // 时间
  dates:   {
    // 创建
    created: { type: Date, default: Date.now },
    // 发布
    build: String
  },
  // 相关
  description: String,


});


export const Product = mongoose.model('Product', ProductSchema);
