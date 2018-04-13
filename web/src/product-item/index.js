import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Layout, Menu, Carousel, List, Tag, Row, Col, Card, Avatar } from 'antd';
import HeaderView from '../../component/headerView'
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
    const { banner, product, checkedTag, tagsFromServer } = this.state;
    let images = product && product.images

    const data = [
      {
        title: 'Ant Design Title 1',
        description: 'Ant Design, a design language for background applications',
      },
      {
        description: 'Ant Design, a design language for background applications',
      },
      {
        description: 'Ant Design, a design language for background applications',
      },
      {
        description: 'Ant Design, a design language for background applications',
      },
    ];

    return (
      <Layout>
        <HeaderView defaultMenuKey="1"/>
        <Layout>
          <Content style={{ background: '#fff', padding: 0, margin: 0 }}>
            <Row className="hospital-advantage" style={{ padding: '20px 0'}}>
              <Col  md={{ span: 24 }} lg={{ span: 14, offset: 5 }}>
                <Row type="flex">
                  <Col style={{width: 310}}>
                    <Carousel autoplay>
                      {
                        images && (
                          images.map(item => {
                            return (
                              <div><img style={{ height: 300}} src={item} alt=""/></div>
                            )
                          })
                        )
                      }
                    </Carousel>
                  </Col>
                  <Col style={{width: 'calc(100% - 310px)', paddingLeft: 40}}>
                    <List
                      itemLayout="horizontal"
                      dataSource={data}
                      renderItem={item => {
                        console.log(item)
                        if(item.title) {
                          return (
                            <List.Item>
                              <List.Item.Meta
                                title={<a href="https://ant.design">{item.title}</a>}
                                description={item.description}
                              />
                            </List.Item>
                          )
                        } else {
                          return (
                            <List.Item.Meta
                              description={item.description}
                            />
                          )
                        }

                      }}
                    />
                  </Col>

                </Row>
              </Col>
            </Row>
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
                  <Col>
                    <Card
                      type="inner"
                      title="Inner Card title"
                      extra={<a href="#">More</a>}
                    >
                      Inner Card content
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