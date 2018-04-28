import _ from 'lodash';
import queryString from 'query-string'
import mongoose from 'mongoose';
import bodyData from '../bodyData'
const User = mongoose.model('User')
import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa'
/**
 * 注册
 */
const register = async (ctx) => {
  let data = await bodyData(ctx);
  let token = ctx.jwt(data)
  let users = await  User.findOne({'account.username': data.username });

  console.log('register')




  if(_.isEmpty(users)) {
    let createUser = await User.create({ account: data});

      ctx.body = _.isEmpty(createUser)
        ? JSON.stringify({ error:  '用户创建失败！' })
        : JSON.stringify({ data:  '用户创建成功！' , token })

  } else {
    ctx.body = JSON.stringify({ error:  '用户已存在！' });
  }
};

/**
 * 登录
 */
const login = async (ctx) => {
  let params = ctx.request.query || ctx.query;
  let token = ctx.jwt(params)
  let users = await  User.findOne({'account.username': params.username });

  console.log('login')
  if(_.isEmpty(users)) {
    ctx.body = JSON.stringify({ error:  '用户不存在！' })
  } else {
    if(params.password === users.account.password) {
      ctx.body = JSON.stringify({ data:  '登陆成功！', token });
    } else {
      ctx.body = JSON.stringify({error:  '用户名或密码错误！'});
    }

  }
};

/**
 * token
 */
const token = async (ctx) => {
  let token = ctx.jwt({other: 'other'})

  ctx.body = JSON.stringify({ data:  '获取成功！', token });
};



module.exports = {
  'GET /system/token': token,
  'POST /system/register': register,
  'GET /system/login': login,
  'GET /graphiql': async (ctx, next) => {
    await graphiqlKoa({endpointURL: '/graphql'})(ctx, next)
  },
};