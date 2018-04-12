import React, { Component } from 'react';
export default class extends Component {
  render() {
    return(<nav className="navbar-default navbar-static-side" role="navigation">
      <div className="nav-close"><i className="fa fa-times-circle"/>
      </div>
      <div className="sidebar-collapse">
        <ul className="nav" id="side-menu">
          <li className="nav-header">
            <div className="dropdown profile-element">
              <span><img alt="image" className="img-circle"  src={require('../../../public/img/profile_small.jpg')} /></span>
              <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                      <span className="clear">
                     <span className="block m-t-xs"><strong className="font-bold">Beaut-zihan</strong></span>
                      <span className="text-muted text-xs block">超级管理员<b className="caret"/></span>
                      </span>
              </a>
              <ul className="dropdown-menu animated fadeInRight m-t-xs">
                <li><a className="J_menuItem" href="form_avatar.html">修改头像</a>
                </li>
                <li><a className="J_menuItem" href="profile.html">个人资料</a>
                </li>
                <li><a className="J_menuItem" href="contacts.html">联系我们</a>
                </li>
                <li><a className="J_menuItem" href="mailbox.html">信箱</a>
                </li>
                <li className="divider"/>
                <li><a href="login.html">安全退出</a>
                </li>
              </ul>
            </div>
            <div className="logo-element">H+
              <i className="fa fa-forward"></i>
            </div>
          </li>
          <li>
            <a href="/">
              <span className="nav-label">首页</span>
            </a>
            <a href="/product.html">
              <span className="nav-label">产品</span>
            </a>
            <a href="/enterprise.html">
              <span className="nav-label">企业</span>
            </a>
            {/*<Link to="/recruit">
              <span className="nav-label">招聘</span>
            </Link>*/}
          </li>
        </ul>
      </div>
    </nav>)
  }
}