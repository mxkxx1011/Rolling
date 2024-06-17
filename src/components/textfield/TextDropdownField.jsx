import './DropdownField.scss';
import icon from '../../assets/dropdownicon.svg';
import { useState } from 'react';

function TextDropdownField({ options, onChangeOptions }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChangeOptions(option);
  };

  return (
    <div className='dropdown'>
      <button className='dropdowntoggle' onClick={toggleDropdown}>
        {selectedOption}
        <img
          src={icon}
          alt='test'
          className={`arrow ${isOpen ? 'open' : ''}`}
        />
      </button>
      {isOpen && (
        <ul className='dropdownmenu'>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TextDropdownField;
