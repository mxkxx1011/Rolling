import { RecipientsAPI } from 'data/CallAPI';
import { useState, useEffect } from 'react';
import CardList from 'components/card/CardList';
import TextDropdownField from 'components/textfield/TextDropdownField';
import TextInputField from 'components/textfield/TextInputField';
import 'pages/listpage/CardListPage.scss';
import ArrowButton from 'components/ArrowButton'
import Button from 'components/Button';
import useNavigator from 'hooks/useNavigator';

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
  const [hotOffset, setHotOffSet] = useState(0);
  const width = useWindowWidth();
  const [hotRecipients, setHotRecipients] = useState([]);
  const handleMovePage = useNavigator();

  function listShift(count) {
    setOffSet(offset+count);
  }

  function hotListShift(count) {
    setHotOffSet(hotOffset+count);
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
        <p className='card-list-title'>인기 롤링 페이퍼 🔥</p>
        <div className='card-list-data'>
          <div className={`arrow left ${hotOffset > 0 ? '' :  'disabled'}`} onClick={()=>hotListShift(-2)}>
            <ArrowButton direction={'left'} />
          </div>
          <div className='card-list-wrapper hot-card'>
            {hotRecipients.slice(hotOffset, hotOffset+limit).map((data) => (
              <CardList key={`${data.id}`} recipient={data} />
            ))}
          </div>
          <div className={`arrow right ${hotOffset+limit < hotRecipients.length ? '' : 'disabled'}`} onClick={()=>hotListShift(2)}>
            <ArrowButton direction={'right'} />
          </div>
        </div>
      </div>
      <div className='card-list-box'>
        <p className='card-list-title'>최근에 만든 롤링 페이퍼 ⭐</p>
        <div className='card-list-data'>
          <div className={`arrow left ${offset > 0 ? '' :  'disabled'}`} onClick={()=>listShift(-2)}>
            <ArrowButton direction={'left'} />
          </div>
          <div className='card-list-wrapper date-card'>
            {recipients.slice(offset, offset+limit).map((data) => (
              <CardList key={`${data.id}`} recipient={data} />
            ))}
          </div>
          <div className={`arrow right ${offset+limit < recipients.length ? '' : 'disabled'}`} onClick={()=>listShift(2)}>
            <ArrowButton direction={'right'} />
          </div>
        </div>
      </div>
      <Button children="나도 만들어보기" size={'56'} className={'post-link-button'} handleClick={() => handleMovePage('/post')} />
      <div className='testlayer'>
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
