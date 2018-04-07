import React from 'react';
import RootView from '../../script/common'
import func from './behavior'
import './style.less'


// 进行组装
export default class extends RootView {
  constructor(props) {
    super(props)
    this.method._extend(this, func);
  }

  render() {
    console.log(localStorage)
    return(<div className="signinpanel">
      <div className="row">
        <div className="col-sm-7">
          {/*<div className="signin-info">
            <div className="logopanel m-b">
              <h1>[ `o` ]</h1>
            </div>
            <div className="m-b"/>
            <h4>欢迎使用 <strong>amdin</strong></h4>
            <ul className="m-b">
              <li><i className="fa fa-arrow-circle-o-right m-r-xs"/> 优势一</li>
              <li><i className="fa fa-arrow-circle-o-right m-r-xs"/> 优势二</li>
              <li><i className="fa fa-arrow-circle-o-right m-r-xs"/> 优势三</li>
              <li><i className="fa fa-arrow-circle-o-right m-r-xs"/> 优势四</li>
              <li><i className="fa fa-arrow-circle-o-right m-r-xs"/> 优势五</li>
            </ul>
            <strong>还没有账号？ <a href="#">立即注册&raquo;</a></strong>
          </div>*/}
        </div>
        <div className="col-sm-5">
          <form method="post" action="index.html">
            <h4 className="no-margins">登录：</h4>
            <p className="m-t-md">登录后台管理界面</p>
            <input type="text" onChange={this.changeUsername} className="form-control uname" placeholder="用户名" />
            <input type="password" onChange={this.changePassword} className="form-control pword m-b" placeholder="密码" />
            {/*<a href="">忘记密码了？</a>*/}
            <button type="button" onClick={this.login} className="btn btn-success btn-block">登录</button>
          </form>
        </div>
      </div>
      {/*<div className="signup-footer">
        <div className="pull-left">
          &copy; 2015 All Rights Reserved. H+
        </div>
      </div>*/}
    </div>)
  }
}