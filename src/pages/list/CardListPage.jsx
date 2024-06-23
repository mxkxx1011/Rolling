import { RecipientsAPI } from 'data/CallAPI';
import { useState, useEffect, useRef } from 'react';
import CardList from 'components/card/CardList';
import 'pages/list/CardListPage.scss';
import ArrowButton from 'components/ArrowButton';
import Button from 'components/Button';
import useNavigator from 'hooks/useNavigator';
import UseDragScroll from 'utils/UseDragScroll';
import SkeletonCardList from 'components/card/SkeletonCardList';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

function hotSort(recipients) {
  if (!recipients || !Array.isArray(recipients)) {
    //레시피언트 없는지와 레시피언트리절트가 배열인지 확인
    return [];
  }
  return [...recipients].sort(
    (a, b) =>
      b.messageCount - a.messageCount || b.reactionCount - a.reactionCount,
  );
}

function CardListPage() {
  const [recipients, setRecipients] = useState([]);
  const limit = 4;
  const [offset, setOffSet] = useState(0);
  const [hotOffset, setHotOffSet] = useState(0);
  const [hotRecipients, setHotRecipients] = useState([]);
  const handleMovePage = useNavigator();
  const hotListRef = useRef(null);
  const dateListRef = useRef(null);
  const [isLodding, setIsLodding] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(4);
  // UseDragScroll(hotListRef);
  // UseDragScroll(dateListRef);

  const getRecipient = async () => {
    try {
      setIsLodding(true);
      const response = await RecipientsAPI('get', null, null, 9999, offset);
      setRecipients(response.results || []);
      setHotRecipients(hotSort(response.results) || []);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLodding(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    getRecipient();
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [hotCurrentSlide, setHotCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 2,
    initialSlide: 0,
    afterChange: (current) => setCurrentSlide(current),
    nextArrow: (
      <CustomNextArrow currentSlide={currentSlide} slideCount={limit} />
    ),
    prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
  };
  const hotsettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 2,
    initialSlide: 0,
    afterChange: (current) => setHotCurrentSlide(current),
    nextArrow: (
      <CustomNextArrow currentSlide={hotCurrentSlide}/>
    ),
    prevArrow: <CustomPrevArrow currentSlide={hotCurrentSlide} />,
  };

  function CustomNextArrow({ onClick, currentSlide }) {
    return (
      <div
        className={`arrow right ${currentSlide + limit < recipients.length ? '' : 'disabled'}`}
        onClick={onClick}
      >
        <ArrowButton direction='right' />
      </div>
    );
  }

  function CustomPrevArrow({ onClick, currentSlide }) {
    return (
      <div
        className={`arrow left ${currentSlide > 0 ? '' : 'disabled'}`}
        onClick={onClick}
      >
        <ArrowButton direction='left' />
      </div>
    );
  }

  return (
    <div className='card-list-layer'>
      <div className='card-list-box'>
        <div className='title-layer'>
          <p className='card-list-title'>인기 롤링 페이퍼 🔥</p>
        </div>
        <div className='card-list-data'>
          <div className='card-list-wrapper hot-card' ref={hotListRef}>
            {isLodding ? (
              <div className='skelet-layer'>
                {Array(4)
                  .fill(null)
                  .map((limit, index) => (
                    <div key={index}>
                      <SkeletonCardList />
                    </div>
                  ))}
              </div>
            ) : (
              <Slider {...hotsettings}>
                {hotRecipients.map((data, index) => (
                  <CardList key={data.id} recipient={data} />
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
      <div className='card-list-box'>
        <div className='title-layer'>
          <p className='card-list-title'>최근에 만든 롤링 페이퍼 ⭐</p>
        </div>
        <div className='card-list-data'>
          <div className='card-list-wrapper date-card' ref={dateListRef}>
            {isLodding ? (
              <div className='skelet-layer'>
                {Array(4)
                  .fill(null)
                  .map((limit, index) => (
                    <div key={index}>
                      <SkeletonCardList />
                    </div>
                  ))}
              </div>
            ) : (
              <Slider {...settings}>
                {recipients.map((data) => (
                  <CardList key={data.id} recipient={data} />
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
      <div className='link-button-layer'>
        <Button
          size={56}
          order='primary'
          className={'post-link-button'}
          handleClick={() => handleMovePage('/post')}
        >
          나도 만들어보기
        </Button>
      </div>
    </div>
  );
}

export default CardListPage;
