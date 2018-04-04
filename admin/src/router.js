import React from 'react'
import ReactDom from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import routes from './route'
import LeftMenuNav from './leftMenuNav'
import '../public/css/style.css'
import Login from './page/login'
import Register from './page/register'

const BasicExample = () => {
  const login = window.location.href.indexOf('login') > -1
  const register = window.location.href.indexOf('register') > -1

  return (
    <Router>
      {login || register ? (
        <div  id="wrapper" className="signin" style={{ display: 'flex' }}>
          <Route
            key="login"
            path="/login"
            component={Login}
          />
          <Route
            key="register"
            path="/register"
            component={Register}
          />
        </div>
      ) : (
        <div  id="wrapper" style={{ display: 'flex' }}>


          {/*<!--左侧导航开始-->*/}
          <LeftMenuNav/>
          {/*<!--左侧导航结束-->*/}

          {/*<!--  主体内容部分  -->*/}
          <div id="page-wrapper"  className="gray-bg dashbard-1">

            {/*<!--右侧部分开始-->*/}
            <div className="row content-tabs">
              <button className="roll-nav roll-left J_tabLeft"><i className="fa fa-backward"></i>
              </button>
              <nav className="page-tabs J_menuTabs">
                <div className="page-tabs-content">
                  <a href="javascript:;" className="active J_menuTab" data-id="table_basic.html">首页</a>
                </div>
              </nav>
              <button className="roll-nav roll-right J_tabRight"><i className="fa fa-forward"></i>
              </button>
            </div>
            <div className="row J_mainContent" id="content-main">
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
              {/*<FormView/>*/}
            </div>

            <div className="footer">
              <div className="pull-right">&copy; 2014-2015 <a href="http://www.zi-han.net/" target="_blank">zihan's blog</a>
              </div>
            </div>
            {/*<!--右侧部分结束-->*/}

          </div>



          {/*<!--右侧边栏开始-->*/}
          {/*<RightView/>*/}
          {/*<div style={{ flex: 1, padding: '10px' }}>
           {routes.map((route, index) => (
           // Render more <Route>s with the same paths as
           // above, but different components this time.
           <Route
           key={index}
           path={route.path}
           exact={route.exact}
           component={route.main}
           />
           ))}
           </div>*/}
        </div>
      )}

    </Router>
  )
}


ReactDom.render(<BasicExample/>, document.getElementById('root'));
