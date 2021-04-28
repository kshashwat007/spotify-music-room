import React from 'react';
import { render } from 'react-dom';
import HomePage from './HomePage';

const App = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

export default App;

render(<App />, document.getElementById('app'));
