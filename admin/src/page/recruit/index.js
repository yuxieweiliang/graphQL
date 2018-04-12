import React, { Component } from 'react'
import ReactDom from 'react-dom'
import RootView from '../../script/common'
import func from './behavior'
import OutView from '../../component/OutView'

class RecruitView extends RootView {
  constructor(props) {
    super(props)
    this.method._extend(this, func);
  }
  render() {
    return(<OutView>
      <div className="wrapper wrapper-content animated fadeInRight">
        <div className="row">
          <div className="col-sm-12">
            <div className="ibox float-e-margins">
              <div className="ibox-title">
                <h5>招聘信息</h5>
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
                    <label className="col-sm-2 control-label">产品名称：</label>
                    <div className="col-sm-8">
                      <input id="cname" name="name" type="text" className="form-control" required="" aria-required="true"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">产品简介：</label>
                    <div className="col-sm-8">
                      <input id="cemail" type="email" className="form-control" name="email" required="" aria-required="true"/>
                      <span className="help-block m-b-none"><i className="fa fa-info-circle"/>这里写点提示的内容</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">产品图片：</label>
                    <div className="col-sm-8">
                      <input id="curl" type="url" className="form-control" name="url"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">说明：</label>
                    <div className="col-sm-8">
                      <textarea id="ccomment" name="comment" className="form-control" required="" aria-required="true"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-8 col-sm-offset-2">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" className="checkbox" id="agree" name="agree"/>
                          发布
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-8 col-sm-offset-2">
                      <button className="btn btn-primary" type="submit">提交</button>
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
ReactDom.render(<RecruitView/>, document.getElementById('root'));