import util from 'util'
// 框架
import Koa from 'koa'
// jwt 认证
import jwt from 'jsonwebtoken'
// koa-jwt
import jwtKoa  from 'koa-jwt'

// 数据库
import './mongo'
// 缓存
import redis from './redis'
// 路由
import controllers from './router';
// 跨域
import cors from './cors';

// 解密
const verify = util.promisify(jwt.verify)


const app = new Koa();
// 跨域
app.use(cors({
  origin: function(ctx) {
    return '*';
  }})
);


async function withNext(ctx) {
  let postData = '';
  return new Promise(function(resolve, reject) {
    ctx.req.addListener('data', (data) => {
      postData += data
    })
    ctx.req.addListener('end', function() {
      if(postData) {
        resolve(postData)
      } else {
        reject()
      }
    })
  })
}

// 中间件
app.use(async function(ctx, next) {
  const method = ctx.request.method
  let data = null
  if(method === 'POST') {
    data = await withNext(ctx)
    app.context.data = data

    await next()

  } else {

    await next()
  }


})


/*app.use(jwtKoa({secret}).unless({
  //数组中的路径不需要通过jwt验证
  path: [/^\/register/, /^\/login/,]
}))*/

// redis 使用缓存
redis(app);

///      使用路由
app.use(controllers());



app.listen(3000);