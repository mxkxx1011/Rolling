import { useState } from 'react';
import ArrowDown from 'assets/images/ic_arrow_down.svg';
import ArrowTop from 'assets/images/ic_arrow_top.svg';
import 'components/EmojiToggle.scss';

function EmojiToggle() {
  // 롤링 페이퍼의 모든 이모지 데이터 받아오는거 추가
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const testemoji = '👌';
  const testcount = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className='emojilistlayer'>
      <button className='emojitoggle' onClick={onToggle}>
        <img
          src={isOpen ? ArrowTop : ArrowDown}
          alt='이모지토글'
          className='arrow'
        />
      </button>
      {isOpen && (
        <div className='allemojilist'>
          {/* 반복문으로 이모지 데이터 접근 */}
          {testcount.map((a, index) => (
            <div key={index} className='emoji'>
              <p>{testemoji}</p>
              <p>{a}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EmojiToggle;
