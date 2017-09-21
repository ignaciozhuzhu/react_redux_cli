import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Index from './components/zhuye/index'
import Tui from './components/neiye/tui'
import Counter from './components/counter/index'
import ToothPic from './components/toothpic/index'

var conf = require('../config/index');

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <Router>
        <div>
          {/** * 这里可以公共的样式,比如 头部, 尾部, 等. */}
          <Switch>
            <Route
              exact
              path={conf.path + "/"}
              component={Index} />
            <Route
              path={conf.path + "/tui"}
              component={Tui} />
            <Route
              exact
              path={conf.path + "/counter"}
              component={Counter} />
            <Route
              exact
              path={conf.path + "/toothpic"}
              component={ToothPic} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;