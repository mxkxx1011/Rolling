import './Toast.scss';
import IMGclose from 'assets/images/ic_close.svg';
import IMGsubtract from 'assets/images/ic_subtract.svg';
import { useEffect } from 'react';

const COPY_SUCCESS_TIMEOUT = 3500;
function Toast({ setShowToast }) {
  const handleClick = () => {
    setShowToast(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, COPY_SUCCESS_TIMEOUT);
    return () => {
      clearTimeout(timer);
    };
  }, [setShowToast]);

  return (
    <div className='toast'>
      <div className='toast-container'>
        <div>
          <div className='toast-text-wrapper'>
            <img
              src={IMGsubtract}
              className='toast-img-subtract'
              alt='토스트 체크모양 아이콘'
            />
            <p>URL이 복사 되었습니다.</p>
          </div>
          <img
            onClick={handleClick}
            src={IMGclose}
            className='toast-img-close'
            alt='토스트 창 닫기 아이콘'
          />
          <div className='progress-bar basic'></div>
          <div className='progress-bar active'></div>
        </div>
      </div>
    </div>
  );
}

export default Toast;
