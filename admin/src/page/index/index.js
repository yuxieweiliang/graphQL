import React, { Component } from 'react';
import ReactDom from 'react-dom'
import RootView from '../../script/common'
import func from './behavior'
import OutView from '../../component/OutView'
import './style.less'

class IndexView extends RootView {
  constructor(props) {
    super(props)
    this.method._extend(this, func);
  }
  render() {
    console.log(this.state)
    return(<OutView>
      <div className="wrapper wrapper-content animated fadeInRight">

        <div className="row">
          <div className="col-sm-12">
            <div className="ibox float-e-margins">
              <div className="ibox-title">
                <h5>首页设置</h5>
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
                <form className="form-horizontal m-t">
                  {
                    this.state.banner.map((item, i) => {
                      return (
                        <div className="form-group" key={i}>
                          <label className="col-sm-2 control-label">海报：</label>
                          <div className="col-sm-2 text-center">
                            {
                              item ? (
                                <img key={i} className="banner-img" src={`${item.url}`}/>
                              ) : <i className="fa fa-picture-o banner-img" aria-hidden="true"/>
                            }
                          </div>
                          <div className="col-sm-5">
                            {
                              item ? (
                                <div className="form-control banner-img-url">{item.url}</div>
                              ) : (
                                <input onChange={this._changeFile} className="form-control" type="file" />
                              )
                            }
                          </div>
                          <div className="col-sm-3 text-right">
                            <button onClick={() => this._updateBanner(i)} type="button" className="btn btn-success btn-sm">上传</button>
                            <button onClick={() => this._removeBanner(item, i)} type="button" className="btn btn-danger btn-sm">删除</button>
                          </div>
                        </div>
                      )
                    })
                  }
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OutView>)
  }
}


ReactDom.render(<IndexView/>, document.getElementById('root'));