
// 请求海报
import Banner from './banner';

// 请求系统
import System from './system';

// 请求用户
import User from './user';

// 请求设置
import Setting from './setting';

// 请求产品
import Product from './product';

// 请求企业
import Enterprise from './enterprise';

const api = {};
const apiArr = [System, User, Setting, Product, Banner, Enterprise];

for(let i in apiArr) {
  for(let key in apiArr[i]) {
    api[key] = apiArr[i][key]
  }
}

export default api
