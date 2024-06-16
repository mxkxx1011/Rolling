import Header from 'components/Header';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

function Post() {
  const isMobile = useMediaQuery({ minWidth: 767 });
  return (
    <>
      <Helmet>
        <title>Rolling - post</title>
      </Helmet>
      {isMobile && <Header />}
      <Outlet />
    </>
  );
}

export default Post;
// post 페이지들은 모바일일 때 헤더가 없어서 조건부 렌더링 해주기위한 레이아웃
