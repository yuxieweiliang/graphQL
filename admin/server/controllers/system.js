import _ from 'lodash';
import queryString from 'query-string'
import mongoose from 'mongoose';
const jwt = require('jsonwebtoken')

const secret = 'jwt beautiful story'
const User = mongoose.model('User')

/**
 * 注册
 */
const register = async (ctx) => {
  let data = JSON.parse(ctx.data);
  let token = ctx.jwt(params)
  let users = await  User.findOne({'account.username': data.username });

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



module.exports = {
  'POST /system/register': register,
  'GET /system/login': login
};