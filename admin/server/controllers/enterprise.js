import mongoose from 'mongoose';
import _ from 'lodash';
import bodyData from '../bodyData'
import queryString from 'query-string'

const Enterprise = mongoose.model('Enterprise')
/**
 * 书籍
 */
let enterprise = async (ctx) => {
  let enterprise = await  Enterprise.findOne({}, '-__v -dates');

  ctx.body = JSON.stringify({
    data: enterprise
  });
};

/**
 * 更新企业动态
 * @param ctx
 * @returns {Promise.<void>}
 */
let updateEnterpriseDynamic = async ctx => {
  let data = await bodyData(ctx)
  let enterprise = await  Enterprise.findOne({_id: data._id })
  let dynamic = enterprise.dynamic.concat(data.dynamic)
  let message = null

  if(!_.isEmpty(enterprise)) {
    let createUser = await Enterprise.update({},{$set: { dynamic}});
    message = (_.isEmpty(createUser) ? '更新失败！' : '更新成功！');
  } else {
    message = '更新失败。';
  }

  ctx.body = JSON.stringify({message});
};


module.exports = {
  'GET /enterprise': enterprise,
  'POST /enterprise/dynamic': updateEnterpriseDynamic,
};