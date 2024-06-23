import './Checkbox.scss';

function Checkbox({ id, handleClick, isChecked, handleChange, checkedItems }) {
  return (
    <div className='cntr'>
      <input
        checked={isChecked}
        type='checkbox'
        id={id}
        className='hidden-xs-up'
        onChange={handleChange}
      />
      <label htmlFor={id} className='cbx'></label>
    </div>
  );
}

export default Checkbox;
