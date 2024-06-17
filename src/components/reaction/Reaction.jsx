import './Reaction.scss';

export function Reaction({ reaction, className }) {
  const { emoji, count } = reaction;

  return (
    <div className={`reaction ${className}`}>
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
