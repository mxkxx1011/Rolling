import Header from 'components/Header';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <>
      <Helmet>
        <title>Rolling</title>
      </Helmet>
      <Header />
      <Outlet />
    </>
  );
}

export default Main;
// 헤더 있는 레이아웃을 지정해주는 파일
