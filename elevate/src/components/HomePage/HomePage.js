import React, { Component } from 'react';
import './HomePage.css';
import JobsCard from './jobs.js'

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      currUser: ''
    };
  }

  // componentWillMount(){}
  componentDidMount(){
    // self = this
    // firebase.auth().onAuthStateChanged(function(user){
    //   if (user) {
    //     self.setState({
    //       currUser: user.name
    //     })
    //   }
    //   else {
    //     console.log('User is not logged-in')
    //   }
    // })
  }
  

  addJob() {
    
  }

  render() {

    return (
      <div>
        <JobsCard/>
      </div>
    );
  }
}

export default HomePage;