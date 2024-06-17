import EmojiToggle from 'components/EmojiToggle';
import ReactionList from 'components/reaction/Reaction';

function ReactionWrapper({ reactions, allReactions, isOpen, setOpen }) {
  const handleOpenReactionList = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className='reaction-wrapper'>
      <ReactionList reactions={reactions} />
      <EmojiToggle
        handleClick={handleOpenReactionList}
        reactions={allReactions}
        isOpen={isOpen}
      />
    </div>
  );
}

export default ReactionWrapper;
