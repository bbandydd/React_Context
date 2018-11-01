import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

const Home = lazy(() => import('./Home/Home'));
const Page2 = lazy(() => import('./Page2/Page2'));

// <Link to="/" style={{ marginRight: '30px' }}>Home</Link>
// <Link to="/page2">Page2</Link>

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

export default () => (
  <Router>
    <div>
      <Route exact path="/">
        <Link style={{marginRight: '30px'}} to="/">Home</Link>
      </Route>
      <Route path="/page2">
        <Link to="/page2">Page2</Link>
      </Route>
      <Route exact path="/" component={WaitingComponent(Home)} />
      <Route path="/page2" component={WaitingComponent(Page2)} />
    </div>
  </Router>
);
