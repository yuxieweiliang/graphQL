import fetch from 'isomorphic-fetch';
import proxy from './proxy'
// 增加一个为对象增加中间件放法的函数。
// 增加一个为对象扩展消息传递的方法。
// 增加一个对象的观察者模式。
// 增加一个对象的

function createClass() {

}
class Config {
  constructor() {
    this._version = '0.0.1'; // 版本
    this._events = {}; // 事件队列
    this._data = {}; // 数据集合,;
    this.target = {};
  }
}

let fproxy = new Proxy(Config, proxy);


fproxy._version = 'ffff';
console.log(fproxy._version);



/*


function Information() {
  this.data = {}
}
Information.prototype = {
  emit(key, msg) {
    if(this.data[key]) {
      console.error(`${key} is repeat`)
    }
    this.data[key] = msg;
  },
  on(key, cb) {
    cb(this.data[key])
  }
};

let information = new Information();

zoo.extend('information', information);

console.log(zoo);


information.emit('login', 'has passowrd');
information.on('login', function(msg) {
  console.log(msg);
});
information.emit('login', 'has username');
information.on('login', function(msg) {
  console.log(msg);
});
*/


// fet.default['abc'] = abc;





/*

 var arr = [];
 function interceptors(request) {

 }
 interceptors({}, function(response) {
 return response;
 });


 fet.before(function(request, response) {

 //  设置头部
 fet.set('Content-Type', 'application/javascript');

 fet.root('http://47.94.97.210:8001/')
 });


 fet('abc', {data: 'a'}).then();

 */










