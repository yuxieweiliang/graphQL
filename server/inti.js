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
// 验证
import jwt from './jwt'
const app = new Koa();

const ROOTS = process.cwd();
app.use(serve( path.resolve(ROOTS, 'public', 'img', 'banner')));
app.use(serve( path.resolve(ROOTS, 'dist')));

// 跨域
app.use(cors({
  origin: function(ctx) {
    return '*';
  }})
);

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

app.listen(8000);