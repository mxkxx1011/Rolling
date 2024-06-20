import iconShare24 from 'assets/images/ic_share_24.svg';
import Button from 'components/Button';
import DropMenu from 'components/textfield/DropMenu';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ShareImageButton from './ShareImageButton';

const { Kakao } = window;
const KAKAO_LINK_KEY = process.env.REACT_APP_SHARE_KAKAO_LINK_KEY;

function ShareButton({ setShowToast, isLoading }) {
  const [isMenuShow, setIsMenuShow] = useState(false);

  const route = 'https://rolling.com';
  const resultURL = window.location.href;

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

  const handleLinkKakao = () => {
    if (!Kakao.isInitialized()) {
      alert('카카오링크 초기화에 실패했습니다. 다시 시도해 주세요.');
      return;
    }

    Kakao.Share.sendDefault({
      objectType: 'feed', // 카카오 링크 공유 여러 type들 중 feed라는 타입 -> 자세한 건 카카오에서 확인
      content: {
        title: 'rolling', // 인자값으로 받은 title
        description: 'rolling in the deep', // 인자값으로 받은 title
        imageUrl:
          'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        link: {
          mobileWebUrl: resultURL, // 인자값으로 받은 route(uri 형태)
          webUrl: resultURL,
        },
      },
      buttons: [
        {
          title: '웹으로 이동',
          link: {
            mobileWebUrl: route,
            webUrl: route,
          },
        },
      ],
    });
  };

  useEffect(() => {
    if (KAKAO_LINK_KEY && !Kakao.isInitialized()) {
      Kakao.init(KAKAO_LINK_KEY);
    }
  }, []);

  return (
    <div className='share-button-wrapper'>
      {/* <Button
        order='outlined'
        size='36'
        handleClick={handleShowMenu}
        disabled={isLoading}
      >
        <img src={iconShare24} alt='공유하기' />
      </Button> */}
      <ShareImageButton handleShowMenu={handleShowMenu} isLoading={isLoading} />
      {isMenuShow && (
        <DropMenu
          options={['카카오톡 공유', 'URL 공유']}
          handleClick={[handleLinkKakao, handleURLCopy]}
        />
      )}
    </div>
  );
}

export default ShareButton;
