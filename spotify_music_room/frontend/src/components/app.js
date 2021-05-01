import React from 'react';
import { render } from 'react-dom';
import HomePage from './HomePage';
import Header from './Header';

const App = () => {
  return (
    <div>
      <Header />
      <HomePage />
    </div>
  );
};

export default App;

render(<App />, document.getElementById('app'));
