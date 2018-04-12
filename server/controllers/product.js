import _ from 'lodash';
import mongoose from 'mongoose'
import path from 'path'
import config from '../config'
import bodyData from '../bodyData'
import { uploadFile } from '../update'

const Product = mongoose.model('Product');
const Classify = mongoose.model('Classify');

function createResponse(obj) {
  return JSON.stringify({
    data:  _.isEmpty(obj) ? '保存失败！' : {...obj._doc, message: '保存成功！'}
  })
}

function removeResponse(obj) {
  return JSON.stringify({
    data:  _.isEmpty(obj) ? '删除失败！' : '删除成功！'
  })
}

function execProduct(product) {
  return Object.assign(product, {images: product.images.map(item => config.root + item)})
}


async function product(ctx) {
  let params = ctx.request.query || ctx.query
  let products = null
  if(params._id) {
    products = await Product.findOne({_id: params._id}, '-__v -dates')
  } else {
    products = await Product.find({}, '-__v -dates')
  }

  if(products.length > 0) {
    products = products.map(item => execProduct(item))
  } else {
    products = execProduct(products)
  }

  console.log(products)

  ctx.body = JSON.stringify({
    data: products
  });
}

async function pushProductToClass(_id, products) {
  return await Classify.update({_id}, {$set: {products}})
}
async function saveProduct(ctx) {
  let data = await bodyData(ctx)
  let product = await Product.findOne({name: data.name})
  let classify = await Classify.findOne({_id: data.classify_id})
  let products = classify.products


  if(_.isEmpty(product)) {
    let create = await Product.create({...data})
    let classify = await pushProductToClass(data.classify_id, products.concat(create._id))

    if(!_.isEmpty(classify)) {
      ctx.body = createResponse(create)
    } else {
      ctx.body = JSON.stringify({
        data:  '保存失败，请更换产品名称！'
      });
    }

  } else {
    ctx.body = JSON.stringify({
      data:  '保存失败，请更换产品名称！'
    });
  }
}
async function editProduct(ctx) {
  let data = await bodyData(ctx)
  let product = await Product.findOne({name: data.name})

  if(!_.isEmpty(product)) {
    let create = await Product.update({_id: data._id}, {...data})

    ctx.body = createResponse(create)

  } else {
    ctx.body = JSON.stringify({
      data:  '保存失败，请更换产品名称！'
    });
  }
}

// , {multi: true}
async function removeProduct(ctx) {
  let params = ctx.request.query || ctx.query;
  let product = await Product.findById(params._id)
  let classify = await Classify.findOne({_id: params.classify_id})
  let products = classify.products

  if(!_.isEmpty(product)) {
    let remove = await Product.remove({...params})
    let index = products.indexOf(params._id)
    products.splice(index, 1)
    let classify = await await pushProductToClass(params.classify_id, products)

    ctx.body = removeResponse(remove)

  } else {
    ctx.body = JSON.stringify({
      data:  '删除失败！'
    });
  }
}

// , {multi: true}
const ROOTS = process.cwd();
async function saveProductImage(ctx) {
  // 文件上传路径
  let serverFilePath = path.resolve(ROOTS, 'public', 'img');

  // 上传文件事件
  let result = await uploadFile( ctx, {
    fileType: 'banner', // common or album
    path: serverFilePath
  });

  let image = null
  let url = null
  let product = await Product.findById(result.formData.id)

  if(result.success && !_.isEmpty(product)) {
    url = product.images.concat(result.fileName)
    image = await Product.update({_id: result.formData.id}, {$set:{images: url}})
    console.log(image)
  }

  ctx.body = {
    ...image,
    url: config.root + result.fileName
  }

}


module.exports = {
  'GET /product': product,
  'POST /product/save': saveProduct,
  'POST /product/edit': editProduct,
  'POST /product/image': saveProductImage,
  'GET /product/remove': removeProduct,
};