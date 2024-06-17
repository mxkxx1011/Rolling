import EmojiToggle from 'components/EmojiToggle';
import ReactionList from 'components/reaction/Reaction';
import { useState } from 'react';

function ReactionWrapper({ reactions, allReactions }) {
  const [isOpenReactionList, SetIsOpenReactionList] = useState(false);

  const handleOpenReactionList = () => {
    SetIsOpenReactionList((prev) => !prev);
  };
  return (
    <>
      <ReactionList reactions={reactions} />
      <EmojiToggle
        handleClick={handleOpenReactionList}
        reactions={allReactions}
        isOpen={isOpenReactionList}
      />
    </>
  );
}

export default ReactionWrapper;
