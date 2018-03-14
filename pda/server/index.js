const Koa = require('koa');
const path = require('path');
const staticServe = require('koa-static');
import koaVebpack from './koa-webpack';
import templatePug from './koa-pug';
import router from './router';

const app = new Koa();
const PORT = process.env.PORT || 8081;


// 静态文件
app.use(staticServe(path.resolve(path.normalize(__dirname + '/../build/'))/*, { extensions: ['js', 'css']}*/));
app.use(staticServe(path.resolve(path.normalize(__dirname + '/../bower_components/'))/*, { extensions: ['js', 'css']}*/));
app.use(staticServe(path.resolve(path.normalize(__dirname + '/../node_modules/'))/*, { extensions: ['js', 'css']}*/));

//  F:\01_development\00_project\01_webpack-koa\build

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});


// 编译
koaVebpack(app);

// 使用模板
templatePug(app);


// logger 当前路由信息
// app.use(logger);

app.use(router.routes());

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else
    console.log(`HMR Listening at http://localhost:${PORT}`)
});
