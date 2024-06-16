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
      className={classNames('option', color, { selected: idx === isSelected })}
      style={BackGroundImageStyle}
      onClick={() => handleClick(idx)}
    >
      {idx === isSelected ? <Check /> : null}
    </div>
  );
}

function Options({ type = 'image', onOptionClick }) {
  const [isSelected, setIsSelected] = useState(-1);
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
    // 선택된 옵션을 부모 컴포넌트로 전달
    onOptionClick(OptionArray[idx]);
  };

  return (
    <div className='options'>
      {OptionArray.map((option, idx) => (
        <Option
          key={idx}
          idx={idx}
          isSelected={isSelected}
          color={type === 'color' ? option : null}
          image={type === 'image' ? option : null}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default Options;
