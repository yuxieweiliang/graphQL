import React, { Component } from 'react';
export default class extends Component {
  render() {

    return(<div className="row">
      <div className="col-sm-12">
        <div className="ibox float-e-margins">

          <div className="ibox-content">

            <table className="table table-bordered">
              <thead>
              <tr>
                <th>#</th>
                <th>姓名</th>
                <th>性别</th>
                <th>年龄</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>张三</td>
                <td>男</td>
                <td>23</td>
              </tr>
              <tr>
                <td>2</td>
                <td>李四</td>
                <td>男</td>
                <td>27</td>
              </tr>
              <tr>
                <td>3</td>
                <td>王麻子</td>
                <td>男</td>
                <td>65</td>
              </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>)
  }
}