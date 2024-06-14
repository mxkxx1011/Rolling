import { RecipientsMessagesAPI } from 'data/CallAPI';
import { useState, useEffect } from 'react';
// import CardList from "components/CardList";
import TextDropdownField from 'components/textfield/TextDropdownField';
import TextInputField from 'components/textfield/TextInputField';
import EmojiToggle from 'components/EmojiToggle';

function CardListPage() {
  const [cardList, setCardList] = useState([]);
  const method = 'get';
  // const [pp, setPp] = useState({});

  // setCardList(CardList(method));
  const test = ['a', 'b', 'c', 'd'];

  // useEffect(() => {
  //   setPp(RecipientsMessagesAPI('get', '7720') : "1");
  // }, []);

  // useEffect(() => {
  //   // RecipientsMessagesAPI가 비동기 함수라고 가정하고 async/await 사용
  //   async function fetchData() {
  //     const result = await RecipientsMessagesAPI('get', '7720');
  //     setPp(result);
  //   }
  //   fetchData();
  // }, []);

  return (
    <div className='cardlistlayer'>
      <div className='hotcardlist'>
        <EmojiToggle></EmojiToggle>
        <TextDropdownField options={test}></TextDropdownField>
        <TextInputField></TextInputField>
        {/* <TextDropdownField options={test}></TextDropdownField> */}
        {/* 반복문 */}
        {/* <CardList /> */}
      </div>
      <div className='latelycardlist'>{/* <CardList /> */}</div>
    </div>
  );
}

export default CardListPage;
