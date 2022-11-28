import React from 'react';

import styles from './nav-bar.module.scss';

type NavBarProps = {

};

function NavBar(props: NavBarProps) {
  console.log(styles);
  return (
    <div className={styles.nav_bar}>
      test
    </div>
  );
}

export default NavBar;
