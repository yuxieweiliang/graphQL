/**
 * 所有的api 列表
 */
const createApi = function(common) {
  return function(api) {
    return common + '/' + api
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