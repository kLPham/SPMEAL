import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

const HeaderBar = () => (
  <AppBar
    showMenuIconButton={true}
    titleStyle={{ textAlign: 'center' }}
    title={<span>SPMEALS</span>}
    style={{
      fontFamily: 'cursive',
      fontSize: 20,
      position: 'fixed',
      marginTop: '10px'
    }}
  />
);

export default HeaderBar;
