import EmojiToggle from 'components/EmojiToggle';
import ReactionList from 'components/reaction/Reaction';
import iconArrowDown from 'assets/images/ic_arrow_down.svg';

function ReactionWrapper({
  reactions,
  allReactions,
  isOpen,
  setOpen,
  getAllReactions,
  isLoading,
}) {
  const handleOpenReactionList = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      {isLoading ? (
        <>
          <div className='reaction-wrapper'>
            <div className='skeleton skeleton-reaction'></div>
            <div className='skeleton skeleton-reaction'></div>
            <div className='skeleton skeleton-reaction'></div>
          </div>
          <img src={iconArrowDown} alt='down' />
        </>
      ) : (
        <div className='reaction-wrapper'>
          <ReactionList reactions={reactions} />
          <EmojiToggle
            handleClick={handleOpenReactionList}
            reactions={allReactions}
            isOpen={isOpen}
            getAllReactions={getAllReactions}
          />
        </div>
      )}
    </>
  );
}

export default ReactionWrapper;
