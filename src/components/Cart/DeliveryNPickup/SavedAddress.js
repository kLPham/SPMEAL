import React, { Component } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

export default class SavedAddress extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE BELOW:
    this.state = {
      saved: this.props.isSaved,
      numSaves: this.props.numSaves
    };

    //BIND METHODS BELOW:
  }
  ///CREATE HANDLING CHANGES HERE:
  // user will save the address if it’s not already saved, or remove it from their saves if it is saved. As soon as we save the new state at the end of the function, the render method will be called automatically, which will update the display.
  handleSubmit(e) {
    // e.preventDefault();
    let saved = false;
    let numSaves = this.state.numSaves;
    if (this.state.saved === false) {
      saved = true;
      numSaves++;
    } else {
      numSaves--;
    }
    this.setState({
      numSaves: numSaves,
      saved: saved
    });
    e.preventDefault();
  }
  render() {
    var savedText = '';
    var submitText = 'Save';
    if (this.state.saved) {
      savedText = 'Your Address Has been saved.';
      submitText = 'Remove';
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value={submitText} />
        </form>
        {this.state.numSaves} saves. {savedText}
      </div>
    );
  }
}
