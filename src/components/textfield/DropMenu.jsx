import 'components/textfield/DropMenu.scss';

function DropMenu({ options, handleClick, setPositionRelative }) {
  return (
    <ul className={`dropdown-menu ${setPositionRelative ? 'relative' : ''}`}>
      {options.map((option, index) => (
        <li
          key={index}
          onClick={() =>
            Array.isArray(handleClick)
              ? handleClick[index](option)
              : handleClick(option)
          }
        >
          {option}
        </li>
      ))}
    </ul>
  );
}

export default DropMenu;
