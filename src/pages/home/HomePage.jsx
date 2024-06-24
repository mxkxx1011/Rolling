import './HomePage.scss';
import imageBanner01 from '../../assets/images/image_banner_01.png';
import imageBanner02 from '../../assets/images/image_banner_02.png';
import Button from 'components/Button';
import useNavigator from 'hooks/useNavigator';
import { useEffect, useState } from 'react';

function HomePage() {
  const handleMovePage = useNavigator();
  const [showBanners, setShowBanners] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowBanners(true);
    }, 500);
  }, []);

  return (
    <div className='main-body'>
      <div className='main-container'>
        <div className={`banner ${showBanners ? 'show' : ''}`}>
          <div className='banner-content'>
            <div className='content-point'>Point. 01</div>
            <div className='content-title'>
              <span className='content-title-p'>누구나 손쉽게, 온라인</span>
              <span className='content-title-p'>
                롤링 페이퍼를 만들 수 있어요
              </span>
            </div>
            <div className='content-ex'>로그인 없이 자유롭게 만들어요.</div>
          </div>
          <div className='banner-image-box'>
            <img src={imageBanner01} className='banner-image' alt='Banner 01' />
          </div>
        </div>
        <div className={`banner ${showBanners ? 'show' : ''}`}>
          <div className='banner-content'>
            <div className='content-point'>Point. 02</div>
            <div className='content-title'>
              <span className='content-title-p'>서로에게 이모지로 감정을</span>
              <span className='content-title-p'>표현해보세요</span>
            </div>
            <div className='content-ex'>
              롤링 페이퍼에 이모지를 추가할 수 있어요.
            </div>
          </div>
          <div className='banner-image-box'>
            <img src={imageBanner02} className='banner-image' alt='Banner 02' />
          </div>
        </div>
        <Button
          order='primary'
          size='56'
          className='take-a-look'
          handleClick={() => handleMovePage('/list')}
        >
          구경해보기
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
