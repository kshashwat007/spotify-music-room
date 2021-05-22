import React from 'react';
import { render } from 'react-dom';
import HomePage from './HomePage';
import Header from './Header';

const App = () => {
  return (
    <div>
      <Header />
      <div className="center">
        <HomePage />
      </div>
    </div>
  );
};

export default App;

render(<App />, document.getElementById('app'));
