import React, { Component } from 'react';
import './Registration.css';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SignUp from './signUp.js'

class Registration extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
          E L E V A T E
          </Typography>
        </Toolbar>
        <SignUp/>
      </div>
    );
  }
}

export default Registration;