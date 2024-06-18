import classNames from 'classnames';
import { useState } from 'react';
import Check from './Check';
import './Options.scss';

import imageBackground01 from 'assets/images/image_background_01.jpg';
import imageBackground02 from 'assets/images/image_background_02.jpg';
import imageBackground03 from 'assets/images/image_background_03.jpg';
import imageBackground04 from 'assets/images/image_background_04.jpg';

function Option({ idx, isSelected, color = null, image, handleClick }) {
  const BackGroundImageStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div
      className={classNames('option', color)}
      selected
      style={BackGroundImageStyle}
      onClick={handleClick}
    >
      {idx === isSelected ? <Check /> : null}
    </div>
  );
}

// 토글을 누르면 type이 변해야함
// 이미지 누르면 type = image / 컬러 누르면 type = color
function Options({ type = 'image' }) {
  const [isSelected, setIsSelected] = useState(0);
  const colors = ['beige', 'purple', 'blue', 'green'];
  const imgs = [
    imageBackground01,
    imageBackground02,
    imageBackground03,
    imageBackground04,
  ];

  const OptionArray = type === 'color' ? colors : imgs;

  const handleClick = (idx) => {
    setIsSelected(idx);
  };

  return (
    <div className='options'>
      {OptionArray.map((option, idx) => (
        <Option
          key={idx}
          idx={idx}
          isSelected={isSelected}
          color={option}
          handleClick={() => handleClick(idx)}
          image={option}
        />
      ))}
    </div>
  );
}

export default Options;
