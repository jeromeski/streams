import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
  return <h1>Page One</h1>;
};

const PageTwo = () => {
  return <h2>Page Two</h2>;
};

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={PageOne} />
        <Route exact path='/two' component={PageTwo} />
      </div>
    </BrowserRouter>
  );
};

export default App;
