import React from 'react';
import chuckNorris from '../../assets/img/chuckNorris.png';
import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.Wrapper}>
    <h1 className={styles.Title}>Get Fun with Chuck Norris</h1>
    <div className={styles.Img}>
      <img src={chuckNorris} alt="img" />
    </div>
  </div>
);

export default Header;
