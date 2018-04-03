import React, { Component } from 'react';
import func from './behavior'

export default class extends Component {
  state = func.state
  render() {
    return(<div className="row">
      <div className="col-sm-12">
        <div className="ibox float-e-margins">

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
              <tr>
                <td>1</td>
                <td>张三</td>
                <td>2018-08-08</td>
                <td>
                  <button className="btn btn-primary btn-sm">编辑</button>
                  <button className="btn btn-danger btn-sm">删除</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>李四</td>
                <td>2018-08-08</td>
                <td>
                  <button className="btn btn-primary btn-sm">编辑</button>
                  <button className="btn btn-danger btn-sm">删除</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>王麻子</td>
                <td>2018-08-08</td>
                <td>
                  <button className="btn btn-primary btn-sm">编辑</button>
                  <button className="btn btn-danger btn-sm">删除</button>
                </td>
              </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>)
  }
}