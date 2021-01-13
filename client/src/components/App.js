import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header';

const App = () => {
  return (
    <Fragment>
      <div className='ui container'>
        <BrowserRouter>
          <Header />
          <div>
            <Route exact path='/' component={StreamList} />
            <Route exact path='/streams/new' component={StreamCreate} />
            <Route exact path='/streams/edit' component={StreamEdit} />
            <Route exact path='/streams/delete' component={StreamDelete} />
            <Route exact path='/streams/show' component={StreamShow} />
          </div>
        </BrowserRouter>
      </div>
    </Fragment>
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
