import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import LandingPage from './components/LandingPage'
import HomePage from './components/HomePage'
import Registration from './components/Registration'
import AddJobs from './components/AddJobs'
import * as firebase from './utils/firebase'


function App() {


  useEffect(() => {
    firebase.setup()
  }, [true])

  return (
    <Router>
      <div className="App">
        <Route exact path = "/" component = {LandingPage} />
        <Route exact path = "/home" component = {HomePage} />
        <Route exact path = "/registration" component = {Registration} />
        <Route exact path = "/add-job" component = {AddJobs} />
      </div>
    </Router>
  );
}

export default App;
