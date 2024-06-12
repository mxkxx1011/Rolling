import classNames from 'classnames';
import './PlusButton.scss';
import iconPlus from '../assets/images/ic_plus.svg';

function PlusButton({ disable }) {
  return (
    <button disabled={disable} className={classNames('PlusButton')}>
      <img src={iconPlus} />
    </button>
  );
}
export default PlusButton;
