import React, { Component } from 'react';
import RootView from '../../script/common'
import { Link } from 'react-router-dom'
import func from './behavior'
export default class extends RootView {
  constructor(props) {
    super(props)
    this.method._extend(this, func);
  }
  state = func.state
  render() {
    var _this = this

    console.log(this.state)
    return(<div className="wrapper wrapper-content animated fadeInRight">
      <div className="row">
        <div className="col-sm-12">
          <div className="ibox float-e-margins">
            <div className="ibox-title">
              <h5>分类</h5>
              <div className="ibox-tools">
                <a className="collapse-link" data-toggle="modal" data-target="#addClass">
                  <i className="fa fa-plus"></i>
                </a>
              </div>
            </div>
            <div className="ibox-content">

              <table className="table table-bordered">
                <thead>
                <tr>
                  <th>#</th>
                  <th>分类名称</th>
                  <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {
                  this.state.classify && (
                    this.state.classify.map((items, i) => {
                      return (
                        <tr key={i}>
                          <td>{i}</td>
                          <td>{items.name }</td>
                          <td>
                            <Link to="product-add" className="btn btn-primary btn-sm">编辑</Link>
                            <button className="btn btn-danger btn-sm">删除</button>
                          </td>
                        </tr>
                      )
                    })
                  )
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="ibox float-e-margins">
            <div className="ibox-title">
              <h5>产品</h5>
              <div className="ibox-tools">
                <a className="collapse-link" data-toggle="modal" data-target="#addProduct">
                  <i className="fa fa-plus"></i>
                </a>
              </div>
            </div>
            <div className="ibox-content">

              <table className="table table-bordered">
                <thead>
                <tr>
                  <th>#</th>
                  <th>名称</th>
                  <th>分类</th>
                  <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {
                  this.state.products && (
                    this.state.products.map((items, i) => {
                      return (
                        <tr key={i}>
                          <td>{i}</td>
                          <td>{items.name}</td>
                          <td>{items.classify_name }</td>
                          <td>
                            <Link to="product-add" className="btn btn-primary btn-sm">编辑</Link>
                            <button onClick={e => this._productRemove(items)} className="btn btn-danger btn-sm">删除</button>
                          </td>
                        </tr>
                      )
                    })
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
              <h4 className="modal-title" id="myModalLabel">添加分类</h4>
            </div>
            <div className="modal-body">
              <div className="input-group">
                <span className="input-group-addon">分类名称</span>
                <input onChange={this._changeClass} type="text" className="form-control"/>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>
              <button onClick={this._addClass} type="button" className="btn btn-primary">提交</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="addProduct" tabindex="-1" role="dialog" aria-labelledby="addProductLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 className="modal-title" id="myModalLabel">选择分类</h4>
            </div>
            <div className="modal-body">
              <div className="input-group">
                <span className="input-group-addon">分类</span>
                <select  type="text" className="form-control">
                  {
                    this.state.classify && (
                      this.state.classify.map((items, i) => {
                        return (
                          <option
                            key={i}
                            onClick={() => _this._changeProductClass(items)}
                            value={items.name }>
                            {items.name }
                            </option>
                        )
                      })
                    )
                  }
                </select>
              </div>
              <div className="input-group">
                <span className="input-group-addon">产品名称</span>
                <input onChange={this._changeProductName} type="text" className="form-control"/>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>
              <button onClick={this._addProduct} type="button" className="btn btn-primary">提交</button>
            </div>
          </div>
        </div>
      </div>


    </div>)
  }
}