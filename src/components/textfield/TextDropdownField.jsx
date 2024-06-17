import './DropdownField.scss';
import iconArrowDown from 'assets/images/ic_arrow_down.svg';
import iconArrowTop from 'assets/images/ic_arrow_top.svg';
import { useState } from 'react';
import DropMenu from 'components/textfield/DropMenu';

function TextDropdownField({ options }) {
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
      <button className='dropdown-toggle' onClick={toggleDropdown}>
        {selectedOption}
        <img
          src={isOpen ? iconArrowTop : iconArrowDown}
          alt='test'
          className='arrow'
        />
      </button>
      {isOpen && <DropMenu options={options} clickEvnet={handleOptionClick} />}
    </div>
  );
}

export default TextDropdownField;
