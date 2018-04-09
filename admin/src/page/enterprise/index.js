import React, { Component } from 'react';
import RootView from '../../script/common'
import func from './behavior'
export default class extends RootView {
  constructor(props) {
    super(props)
    this.method._extend(this, func);
  }
  render() {
    const { dynamic } = this.state
    return(<div className="wrapper wrapper-content animated fadeInRight">

      <div className="row">
        <div className="col-sm-12">
          <div className="ibox float-e-margins">
            <div className="ibox-title">
              <h5>分类</h5>
              <div className="ibox-tools">
                <a className="collapse-link" data-toggle="modal" data-target="#addClass">
                  <i className="fa fa-plus"/>
                </a>
              </div>
            </div>
            <div className="ibox-content">

              <table className="table table-bordered">
                <thead>
                <tr>
                  <th width="10%">#</th>
                  <th width="70%">企业动态</th>
                  <th className="text-center" width="20%">操作</th>
                </tr>
                </thead>
                <tbody>
                {
                  dynamic && (
                    dynamic.map((item, i) => (
                      <tr key={i}>
                        <td>{i}</td>
                        <td>{item}</td>
                        <td className="text-center">
                          {/*<a to="product-add" className="btn btn-primary btn-sm">编辑</a>*/}
                          <button className="btn btn-danger btn-sm">删除</button>
                        </td>
                      </tr>
                    ))
                  )
                }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="addClass" tabindex="-1" role="dialog" aria-labelledby="addClassLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 className="modal-title" id="myModalLabel">添加动态</h4>
            </div>
            <div className="modal-body row">
              <div className="form-group">
                <div className="col-sm-12">
                  <textarea onChange={this._enterpriseDynamic} id="ccomment" name="comment" className="form-control" required="" aria-required="true"/>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>
              <button onClick={this._addDynamic} type="button" className="btn btn-primary">提交</button>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}