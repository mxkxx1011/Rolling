import { RecipientsMessagesAPI } from 'data/CallAPI';
import { useState, useEffect } from 'react';
// import CardList from "components/CardList";
import TextDropdownField from 'components/textfield/TextDropdownField';
import TextInputField from 'components/textfield/TextInputField';
import EmojiToggle from 'components/EmojiToggle';

function CardListPage() {
  const [cardList, setCardList] = useState([]);
  const test = ['a', 'b', 'c', 'd'];

  const [recipient, setRecipient] = useState({});
  // useEffect(() => {
  //   const getRecipient = async () => {
  //     try {
  //       const response = await RecipientsMessagesAPI('get', postId);
  //       setRecipient(response);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  
  //   getRecipient();
  // }, [postId]);
  return (
    <div className='cardlistlayer'>
      <div className='hotcardlist'>
        <p>인기 롤링 페이퍼 🔥</p>
        {/* 반복문 */}
        {/* <CardList /> */}
      </div>
      <div className='latelycardlist'>
        {/* <CardList /> */}
        <p>최근에 만든 롤링 페이퍼 ⭐</p>
        </div>
      <div className='testlayer'>
        <EmojiToggle></EmojiToggle>
        <br/>
        <TextDropdownField options={test}></TextDropdownField>
        <br/><br/>
        <TextInputField></TextInputField>
        <br/>
      </div>
    </div>
  );
}

export default CardListPage;
