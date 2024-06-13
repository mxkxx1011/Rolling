import { RecipientsAPI, MessagesAPI, RecipientsReactionsAPI, RecipientsMessagesAPI } from "data/CallAPI";

function HomePage() {

  const Method = "get";
// 13798
  RecipientsReactionsAPI(Method, 7879);

  return <h2>홈페이지 임시 태그</h2>;
}

export default HomePage;
