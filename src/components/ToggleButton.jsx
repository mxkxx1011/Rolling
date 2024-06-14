import { useState } from 'react';
import Button from './Button';
import './ToggleButton.scss';

function ToggleButton({ options }) {
  const [isSelected, setIsSelected] = useState(options[0]);

  return (
    <div className='toggle-button'>
      {options.map((option) => (
        <Button
          type={isSelected === option ? 'secondary' : 'default'}
          size='40'
          onClick={() => setIsSelected(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}

export default ToggleButton;
