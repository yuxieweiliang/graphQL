import fs from 'fs'
import path from 'path'
import _ from 'lodash';
import queryString from 'query-string'
import mongoose from 'mongoose'
import bodyData from '../bodyData'
// import formidable from 'formidable'
import os from 'os'
import util from 'util'

const Classify = mongoose.model('Classify');

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

async function classify(ctx) {
  let params = ctx.request.query || ctx.query
  let classify = await Classify.find({})

  ctx.body = JSON.stringify({
    data: classify
  });
}

async function save(ctx) {
  let data = await bodyData(ctx)
  let classify = await Classify.find({name: data.name})

  if(_.isEmpty(classify)) {
    let create = await Classify.create({...data})
    ctx.body = createResponse(create)
  } else {
    ctx.body = JSON.stringify({
      data:  '保存失败，请更换产品名称！'
    });
  }
}

async function remove(ctx) {
  let params = ctx.request.query || ctx.query;
  let classify = await Classify.findById(params._id)

  if(!_.isEmpty(classify)) {
    let remove = await Classify.remove({params})
    ctx.body = removeResponse(remove)
  } else {
    ctx.body = JSON.stringify({
      data:  '删除失败！'
    });
  }
}





module.exports = {
  'GET /class': classify,
  'POST /class/save': save,
  'GET /class/remove': remove,
};