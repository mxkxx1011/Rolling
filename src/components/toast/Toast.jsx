import styles from './Toast.module.scss';
//import './Toast.module.scss';
//import classNames from 'classnames';
import IMGclose from 'assets/images/ic_close.svg';
import IMGsubtract from 'assets/images/ic_subtract.svg';

function Toast() {
  return (
    <div className={styles.ToastContainer}>
      <div className={styles.ToastTextWrapper}>
        <img
          src={IMGsubtract}
          className={styles.ToastImgSubtract}
          alt='토스트 왼쪽 아이콘'
        />
        <p className={styles.ToastText}>URL이 복사 되었습니다.</p>
      </div>
      <img
        src={IMGclose}
        className={styles.ToastImgClose}
        alt='토스트 창 닫기 아이콘'
      />
    </div>
  );
}

export default Toast;
