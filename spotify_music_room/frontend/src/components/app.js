import React from 'react';
import { render } from 'react-dom';
import HomePage from './HomePage';
import JoinRoom from './JoinRoom';
import CreateRoom from './CreateRoom';

const App = () => {
  return (
    <div>
      <HomePage content="homepage" />
      <JoinRoom />
      <CreateRoom />
    </div>
  );
};

export default App;

render(<App />, document.getElementById('app'));
