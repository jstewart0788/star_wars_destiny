import React, { Component } from 'react';
import { AppBar } from 'material-ui';
import NotLoggedIn from './NotLoggedIn';
import HeaderFuncs from './HeaderFuncs';

class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      logged: false
    }
  }

  render(){
    return(
        <AppBar title="Star Wars Destiny Card Trader"
          iconElementRight={ this.state.logged ? <HeaderFuncs /> : <NotLoggedIn /> }
          showMenuIconButton={false}
        />
    );
  }
}

export default Header
