import iconShare24 from 'assets/images/ic_share_24.svg';
import Button from 'components/Button';
import DropMenu from 'components/textfield/DropMenu';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function ShareButton({ setShowToast }) {
  const [isMenuShow, setIsMenuShow] = useState(false);

  const handleShowMenu = () => {
    setIsMenuShow((prev) => !prev);
  };

  const handleURLCopy = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3500);
    });
  };

  return (
    <div className='share-button-wrapper'>
      <Button order='outlined' size='36' handleClick={handleShowMenu}>
        <img src={iconShare24} alt='공유하기' />
      </Button>
      {isMenuShow && <DropMenu options={['카카오톡 공유', 'URL 공유']} />}
      {/* TODO: 광호님이 드롭메뉴 수정하면 핸들러 함수 넣기 */}
    </div>
  );
}

export default ShareButton;
