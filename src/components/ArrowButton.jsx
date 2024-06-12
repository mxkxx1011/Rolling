import classNames from 'classnames';
import './ArrowButton.scss';
import iconArrowLeft from '../assets/images/ic_arrow_left.svg';
import iconArrowRight from '../assets/images/ic_arrow_right.svg';

function ArrowButton({ direction }) {
  return (
    <button className={classNames('ArrowButton')}>
      <img src={direction === 'left' ? iconArrowLeft : iconArrowRight} />
    </button>
  );
}
export default ArrowButton;
