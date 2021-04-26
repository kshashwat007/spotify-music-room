import React from 'react';
import { render } from 'react-dom';
import HomePage from './HomePage';

const App = () => {
  return <HomePage content="homepage" />;
};

export default App;

render(<App />, document.getElementById('app'));
