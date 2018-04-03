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
  return config.api + '/'+ url + '?'  + params
}

Fetch.prototype.setHeader = function(key, value) {
  this.header.append(key, value)
}

Fetch.prototype.post = function(option, data) {
  var url = this.createUrl(option)
  // this.setHeader('Content-Type', 'application/json')
  // this.setHeader('Access-Control-Allow-Origin', '*')
  // this.setHeader('Authorization', 'fffffffffffffffffffffffffffff')
  // console.log(this.header.get('Access-Control-Allow-Origin'))
  return fetch(url, {
    method: 'POST',
    headers: this.header,
    body: JSON.stringify(data)
  }).then(res => res.json())
}

Fetch.prototype.get = function(option) {
  var url = this.createUrl(option)

  console.log(url)
  // console.log(this.header.get('Authorization'))
  return fetch(url).then(res => res.json())
}




export default Fetch