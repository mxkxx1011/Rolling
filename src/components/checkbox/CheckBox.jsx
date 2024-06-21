import './Checkbox.scss';

function Checkbox({ id, handleClick, isChecked, handleChange }) {
  return (
    <div className='cntr'>
      <input
        checked={isChecked}
        type='checkbox'
        id={id}
        className='hidden-xs-up'
        // onClick={handleClick}
        onChange={handleChange}
      />
      <label htmlFor={id} className='cbx'></label>
    </div>
  );
}

export default Checkbox;
