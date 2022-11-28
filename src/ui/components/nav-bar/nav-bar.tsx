import React from 'react';

import styles from './nav-bar.module.scss';

type NavBarProps = {

};

function NavBar(props: NavBarProps) {
  return (
    <div className={styles.navBar}>
      <div className={styles.logo}>
        Twicket
      </div>
    </div>
  );
}

export default NavBar;
