import React, { Component } from 'react';
import { css } from 'aphrodite';

import styles from './App_Styles'
import poe from '../images/poe.jpg';
import stormtrooper from '../images/stormtrooper.jpg'

class App extends Component {
  render() {
    return (
      <div className={css(styles.flexRow)}>
        <img className={css(styles.image)} src={stormtrooper} alt="Trooper" />
        <div className={css(styles.flexCol)}>
          <h1>Star Wars Card Trader</h1>
          <h2>Coming Soon</h2>
        </div>
        <img className={css(styles.image)} src={poe} alt="PoeD" />
      </div>
    );
  }
}

export default App;
