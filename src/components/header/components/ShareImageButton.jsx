import Button from 'components/Button';
import iconShare24 from 'assets/images/ic_share_24.svg';

function ShareImageButton({ handleShowMenu, isLoading }) {
  return (
    <Button
      order='outlined'
      size='36'
      handleClick={handleShowMenu}
      disabled={isLoading}
    >
      <img src={iconShare24} alt='공유하기' />
    </Button>
  );
}

export default ShareImageButton;
