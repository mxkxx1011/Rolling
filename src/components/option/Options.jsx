import classNames from 'classnames';
import { useState } from 'react';
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

// 토글을 누르면 type이 변해야함
// 이미지 누르면 type = image / 컬러 누르면 type = color
function Options({ type = 'image', onClick }) {
  const imageBackground01 =
    'https://i.pinimg.com/originals/eb/95/10/eb9510644f2631cdf01eccb9de98948d.jpg';
  const imageBackground02 =
    'https://images.pexels.com/photos/533923/pexels-photo-533923.jpeg';
  const imageBackground03 =
    'https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg';
  const imageBackground04 =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVb_kUdzTwDVliYf9LRvNjDTrSVMYKGyjfIg&s';

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
