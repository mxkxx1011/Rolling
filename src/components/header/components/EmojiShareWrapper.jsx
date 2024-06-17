import EmojiButton from './EmojiButton';
import ReactionWrapper from './ReactionWrapper';
import ShareButton from './ShareButton';

function EmojiShareWrapper({
  reactions,
  allReactions,
  isOpenReactionList,
  setIsOpenReactionList,
  setShowToast,
}) {
  return (
    <div className='emoji-share-wrapper'>
      <ReactionWrapper
        reactions={reactions}
        allReactions={allReactions}
        isOpen={isOpenReactionList}
        setOpen={setIsOpenReactionList}
      />

      <div className='button-wrapper'>
        <EmojiButton />
        <div className='border'></div>
        <ShareButton setShowToast={setShowToast} />
      </div>
    </div>
  );
}

export default EmojiShareWrapper;
