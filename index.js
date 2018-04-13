// 框架
const http = require('http')
// 框架
const Koa = require('koa')

const adminApp = require('./admin')
const webApp = require('./web')

const web = new Koa();
const admin = new Koa();

adminApp(admin)

webApp(web)


http.createServer(web.callback()).listen(8032);
http.createServer(admin.callback()).listen(8031);
