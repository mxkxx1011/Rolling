import { RecipientsReactionsAPI } from 'data/CallAPI';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';
import EmojiButton from './EmojiButton';
import ReactionWrapper from './ReactionWrapper';
import ShareButton from './ShareButton';

function EmojiShareWrapper({ setShowToast }) {
  const [isOpenReactionList, setIsOpenReactionList] = useState(false);
  const [currentEmoji, setCurrentEmoji] = useState('');
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const { postId } = useParams();

  const [reactions, setReactions] = useState([]);
  const [allReactions, setAllReactions] = useState([]);
  const [reactionCount, setReactionCount] = useState(0);

  const getReactions = async () => {
    const limit = 3;
    try {
      const response = await RecipientsReactionsAPI('get', postId, null, limit);
      setReactions(response.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getReactions();
    getAllReactions();
  }, []);

  const getAllReactions = async (all = false) => {
    let limit = isDesktop ? 8 : 6;
    limit = all ? reactionCount : null;
    try {
      const response = await RecipientsReactionsAPI('get', postId, null, limit);
      setAllReactions(response.results);
      setReactionCount(response.count);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getReactions();
    getAllReactions();
  }, [postId, isOpenReactionList, isDesktop, currentEmoji]);

  return (
    <div className='emoji-share-wrapper'>
      <ReactionWrapper
        reactions={reactions}
        allReactions={allReactions}
        isOpen={isOpenReactionList}
        setOpen={setIsOpenReactionList}
        getAllReactions={getAllReactions}
      />

      <div className='button-wrapper'>
        <EmojiButton
          getReactions={getReactions}
          getAllReactions={getAllReactions}
          isOpenReactionList={isOpenReactionList}
          setCurrentEmoji={setCurrentEmoji}
        />
        <div className='border'></div>
        <ShareButton setShowToast={setShowToast} />
      </div>
    </div>
  );
}

export default EmojiShareWrapper;
