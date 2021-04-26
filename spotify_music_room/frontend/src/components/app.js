import React from 'react';
import { render } from 'react-dom';
import HomePage from './HomePage';
import JoinRoom from './JoinRoom';
import CreateRoom from './CreateRoom';

const App = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

export default App;

render(<App />, document.getElementById('app'));
