import classNames from 'classnames';
import './DeleteButton.scss';
import { ReactComponent as IconDelete } from '../assets/images/ic_deleted.svg';

function DeleteButton({ disable }) {
  return (
    <button disabled={disable} className={classNames('DeleteButton')}>
      <IconDelete />
    </button>
  );
}

// svg파일을 그대로 사용하는것보다 컴포넌트화 시켜서 사용하는게 가독성이 좋음.

export default DeleteButton;
