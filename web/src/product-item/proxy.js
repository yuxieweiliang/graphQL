export default {
  set: function(target, name, value, receiver) {
    let success = target;
    // 只有再不存在的时候，才给他增加
    if(! this[name]) {
      success = Reflect.set(target, name, value, receiver);
    }

    if(name.indexOf('_') === 0) {
      return target;
    }

    return success;
  },
  get: function(target, key, receiver) {
    let success = Reflect.get(target, key, receiver); // 将它原本的方法重新赋给他。
    if (success) {
      console.log('property ' + key );
    }
    console.log('--------------', target);
    console.log('--------------', success);
    return success
  },

  /* // 拦截直接调用
   apply: function(target) {
   return new Proxy(target, proxy);
   },

   // 拦截 new
   construct: function(target) {
   return new Proxy(target, proxy);
   }*/
};