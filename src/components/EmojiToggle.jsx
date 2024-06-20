import ArrowDown from 'assets/images/ic_arrow_down.svg';
import ArrowTop from 'assets/images/ic_arrow_top.svg';
import 'components/EmojiToggle.scss';
import { Reaction } from 'components/reaction/Reaction';
import Button from './Button';
import iconPlus4 from 'assets/images/ic_plus_4.svg';
import iconMinus from 'assets/images/ic_minus.svg';
import { useState } from 'react';

function EmojiToggle({ reactions, handleClick, isOpen, getAllReactions }) {
  const [showAllReactions, setShowAllReactions] = useState(false);
  const handlePlusClick = () => {
    setShowAllReactions((prev) => !prev);
    getAllReactions(!showAllReactions);
  };
  return (
    <div className='emoji-list-layer'>
      <button className='emoji-toggle' onClick={handleClick}>
        <img
          src={isOpen ? ArrowTop : ArrowDown}
          alt='이모지토글'
          className='arrow'
        />
      </button>
      {isOpen && (
        <div className='all-emoji-list'>
          {reactions.length == 0 ? (
            <p>이모지를 추가해보세요!</p>
          ) : (
            <>
              {reactions.map((reaction) => (
                <Reaction
                  key={reaction.id}
                  reaction={reaction}
                  className='small'
                />
              ))}
              <Button order='outlined' size='28' handleClick={handlePlusClick}>
                <img
                  src={showAllReactions ? iconMinus : iconPlus4}
                  alt='plus'
                  className='icon-plus'
                />
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default EmojiToggle;
