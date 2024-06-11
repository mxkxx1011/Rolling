import styles from './Badge.module.scss';
import React from 'react';

function Badge({ children }) {
  return (
    <>
      <div className={styles.TextBadgeContainer}>
        <p className={styles.TextBadgeText}>{children}</p>
      </div>
    </>
  );
}

export default Badge;
