import path from 'path'
import _ from 'lodash';
import mongoose from 'mongoose'
import config from '../config'
import { uploadFile } from '../update'


const Banner = mongoose.model('Banner');



/**
 * 获取海报
 */
const getBanner = async (ctx) => {
  let banner = await Banner.find({}, 'url name')
  // let token = ctx.get('authorization')
  // let payload = await ctx.verify(token.split(' ')[1])
  // let jwt = ctx.jwt(payload)

  banner = banner.map(item => ({
    _id: item._id,
    url: config.root + item.url
  }))

  ctx.body = JSON.stringify({
    data:  banner, // token: jwt
  });
};

const ROOTS = process.cwd();
const update = async (ctx) => {
  // 文件上传路径
  let serverFilePath = path.resolve(ROOTS, 'public', 'img');
    // 上传文件事件
  let result = await uploadFile( ctx, {
      fileType: 'banner', // common or album
      path: serverFilePath
    });

  let banner = null

  if(result.success) {
    banner = await Banner.create({url: result.fileName})
    result.url = banner.url
    console.log(banner.url)
  }


  ctx.body = banner
}

const remove = async (ctx) => {
  let params = ctx.request.query || ctx.query;
  let img = await Banner.findOne(params)

  if(! _.isEmpty(img)) {
    let remove = await Banner.remove(params)

    if(!_.isEmpty(remove)) {
      ctx.body = JSON.stringify({
        data:  '删除成功！'
      });
    } else {
      ctx.body = JSON.stringify({
        data:  '删除失败！'
      });
    }
    return;
  }

  // let imgData = ctx.request.body;
  ctx.body = JSON.stringify({
    data:  '删除失败！'
  });

};


module.exports = {
  'GET /banner': getBanner,
  'POST /banner/update': update,
  'GET /banner/remove': remove,
  // 'POST /banner/:id': getOne,
};