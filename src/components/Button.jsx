import './Button.scss';
import classNames from 'classnames';
import { ReactComponent as IconAdd24 } from '../assets/images/ic_add_24.svg';
import { ReactComponent as IconAdd20 } from '../assets/images/ic_add_20.svg';

function Button({
  children,
  size,
  type,
  order, 
  emoji,
  disabled,
  className,
  handleClick,
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={classNames('button', `size-${size}`, order, className)}
      onClick={handleClick}
    >
      {emoji && (size === '28' ? <IconAdd20 /> : <IconAdd24 />)}
      {children}
    </button>
  );
}

// svg파일을 그대로 사용하는것보다 컴포넌트화 시켜서 사용하는게 가독성이 좋음.
export default Button;
