import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import RootView from '../../src/script/common'
import func from './behavior'
import './style.less'

class HeaderView extends RootView {
  constructor(props) {
    super(props);
    this.method._extend(this, func);
  }
  static defaultProps = {
    defaultMenuKey: '0'
  }
  render() {
    let _this = this
    let { defaultMenuKey } = this.props
    console.log(this)
    return (
      <Layout.Header  className="header" style={{ height: '40px' , display: 'flex'}}>
        <div className="logo"  style={{ width: '120px' }}><i className="fa fa-lemon-o"/></div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[defaultMenuKey]}
          style={{ lineHeight: '40px' }}
          onSelect={_this._changeMenu}
        >
          {
            this.state.menu && (
              this.state.menu.map((item, i) => (
                <Menu.Item key={i}>{item}</Menu.Item>
              ))
            )
          }
        </Menu>
      </Layout.Header>
    )
  }
}

export default HeaderView
