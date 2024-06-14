import CardList from 'components/card/CardList';
import Header from 'components/Header';
import HeaderCardMessage from 'components/header/HeaderCardMessage';
import { useParams } from 'react-router-dom';

// post/{id}
function CardMessagePage() {
  const { id } = useParams();
  return (
    <>
      <HeaderCardMessage
        name={name}
        messageCount={messageCount}
        recentMessages={recentMessages}
        reactions={reactions}
      />
      <CardList recipient={recipient} />
    </>
  );
}

export default CardMessagePage;
