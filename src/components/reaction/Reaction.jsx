import { RecipientsReactionsAPI } from 'data/CallAPI';
import { useParams } from 'react-router-dom';
import './Reaction.scss';

export function Reaction({ reaction, className }) {
  const { emoji, count } = reaction;
  const { postId } = useParams();

  const handleDecrease = () => {
    const body = {
      emoji,
      type: 'decrease',
    };

    RecipientsReactionsAPI('post', postId, body);
  };

  return (
    <div className={`reaction ${className}`} onClick={handleDecrease}>
      {emoji} {count}
    </div>
  );
}

function ReactionList({ reactions = [] }) {
  const topReactions = reactions ? reactions.slice(0, 3) : [];
  return (
    <div className='reactions'>
      {topReactions.map((reaction) => (
        <Reaction key={reaction.id} reaction={reaction} />
      ))}
    </div>
  );
}

export default ReactionList;
