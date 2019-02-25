import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import SearchBar from '../SearchBar/SearchBar';
import Login from '../Login/Login';
import Cart from '../Cart/Cart';

export default class TopHeader extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: 'home' };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div style={{ position: 'fixed', top: 0 }}>
        <Menu secondary>
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="messages"
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="friends"
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            {/*<Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item
              name="logout"
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />*/}

            <SearchBar />
            <Login />
            <Cart />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
