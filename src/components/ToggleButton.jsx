import { useState } from 'react';
import Button from './Button';
import './ToggleButton.scss';

function ToggleButton({ options, onOptionSelect }) {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  //선택된 옵션 state 적용, 부모 컴포넌트로 전달
  const handleClick = (option) => {
    setSelectedOption(option);
    onOptionSelect(option);
  };

  return (
    <div className='toggle-button'>
      {options.map((option) => (
        <Button
          key={option}
          order={selectedOption === option ? 'secondary' : 'default'}
          size='40'
          type='button' //ToggleButton 클릭하면 submit되는 현상 방지
          handleClick={() => handleClick(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}

export default ToggleButton;
