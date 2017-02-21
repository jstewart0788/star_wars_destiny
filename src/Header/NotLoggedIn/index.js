import React, {Component} from 'react';
import { IconButton } from 'material-ui';
import ActionLock from 'material-ui/svg-icons/action/lock';
import ActionLockOpen from 'material-ui/svg-icons/action/lock-open';

class NotLoggedIn extends Component {
  constructor(props){
    super(props);
    this.state={
      hovering: false
    }
    this.onLockHover = this.onLockHover.bind(this);
    this.offLockHover = this.offLockHover.bind(this);
  }

  onLockHover(){
    this.setState({hovering:true});
  }

  offLockHover(){
    this.setState({hovering:false});
  }

  render(){
    return(
      <IconButton
        onMouseEnter={this.onLockHover}
        onMouseLeave={this.offLockHover}
      >
        {this.state.hovering
          ? <ActionLockOpen />
          : <ActionLock />
        }
      </IconButton>
    );
  }
}

export default NotLoggedIn
