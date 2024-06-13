import './Button.scss';
import Button from './Button';
import { ReactComponent as IconDelete } from '../assets/images/ic_deleted.svg';

function DeleteButton({ disable }) {
  return (
    <Button disable={disable} type='delete' size='36' emoji={false}>
      <IconDelete />
    </Button>
  );
}

// svg파일을 그대로 사용하는것보다 컴포넌트화 시켜서 사용하는게 가독성이 좋음.

export default DeleteButton;
