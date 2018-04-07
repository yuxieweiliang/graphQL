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
    return(<div className="wrapper wrapper-content animated fadeInRight">
      <div className="row">
        <div className="col-sm-12">
          <div className="ibox float-e-margins">
            <div className="ibox-title">
              <h5>简单示例</h5>
              <div className="ibox-tools">
                <Link to="product-add" className="collapse-link">
                  <i className="fa fa-plus"></i>
                </Link>
                <a className="collapse-link">
                  <i className="fa fa-chevron-up"></i>
                </a>
                <a className="dropdown-toggle" data-toggle="dropdown" href="form_basic.html#">
                  <i className="fa fa-wrench"></i>
                </a>
                <ul className="dropdown-menu dropdown-user">
                  <li><a href="form_basic.html#">选项1</a>
                  </li>
                  <li><a href="form_basic.html#">选项2</a>
                  </li>
                </ul>
                <a className="close-link">
                  <i className="fa fa-times"></i>
                </a>
              </div>
            </div>
            <div className="ibox-content">

              <table className="table table-bordered">
                <thead>
                <tr>
                  <th>#</th>
                  <th>产品名称</th>
                  <th>添加时间</th>
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
                          <td>{items.title}</td>
                          <td>{items.title }</td>
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
      </div>
    </div>)
  }
}