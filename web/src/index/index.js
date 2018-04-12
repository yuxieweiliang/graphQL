import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Layout, Menu, Breadcrumb, Icon, Carousel, Row, Col, Card } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Meta } = Card;
import RootView from '../script/common'
import func from './behavior'
import './style.less'

class IndexPage extends RootView {
  constructor(props) {
    super(props);
    this.method._extend(this, func);
  }

/*  createIcon(option) {
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
  }*/

  render() {
    let _this = this
    let { banner, products, menu } = this.state
    let iconArr = this.state.config.icon;
    let containerWidth = {
      style: { display: 'flex', flexFlow: 'wrap' },
      md: { span: 24 },
      lg: { span: 22, offset: 1 },
      xl: { span: 18, offset: 3 },
      xxl: { span: 16, offset: 4 },
    }
    console.log(this)
    return (
      <Layout>
        <Header  className="header" style={{ height: '40px' , display: 'flex'}}>
          <div className="logo"  style={{ width: '120px' }}><i className="fa fa-lemon-o"/></div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['0']}
            style={{ lineHeight: '40px' }}
            onSelect={_this._changeMenu}
          >
            {
              menu && (
                menu.map((item, i) => (
                  <Menu.Item key={i}>{item}</Menu.Item>
                ))
              )
            }
          </Menu>
        </Header>
        <Layout>
          <Content style={{ background: '#fff', padding: 0, margin: 0 }}>
            <Carousel autoplay>
              {
                banner && (
                  banner.map(item => {
                    const left = (1920 - window.innerWidth) / 2
                    console.log()
                    return (
                      <div><img style={{ marginLeft: -left}} src={item.url} alt=""/></div>
                    )
                  })
                )
              }
            </Carousel>
            {/*<Row className="hospital-advantage">
              <Col md={{ span: 24 }} lg={{ span: 20, offset: 2 }}>
                {this.createIcon(iconArr)}
              </Col>
            </Row>*/}
            {/*<Row className="hospital-advantage">
              <Col md={{ span: 24 }} lg={{ span: 20, offset: 2 }}>
                <div className="poster" style={{height: 200, overflow: 'hidden'}}><img src={require('../../public/image/banner.jpg')} style={{width: '100%'}} alt=""/></div>
              </Col>
            </Row>*/}

            <Row className="hospital-product">
              <Col {...containerWidth}>
                <div className="product-title">
                  <h4>护肤乳</h4>
                  <p>Europe Street beat europe Street beat</p>
                </div>
              </Col>
              <Col {...containerWidth}>
                {
                  products && (
                    products.map((item, i) => {
                      let width = `calc(${100/4}% - 8px)`
                      if(window.innerWidth > 1280) {
                        width = `calc(${100/5}% - 8px)`
                      }
                      if(window.innerWidth > 1600){
                        width = `calc(${100/6}% - 8px)`
                      }
                      return (
                        <Card
                          key={i}
                          hoverable
                          onClick={() => window.location.href = `./product-item.html?${item._id}` }
                          style={{ width, margin: '4px' }}
                          cover={<img alt="example" src={item.images[0]} />}>
                          <Meta title={item.name} description="www.instagram.com"/>
                        </Card>
                      )
                    })
                  )
                }
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