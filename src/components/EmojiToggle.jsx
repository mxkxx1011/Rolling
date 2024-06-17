import { useState } from 'react';
import ArrowDown from 'assets/images/ic_arrow_down.svg';
import ArrowTop from 'assets/images/ic_arrow_top.svg';
import 'components/EmojiToggle.scss';
import { Reaction } from 'components/reaction/Reaction';

/*
 * reactions(array)
 */

function EmojiToggle({ reactions, handleClick, isOpen }) {
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
          {reactions.map((reaction) => (
            <Reaction key={reaction.id} reaction={reaction} className='small' />
          ))}
        </div>
      )}
    </div>
  );
}

export default EmojiToggle;
