/**
 * 所有的api 列表
 */
const createApi = function(common) {
  return function(api) {
    return api ? common + '/' + api : common
  }
};

/**
 * 公共api
 */
const systemRoot = createApi('system');
export const system = {
  login: systemRoot('login'),
  register: systemRoot('register'),
};

/**
 * 公共api
 */
const userRoot = createApi('user');
export const user = {
  login: userRoot('login'),
  register: userRoot('register'),
};

/**
 * 公共api
 */
const bannerRoot = createApi('banner');
export const banner = {
  images: bannerRoot(''),
  update: bannerRoot('update'),
};

/**
 * 公共api
 */
const productRoot = createApi('product');
export const product = {
  banner: productRoot(''),
  register: productRoot('register'),
};