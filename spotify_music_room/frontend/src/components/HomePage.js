import React from 'react';
import JoinRoom from './JoinRoom';
import CreateRoom from './CreateRoom';
import Header from './Header';
import Room from './Room';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

const HomePage = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <p>This is a test page</p>
        </Route>
        <Route path="/join" component={JoinRoom} />
        <Route path="/create" component={CreateRoom} />
        <Route path="/room/:roomCode" component={Room} />
      </Switch>
    </Router>
  );
};

export default HomePage;
