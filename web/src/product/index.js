import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Layout, Menu, Breadcrumb, Tabs, Tag, Row, Col, Card } from 'antd';
import data from './behavior'
import 'antd/dist/antd.less';
import '../../bower_components/font-awesome/less/font-awesome.less';
import './style.less'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Meta } = Card;
const CheckableTag = Tag.CheckableTag;

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedTag: 'Books'
    };
  }

  render() {
    const { checkedTag } = this.state;
    const tagsFromServer = ['Movies', 'Books', 'Music', 'Sports'];
    let url = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517477683043&di=5b97b9672ab731243cd9d9c649d9b5e0&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F8%2F587838ab5358e.jpg';
    console.log(checkedTag);
    return (
      <Layout>
        <Header className="header" style={{ height: '40px' , display: 'flex'}}>
          <div className="logo"  style={{ width: '120px' }}><i className="fa fa-lemon-o"/></div>
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
          <Content style={{ background: '#fff', padding: 0, margin: 0 }}>
            <Row className="hospital-advantage">
              <Col >
                <div className="poster" style={{height: 200, overflow: 'hidden'}}>
                  <img src={ url } alt=""/>
                </div>
              </Col>
            </Row>
            <Row className="hospital-classify" style={{paddingTop: '20px', paddingBottom: '20px'}}>
              <Col md={{ span: 24 }} lg={{ span: 14, offset: 5 }} style={{display: 'flex', paddingBottom: '20px', borderBottom: '1px solid #ccc'}}>
                <div className="classify-name" style={{width: 50, fontWeight: 'bold'}}>分类：</div>
                <div className="classify-tag-box">
                  {tagsFromServer.map(tag => (
                    <CheckableTag
                      key={tag}
                      checked={checkedTag === tag}
                      onChange={checked => this.setState({ checkedTag: tag })}
                    >
                      {tag}
                    </CheckableTag>
                  ))}
                </div>
              </Col>
            </Row>
            <Row className="hospital-advantage">
              <Col md={{ span: 24 }} lg={{ span: 14, offset: 5 }}>
                <Row className="hospital-product">
                  <Col style={{display: 'flex', flexFlow: 'wrap'}}>
                    <div className="product-title">
                      <h3>护肤乳</h3>
                      <p>Europe Street beat europe Street beat</p>
                      {/*

                      */}
                    </div>
                  </Col>
                  <Col style={{display: 'flex', flexFlow: 'wrap'}}>
                    <Card
                      hoverable
                      style={{ width: 'calc((100% - 40px) / 5)', margin: '4px' }}
                      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                      <Meta title="Europe Street beat" description="www.instagram.com"/>
                    </Card>
                    <Card
                      hoverable
                      style={{ width: 'calc((100% - 40px) / 5)', margin: '4px' }}
                      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                      <Meta title="Europe Street beat" description="www.instagram.com"/>
                    </Card>
                    <Card
                      hoverable
                      style={{ width: 'calc((100% - 40px) / 5)', margin: '4px' }}
                      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                      <Meta title="Europe Street beat" description="www.instagram.com"/>
                    </Card>
                    <Card
                      hoverable
                      style={{ width: 'calc((100% - 40px) / 5)', margin: '4px' }}
                      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                      <Meta title="Europe Street beat" description="www.instagram.com"/>
                    </Card>
                    <Card
                      hoverable
                      style={{ width: 'calc((100% - 40px) / 5)', margin: '4px' }}
                      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                      <Meta title="Europe Street beat" description="www.instagram.com"/>
                    </Card>
                    <Card
                      hoverable
                      style={{ width: 'calc((100% - 40px) / 5)', margin: '4px' }}
                      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                      <Meta title="Europe Street beat" description="www.instagram.com"/>
                    </Card>
                    <Card
                      hoverable
                      style={{ width: 'calc((100% - 40px) / 5)', margin: '4px' }}
                      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                      <Meta title="Europe Street beat" description="www.instagram.com"/>
                    </Card>
                  </Col>
                </Row>

              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    )
  }
}


ReactDOM.render(
  <IndexPage/>
  , document.getElementById('root'));