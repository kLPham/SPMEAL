import React, { Component } from 'react';
import './App.css';
import router from './router';
/// MATERIAL UI BELOW ///
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import RaisedButton from 'material-ui/RaisedButton'; // add
// import DropDownMenu from 'material-ui/DropDownMenu';
// import MenuItem from 'material-ui/MenuItem';

//////////////////////////

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

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
      // <MuiThemeProvider>
      <div>
        <Header />
        {router}
        <Footer />
      </div>
      // </MuiThemeProvider>
    );
  }
}

export default App;
