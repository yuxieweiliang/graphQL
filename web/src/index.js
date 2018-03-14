import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Layout, Menu, Breadcrumb, Icon, Carousel, Row, Col, Card } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.less';
import './style.less'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Meta } = Card;

moment.locale('zh-cn');
class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <Header className="header" style={{ height: '40px' , display: 'flex'}}>
          <div className="logo"  style={{ width: '120px' }}>a</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '40px' }}
          >
            <Menu.Item key="1">网站首页</Menu.Item>
            <Menu.Item key="2">产品分类</Menu.Item>
            <Menu.Item key="3">新闻资讯</Menu.Item>
            <Menu.Item key="4">关于我们</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Layout>
            <Carousel autoplay>
              <div><h3>1</h3></div>
              <div><h3>2</h3></div>
              <div><h3>3</h3></div>
              <div><h3>4</h3></div>
            </Carousel>
            <Breadcrumb style={{ margin: '16px' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>


            <Content style={{ background: '#fff', padding: 0, margin: 0 }}>
              <Row className="hospital-advantage">
                <Col md={{ span: 24 }} lg={{ span: 20, offset: 2 }}>
                  fdsafda
                </Col>
              </Row>
              <Row className="hospital-product">
                <Col md={{ span: 24 }} lg={{ span: 20, offset: 2 }} style={{display: 'flex', flexFlow: 'wrap'}}>
                  <Card
                    hoverable
                    style={{ width: 200, margin: '4px' }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                    <Meta title="Europe Street beat" description="www.instagram.com"/>
                  </Card>
                  <Card
                    hoverable
                    style={{ width: 200, margin: '4px' }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                    <Meta title="Europe Street beat" description="www.instagram.com"/>
                  </Card>
                  <Card
                    hoverable
                    style={{ width: 200, margin: '4px' }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                    <Meta title="Europe Street beat" description="www.instagram.com"/>
                  </Card>
                  <Card
                    hoverable
                    style={{ width: 200, margin: '4px' }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                    <Meta title="Europe Street beat" description="www.instagram.com"/>
                  </Card>
                  <Card
                    hoverable
                    style={{ width: 200, margin: '4px' }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                    <Meta title="Europe Street beat" description="www.instagram.com"/>
                  </Card>
                  <Card
                    hoverable
                    style={{ width: 200, margin: '4px' }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                    <Meta title="Europe Street beat" description="www.instagram.com"/>
                  </Card>
                  <Card
                    hoverable
                    style={{ width: 200, margin: '4px' }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                    <Meta title="Europe Street beat" description="www.instagram.com"/>
                  </Card>
                </Col>
              </Row>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}


ReactDOM.render(
  <IndexPage/>
  , document.getElementById('root'));