import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Layout, Menu, Breadcrumb, Tabs, Carousel, Row, Col, Card } from 'antd';
import data from './behavior'
import './style.less'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Meta } = Card;

class IndexPage extends Component {
  createIcon(option) {
    return option.map(item => (
      <div className="icon-box" key={item.icon}>
        <div className="icon-context">
          <i className={`fa fa-${item.icon}`} style={{backgroundColor: item.color}}/>
        </div>
        <div className="icon-text">
          {item.title}
        </div>
      </div>
    ))
  }
  render() {
    let iconArr = data.config.icon;
    return (
      <Layout>
        <Header className="header" style={{ height: '40px' , display: 'flex'}}>
          <div className="logo"  style={{ width: '120px' }}><i className="fa fa-lemon-o"/></div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '40px' }}
          >
            <Menu.Item key="0">网站首页</Menu.Item>
            <Menu.Item key="1">产品分类</Menu.Item>
            <Menu.Item key="2">新闻资讯</Menu.Item>
            <Menu.Item key="3">关于我们</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Content style={{ background: '#fff', padding: 0, margin: 0 }}>
            <Breadcrumb style={{ margin: '16px' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Row className="hospital-advantage">
              <Col md={{ span: 24 }} lg={{ span: 20, offset: 2 }}>
                <div className="poster" style={{height: 200, overflow: 'hidden'}}><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517477683043&di=5b97b9672ab731243cd9d9c649d9b5e0&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F8%2F587838ab5358e.jpg" alt=""/></div>
              </Col>
            </Row>
            <button type="button" className="shit"><span>登录</span></button>
          </Content>
        </Layout>
      </Layout>
    )
  }
}


ReactDOM.render(
  <IndexPage/>
  , document.getElementById('root'));