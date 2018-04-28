import React, { Component } from 'react';
import RootView from '../../script/common'
import func from './behavior'
import LeftMenuNav from './leftMenuNav'
import '../../../public/css/style.css'
import './style.less'

export default class extends RootView {
  constructor(props) {
    super(props)
    this.method._extend(this, func);
  }

  render() {
    return(<div className="row" style={{width: '100%', height: '100%', margin: 0}}>

      {/*<!--左侧导航开始-->*/}
      <LeftMenuNav/>
      {/*<!--左侧导航结束-->*/}


      {/*<!--右侧部分开始-->*/}
      <div id="page-wrapper"  className="gray-bg dashbard-1">


        {/*<!--右侧头部开始-->*/}
        <div className="row content-tabs">
          <button className="roll-nav roll-left J_tabLeft">
            <i className="fa fa-backward"/>
          </button>
          <nav className="page-tabs J_menuTabs">
            <div className="page-tabs-content">
              <a href="javascript:;" className="active J_menuTab" data-id="table_basic.html">首页</a>
            </div>
          </nav>
          <button className="roll-nav roll-right J_tabRight">
            <i className="fa fa-forward"/>
          </button>
        </div>
        {/*<!--右侧头部结束-->*/}

        <div className="row J_mainContent" id="content-main">
          {this.props.children}
          {/*<FormView/>*/}
        </div>

        <div className="footer">
          <div className="pull-right">
            &copy; 2014-2015 <a href="http://www.zi-han.net/" target="_blank">zihan's blog</a>
          </div>
        </div>
      </div>
      {/*<!--右侧部分结束-->*/}

    </div>)
  }
}