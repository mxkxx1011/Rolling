import Button from 'components/Button';
import styles from 'components/Header.module.scss';
import ReactionList from '../reaction/Reaction';
import './HeaderCardMessage.scss';
import iconShare24 from 'assets/images/ic_share_24.svg';
import iconArrowDown from 'assets/images/ic_arrow_down.svg';
import ProfileList from 'components/profile/ProfileList';

function HeaderName({ name }) {
  return <div className='font-28-bold'>To. {name}</div>;
}

function HeaderCardMessage({ name, messageCount, recentMessages, reactions }) {
  const { results } = reactions;
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <HeaderName name={name} />
        <div className='header-right'>
          <div>
            <ProfileList
              messageCount={messageCount}
              recentMessages={recentMessages}
            />
            <p className='font-18-regular'>
              <span className='font-18-bold'>{messageCount}</span>명이
              작성했어요!
            </p>
          </div>
          <div className='border'></div>
          <div>
            <ReactionList reactions={results} />
            <div className='dropdown'>
              <img src={iconArrowDown} alt='down' />
              {/* 임시 아이콘 (드롭다운 컴포넌트바꾸기) */}
            </div>
            <div className='button-wrapper'>
              <Button order='outlined' size='36' emoji>
                추가
              </Button>
              <div className='border'></div>
              <Button order='outlined' size='36'>
                <img src={iconShare24} alt='공유버튼' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderCardMessage;
