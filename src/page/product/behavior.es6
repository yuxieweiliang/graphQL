export default {
  state: {
    collapsed: false,
    products: [],
    product: {},
    className: null,
    productClass: null,
    classify: [],
  },
  componentWillMount() {
    const _this = this

    // this.props.history.replace(`/product-add/5acaff4f8a279101fc2b02bf`)
    // 加载产品列表
    this.api.updateProduct().then(res => {
      _this.setState({products: res.data})
    });

    // 加载产品分类
    this.api.updateClass().then(res => {
      _this.setState({classify: res.data})
      _this.setState({productClass: res.data[0]})
    })
  },

  // classify
  _saveProduct: function() {
    let _this = this
    let { product, products, productClass } = this.state;

    console.log(_.extend({}, product, {classify: productClass}))
    return this.api.saveProduct(_.extend({}, product, {
      classify_name: productClass.name,
      classify_id: productClass._id,
    }))
      .then(res => {
        products.push({})
        _this.setState({ products });
        return res
      });
  },
  _productRemove: function(item) {

    this.api.removeProduct(item)
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

    this.setState({ product })
  },
  _changeProductClass: function(productClass) {
    this.setState({productClass})
  },
  _changeProductName: function(e) {
    this.setState({product: {
      name: e.target.value
    }})
  },
  _addProduct: function() {
    this._saveProduct().then(res => {
      $('#addProduct').modal('hide')
      window.location.href = `/product-add?${res.data._id}`
    })

  }
};
