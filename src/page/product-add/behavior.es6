export default {
  state: {
    product: {},
  },
  componentWillMount() {
    const _this = this

    // 加载产品列表
    this.api.updateOneProduct(window.location.href.split('?')[1]).then(res => {
      _this.setState({product: res.data})
      _this.refs.description.value = res.data.description
      _this.refs.introduction.value = res.data.introduction
    });
  },

  // 点击提交按钮
  _editProduct: function() {
    let _this = this
    let { product } = this.state;

    return this.api.editProduct(product).then(res => window.location.href = '/product.html')
  },

  // 输入内容
  _addMsg: function(e, key) {
    let product = _.extend({}, this.state.product);
    product[key] = e.target.value

    this.setState({ product })
  },

  // 添加图片
  _addImages: function(e) {
    const { product } = this.state
    let _this = this
    const file = e.target.files[0]
    let id = window.location.href.split('?')[1]
    let formData = new FormData();
    formData.append('image', file);

    formData.append('id', id);

    this.api.addProductImg(formData).then(res => {
      product.images.push(res.url)
      _this.setState({product})
    })
  }
};
