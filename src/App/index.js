import React, { Component } from 'react';
import { css } from 'aphrodite';

import styles from './App_Styles'
import Header from '../Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className={css(styles.flexRow)}>
          <h2>Coming Soon</h2>
        </div>
      </div>
    );
  }
}

export default App;
