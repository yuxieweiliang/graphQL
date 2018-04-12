
export default {
  state: {
    menu: ['网站首页', '产品分类', '新闻资讯', '关于我们'],
    config: {
      icon: [
        {icon: 'mobile', title: '关注微信', color: '#dd0908'},
        {icon:  'laptop', title: '微端打开', color: '#3fb7d2'},
        {icon:  'motorcycle', title: '送货速度', color: '#1963ce'},
        {icon:  'shield', title: '质量保障', color: '#c119ce'},
        {icon:  'envira', title: '绿色环保', color: '#7fbad8'},
        {icon:  'heart', title: '我喜欢', color: '#1ca39d'},
        {icon:  'thumbs-up', title: '产品很好', color: '#ff9e29'},
        {icon:  'car', title: '公司地址', color: '#7e3b07'},
        {icon:  'plane', title: '飞速送达', color: '#f49ecf'},
        /*{icon:  'plane', title: 'fff', color: '#070c1f'},
         {icon:  'plane', title: 'fff', color: '#df8012'},*/
      ]
    },
  },
  componentWillMount() {
    let _this = this
    this.api.getToken().then(function(data) {
      _this.method.local.set('token', data.token)
      _this._getBanner()
      _this._getProducts()
    })
  },
  _getBanner: function() {
    let _this = this
    _this.api.getBanner().then(res => {
      _this.setState({banner: res.data})
    })
  },
  _getProducts: function() {
    let _this = this
    _this.api.updateProduct().then(res => {
      _this.setState({products: res.data})
    })
  },
  _changeMenu(menu) {
    if(+menu.key === 0) {
      window.location.href = '/'
    } else if(+menu.key === 1) {
      window.location.href = '/product.html'
    } else if(+menu.key === 2) {
      window.location.href = '/information.html'
    } else if(+menu.key === 3) {
      window.location.href = '/hospital.html'
    } else
    console.log(menu)
  }
};
