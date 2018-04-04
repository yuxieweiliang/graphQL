// 框架
import Koa from 'koa'

// path
import path  from 'path'

// 数据库
import './mongo'
// 缓存
import redis from './redis'
// 路由
import controllers from './router';
// 跨域
import cors from 'koa2-cors';
// 跨域
import serve from 'koa-static';

import jwt from './jwt'

const app = new Koa();

app.use(serve( path.resolve(__dirname, 'public', 'img', 'update')));

// 跨域
app.use(cors({
  origin: function(ctx) {
    return '*';
  }})
);

async function bodyData(ctx) {
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
    data = await bodyData(ctx)
    app.context.data = data

    await next()

  } else {

    await next()
  }
})

/*app.use(function(ctx, next){
  return await next().catch((err) => {
    if (401 == err.status) {
      ctx.status = 401;
      ctx.body = 'Protected resource, use Authorization header to get access\n';
    } else {
      throw err;
    }
  });
});*/




// jwt 认证
jwt(app)

// redis 使用缓存
redis(app);

///      使用路由
app.use(controllers());



app.listen(3000);