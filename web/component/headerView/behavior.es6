
export default {
  state: {
    menu: ['网站首页', '产品分类', '新闻资讯', '关于我们'],
  },
  componentWillMount() {},
  _changeMenu(menu) {
    if(+menu.key === 0) {
      window.location.href = '/'
    } else if(+menu.key === 1) {
      window.location.href = '/product.html'
    } else if(+menu.key === 2) {
      window.location.href = '/information.html'
    } else if(+menu.key === 3) {
      window.location.href = '/hospital.html'
    }
  }
};
