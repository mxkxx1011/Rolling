import imageBackground01 from 'assets/images/image_background_01.jpg';
import Button from 'components/Button';
import { useEffect } from 'react';
import iconShare24 from 'assets/images/ic_share_24.svg';

const { Kakao } = window;
const KAKAO_LINK_KEY = process.env.REACT_APP_SHARE_KAKAO_LINK_KEY;

function ShareKakao() {
  const route = 'https://rolling.com';
  const resultURL = window.location.href;

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(KAKAO_LINK_KEY);
  }, []);

  const handleLinkKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed', // 카카오 링크 공유 여러 type들 중 feed라는 타입 -> 자세한 건 카카오에서 확인
      content: {
        title: 'rolling', // 인자값으로 받은 title
        description: 'rolling in the deep', // 인자값으로 받은 title
        imageUrl:
          'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        link: {
          mobileWebUrl: route, // 인자값으로 받은 route(uri 형태)
          webUrl: route,
        },
      },
      buttons: [
        // {
        //   title: 'rolling',
        //   link: {
        //     mobileWebUrl: route,
        //     webUrl: route,
        //   },
        // },
        {
          title: '웹으로 이동',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        {
          title: '앱으로 이동',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
      ],
    });
  };

  return (
    <Button type='outlined' size='36' handleClick={handleLinkKakao}>
      <img src={iconShare24} alt='공유버튼' />
    </Button>
  );
}

export default ShareKakao;
