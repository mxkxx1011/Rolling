import { RecipientsAPI } from 'data/CallAPI';
import { useState, useEffect, useRef } from 'react';
import CardList from 'components/card/CardList';
import 'pages/list/CardListPage.scss';
import ArrowButton from 'components/ArrowButton';
import Button from 'components/Button';
import useNavigator from 'hooks/useNavigator';
import UseWindowWidth from 'utils/UseWindowWidth';
import UseDragScroll from 'utils/UseDragScroll';

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

function sliceWithFallback(recipient, offset, limit) {
  let end = offset + limit; //마지막 출력지점
  let slice = recipient.slice(offset, end); //데이터를 시작부터 출력까지 자른 데이터
  if (slice.length < limit) {
    //자른 데이터가 4개보다 작으면
    const remaining = limit - slice.length; //부족한 숫자
    const previousSlice = recipient
      .slice(Math.max(0, offset - remaining), offset)
      .slice(-remaining);
    slice = previousSlice.concat(slice); //애초에 4개가 안되서 -일경우 에러가 나기 때문에
  }
  return slice;
}

function CardListPage() {
  const [recipients, setRecipients] = useState([]);
  const [limit, setLimit] = useState(4);
  const [offset, setOffSet] = useState(0);
  const [hotOffset, setHotOffSet] = useState(0);
  const width = UseWindowWidth();
  const [hotRecipients, setHotRecipients] = useState([]);
  const handleMovePage = useNavigator();
  const hotListRef = useRef(null);
  const dateListRef = useRef(null);

  UseDragScroll(hotListRef);
  UseDragScroll(dateListRef);

  function listShift(count) {
    setOffSet(offset + count);
  }

  function hotListShift(count) {
    setHotOffSet(hotOffset + count);
  }

  useEffect(() => {
    if (width < 1024) {
      setLimit(9999);
    } else {
      setLimit(4);
    }
  }, [width]);

  useEffect(() => {
    const getRecipient = async () => {
      try {
        const response = await RecipientsAPI('get', null, null, 9999, offset);
        setRecipients(response.results || []);
        setHotRecipients(hotSort(response.results) || []);
      } catch (error) {
        console.error(error);
      }
    };
    getRecipient();
  }, []);

  return (
    <div className='card-list-layer'>
      <div className='card-list-box'>
        <div className='title-layer'>
          <p className='card-list-title'>인기 롤링 페이퍼 🔥</p>
        </div>
        <div className='card-list-data'>
          <div className='card-list-wrapper hot-card' ref={hotListRef}>
            <div
              className={`arrow left ${hotOffset > 0 ? '' : 'disabled'}`}
              onClick={() => hotListShift(-2)}
            >
              <ArrowButton direction={'left'} />
            </div>
            {sliceWithFallback(hotRecipients, hotOffset, limit).map((data) => (
              <CardList key={`${data.id}`} recipient={data} />
            ))}
            <div
              className={`arrow right ${hotOffset + limit < hotRecipients.length ? '' : 'disabled'}`}
              onClick={() => hotListShift(2)}
            >
              <ArrowButton direction={'right'} />
            </div>
          </div>
        </div>
      </div>
      <div className='card-list-box'>
        <div className='title-layer'>
        <p className='card-list-title'>최근에 만든 롤링 페이퍼 ⭐</p>
        </div>
        <div className='card-list-data'>
          <div className='card-list-wrapper date-card' ref={dateListRef}>
            <div
              className={`arrow left ${offset > 0 ? '' : 'disabled'}`}
              onClick={() => listShift(-2)}
            >
              <ArrowButton direction={'left'} />
            </div>
            {sliceWithFallback(recipients, offset, limit).map((data) => (
              <CardList key={`${data.id}`} recipient={data} />
            ))}
            <div
              className={`arrow right ${offset + limit < recipients.length ? '' : 'disabled'}`}
              onClick={() => listShift(2)}
            >
              <ArrowButton direction={'right'} />
            </div>
          </div>
        </div>
      </div>
      <div className='link-button-layer'>
        <Button
          children='나도 만들어보기'
          size={56}
          className={'post-link-button'}
          handleClick={() => handleMovePage('/post')}
        />
      </div>
    </div>
  );
}

export default CardListPage;
