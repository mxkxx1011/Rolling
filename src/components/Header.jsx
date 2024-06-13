import logo from 'assets/images/ic_logo.svg';
import styles from 'components/Header.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to='/' className={styles.wrapper}>
          <img src={logo} className={styles.logo} alt='로고' />
          <h1 className={styles.logo}>Rolling</h1>
        </Link>
        <Link to='/post' className={styles.button}>
          롤링 페이퍼 만들기
        </Link>
      </div>
    </header>
  );
}

export default Header;
