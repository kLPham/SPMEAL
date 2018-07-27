import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // userid: []
      userid: null
      // loggedIn: false
    };
    //BIND METHODS HERE
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  // event handler here:
  handleLogin(val) {
    window.location.href = 'http://localhost:3001/login';
  }
  // handleLogin() {
  //   window.location.href = '/login';
  // }

  handleLogout() {
    window.location.href = 'http://localhost:3001/logout';
  }
  componentDidMount() {
    axios.get('/api/me').then(response => {
      console.log(response);
      if (response.data) this.setState({ userid: response.data });
      else this.setState({ userid: null });
    });
  }
  // componentDidMount() {
  //   axios.get('/api/me').then(response => {
  //     if (!response.data) this.setState({ userid: null });
  //     else this.setState({ userid: response.data.id });
  //   });
  // }

  render() {
    return (
      <div style={{ marginRight: '2%' }}>
        <Button
          inverted
          color="red"
          onClick={this.state.userid ? this.handleLogout : this.handleLogin}
        >
          {this.state.userid ? 'Logout' : 'Login/Register'}
        </Button>
        {/* <a onClick={this.handleLogin}>
          {this.state.userid.length !== 0 ? (
            <a href="/api/logout"> Logout </a>
          ) : (
            'Login'
          )}
        </a> */}
      </div>
    );
  }
}
