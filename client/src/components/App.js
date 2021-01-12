import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      <h1>Page One</h1>
      <a href='http://localhost:3000/two' alt='page two'>
        Page Two
      </a>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      <h2>Page Two</h2>
      <Link to='/'>Back</Link>
    </div>
  );
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
