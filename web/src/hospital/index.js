import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Layout, Menu, Breadcrumb, Icon, Avatar, Row, Col, Card } from 'antd';
import HeaderView from '../../component/headerView'
import data from './behavior'
import './style.less'

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
        <HeaderView defaultMenuKey="3"/>
        <Layout>

          <Row className="hospital-advantage">
            <Col>
              <div className="poster" style={{height: 200, overflow: 'hidden'}}><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517477683043&di=5b97b9672ab731243cd9d9c649d9b5e0&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F8%2F587838ab5358e.jpg" alt=""/></div>
            </Col>
          </Row>
            <Row className="hospital-advantage">
              <Col md={{ span: 24 }} lg={{ span: 20, offset: 2 }}>
                <Layout>
                <Layout.Sider width={200} style={{ background: '#fff' }}>
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                  >
                    <Menu.SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                      <Menu.Item key="1">option1</Menu.Item>
                      <Menu.Item key="2">option2</Menu.Item>
                      <Menu.Item key="3">option3</Menu.Item>
                      <Menu.Item key="4">option4</Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                      <Menu.Item key="5">option5</Menu.Item>
                      <Menu.Item key="6">option6</Menu.Item>
                      <Menu.Item key="7">option7</Menu.Item>
                      <Menu.Item key="8">option8</Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                      <Menu.Item key="9">option9</Menu.Item>
                      <Menu.Item key="10">option10</Menu.Item>
                      <Menu.Item key="11">option11</Menu.Item>
                      <Menu.Item key="12">option12</Menu.Item>
                    </Menu.SubMenu>
                  </Menu>
                </Layout.Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                  <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                  </Breadcrumb>
                  <Layout.Content style={{ background: '#fff', margin: 0, minHeight: 580 }}>
                    <Card
                      type="inner"
                      title="Inner Card title"
                      extra={<a href="#">More</a>}
                    >
                      <Row>
                        <Card.Meta
                          avatar={<img style={{width: 100}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                          title="Card title"
                          description="This is the description"
                        />
                      </Row>
                      <Row>
                        <Card.Meta
                          avatar={<img style={{width: 100}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                          title="Card title"
                          description="This is the description"
                        />
                      </Row>
                      <Row>
                        <Card.Meta
                          avatar={<img style={{width: 100}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                          title="Card title"
                          description="This is the description"
                        />
                      </Row>

                    </Card>

                  </Layout.Content>
                </Layout>
                </Layout>
              </Col>
            </Row>


        </Layout>
      </Layout>
    )
  }
}


ReactDOM.render(
  <IndexPage/>
  , document.getElementById('root'));