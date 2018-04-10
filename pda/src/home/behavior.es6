
export default {
  state: {},
  componentWillMount() {
    let _this = this
    let token = this.method.local.get('token')

    if(!token) {
      this.api.getToken().then(res => _this.method.local.set('token', res.token))
    }

    this.api.getBanner().then(res => {
      if(res.data.length > 0) {
        _this.setState({banner: res.data})
      }
    })
  },
  componentDidMount() {

    var slide = new auiSlide({
      container: document.getElementById("aui-slide3"), //容器
      // "width":300, //宽度
      "height":300, //高度
      "speed":500, //速度
      "autoPlay": 3000, //自动播放
      "loop":true,//是否循环
      "pageShow":true,//是否显示分页器
      "pageStyle":'line', //分页器样式，分dot,line
      'dotPosition':'center' //当分页器样式为dot时控制分页器位置，left,center,right
    });
    var popup = new auiPopup();
    // popup.show(document.getElementById("top-right"))


    var slider = new fz.Scroll('.ui-slider', {
      role: 'slider',
      indicator: true,
      autoplay: true,
      interval: 3000
    });

    slider.on('beforeScrollStart', function() {
      // console.log('start')
    });

    slider.on('scrollEnd', function() {
      // console.log('end')
    });
  }
};
