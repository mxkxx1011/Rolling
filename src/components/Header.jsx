import logo from 'assets/images/ic_logo.svg';
import styles from 'components/Header.module.scss';
import Button from 'components/Button';
import useNavigator from 'hooks/useNavigator';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const location = useLocation();
  const handleMovePage = useNavigator();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isPostPage = location.pathname.startsWith('/post');

  // 모바일이면서 포스트 페이지일 때 헤더가 나타나지 않도록 설정
  useEffect(() => {
    const handleHeaderVisibility = () => {
      const isHeaderHidden = isMobile && isPostPage;
      setIsHeaderVisible(!isHeaderHidden);
    };

    handleHeaderVisibility();

    window.addEventListener('resize', handleHeaderVisibility);

    return () => {
      window.removeEventListener('resize', handleHeaderVisibility);
    };
  }, [isMobile, isPostPage]);

  return (
    isHeaderVisible && (
      <header className={styles.header}>
        <div className={styles.container}>
          <Link to='/' className={styles.wrapper}>
            <img src={logo} className={styles.logo} alt='로고' />
            <h1 className={styles.logo}>Rolling</h1>
          </Link>
          {/* 포스트 페이지가 아닐 때 롤링 페이퍼 만들기 버튼이 나타나지 않도록 설정 */}
          {!isPostPage && (
            <Button
              type='outlined'
              size='40'
              handleClick={() => handleMovePage('/post')}
            >
              롤링 페이퍼 만들기
            </Button>
          )}
        </div>
      </header>
    )
  );
}

export default Header;
