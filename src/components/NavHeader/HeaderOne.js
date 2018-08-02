import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
// import storeIcon from './storeIcon.jpg';

export default class HeaderOne extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    // const iconsLogo = {
    //   height: '100px',
    //   width: '120px',
    //   marginLeft: '25px',
    //   border: '5px solid lightgray',
    //   marginTop: '.5%'
    // };
    return (
      //   <div style={{ backgroundColor: 'black', color: 'white' }}>
      <Navbar style={{ backgroundColor: 'black', color: 'white' }}>
        <Navbar.Header>
          <Navbar.Brand>
            {/* <img alt="icon" src={storeIcon} style={iconsLogo} /> */}
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Link
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
      //   </div>
    );
  }
}
