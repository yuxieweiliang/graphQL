import React, { Component } from 'react';
import ReactDom from 'react-dom'
import RootView from '../../script/common'
import func from './behavior'
import OutView from '../../component/OutView'
import './style.less'


class AddProductView extends RootView {
  constructor(props) {
    super(props)
    this.method._extend(this, func);
  }
  render() {
    const { product } = this.state
    return(<OutView>
      <div className="wrapper wrapper-content animated fadeInRight">

        <div className="row">
          <div className="col-sm-12">
            <div className="ibox float-e-margins">
              <div className="ibox-title">
                <h5>简单示例</h5>
                <div className="ibox-tools">
                  <a className="collapse-link">
                    <i className="fa fa-chevron-up"/>
                  </a>
                  <a className="dropdown-toggle" data-toggle="dropdown" href="form_basic.html#">
                    <i className="fa fa-wrench"/>
                  </a>
                  <ul className="dropdown-menu dropdown-user">
                    <li><a href="form_basic.html#">选项1</a>
                    </li>
                    <li><a href="form_basic.html#">选项2</a>
                    </li>
                  </ul>
                  <a className="close-link">
                    <i className="fa fa-times"/>
                  </a>
                </div>
              </div>
              <div className="ibox-content">
                <form className="form-horizontal m-t" id="commentForm">
                  <div className="form-group">
                    <label className="col-sm-2 control-label">产品分类：</label>
                    <div className="col-sm-8">
                      <input value={product.classify_name} type="text" disabled className="form-control"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">产品名称：</label>
                    <div className="col-sm-8">
                      <input value={product.name} type="text" disabled className="form-control"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">产品简介：</label>
                    <div className="col-sm-8">
                      <input ref="introduction" onChange={(e) => this._addMsg(e, 'introduction')} type="text" className="form-control"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">产品图片：</label>
                    <div className="col-sm-8 image-update-container">
                      {
                        product.images && product.images.map((item, i) => (
                          <div className="product-img image-list">
                            <i className="fa fa-close"/>
                            <img key={i} src={item} alt=""/>
                          </div>
                        ))
                      }
                      <div className="product-img image-update">
                        <i className="fa fa-plus"/>
                        <input onChange={this._addImages} type="file" className="image-update"/>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">相关：</label>
                    <div className="col-sm-8">
                      <textarea ref="description" onChange={(e) => this._addMsg(e, 'description')} className="form-control"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-8 col-sm-offset-2">
                      <button onClick={this._editProduct} className="btn btn-primary" type="button">提交</button>
                      <a href="/product.html" className="btn btn-primary">返回</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </OutView>)
  }
}
ReactDom.render(<AddProductView/>, document.getElementById('root'));