export default {
  state: {
    product: {},
  },
  componentWillMount() {
    const _this = this
    const {match} = this.props

    // 加载产品列表
    this.api.updateOneProduct(match.params.id).then(res => {
      _this.setState({product: res.data})
    });
  },

  // classify
  _editProduct: function() {
    let _this = this
    let { product } = this.state;

    return this.api.editProduct(product)
  },
  _addMsg: function(e, key) {
    let product = _.extend({}, this.state.product);
    product[key] = e.target.value
    console.log(product)

    this.setState({ product })
  },
  _addImages: function(e) {
    const file = e.target.files[0]
    let formData = new FormData();
    formData.append('image', file);
    formData.append('id', this.props.match.params.id);

    console.log(formData)
    this.api.addProductImg(formData).then(res => console.log(res))
  },
  _changeProductName: function(e) {
    this.setState({product: {
      name: e.target.value
    }})
  },
  _addProduct: function() {
    let { product } = this.state;
    this.api.saveProduct(product).then(res => {
      $('#addProduct').modal('hide')
      this.props.history.replace(`product-add/${res.data._id}`)
    })

  }
};
