import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class extends Component {
  render() {
    return(<nav className="navbar-default navbar-static-side" role="navigation">
      <div className="nav-close"><i className="fa fa-times-circle"/>
      </div>
      <div className="sidebar-collapse">
        <ul className="nav" id="side-menu">
          <li className="nav-header">
            <div className="dropdown profile-element">
              <span><img alt="image" className="img-circle"  src={require('../public/img/profile_small.jpg')} /></span>
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
                <li><a href="login_v2.html">安全退出</a>
                </li>
              </ul>
            </div>
            <div className="logo-element">H+
              <i className="fa fa-forward"></i>
            </div>
          </li>
          <li>
            <Link to="/">
              <span className="nav-label">首页</span>
            </Link>
            <Link to="/product">
              <span className="nav-label">产品</span>
            </Link>
            <Link to="/enterprise">
              <span className="nav-label">企业</span>
            </Link>
            {/*<Link to="/recruit">
              <span className="nav-label">招聘</span>
            </Link>*/}
          </li>
        </ul>
      </div>
    </nav>)
  }
}