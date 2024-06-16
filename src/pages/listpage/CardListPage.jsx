import { RecipientsAPI } from 'data/CallAPI';
import { useState, useEffect } from 'react';
import CardList from 'components/card/CardList';
import TextDropdownField from 'components/textfield/TextDropdownField';
import TextInputField from 'components/textfield/TextInputField';
import EmojiToggle from 'components/EmojiToggle';
import "pages/listpage/CardListPage.scss";

function hotSort(recipient) {
  if (!recipient || !Array.isArray(recipient.results)) {
    //레시피언트 없는지와 레시피언트리절트가 배열인지 확인
    return [];
  }
  return [...recipient.results].sort((a, b) => b.messageCount - a.messageCount || b.reactionCount - a.reactionCount);
}

function CardListPage() {

  const test = ['a', 'b', 'c', 'd'];
  const [recipients, setRecipients] = useState({});
  const [limit, setLimit] = useState(4);
  const [offset, setOffSet] = useState(0);
  useEffect(() => {

    

    const getRecipient = async () => {
      try {
        const response = await RecipientsAPI('get');
        setRecipients(response);
      } catch (error) {
        console.error(error);
      }
    };
    getRecipient();
  }, [offset, limit]);

  return (
    <div className='card-list-layer'>
      <div className='card-list-box'>
        <p>인기 롤링 페이퍼 🔥</p>
        <button></button>
        <div className='card-list hot-card'>
          {hotSort(recipients).map((data, index) => (
            <CardList key={`${data.id}`} recipient={data} />
          ))}
        </div>
        <button></button>
      </div>
      <div className='card-list-box'>
        <p>최근에 만든 롤링 페이퍼 ⭐</p>
        <div className='card-list date-list'>
          {recipients.results.map((data, index) => (
            <CardList key={`${data.id}`} recipient={data} />
          ))}
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
