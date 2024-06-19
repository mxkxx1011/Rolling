import logo from 'assets/images/ic_logo.svg';
import styles from 'components/Header.module.scss';
import Button from 'components/Button';
import useNavigator from 'hooks/useNavigator';
import { Link } from 'react-router-dom';

function Header({ isPostPage }) {
  const handleMovePage = useNavigator();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to='/' className={styles.wrapper}>
          <img src={logo} className={styles.logo} alt='로고' />
          <h1 className={styles.logo}>Rolling</h1>
        </Link>
        {/* 포스트 페이지가 아닐 때 롤링 페이퍼 만들기 버튼이 나타나지 않도록 설정 */}
        {!isPostPage && (
          <Button
            order='outlined'
            size='40'
            handleClick={() => handleMovePage('/post')}
          >
            롤링 페이퍼 만들기
          </Button>
        )}
      </div>
    </header>
  );
}

export default Header;
