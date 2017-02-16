import React, {Component} from 'react';
import SignUpForm from '../SignUpForm';
import {Paper} from 'material-ui';
import { css } from 'aphrodite';

import styles from './SignUpPage_Styles'


class SignUpPage extends Component {
  render() {
    return (
        <div className={css(styles.flexRow)}>
            <Paper className={css(styles.well)} zDepth={3}>
                <SignUpForm />
            </Paper>
        </div>
    );
  }
};

SignUpPage.propTypes = {}


export default SignUpPage;