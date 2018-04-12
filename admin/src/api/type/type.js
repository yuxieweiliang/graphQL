/**
 * 所有的api 列表
 */
const createApi = function(common) {
  return function(api) {
    return api ? common + '/' + api : common
  }
};

/**
 * 系统api
 */
const systemRoot = createApi('system');
export const system = {
  login: systemRoot('login'),
  register: systemRoot('register'),
};

/**
 * 用户api
 */
const userRoot = createApi('user');
export const user = {
  login: userRoot('login'),
  register: userRoot('register'),
};

/**
 * 海报api
 */
const bannerRoot = createApi('banner');
export const banner = {
  images: bannerRoot(''),
  update: bannerRoot('update'),
  remove: bannerRoot('remove'),
};

/**
 * 产品api
 */
const productRoot = createApi('product');
export const product = {
  list: productRoot(''),
  save: productRoot('save'),
  edit: productRoot('edit'),
  image: productRoot('image'),
  remove: productRoot('remove'),
};

/**
 * 分类api
 */
const classRoot = createApi('class');
export const classify = {
  list: classRoot(''),
  save: classRoot('save'),
  remove: classRoot('remove'),
};

/**
 * 企业api
 */
const enterpriseRoot = createApi('enterprise');
export const enterprise = {
  list: enterpriseRoot(''),
  dynamic: enterpriseRoot('dynamic'),
  remove: enterpriseRoot('remove'),
};