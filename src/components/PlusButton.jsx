import classNames from 'classnames';
import './PlusButton.scss';
import iconPlus from '../assets/images/ic_plus.svg';

function PlusButton({ disabled }) {
  return (
    <button disabled={disabled} className={classNames('plus-button')}>
      <img src={iconPlus} />
    </button>
  );
}
export default PlusButton;
