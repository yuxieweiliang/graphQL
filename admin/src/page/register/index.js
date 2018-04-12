import React from 'react';
import ReactDom from 'react-dom'
import RootView from '../../script/common'
import func from './behavior'
import './style.less'


// 进行组装
class RegisterView extends RootView {
  constructor(props) {
    super(props)
    this.method._extend(this, func);
  }

  render() {
    return(<div className="middle-box text-center loginscreen   animated fadeInDown">
      <div>
        <div>
          <h1 className="logo-name">ML</h1>
        </div>
        <h3>欢迎注册密容</h3>
        <p>创建一个密容新账户</p>
        <form className="m-t" role="form" action="login.html">

          {/*     账号      */}
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="请输入用户名"
              required=""
              onChange={this.changeUsername}/>
          </div>

          {/*     秘密      */}
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="请输入密码"
              required=""
              onChange={this.changePassword} />
          </div>

          {/*     重复秘密      */}
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="请再次输入密码"
              required=""
              onChange={this.changePasswordAgain} />
          </div>


          <button
            type="button"
            className="btn btn-primary block full-width m-b"
            onClick={this.register}>
            注 册
          </button>

          <p className="text-muted text-center">
            <small>已经有账户了？</small>
            <a href="login.html">点此登录</a>
          </p>
        </form>
      </div>
    </div>)
  }
}
ReactDom.render(<RegisterView/>, document.getElementById('root'));