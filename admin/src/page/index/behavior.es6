export default {
  state: {
    banner: [],
    update: null
  },

  /**
   * 如果找不到 token 则返回登陆页
   */
  componentWillMount: function() {
    let token = this.method.local.get('token')
    if(!token) {
      window.location.href = '/login'
    }

    // 默认六张海报
    for(let i = 0; i < 6; i ++) {
      this.state.banner.push(<i key={i} className="fa fa-picture-o banner-img" aria-hidden="true"/>)
    }

    this.api.getBanner()
  },

  componentDidMount: function() {

    console.log(window.location.href)
  },

  /**
   * 上传海报
   * @param e
   * @private
   */
  _changeFile: function(e) {
    let file = e.target.files[0]
    let formData = new FormData();

    function getObjectURL(file) {
      let url = null;
      if (window.createObjcectURL) {
        url = window.createOjcectURL(file);
      } else if (window.URL) {
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL) {
        url = window.webkitURL.createObjectURL(file);
      }
      return url;
    }


    formData.append('image', getObjectURL(file));

    $.ajax({
      url: 'http://localhost:3000/banner/update',
      type: 'POST',
      data: JSON.stringify({
        name: file.name,
        type: file.type
      }),

      /**
       * 必须false才会避开jQuery对 formdata 的默认处理
       * XMLHttpRequest会对 formdata 进行正确的处理
       */
      processData: false,
      headers : {
        'Authorization': `Bearer ${ this.method.local.get('token') }`,
        'Access-Control-Allow-Origin': '*'
      },
      contentType: false,

      success: function (responseStr) {
        // alert(responseStr.newPath, 'ffff');
        $("img").attr({"src": responseStr.newPath}).prependTo($("body"));
      },
      error: function (responseStr) {
        // alert(responseStr.newPath);
      }
    })


    this.setState({update: formData})
  },

  /**
   * 上传海报
   * @private
   */
  _updateBanner: function() {

    if(this.state.update) {
      this.api.updateBanner(this.state.update)
    }
  },

};
