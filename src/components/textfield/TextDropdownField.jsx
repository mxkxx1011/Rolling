import './DropdownField.scss';
import iconArrowDown from 'assets/images/ic_arrow_down.svg';
import iconArrowTop from 'assets/images/ic_arrow_top.svg';
import { useState } from 'react';
import DropMenu from 'components/textfield/DropMenu';

function TextDropdownField({ options, onChangeOptions }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleURLCopy = () => {
    console.log('됨');
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChangeOptions != null) {
      onChangeOptions(option);
    } else if (handleClick != null) {
      return handleClick;
    }
  };
  return (
    <div className='dropdown'>
      <button
        className='dropdown-toggle'
        onClick={toggleDropdown}
        type='button'
      >
        {selectedOption}
        <img
          src={isOpen ? iconArrowTop : iconArrowDown}
          alt='test'
          className='arrow'
        />
      </button>
      {isOpen && <DropMenu options={options} handleClick={handleOptionClick} />}
    </div>
  );
}

export default TextDropdownField;
