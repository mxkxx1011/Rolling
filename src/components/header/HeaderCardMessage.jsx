import Button from 'components/Button';
import styles from 'components/Header.module.scss';
import ReactionList from '../reaction/Reaction';
import './HeaderCardMessage.scss';
import iconShare24 from 'assets/images/ic_share_24.svg';
import iconArrowDown from 'assets/images/ic_arrow_down.svg';
import ProfileList from 'components/profile/ProfileList';
import ShareKakao from 'utils/ShareKakao';
import { useEffect, useState } from 'react';
import EmojiToggle from 'components/EmojiToggle';
import EmojiPicker from 'emoji-picker-react';
import { RecipientsReactionsAPI } from 'data/CallAPI';
import { useParams } from 'react-router-dom';

function HeaderName({ name }) {
  return <div className='font-28-bold'>To. {name}</div>;
}

function HeaderCardMessage({
  name,
  messageCount,
  recentMessages,
  reactions,
  handleClick,
}) {
  const [isEmoji, setIsEmoji] = useState(false);
  const [isOpenReactionList, SetIsOpenReactionList] = useState(false);
  const [allReactions, setAllReactions] = useState([]);
  const { postId } = useParams();

  const handleEmojiClick = (e) => {
    console.log(e.emoji);
  };

  const handleOpenEmojiPicker = () => {
    setIsEmoji((prev) => !prev);
  };

  const handleOpenReactionList = () => {
    SetIsOpenReactionList((prev) => !prev);
  };

  useEffect(() => {
    const getAllReactions = async () => {
      try {
        const responseReactions = await RecipientsReactionsAPI(
          'get',
          postId,
          null,
        );
        setAllReactions(responseReactions.results);
      } catch (error) {
        console.error(error);
      }
    };
    if (isOpenReactionList) {
      getAllReactions();
    }
  }, [isOpenReactionList, postId]);

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
            <ReactionList reactions={reactions} />

            {/* <img src={iconArrowDown} alt='down' /> */}
            {/* 임시 아이콘 (드롭다운 컴포넌트바꾸기) */}
            <EmojiToggle
              handleClick={handleOpenReactionList}
              reactions={allReactions}
              isOpen={isOpenReactionList}
            />

            <div className='button-wrapper'>
              <Button
                handleClick={handleOpenEmojiPicker}
                type='outlined'
                size='36'
                emoji
              >
                추가
              </Button>
              {isEmoji && (
                <EmojiPicker
                  onEmojiClick={handleEmojiClick}
                  className='emoji-picker'
                />
              )}
              <div className='border'></div>
              {/* <Button type='outlined' size='36' handleClick={handleClick}>
                <img src={iconShare24} alt='공유버튼' />
              </Button> */}
              <ShareKakao />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderCardMessage;
