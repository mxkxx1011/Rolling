import Header from 'components/Header';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useMediaQuery } from 'react-responsive';
import { Outlet, useLocation } from 'react-router-dom';

function Main() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isPostPage = location.pathname.startsWith('/post');

  const isHeaderHidden = isMobile && isPostPage;

  return (
    <>
      <Helmet>
        <title>Rolling</title>
      </Helmet>
      {!isHeaderHidden && <Header />}
      <Outlet />
    </>
  );
}

export default Main;
// 헤더 있는 레이아웃을 지정해주는 파일
