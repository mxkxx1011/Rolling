import { RecipientsReactionsAPI } from 'data/CallAPI';
import useAllReactions from 'hooks/useAllReactions';
import useReactions from 'hooks/useReactions';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';
import EmojiButton from './EmojiButton';
import ReactionWrapper from './ReactionWrapper';
import ShareButton from './ShareButton';

function EmojiShareWrapper({ setShowToast, isLoading }) {
  const [isOpenReactionList, setIsOpenReactionList] = useState(false);
  const [currentEmoji, setCurrentEmoji] = useState('');
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const { reactions, getReactions } = useReactions();
  const { allReactions, getAllReactions } = useAllReactions();

  useEffect(() => {
    getReactions();
    getAllReactions();
  }, [isOpenReactionList, isDesktop, currentEmoji]);

  return (
    <div className='emoji-share-wrapper'>
      <ReactionWrapper
        reactions={reactions}
        allReactions={allReactions}
        isOpen={isOpenReactionList}
        setOpen={setIsOpenReactionList}
        getAllReactions={getAllReactions}
        isLoading={isLoading}
      />

      <div className='button-wrapper'>
        <EmojiButton
          getReactions={getReactions}
          getAllReactions={getAllReactions}
          isOpenReactionList={isOpenReactionList}
          setCurrentEmoji={setCurrentEmoji}
          isLoading={isLoading}
        />
        <div className='border'></div>
        <ShareButton setShowToast={setShowToast} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default EmojiShareWrapper;
