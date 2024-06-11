import "../assets/styles/TextFiled/DropdownField.scss";
import { useState } from "react";

function TextDropdownFiled({name, options}) {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="Dropdown">
            <button className="DropdownToggle" onClick={toggleDropdown}>
                {selectedOption}
                <span className={`Arrow ${isOpen ? 'Open' : ''}`}></span>
            </button>
            {isOpen && (
                <ul className="DropdownMenu">
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

export default TextDropdownFiled;