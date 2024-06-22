import classNames from 'classnames';
import { useState, useEffect } from 'react';
import Check from './Check';
import './Options.scss';
import { images } from './ImageBackground'; // images.js 파일에서 이미지 배열 가져오기

//랜덤 옵션 이미지 지정
const shuffleArray = (array) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    //랜덤 아이템 배열 생성
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

function Option({ idx, isSelected, color = null, image, handleClick }) {
  const BackGroundImageStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div
      className={classNames('option', color)}
      style={BackGroundImageStyle}
      onClick={handleClick}
    >
      {idx === isSelected ? <Check /> : null}
    </div>
  );
}

function Options({ type = 'image', onClick, onFirstOptionSelect }) {
  const [isSelected, setIsSelected] = useState(0);
  const [shuffledImages, setShuffledImages] = useState([]);
  const colors = ['beige', 'purple', 'blue', 'green'];

  const OptionArray = type === 'color' ? colors : shuffledImages;

  const handleClick = (idx) => {
    setIsSelected(idx);
    onClick(OptionArray[idx]); // 선택된 옵션 값 전달
  };

  // 토글 변환 시 작동
  useEffect(() => {
    if (type === 'image') {
      const shuffled = shuffleArray([...images]).slice(0, 4);
      setShuffledImages(shuffled);
      onFirstOptionSelect(shuffled[0]);
    } else {
      onFirstOptionSelect(colors[0]);
    }
    setIsSelected(0);
  }, [type]);

  return (
    <div className='options'>
      {OptionArray.map((option, idx) => (
        <Option
          key={idx}
          idx={idx}
          isSelected={isSelected}
          color={type === 'color' ? option : null}
          handleClick={() => handleClick(idx)}
          image={type === 'image' ? option : null}
        />
      ))}
    </div>
  );
}

export default Options;
