import styles from './Badge.module.scss';
import React from 'react';

function Badge({ children }) {
  return (
    <>
      <span className={styles.TextBadgeContainer}>
        <p className={styles.TextBadgeText}>{children}</p>
      </span>
    </>
  );
}

export default Badge;
