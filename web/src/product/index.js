import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Layout, Menu, Breadcrumb, Tabs, Tag, Row, Col, Card } from 'antd';
import func from './behavior'
import './style.less'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Meta } = Card;
import RootView from '../script/common'
const CheckableTag = Tag.CheckableTag;

class IndexPage extends RootView {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.method._extend(this, func);
  }

  render() {
    const { banner, products, checkedTag, tagsFromServer } = this.state;
    let url = banner && banner[0].url;
    console.log(products);
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
            <Menu.Item key="0">网站首页</Menu.Item>
            <Menu.Item key="1">产品分类</Menu.Item>
            <Menu.Item key="2">新闻资讯</Menu.Item>
            <Menu.Item key="3">关于我们</Menu.Item>
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
            {/*<Row className="hospital-classify" style={{paddingTop: '20px'}}>
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
            </Row>*/}
            <Row className="hospital-advantage" style={{paddingTop: '20px'}}>
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
                    {
                      products && products.map((item, key) => (
                        <Card
                          hoverable
                          onClick={() => window.location.href = `./product-item.html?${item._id}` }
                          style={{ width: 'calc((100% - 40px) / 5)', margin: '4px' }}
                          cover={<img alt="example" src={item.images[0]} />}>
                          <Meta title={item.name} description={item.description}/>
                        </Card>
                      ))
                    }

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