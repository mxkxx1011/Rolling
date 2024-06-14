import "./DropdownField.scss";
import iconArrowDown from 'assets/images/ic_arrow_down.svg';
import iconArrowTop from 'assets/images/ic_arrow_top.svg';
import { useState } from "react";

function TextDropdownField({options}) {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const onToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <button className="dropdowntoggle" onClick={onToggle}>
                {selectedOption}
                <img src={isOpen ? iconArrowDown : iconArrowTop} alt='test' className="arrow" />
                {/* <img src={icon} alt="test" className={`arrow ${isOpen ? 'open' : ''}`} /> */}
            </button>
            {isOpen && (
                <ul className="dropdownmenu">
                    {options.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TextDropdownField;