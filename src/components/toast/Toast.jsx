import './Toast.scss';
import IMGclose from 'assets/images/ic_close.svg';
import IMGsubtract from 'assets/images/ic_subtract.svg';

function Toast() {
  return (
    <div className='toast-container'>
      <div className='toast-text-wrapper'>
        <img
          src={IMGsubtract}
          className='toast-img-subtract'
          alt='토스트 체크모양 아이콘'
        />
        <p>URL이 복사 되었습니다.</p>
      </div>
      <img
        src={IMGclose}
        className='toast-img-close'
        alt='토스트 창 닫기 아이콘'
      />
    </div>
  );
}

export default Toast;
