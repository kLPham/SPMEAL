import React, { Component } from 'react';
import './App.css';
import router from './router';
// import { connect } from 'react-redux';

// import NavHeader from './components/NavHeader/NavHeader';
import HeaderTwo from './components/NavHeader/HeaderTwo';

// import './semantic/dist/semantic.min.css';
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
          {/* <NavHeader /> */}
          <HeaderTwo />

          {router}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
