import React from 'react';
import './App.css';
// import {Greet } from './components/Greet';
import Welcome from './components/Welcome';
import FunctionClick from './components/FunctionClick';
import Message from './components/Message';
// import Hello from './components/Hello';
// import Counter from './components/Counter';
import EventBinding from './components/EventBinding'
import UserGreeting from './components/UserGreeting'
import Namelist from './components/Namelist'
import Stylesheet from './components/Stylesheet'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import FRparent from './components/FRparent'
import PostList from './components/PostList'
function App() {
  return (
    <div className="App">
      {/* <Greet name="abc"><p>This is it</p><h3>dasd</h3></Greet>
      <Greet name="xyz"></Greet> 
      <Welcome name="abc"></Welcome>
      <Welcome name="xyz"></Welcome>
      <Welcome name="pqr"></Welcome> */}
      {/* <Hello></Hello> */}
      {/* <Message></Message> */}
      {/* <Counter></Counter> */}
      {/* <Welcome name="abc" heroname="xyz"></Welcome> */}
      {/* <FunctionClick></FunctionClick>
      <Message></Message> */}

      {/* <EventBinding></EventBinding> */}
      {/* <UserGreeting status="false"/> */}
      {/* <Namelist></Namelist> */}

      {/* <Stylesheet primary={true}></Stylesheet> */}

      {/* <Form></Form> */}
      {/* <LifecycleA></LifecycleA> */}
      {/* <FRparent></FRparent> */}
      <PostList></PostList>
    </div>
  );
}

export default App;
