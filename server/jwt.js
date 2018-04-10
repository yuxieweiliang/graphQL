import util from 'util'

// jwt 认证
import jwt from 'jsonwebtoken'
// koa-jwt
import jwtKoa  from 'koa-jwt'
// 解密
const verify = util.promisify(jwt.verify)
// 密钥
const secret = 'jwt beautiful story'

export default function(app) {

  /*app.use(jwtKoa({secret}).unless({
    //数组中的路径不需要通过jwt验证
    path: [/^\/system\/register/, /^\/system\/login/,]
  }))*/

  app.use(async function(ctx, next) {

    app.context.jwt = function({username, password}) {
      return jwt.sign({username, password}, secret, {expiresIn: '1h'})  //token签名 有效期为1小时
    }

    app.context.verify = async function(token) {
      return await verify(token, secret)
    }

    await next()
  })

}
