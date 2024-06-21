import styles from 'components/Label.module.scss';

function Label({ children, htmlFor }) {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export default Label;
