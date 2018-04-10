import React from 'react';
import ReactDOM from 'react-dom';
import { Flex, FlexItem, Grids, Button, Dialog, Tab, TabBarItem, Article } from 'react-weui';
import func from './behavior'
import RootView from '../script/common'

class IndexPage extends RootView {
  constructor(props) {
    super(props)
    this.method._extend(this, func);
  }
  toProduct() {
    window.location.href = 'products'
  }
  toEnterprise() {
    window.location.href = 'enterprise'
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
        {/*<section className="aui-grid aui-margin-b-15">
          <div className="aui-row">
            <div className="aui-col-xs-3">
              <div className="aui-badge">88</div>
              <i className="aui-iconfont aui-icon-home"></i>
              <div className="aui-grid-label">首页</div>
            </div>
            <div className="aui-col-xs-3">
              <i className="aui-iconfont aui-icon-gear"></i>
              <div className="aui-grid-label" onClick={this.toEnterprise}>设置</div>
            </div>
            <div className="aui-col-xs-3">
              <i className="fa fa-diamond"></i>
              <div className="aui-grid-label">地图</div>
            </div>
            <div className="aui-col-xs-3">
              <i className="fa fa-cart-plus"></i>
              <div className="aui-grid-label">购物车</div>
            </div>
            <div className="aui-col-xs-3">
              <div className="aui-badge"></div>
              <i className="aui-iconfont aui-icon-date"></i>
              <div className="aui-grid-label">日期</div>
            </div>
            <div className="aui-col-xs-3">
              <div className="aui-dot"></div>
              <i className="aui-iconfont aui-icon-cart"></i>
              <div className="aui-grid-label">购物车</div>
            </div>
          </div>
        </section>*/}
        <section className="aui-content aui-margin-b-15">
          <ul className="aui-list aui-media-list">
            <li className="aui-list-item">
              <div className="aui-list-item-inner">
                <div className="aui-list-item-title">电子</div>
                <p>随便写点拼配的接受</p>
                <div className="aui-row aui-row-padded">
                  <div className="aui-col-xs-4" onClick={this.toProduct}>
                    <img src="aui-master/image/demo1.png"/>
                  </div>
                  <div className="aui-col-xs-4" onClick={this.toProduct}>
                    <img src="aui-master/image/demo2.png" />
                  </div>
                  <div className="aui-col-xs-4" onClick={this.toProduct}>
                    <img src="aui-master/image/demo3.png" />
                  </div>
                  <div className="aui-col-xs-4" onClick={this.toProduct}>
                    <img src="aui-master/image/demo3.png" />
                  </div>
                  <div className="aui-col-xs-4" onClick={this.toProduct}>
                    <img src="aui-master/image/demo3.png" />
                  </div>
                  <div className="aui-col-xs-4" onClick={this.toProduct}>
                    <img src="aui-master/image/demo3.png" />
                  </div>
                </div>
              </div>
            </li>
            <li className="aui-list-item">
              <div className="aui-list-item-inner">
                <div className="aui-list-item-title aui-row">护肤</div>
                <p>随便写点拼配的接受</p>
                <div className="aui-row aui-row-padded">
                  <div className="aui-col-xs-4" onClick={this.toProduct}>
                    <img src="aui-master/image/demo1.png"/>
                  </div>
                  <div className="aui-col-xs-4" onClick={this.toProduct}>
                    <img src="aui-master/image/demo2.png" />
                  </div>
                  <div className="aui-col-xs-4" onClick={this.toProduct}>
                    <img src="aui-master/image/demo3.png" />
                  </div>
                </div>
              </div>
            </li>
          </ul>
          {/*
              这里是右上角菜单
          */}
          {/*<div className="aui-popup aui-popup-top-right" style={{top: 50}} id="top-right">
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
                  <a href="/login" className="aui-list-item-inner">
                    登录





                  </a>
                </li>
              </ul>
            </div>
          </div>*/}
        </section>
      </div>
    );
  }

}

if(typeof document !== 'undefined') {
  require('../../css/main.less');
  require('./style.less');
  ReactDOM.render(<IndexPage/>, document.getElementById('root'));
}

export default IndexPage;