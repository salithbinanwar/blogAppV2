/* eslint-disable no-unused-vars */
import './App.css';

import HomePage from './HomePage/HomePage';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Login/Login';
import FullBlog from './FullBlog/FullBlog';
// import Navbar from './Navbar/Navbar';
import Compo from './Compo/Compo';
import Train from './Train/Train';
import Admin from './Admin/Admin';
import Bootnav from './Bootnav/Bootnav';





function App() {
  // const [comp, setComp] = useState('')
  const [train, setTrain] = useState('')
  const [title, setTitle] = useState('')
  // const [post, setPost] = useState('')



  return (

    <Router>
      <Bootnav/>
      <Switch>
        <Route path='/addpost'>
          {/* post={post} setPost={setPost} */}
          <Login title={title} setTitle={setTitle} />
        </Route>
        <Route path='/blog/:id'>
          {/* post={post} */}
          <FullBlog title={title} />
        </Route>
        <Route path='/compo'>
          <Compo></Compo>
        </Route>
        <Route path='/train'>
          {/* <Train train={train}/> */}
        </Route>
        <Route path='/admin'>
          <Admin />
        </Route>

        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>

    </Router>


  );
}


export default App;
