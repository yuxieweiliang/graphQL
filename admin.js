// path
const path = require('path')
// 跨域
// const cors = require('koa2-cors')
// 资源
const serve = require('koa-static')
// 路由
const Router = require('koa-router')

const router = new Router();

const ROOTS = process.cwd();

// 跨域
/*app.use(cors({
 origin: function(ctx) {
 return '*';
 }})
 );*/


module.exports = function(app) {
// 创建静态资源服务器
  app.use(serve( path.resolve(ROOTS, 'admin/dist')));

// 把所有的路径全部重定向到首页
  router.all('/:router',async function(ctx) {
    if(ctx.url.indexOf('.html') > -1) return

    if(ctx.url.indexOf('?') > -1) {
      let url = ctx.url.split('?')
      ctx.redirect(url[0] + '.html?' + url[1]);
    } else {
      ctx.redirect(ctx.url + '.html');
    }
  })

  app.use(router.routes());
}