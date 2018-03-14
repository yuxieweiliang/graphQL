import React from 'react';
import ReactDOM from 'react-dom';
import { Flex, FlexItem, Grids, Button, Dialog, Tab, TabBarItem, Article } from 'react-weui';
import func from './behavior'

class DialogDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    func.didMount();
    console.log('document.getElementById("aui-slide3")');
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
  }
  render() {
    return (
      <div className="aui-content">
        <header className="aui-bar aui-bar-nav">
          <a className="aui-pull-left aui-btn aui-btn-outlined">
            {/*<i className="aui-iconfont aui-icon-home"/>*/}
          </a>
          <div className="aui-title">美丽故事</div>
          <a className="aui-pull-right aui-btn aui-btn-outlined">
            <i className="fa fa-align-justify"  aui-popup-for="top-right"/>
          </a>
        </header>
        <article className="grid">
          <div className="ui-slider" style={{height: 200}}>
            <ul className="ui-slider-content">
              <li className=""><img src="https://gdp.alicdn.com/imgextra/i1/1913312592/TB2gO85XEOWBKNjSZKzXXXfWFXa_!!1913312592.jpg"/></li>
              <li className=""><img src="http://i.gtimg.cn/aoi/sola/20141201154941_GhAN4FCMIF.jpg"/></li>
              <li className="current"><img src="http://i.gtimg.cn/aoi/sola/20141201154939_LZJZBbo7ET.jpg"/></li>
            </ul>
          </div>
        </article>
        <section className="aui-grid aui-margin-b-15">
          <div className="aui-card-list">
            <div className="aui-card-list-header aui-card-list-user aui-border-b">
              <div className="aui-card-list-user-avatar">
                <img src="http://www.auicss.com/aui2.0/image/demo4.png" className="aui-img-round" />
              </div>
              <div className="aui-card-list-user-name">
                <div>AUI</div>
                <span>1天前</span>
              </div>
              <div className="aui-card-list-user-info">北京朝阳</div>
            </div>
            <div className="aui-card-list-content-padded">
              <img src="http://www.auicss.com/aui2.0/image/l2.png" />
            </div>
            <div className="aui-card-list-footer aui-border-t">
              <div><i className="aui-iconfont aui-icon-note"></i> 666</div>
              <div><i className="aui-iconfont aui-icon-laud"></i> 888</div>
              <div><i className="aui-iconfont aui-icon-star"></i> 888</div>
            </div>
          </div>
          <div className="aui-popup aui-popup-top-right" style={{top: 50}} id="top-right">
            <div className="aui-popup-arrow"/>
            <div className="aui-popup-content">
              <ul className="aui-list aui-list-noborder">
                <li className="aui-list-item">
                  <div className="aui-list-item-label-icon">
                    <i className="aui-iconfont aui-icon-my aui-text-warning"/>
                  </div>
                  <div className="aui-list-item-inner aui-list-item-middle">
                    首页
                  </div>
                </li>
                <li className="aui-list-item">
                  <div className="aui-list-item-label-icon">
                    <i className="aui-iconfont aui-icon-mail aui-text-info"/>
                  </div>
                  <div className="aui-list-item-inner">
                    注册
                  </div>
                </li>
                <li className="aui-list-item">
                  <div className="aui-list-item-label-icon">
                    <i className="aui-iconfont aui-icon-star aui-text-danger"/>
                  </div>
                  <div className="aui-list-item-inner">
                    登录
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }

}

if(typeof document !== 'undefined') {
  require('../../css/main.less');
  require('./style.less');
  ReactDOM.render(<DialogDemo/>, document.getElementById('root'));
}

export default DialogDemo;