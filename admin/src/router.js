import React from 'react'
import ReactDom from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import routes from './route'


const BasicExample = () => {
  return (
    <Router>

      <div  id="wrapper" style={{ display: 'flex' }}>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </Router>
  )
}


ReactDom.render(<BasicExample/>, document.getElementById('root'));
