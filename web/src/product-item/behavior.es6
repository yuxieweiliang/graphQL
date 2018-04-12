import './func'

export default {
  state: {
    config: {
      icon: [
        {icon: 'mobile', title: 'fff', color: '#dd0908'},
        {icon:  'thumbs-up', title: 'fff', color: '#ff9e29'},
        {icon:  'laptop', title: 'fff', color: '#3fb7d2'},
        {icon:  'car', title: 'fff', color: '#7e3b07'},
        {icon:  'motorcycle', title: 'fff', color: '#1963ce'},
        {icon:  'shield', title: 'fff', color: '#c119ce'},
        {icon:  'envira', title: 'fff', color: '#7fbad8'},
        {icon:  'heart', title: 'fff', color: '#1ca39d'},
        {icon:  'plane', title: 'fff', color: '#f49ecf'},
        /*{icon:  'plane', title: 'fff', color: '#070c1f'},
         {icon:  'plane', title: 'fff', color: '#df8012'},*/
      ]
    },
    checkedTag: 'Books',
    tagsFromServer: ['Movies', 'Books', 'Music', 'Sports'],
  },
  componentWillMount() {
    let _this = this
    let id = window.location.href.split('?')[1]
    this.api.getToken().then(function(data) {
      _this.method.local.set('token', data.token)
      _this._getProducts(id)
    })
  },
  _getProducts: function(id) {
    let _this = this
    _this.api.updateProduct(id).then(res => {
      _this.setState({product: res.data})
    })
  },
};

















