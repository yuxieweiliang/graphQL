export default {
  state: {
    collapsed: false,
    products: [],
    product: {},
    className: null,
    classify: [],
  },
  componentWillMount() {
    const _this = this

    // 加载产品列表
    this.api.updateProduct().then(res => {
      _this.setState({products: res.data})
    });

    // 加载产品分类
    this.api.updateClass().then(res => {
      _this.setState({classify: res.data})
      _this.setState({productClass: res.data[0].name})
    })
  },

  _saveProduct: function() {
    let _this = this
    let { product, products } = this.state;

    console.log(product, products)
    this.api.saveProduct(product)
      .then(res => {
        products.push({})
        _this.setState({ products });
      });
  },
  _productRemove: function(item) {

    this.api.removeProduct(item._id)
      .then(res => {
        products.push({})
        _this.setState({ products });
      });
    console.log(item)
  },
  // 分类名称
  _changeClass(e) {
    this.setState({className: e.target.value})
  },
  _addClass() {

    this.api.newClass({name: this.state.className});
  },
  _addMsg: function(e, key) {
    let product = _.extend({}, this.state.product);
    product[key] = e.target.value
    console.log(product)

    this.setState({ product })
  },
  _changeProductClass: function(e) {
    this.setState({productClass: e.target.value})
  },
  _addProduct: function() {
    $('#addProduct').modal('hide')
    this.props.history.replace('product-add')
  }
};
