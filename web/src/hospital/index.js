import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Layout, Menu, Breadcrumb, Icon, Avatar, Row, Col, Card } from 'antd';
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
    return (
      <Layout>
        <Header className="header" style={{ height: '40px' , display: 'flex'}}>
          <div className="logo"  style={{ width: '120px' }}><i className="fa fa-lemon-o"/></div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['4']}
            style={{ lineHeight: '40px' }}
          >
            <Menu.Item key="0">网站首页</Menu.Item>
            <Menu.Item key="1">产品分类</Menu.Item>
            <Menu.Item key="2">新闻资讯</Menu.Item>
            <Menu.Item key="3">关于我们</Menu.Item>
          </Menu>
        </Header>
        <Layout>

          <Row className="hospital-advantage">
            <Col>
              <div className="poster" style={{height: 200, overflow: 'hidden'}}><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517477683043&di=5b97b9672ab731243cd9d9c649d9b5e0&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F8%2F587838ab5358e.jpg" alt=""/></div>
            </Col>
          </Row>
            <Row className="hospital-advantage">
              <Col md={{ span: 24 }} lg={{ span: 20, offset: 2 }}>
                <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                  >
                    <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                      <Menu.Item key="1">option1</Menu.Item>
                      <Menu.Item key="2">option2</Menu.Item>
                      <Menu.Item key="3">option3</Menu.Item>
                      <Menu.Item key="4">option4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                      <Menu.Item key="5">option5</Menu.Item>
                      <Menu.Item key="6">option6</Menu.Item>
                      <Menu.Item key="7">option7</Menu.Item>
                      <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                      <Menu.Item key="9">option9</Menu.Item>
                      <Menu.Item key="10">option10</Menu.Item>
                      <Menu.Item key="11">option11</Menu.Item>
                      <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                  </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                  <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                  </Breadcrumb>
                  <Content style={{ background: '#fff', margin: 0, minHeight: 580 }}>
                    <Card
                      type="inner"
                      title="Inner Card title"
                      extra={<a href="#">More</a>}
                    >
                      <Row>
                        <Meta
                          avatar={<img style={{width: 100}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                          title="Card title"
                          description="This is the description"
                        />
                      </Row>
                      <Row>
                        <Meta
                          avatar={<img style={{width: 100}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                          title="Card title"
                          description="This is the description"
                        />
                      </Row>
                      <Row>
                        <Meta
                          avatar={<img style={{width: 100}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                          title="Card title"
                          description="This is the description"
                        />
                      </Row>

                    </Card>

                  </Content>
                </Layout>
                </Layout>
              </Col>
            </Row>


        </Layout>
      </Layout>
    )
    let iconArr = data.config.icon;
  }
}


ReactDOM.render(
  <IndexPage/>
  , document.getElementById('root'));