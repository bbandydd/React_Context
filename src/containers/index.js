import React from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './Home/Home';
import Page2 from './Page2/Page2';

// <Link to="/" style={{ marginRight: '30px' }}>Home</Link>
// <Link to="/page2">Page2</Link>

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/page2" component={Page2} />
    </Switch>
  </Router>
);
