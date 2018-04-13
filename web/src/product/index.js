import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Layout, Row, Col, Card } from 'antd';
import HeaderView from '../../component/headerView'
import func from './behavior'
import './style.less'
const { Meta } = Card;
import RootView from '../script/common'

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
        <HeaderView defaultMenuKey="1"/>
        <Layout>
          <Layout.Content style={{ background: '#fff', padding: 0, margin: 0 }}>
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
          </Layout.Content>
        </Layout>
      </Layout>
    )
  }
}


ReactDOM.render(
  <IndexPage/>
  , document.getElementById('root'));