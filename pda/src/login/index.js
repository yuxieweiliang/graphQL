import React from 'react';
import ReactDOM from 'react-dom';
import { Flex, FlexItem, Grids, Button, Dialog, Tab, TabBarItem, Article } from 'react-weui';
import func from './behavior'
import RootView from '../script/common'

class LoginPage extends RootView {
  constructor(props) {
    super(props)
    this.method._extend(this, func);
  }

  render() {
    return (
      <div className="aui-content" style={{paddingTop: '45%'}}>
        <section className="aui-content aui-margin-b-15">
          <form action="#">
            <div className="ui-form-item ui-form-item-pure ui-border-b">
              <input onChange={this._username} type="text" placeholder="QQ号/手机号/邮箱"/>
                <a href="#" className="ui-icon-close"/>
            </div>
            <div className="ui-form-item ui-form-item-pure ui-border-b">
              <input onChange={this._password} type="password" placeholder="密码"/>
                <a href="#" className="ui-icon-close"/>
            </div>
            <div className="ui-btn-wrap">
              <button onClick={this._login} type="button" className="ui-btn-lg ui-btn-primary">
                登陆
              </button>
            </div>
          </form>
        </section>
      </div>
    );
  }

}

if(typeof document !== 'undefined') {
  require('../../css/main.less');
  require('./style.less');
  ReactDOM.render(<LoginPage/>, document.getElementById('root'));
}

export default LoginPage;