import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import { increment, decrement } from './actions/countAction'
import { connect } from 'react-redux'
import Messages from './components/Messages'
import PostList from './components/PostList';
import PostShow from './components/PostShow';
import UserList from './components/UserList';
import UserShow from './components/UserShow';

function App(props) {
  return (
    <Router>
       <Link to="/messages">Messages</Link>-
       <Link to="/userlist">User List</Link>-
       <Link to="/postlist">Post List</Link>

       <Route path="/messages" component={ Messages }/>
       <Route path="/userlist" component={ UserList } exact={ true } />
       <Route path="/postlist" component={ PostList } expect={ true }/>
       <Route path="/users/:id" component={ UserShow } />
       <Route path="/posts/:id" component={ PostShow } />

    <div className="App">
      <h1>Redux Example - Exercises</h1>
      <h1>Count : { props.count }</h1>
      <button onClick = { () => {
        props.dispatch(increment())
      }}>+</button>
      <button onClick = { () => {
        props.dispatch(decrement())
      }}>-</button>

      {/* <Messages /> */}
     
    </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    count : state.count
  }
}

export default connect(mapStateToProps)(App);
