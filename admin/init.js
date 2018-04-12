// 框架
import Koa from 'koa'
// path
import path  from 'path'
// 跨域
import cors from 'koa2-cors';
// 资源
import serve from 'koa-static';
// 路由
import Router from 'koa-router'


const app = new Koa();

const router = new Router();

const ROOTS = process.cwd();

// 跨域
app.use(cors({
  origin: function(ctx) {
    return '*';
  }})
);

// 创建静态资源服务器
app.use(serve( path.resolve(ROOTS, 'dist')));

// 把所有的路径全部重定向到首页
router.all('/:id',async function(ctx) {
  ctx.redirect('/');
})

app.use(router.routes())

app.listen(8031);