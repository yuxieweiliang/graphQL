import React from 'react'
import config from './config'
import Fetch from './fetch'
import Ajax from './ajax'
import cookie from './cookie'
import method from './util'
import api from '../api'



class RootView extends React.Component{
  constructor(props) {
    super(props);
    this._initConfig()
  }
  _initConfig() {
    // 配置文件
    this.config = config;


    // 请求方法
    this.fetch = new Fetch;
    this.ajax = new Ajax;

    // 全局工具函数
    this.method = method;



    // 全局工具函数
    this.method._extend(this, api, 'api');

    if(typeof document !== 'undefined') {
      require('../style/root.less');

      // cookie
      this.cookie = cookie;
    }
  }
}

export default RootView