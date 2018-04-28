import React, { Component } from 'react';

export default class extends Component {
  state = func.state
  render() {
    return(<div id="page-wrapper"  className="gray-bg dashbard-1">

      {/*<!--右侧部分开始-->*/}
      <div className="row content-tabs">
        <button className="roll-nav roll-left J_tabLeft"><i className="fa fa-backward"></i>
        </button>
        <nav className="page-tabs J_menuTabs">
          <div className="page-tabs-content">
            <a href="javascript:;" className="active J_menuTab" data-id="table_basic.html">首页</a>
          </div>
        </nav>
        <button className="roll-nav roll-right J_tabRight"><i className="fa fa-forward"></i>
        </button>
      </div>
      <div className="row J_mainContent" id="content-main">
        <TableView/>
        {/*<FormView/>*/}
      </div>

      <div className="footer">
        <div className="pull-right">&copy; 2014-2015 <a href="http://www.zi-han.net/" target="_blank">zihan's blog</a>
        </div>
      </div>
      {/*<!--右侧部分结束-->*/}

    </div>)
  }
}