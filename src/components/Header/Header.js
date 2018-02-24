import React, { Component } from 'react';
import {
  Button,
  DialogContainer,
  NavigationDrawer
} from 'react-md/lib/NavigationDrawers';

// import SearchBar from '../SearchBar/SearchBar';
// import Login from '../Login/Login';
// import Cart from '../Cart/Cart';

export default class Header extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE HERE:
    this.state = {
      visible: false,
      renderNode: null
    };
  }

  //HANDLE ACTION HERE:
  show = () => {
    this.setState({ visible: true });
  };

  hide = () => {
    this.setState({ visible: false, renderNode: null });
  };
  // handleShow = () => {
  //   this.setState({
  //     renderNode: document.getElementById('navigation-drawer-testing')
  //   });
  // };

  render() {
    const { visible, renderNode } = this.state;
    return (
      <div>
        <Button raised onClick={this.show}>
          Open for testing
        </Button>
        <DialogContainer
          id="navigation-drawer-testing"
          aria-label="Navigation Drawer Testing"
          visible={visible}
          fullPage
          focusOnMount={false}
          // onShow={this.handleShow}
          onHide={this.hide}
        >
          <NavigationDrawer
            drawerTitle="Meals"
            toolbarTitle="Welcome to Spartan Supplement Meals"
          />
        </DialogContainer>
      </div>
    );
  }
}
