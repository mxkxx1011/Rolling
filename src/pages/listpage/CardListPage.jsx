import { RecipientsAPI } from 'data/CallAPI';
import { useState, useEffect } from 'react';
import CardList from 'components/card/CardList';
import TextDropdownField from 'components/textfield/TextDropdownField';
import TextInputField from 'components/textfield/TextInputField';
import EmojiToggle from 'components/EmojiToggle';
import ArrowRight from 'assets/images/ic_arrow_right.svg';
import ArrowLeft from 'assets/images/ic_arrow_left.svg';
import 'pages/listpage/CardListPage.scss';

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

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return width;
}

function CardListPage() {
  const test = ['a', 'b', 'c', 'd'];
  const [recipients, setRecipients] = useState([]);
  const [limit, setLimit] = useState(4);
  const [offset, setOffSet] = useState(0);
  const width = useWindowWidth();

  function listShift(count) {
    setOffSet(offset+count);
  }

  useEffect(() => {
    if(width < 1024) {
      setLimit(null);
    }
    else {
      setLimit(4);
    }
  }, [width]);

  useEffect(() => {
    const getRecipient = async () => {
      try {
        const response = await RecipientsAPI('get', null, null, limit, offset);
        setRecipients(response.results || []);
      } catch (error) {
        console.error(error);
      }
    };
    getRecipient();
    console.log(recipients);
  }, [offset, limit]);

  return (
    <div className='card-list-layer'>
      <div className='card-list-box'>
        <p>인기 롤링 페이퍼 🔥</p>
        <div className='card-list-data'>
          <div className={`arrow left ${offset > 0 ? '' :  'disabled'}`} onClick={()=>listShift(-2)}>
            <img src={ArrowLeft} alt='왼쪽넘김' />
          </div>
          <div className='list hot-card'>
            {hotSort(recipients).map((data) => (
              <CardList key={`${data.id}`} recipient={data} />
            ))}
          </div>
          <div className={`arrow right ${recipients.length === 4 ? '' : 'disabled'}`} onClick={()=>listShift(2)}>
            <img src={ArrowRight} alt='오른쪽넘김'  />
          </div>
        </div>
      </div>
      <div className='card-list-box'>
        <p>최근에 만든 롤링 페이퍼 ⭐</p>
        <div className='card-list-data'>
          <div className={`arrow left ${offset > 0 ? '' :  'disabled'}`} onClick={()=>listShift(-2)}>
            <img src={ArrowLeft} alt='왼쪽넘김' />
          </div>
          <div className='list date-card'>
            {recipients.map((data) => (
              <CardList key={`${data.id}`} recipient={data} />
            ))}
          </div>
          <div className={`arrow right ${recipients.length === 4 ? '' : 'disabled'}`} onClick={()=>listShift(2)}>
            <img src={ArrowRight} alt='오른쪽넘김'  />
          </div>
        </div>
      </div>
      <div className='testlayer'>
        <EmojiToggle></EmojiToggle>
        <br />
        <TextDropdownField options={test}></TextDropdownField>
        <br />
        <br />
        <TextInputField></TextInputField>
        <br />
      </div>
    </div>
  );
}

export default CardListPage;
