// 引入GraphQL各种方法类型

import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  isOutputType
} from 'graphql';
import mongoose from 'mongoose'
const Product = mongoose.model('Product') // 引入Info模块


// 定义日期时间 类型
const dateType = new GraphQLObjectType({
  name: 'dates',
  fields: {
    // 创建
    created: { type: GraphQLString },
    // 发布
    build: { type: GraphQLString }
  }
})

// 图片 类型
const imagesType = new GraphQLObjectType({
  name: 'images',
  fields: [{type: GraphQLString}]
})


// 定义日期时间 类型
const productType = new GraphQLObjectType({
  name: 'Product',
  fields: {

    // 简介
    introduction:  {type: GraphQLString},

    // 名字
    name:   {type: GraphQLString},

    id: {type: GraphQLID},

    // 分类名称
    classify_name: {type: GraphQLString},

    // 分类ID
    classify_id: {type: GraphQLString},
    // 封面图片地址
    // images: imagesType,

    // 状态
    status: {type: GraphQLString},// 'published'
    // 时间
    dates:   {
      type: dateType,
    },
    // 相关
    description: {type: GraphQLString},


  }
})

// 批量查询
const products = {
  type: new GraphQLList(productType),
  args: {},
  resolve (root, params, options) {

    console.log('||||||||||');
    return Product.find({}).exec() // 数据库查询
  }
}

// 根据id查询单条info数据
  const product = {
  type: productType,
  // 传进来的参数
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID) // 参数不为空
    }
  },
  resolve (root, params, options) {
    return Product.findOne({_id: params.id}).exec() // 查询单条数据
  }
}

// 导出GraphQLSchema模块

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',
    fields: {
      products,
      product,
    }
  })
})
