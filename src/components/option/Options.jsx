import classNames from 'classnames';
import { useState, useEffect } from 'react';
import Check from './Check';
import './Options.scss';
import { images } from './ImageBackground';
import RandomButton from './RandomButton';

// 랜덤 옵션 이미지 지정
const shuffleArray = (array) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
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

  // 이미지 랜덤 변경 함수
  const handleImageShuffle = () => {
    const shuffled = shuffleArray([...images]).slice(0, 4);
    setShuffledImages(shuffled);
    onFirstOptionSelect(shuffled[0]);
    setIsSelected(0);
  };

  useEffect(() => {
    if (type === 'image') {
      const shuffled = shuffleArray([...images]).slice(0, 4);
      setShuffledImages(shuffled);
      onFirstOptionSelect(shuffled[0]);
    } else {
      onFirstOptionSelect(colors[0]);
    }
    setIsSelected(0); // 첫 번째 이미지를 선택 상태로 설정
  }, [type]);

  return (
    <div>
      {type === 'image' && (
        <RandomButton onClick={handleImageShuffle}>
          랜덤 이미지 설정
        </RandomButton>
      )}
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
    </div>
  );
}

export default Options;
