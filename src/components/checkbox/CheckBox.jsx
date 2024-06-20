import './Checkbox.scss';

function Checkbox({ id, handleClick, isChecked }) {
  return (
    <div className='cntr'>
      <input
        checked={isChecked}
        type='checkbox'
        id={id}
        className='hidden-xs-up'
        onClick={handleClick}
      />
      <label htmlFor={id} className='cbx'></label>
    </div>
  );
}

export default Checkbox;
