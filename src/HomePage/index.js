import React from 'react';
import { css } from 'aphrodite';

import styles from './HomePage_Styles';

export default function HomePage(){
    return (
        <div className={css(styles.flexRow)}>
            <h2>Coming Soon</h2>
        </div>
    );
}