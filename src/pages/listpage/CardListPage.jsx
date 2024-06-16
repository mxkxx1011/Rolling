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
  // return [...recipient.results].sort((a,b) => {
  //   if(b.messageCount === a.messageCount) {
  //     return b.reactionCount - a.reactionCount;
  //   }
  //   return b.messageCount - a.messageCount;
  // });
  return [...recipient.results].sort((a, b) => b.messageCount - a.messageCount || b.reactionCount - a.reactionCount);
}

function dateSort(recipient) {
  if (!recipient || !Array.isArray(recipient.results)) {
    //레시피언트 없는지와 레시피언트리절트가 배열인지 확인
    return [];
  }
  return [...recipient.results].sort((a,b) => b.createdAt - a.createdAt);
}

function CardListPage() {
  const test = ['a', 'b', 'c', 'd'];
  const [recipients, setRecipients] = useState({});

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
  }, []);

  return (
    <div className='cardlistlayer'>
      <div className='cardlistbox'>
        <p>인기 롤링 페이퍼 🔥</p>
        <div className='hotcardlist'>
          {hotSort(recipients).map((data, index) => (
            <CardList key={index} recipient={data} />
          ))}
        </div>
      </div>
      <div className='cardlistbox'>
        <p>최근에 만든 롤링 페이퍼 ⭐</p>
        <div className='datecardlist'>
          {dateSort(recipients).map((data, index) => (
            <CardList key={index} recipient={data} />
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
