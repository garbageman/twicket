import React from 'react';

import NavBar from '/src/ui/components/nav-bar';

import logo from './logo.svg';
import styles from './app.module.scss';


function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p>
          Edit <code>src/ui/components/app/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
