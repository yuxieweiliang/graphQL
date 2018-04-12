import React from 'react';
import ReactDom from 'react-dom'
import RootView from '../../script/common'
import func from './behavior'
import './style.less'


// 进行组装
class LoginView extends RootView {
  constructor(props) {
    super(props)
    this.method._extend(this, func);
  }

  render() {
    console.log(localStorage)
    return(<div className="signinpanel">
      <div className="row">
        <div className="col-sm-7"/>
        <div className="col-sm-5">
          <form method="post" action="index.html">
            <h4 className="no-margins">登录：</h4>
            <p className="m-t-md">登录后台管理界面</p>
            <input type="text" onChange={this.changeUsername} className="form-control uname" placeholder="用户名" />
            <input type="password" onChange={this.changePassword} className="form-control pword m-b" placeholder="密码" />
            {/*<a href="">忘记密码了？</a>*/}
            <button type="button" onClick={this.login} className="btn btn-success btn-block">登录</button>
            <p className="m-t-md"><a href="/register">注册</a></p>

          </form>
        </div>
      </div>

    </div>)
  }
}

ReactDom.render(<LoginView/>, document.getElementById('root'));