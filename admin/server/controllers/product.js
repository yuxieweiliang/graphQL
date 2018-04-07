import fs from 'fs'
import path from 'path'
import _ from 'lodash';
import queryString from 'query-string'
import mongoose from 'mongoose'
import bodyData from '../bodyData'
// import formidable from 'formidable'
import os from 'os'
import util from 'util'

const Product = mongoose.model('Product');

function createResponse(obj) {
  return JSON.stringify({
    data:  _.isEmpty(obj) ? '保存失败！' : '保存成功！'
  })
}

function removeResponse(obj) {
  return JSON.stringify({
    data:  _.isEmpty(obj) ? '保存失败！' : '保存成功！'
  })
}

async function product(ctx) {
  let params = ctx.request.query || ctx.query
  let products = await Product.find({})

  ctx.body = JSON.stringify({
    data: products
  });
}

async function saveProduct(ctx) {
  let data = await bodyData(ctx)
  let products = await Product.find({title: data.title})

  console.log(data, products)

  if(_.isEmpty(products)) {
    let create = await Product.create({...data})
    ctx.body = createResponse(create)
  } else {
    ctx.body = JSON.stringify({
      data:  '保存失败，请更换产品名称！'
    });
  }
}

async function removeProduct(ctx) {
  let params = ctx.request.query || ctx.query;
  let products = await Product.findById(params._id)

  if(!_.isEmpty(products)) {
    let remove = await Product.remove({params})
    ctx.body = removeResponse(remove)
  } else {
    ctx.body = JSON.stringify({
      data:  '删除失败！'
    });
  }
}





module.exports = {
  'GET /product': product,
  'POST /product/save': saveProduct,
  'GET /product/remove': removeProduct,
};