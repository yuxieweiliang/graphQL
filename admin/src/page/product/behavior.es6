export default {
  state: {
    collapsed: false,
    products: [],
    product: {}
  },
  componentWillMount() {
    this._updateProduct()
  },

  _updateProduct: function() {
    this.api.updateProduct();
  },

  _saveProduct: function() {
    let _this = this
    let { product, products } = this.state;
    this.api.saveProduct(product)
      .then(res => {
        products.push({})
        _this.setState({ products });
      });
  },

  _addMsg: function(e, key) {
    let { product } = this.state;
    product[key] = e.target.value
    this.setState({ product })
  },
};
