import React, { Component } from 'react';
import './App.css';
import router from './router';
import Header from './components/Header/Header';
/// MATERIAL UI BELOW ///
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'; // add
//////////////////////////

class App extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE BELOW:
    this.state = {};

    //BIND ACTION BELOW:
  }
  //CREATE HANDLE CHANGE METHOD BELOW:

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          {router}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
