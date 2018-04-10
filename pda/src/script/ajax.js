import method from './util'
import cookie from './cookie'
import config from './config'

let $
if(typeof window !== 'undefined') {
  $ = window.$
} else {
  $ =  {
    ajax: function(){
      return new Promise(function(res, rej) {
        res()
      })
    }
  }
}
function Ajax() {
  this.headers = {
    'Access-Control-Allow-Origin': '*',
  }
  this.option = {
    headers: this.headers,
  }
}

Ajax.prototype.createUrl = function(option) {
  const params = option ? method.createParams(option.params) : '';
  const url = option ? option.url : '';
  // const token = cookie.get('token');
  return params ? config.api + '/'+ url + '?'  + params : config.api + '/'+ url
}

Ajax.prototype.setHeader = function(key, value) {
  this.headers[key] = value
}

Ajax.prototype.createHeader = function() {
  let token = method.local.get('token')
  if(token) {
    this.setHeader('Authorization', `Bearer ${token}`)
  }
  if(this.option.type === 'post') {
    this.setHeader('Accept', `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8`)
  } else if(this.option.type === 'get'){
    this.setHeader('Content-Type', `text/plain; charset=utf-8`)
  }
}
Ajax.prototype.createOptions = function(type, option, data) {
  let opt = {
    url: this.createUrl(option),
    type: type
  }

  if(data) {
    opt.data = data
  }
  this.createHeader()


  return Object.assign(opt, this.option)
}

Ajax.prototype.post = function(option, data) {

  const opt = this.createOptions('post', option, data)

  return $.ajax(opt).then(function(data) {
    if(typeof data === 'object') {
      return data
    }
    return JSON.parse(data)
  })
}

Ajax.prototype.get = function(option) {

  const opt = this.createOptions('get', option)

  return $.ajax(opt).then(function(data) {
    if(typeof data === 'object') {
      return data
    }
    return JSON.parse(data)
  })
}




export default Ajax