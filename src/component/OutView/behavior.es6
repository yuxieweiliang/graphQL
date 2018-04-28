export default {
  state: {
    banner: [],
    update: null
  },

  /**
   * 如果找不到 token 则返回登陆页
   */
  componentWillMount: function() {
/*
    let _this = this;
    let banner = []
    let token = this.method.local.get('token');

    if(!token) {
      // this.props.history.push('/login')
      // window.location.href = '/login'
    }

    // 默认六张海报
    for(let i = 0; i < 6; i ++) {
      banner.push(null)
    }

    this.api.getBanner().then(function(data) {
      data.data.map((item, i) => {
        banner[i] = item
      })
      _this.setState({banner})
      // console.log(_this.state.banner)
    })
*/

  },

  componentDidMount: function() {

    // console.log(window.location.href)
  },

  /**
   * 上传海报
   * @param e
   * @private
   */
  _changeFile: function(e) {
    let file = e.target.files[0]
    let formData = new FormData();
    formData.append('image', file);

    this.setState({update: formData})

  },

  /**
   * 上传海报
   * @private
   */
  _updateBanner: function(i) {
    let _this = this;
    let banner = this.state.banner

    if(this.state.update) {
      this.api.updateBanner(this.state.update).then(res => {
        banner[i] = res
        _this.setState({banner})
      })
    }
  },

  /**
   * 上传海报
   * @private
   */
  _removeBanner: function(option, i) {
    let _this = this;
    let banner = this.state.banner

    this.api.removeBanner({_id: option._id}).then(res => {
      if(res.data) {
        banner[i] = null
        _this.setState({banner})
      }
    })
  },

};
