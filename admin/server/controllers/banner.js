import fs from 'fs'
import path from 'path'
import _ from 'lodash';
import queryString from 'query-string'
import mongoose from 'mongoose'
import multiparty from 'multiparty'
import formidable from 'formidable'
import os from 'os'
import util from 'util'

const Banner = mongoose.model('Banner')

async function saveImg(dataBuffer) {
  return new Promise(function(resolve, reject) {
    fs.writeFile("out.png", dataBuffer, function(err) {
      if(err){
        reject(err);
      }
      resolve();
    });
  });
}

/**
 * 获取海报
 */
const getBanner = async (ctx) => {
  let banner = await Banner.find()
  let token = ctx.get('authorization')
  let payload = await ctx.verify(token.split(' ')[1])
  let jwt = ctx.jwt(payload)

  ctx.body = JSON.stringify({
    data:  banner,token: jwt
  });
};

const ROOTS = process.cwd();

/**
 * 登录
 */
const update = async (ctx) => {
  let form = new multiparty.Form();
  let data = JSON.parse(ctx.data);
  /*
  let type = data.type.split('/')[1]
  let name = Math.random().toString() + `.${type}`*/
  console.log(os.tmpdir() + data.name)
  console.log(path.join(os.tmpdir(), data.name))
  const reader = fs.createReadStream(path.join(os.tmpdir(), data.name));
  const stream = fs.createWriteStream(path.join(__dirname, 'public/img/update', name));
  reader.pipe(stream);


  form.parse(ctx.req, function(err, fields, files) {
    ctx.set('content-type', 'text/plain')
    // ctx.write('received upload:\n\n');
    console.log(fields, files)
    /*const reader = fs.createReadStream(path.join(os.tmpdir(), data.name));
     const stream = fs.createWriteStream(path.join(__dirname, 'public/img/update', name));
     reader.pipe(stream);*/

    // console.log(path.join(ROOTS, 'public/img/update', Math.random().toString() + '.jpg'))
  })

  ctx.body = JSON.stringify({
    data:  '保存失败！'
  });


  /*const file = ctx.request.body.files.file;
  const reader = fs.createReadStream(file.path);
  const stream = fs.createWriteStream(path.join(os.tmpdir(), Math.random().toString()));
  reader.pipe(stream);*/
  // console.log('uploading %s -> %s', file.name, stream.path);

  // ctx.redirect('/');

};
const updates = async (ctx) => {
  let imgData = ctx.request.body.data;
  if ('POST' !== ctx.method) return await next();

  let base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
  let dataBuffer = new Buffer(base64Data, 'base64');
  let save = await saveImg(dataBuffer);

  console.log(save);
  ctx.body = JSON.stringify({
    data:  '保存失败！'
  });


  /*const file = ctx.request.body.files.file;
  const reader = fs.createReadStream(file.path);
  const stream = fs.createWriteStream(path.join(os.tmpdir(), Math.random().toString()));
  reader.pipe(stream);*/
  // console.log('uploading %s -> %s', file.name, stream.path);

  // ctx.redirect('/');

};


const updsate = async (ctx) => {
  // let imgData = ctx.request.body;
  if ('POST' !== ctx.method) return await next();


  let form = new formidable.IncomingForm();

  console.log(os.tmpdir());
  form.parse(ctx.req, function(err, fields, files) {
    let file = files.file;
    const reader = fs.createReadStream(file.path);

    console.log(os.tmpdir(), file.path);

    const stream = fs.createWriteStream('fdsafdsa.jpeg');
    reader.pipe(stream);


  }); //解析request对象


  ctx.body = JSON.stringify({
    data:  '保存失败！'
  });

  /*const file = ctx.request.body.files.file;
  const reader = fs.createReadStream(file.path);
  const stream = fs.createWriteStream(path.join(os.tmpdir(), Math.random().toString()));
  reader.pipe(stream);*/
  // console.log('uploading %s -> %s', file.name, stream.path);

  // ctx.redirect('/');

};



module.exports = {
  'GET /banner': getBanner,
  'POST /banner/update': update,
  // 'POST /banner/:id': getOne,
};