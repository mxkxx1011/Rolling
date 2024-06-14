import './Reaction.scss';

function Reaction({ reaction }) {
  const { emoji, count } = reaction;

  return (
    <div className='reaction'>
      {emoji} {count}
    </div>
  );
}

function ReactionList({ reactions }) {
  const topReactions = reactions.slice(0, 3);
  return (
    <div className='reactions'>
      {topReactions.map((reaction) => (
        <Reaction key={reaction.id} reaction={reaction} />
      ))}
    </div>
  );
}

export default ReactionList;
