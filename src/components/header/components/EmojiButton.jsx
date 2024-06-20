import Button from 'components/Button';
import { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import { RecipientsReactionsAPI } from 'data/CallAPI';
import { useParams } from 'react-router-dom';

function EmojiButton({ getReactions, getAllReactions, isLoading }) {
  const { postId } = useParams();
  const [isEmoji, setIsEmoji] = useState(false);

  const handleEmojiClick = async (e) => {
    const { emoji } = e;
    const emojiBody = {
      emoji,
      type: 'increase',
    };

    try {
      const response = await RecipientsReactionsAPI('post', postId, emojiBody);
      await getReactions();
      await getAllReactions();
    } catch (error) {
      console.error('Error while updating emoji reaction:', error);
    }

    // 이모지 선택 상태를 닫습니다.
    setIsEmoji(false);
  };
  const handleOpenEmojiPicker = () => {
    setIsEmoji((prev) => !prev);
  };
  return (
    <>
      <Button
        handleClick={handleOpenEmojiPicker}
        order='outlined'
        size='36'
        emoji
        disabled={isLoading}
      >
        추가
      </Button>
      {isEmoji && (
        <EmojiPicker onEmojiClick={handleEmojiClick} className='emoji-picker' />
      )}
    </>
  );
}

export default EmojiButton;
