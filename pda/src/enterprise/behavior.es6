
export default {
  state: {
    collapsed: false,
    book: {
      title: false,
      description: false,
    }
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
