import fetch from 'isomorphic-fetch'
import method from './util'
import cookie from './cookie'
import config from './config'


function Fetch(option, data) {
  this.header = new Headers()
}

Fetch.prototype.createUrl = function(option) {
  const params = option ? method.createParams(option.params) : '';
  const url = option ? option.url : '';
  // const token = cookie.get('token');
  return params ? config.api + '/'+ url + '?'  + params : config.api + '/'+ url
}

Fetch.prototype.setHeader = function(key, value) {
  this.header.append(key, value)
}

Fetch.prototype.post = function(option, data) {
  let url = this.createUrl(option)
  let token = method.local.get('token')
  let access = this.header.get('Access-Control-Allow-Origin')
  let jwt = this.header.get('Authorization')

  if(!jwt) {
    this.setHeader('Authorization', `Bearer ${token}`)
  }

  if(!access) {
    this.setHeader('Access-Control-Allow-Origin', '*')
  }
  this.setHeader('Content-Type', '')
  // this.setHeader('Access-Control-Allow-Origin', '*')
  // this.setHeader('Authorization', 'fffffffffffffffffffffffffffff')
  // console.log(this.header.get('Access-Control-Allow-Origin'))

  return fetch(url, {
    method: 'post',
    headers: this.header,
    body: data
  }).then(res => {
    if(res.status === 200) {
      return res.json()
    } else {
      console.log(res)
      return res // {error: '请求错误！'}
    }
  })
}


Fetch.prototype.get = function(option) {
  let url = this.createUrl(option)
  let token = method.local.get('token')
  let access = this.header.get('Access-Control-Allow-Origin')
  let jwt = this.header.get('Authorization')

  if(!jwt) {
    this.setHeader('Authorization', `Bearer ${token}`)
  }

  if(!access) {
    this.setHeader('Access-Control-Allow-Origin', '*')
  }


  console.log(this.header.get('Authorization'))
  /*if(!token) {
    return;
  }*/

  return fetch(url, {
    method: 'get',
    headers: this.header
  }).then(res => {
    if(res.status === 200) {
      return res.json()
    } else {
      console.log(res)
      return res//{error: '请求错误！'}
    }
  })
}




export default Fetch