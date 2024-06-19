import EmojiToggle from 'components/EmojiToggle';
import ReactionList from 'components/reaction/Reaction';

function ReactionWrapper({
  reactions,
  allReactions,
  isOpen,
  setOpen,
  getAllReactions,
}) {
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
        getAllReactions={getAllReactions}
      />
    </div>
  );
}

export default ReactionWrapper;
