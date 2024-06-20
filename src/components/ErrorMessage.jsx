import styles from 'components/ErrorMessage.module.scss';

function ErrorMessage({ children }) {
  return <p className={styles.error}>{children}</p>;
}

export default ErrorMessage;
