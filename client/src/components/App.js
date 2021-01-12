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
--> They decide if they are going to show or hide themselves

HOW PATH GETS MATCHED
===========================

Address Bar <-- Extracted Path (Compares) --> Route Definition
extractedPath.contains(path)

http://localhost:3000/ <-- compared --> '/' (match)
                       <-- compared --> '/page' (no match)

http://localhost:3000/page <---compared --> '/' (match)
                           <-- compared --> '/page' (match)

to override the behavior you use 'exact'

*/
