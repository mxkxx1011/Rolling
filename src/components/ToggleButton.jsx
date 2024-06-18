import { useState } from 'react';
import classNames from 'classnames';

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
        //TODO: classNames이 올바른 사용인지 check
        <Button
          key={option}
          className={classNames(
            selectedOption === option ? 'secondary' : 'default',
          )}
          size='40'
          handleClick={() => handleClick(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}

export default ToggleButton;
