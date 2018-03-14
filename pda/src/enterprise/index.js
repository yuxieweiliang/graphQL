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
  }
  returnApp() {
    window.location.href = '/'
  }
  render() {
    return (
      <div className="aui-content">
        <header className="aui-bar aui-bar-nav">
          <a className="aui-pull-left aui-btn aui-btn-outlined">
            <i className="fa fa-angle-left" onClick={this.returnApp}/>
          </a>
          <div className="aui-title">企业介绍</div>
          <a className="aui-pull-right aui-btn aui-btn-outlined">
            <i className="fa fa-align-justify"  aui-popup-for="top-right"/>
          </a>
        </header>
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
            <div className="aui-card-list-content-padded">
              内容区域，卡片列表布局样式可以实现APP中常见的各类样式
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