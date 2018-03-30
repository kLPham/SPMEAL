import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const style = {
      color: 'white',
      fontSize: '35px',
      textTransform: 'uppercase',
      marginRight: '30px'
    };
    return <div style={style} />;
  }
}
