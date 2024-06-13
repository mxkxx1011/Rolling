import { useState } from 'react';
import Button from './Button';
import './ToggleButton.scss';

function ToggleButton({ options }) {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className='toggle-button'>
      {options.map((option) => (
        <Button
          type={selectedOption === option ? 'secondary' : 'default'}
          size='40'
          onClick={() => setSelectedOption(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}

export default ToggleButton;
