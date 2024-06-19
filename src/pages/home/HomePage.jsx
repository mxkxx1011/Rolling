import './HomePage.scss';
import imageBanner01 from '../../assets/images/image_banner_01.png';
import imageBanner02 from '../../assets/images/image_banner_02.png';
import Button from 'components/Button';

function HomePage() {
  return (
    <div className='main-body'>
      <div className='main-container'>
        <div className='banner odd'>
          <div className='banner-content'>
            <div className='content-point'>Point. 01</div>
            <div className='content-title'>
              누구나 손쉽게, 온라인 <br />
              롤링 페이퍼를 만들 수 있어요
            </div>
            <div className='content-ex'>로그인 없이 자유롭게 만들어요.</div>
          </div>
          <img src={imageBanner01} className='banner-image' alt='Banner 01' />
        </div>
        <div className='banner even'>
          <div className='banner-content'>
            <div className='content-point'>Point. 02</div>
            <div className='content-title'>
              서로에게 이모지로 감정을 <br />
              표현해보세요
            </div>
            <div className='content-ex'>
              롤링 페이퍼에 이모지를 추가할 수 있어요.
            </div>
          </div>
          <img src={imageBanner02} className='banner-image' alt='Banner 02' />
        </div>
        <Button order='primary' size='56' className='take-a-look'>
          구경해보기
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
