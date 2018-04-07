export default {
  state: {
    banner: [],
    update: null
  },

  /**
   * 如果找不到 token 则返回登陆页
   */
  componentWillMount: function() {
    let _this = this;
    let banner = []
    let token = this.method.local.get('token');

    if(!token) {
      window.location.href = '/login'
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
    // let formData = new FormData($('#commentForm')[0]);

    // this.api.updateBanner(formData)
    formData.append('image', file);

    /*function getObjectURL(file) {
      let url = null;
      if (window.createObjcectURL) {
        url = window.createOjcectURL(file);
      } else if (window.URL) {
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL) {
        url = window.webkitURL.createObjectURL(file);
      }
      return url;
    }*/

    // formData.append('image', getObjectURL(file));
    this.setState({update: formData})

   /* $.ajax({
      url: 'http://localhost:3000/banner/updateImg',
      type: 'POST',
      data: formData,

      /!**
       * 必须false才会避开jQuery对 formdata 的默认处理
       * XMLHttpRequest会对 formdata 进行正确的处理
       *!/
      processData: false,
      headers : {
        'Authorization': `Bearer ${ this.method.local.get('token') }`,
        'Access-Control-Allow-Origin': '*'
      },
      contentType: false,

      success: function (responseStr) {
        // alert(responseStr.newPath, 'ffff');
        // $("img").attr({"src": responseStr.newPath}).prependTo($("body"));
      },
      error: function (responseStr) {
        // alert(responseStr.newPath);
      }
    })*/

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
