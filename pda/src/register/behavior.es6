
export default {
  state: {
    collapsed: false,
    book: {
      title: false,
      description: false,
    }
  },

  componentWillMount() {
    this.api.getBanner()
  },
  componentDidMount() {

    this.didMount()

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
  },
  didMount: function() {

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
