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

/* 

HOW REACT ROUTER WORKS?
=========================== 
 
history {}
--> Keeps track of the address bar in your browser

BrowserRouter
--> Listens to changes to history for changes in the URL
--> Communicates the path to the Routes

Route
--> Visible only when the 'path' matches the current URL
--> They decide if they going to show or hide themselves
*/
