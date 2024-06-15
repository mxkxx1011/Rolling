import CardList from 'components/card/CardList';
import Header from 'components/Header';
import HeaderCardMessage from 'components/header/HeaderCardMessage';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RecipientsAPI, RecipientsMessagesAPI } from 'data/CallAPI';
import Card from 'components/card/Card';
import './CardMessagePage.scss';
import classNames from 'classnames';
import Options from 'components/option/Options';
import ShareKakao from 'utils/ShareKakao';

// post/{id}
function CardMessagePage() {
  const [recipient, setRecipient] = useState({});
  const [recipientMessage, setRecipientMessage] = useState([]);
  const { postId } = useParams(); // id랑 겹쳐서 수정 ㅠ
  const {
    name,
    backgroundColor,
    backgroundImageURL,
    createdAt,
    messageCount,
    recentMessages,
    reactionCount,
    topReactions,
  } = recipient;

  const messages = recipientMessage ? recipientMessage.slice(0, 5) : []; // 쿼리를 변경해야 하나 ... .. ?

  useEffect(() => {
    const getRecipient = async () => {
      try {
        const responseRecipient = await RecipientsAPI('get', postId);
        const responseMessage = await RecipientsMessagesAPI('get', postId);
        setRecipient(responseRecipient);
        setRecipientMessage(responseMessage.results);
      } catch (error) {
        console.error(error);
      }
    };

    getRecipient();
  }, [postId]);

  const BackGroundImageStyle = {
    backgroundImage: `url(${backgroundImageURL})`,
  };

  return (
    <>
      {recentMessages ? (
        <HeaderCardMessage
          name={name}
          messageCount={messageCount}
          recentMessages={recentMessages}
          reactions={topReactions}
          handleClick={ShareKakao}
        />
      ) : null}
      <div
        className={classNames('body', backgroundColor)}
        style={BackGroundImageStyle}
      >
        {recentMessages ? (
          <div>
            <div className='message'>
              <Card type='plus' />
              {messages.map((message) => (
                <Card key={message.id} message={message} type='normal' />
              ))}
            </div>
          </div>
        ) : (
          <h2>메시지가 없어요</h2>
        )}

        <Options />
      </div>
    </>
  );
}

export default CardMessagePage;

<></>;
