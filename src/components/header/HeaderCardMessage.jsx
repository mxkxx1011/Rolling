import Button from 'components/Button';
import styles from 'components/Header.module.scss';
import ReactionList from '../reaction/Reaction';
import './HeaderCardMessage.scss';

import ProfileList from 'components/profile/ProfileList';
import ShareKakao from 'utils/ShareKakao';
import { useEffect, useState } from 'react';
import EmojiToggle from 'components/EmojiToggle';

import { RecipientsReactionsAPI } from 'data/CallAPI';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import DropMenu from 'components/textfield/DropMenu';
import ShareButton from './components/ShareButton';
import EmojiButton from './components/EmojiButton';
import ReactionWrapper from './components/ReactionWrapper';
import WriterCount from './components/WriterCount';
import HeaderName from './components/HeaderName';
import EmojiShareWrapper from './components/EmojiShareWrapper';

function HeaderCardMessage({
  name,
  messageCount,
  recentMessages,
  reactions,
  handleClick,
  setShowToast,
}) {
  const [isOpenReactionList, setIsOpenReactionList] = useState(false);
  const [allReactions, setAllReactions] = useState([]);
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const { postId } = useParams();

  useEffect(() => {
    const getAllReactions = async () => {
      const limit = isDesktop ? 8 : 6;
      try {
        const responseReactions = await RecipientsReactionsAPI(
          'get',
          postId,
          null,
          limit,
        );
        setAllReactions(responseReactions.results);
      } catch (error) {
        console.error(error);
      }
    };
    if (isOpenReactionList) {
      getAllReactions();
    }
  }, [isOpenReactionList, postId, isDesktop]);

  return (
    <>
      {!isMobile ? (
        <header className={styles.header}>
          <div className={styles.container}>
            <HeaderName name={name} />
            <div className='header-right'>
              {isDesktop ? (
                <>
                  <WriterCount
                    messageCount={messageCount}
                    recentMessages={recentMessages}
                  />
                  <div className='border'></div>
                </>
              ) : null}
              <EmojiShareWrapper
                reactions={reactions}
                allReactions={allReactions}
                isOpenReactionList={isOpenReactionList}
                setIsOpenReactionList={setIsOpenReactionList}
                setShowToast={setShowToast}
              />
            </div>
          </div>
        </header>
      ) : (
        <div className='header-mobile'>
          <div>
            <HeaderName name={name} />
          </div>
          <div>
            <EmojiShareWrapper
              reactions={reactions}
              allReactions={allReactions}
              isOpenReactionList={isOpenReactionList}
              setIsOpenReactionList={setIsOpenReactionList}
              setShowToast={setShowToast}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default HeaderCardMessage;
