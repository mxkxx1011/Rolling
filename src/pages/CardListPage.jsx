import { RecipientsAPI } from "data/CallAPI";
import { useState, useEffect } from "react";
// import CardList from "components/CardList";
import TextDropdownField from "components/textfield/TextDropdownField";
import TextInputField from "components/textfield/TextInputField";
import EmojiToggle from "components/EmojiToggle";

function CardListPage() {
  const [cardList, setCardList] = useState([]);
  const method = "get";

  // setCardList(CardList(method));
  const test = ["a", "b", "c", "d"] ;
  return (
    <div className="cardlistlayer">
      <div className="hotcardlist">
        <EmojiToggle></EmojiToggle>
        <TextDropdownField options={test}></TextDropdownField>
        <TextInputField></TextInputField>
        {/* <TextDropdownField options={test}></TextDropdownField> */}
        {/* 반복문 */}
        {/* <CardList /> */}
      </div>
      <div className="latelycardlist">
        {/* <CardList /> */}
      </div>
    </div >
  );
}

export default CardListPage;
