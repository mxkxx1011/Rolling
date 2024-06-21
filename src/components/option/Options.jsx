import classNames from 'classnames';
import { useState, useEffect } from 'react';
import Check from './Check';
import './Options.scss';

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

function Options({ type = 'image', onClick }) {
  const imageBackground01 =
    'https://i.pinimg.com/originals/eb/95/10/eb9510644f2631cdf01eccb9de98948d.jpg';
  const imageBackground02 =
    'https://c.pxhere.com/photos/e1/2e/meadow_field_grass_yellow_hill-99221.jpg!d';
  const imageBackground03 =
    'https://images.pexels.com/photos/796605/pexels-photo-796605.jpeg?auto=compress&cs=tinysrgb&w=600';
  const imageBackground04 =
    'https://images.pexels.com/photos/261403/pexels-photo-261403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
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
    onClick(OptionArray[idx]); // 선택된 옵션 값 전달
  };

  // 토글이 변경될 때 첫 번째 옵션 선택
  useEffect(() => {
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
