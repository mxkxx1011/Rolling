import Button from 'components/Button';
import { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

function EmojiButton() {
  const [isEmoji, setIsEmoji] = useState(false);
  const handleEmojiClick = (e) => {
    console.log(e.emoji);
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
