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

function HeaderCardMessage({
  name,
  messageCount,
  recentMessages,
  reactions,
  handleClick,
  setShowToast,
}) {
  const [isOpenReactionList, SetIsOpenReactionList] = useState(false);
  const [allReactions, setAllReactions] = useState([]);
  const isDesktop = useMediaQuery({ minWidth: 1024 });

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
    <header className={styles.header}>
      <div className={styles.container}>
        <HeaderName name={name} />
        <div className='header-right'>
          <WriterCount
            messageCount={messageCount}
            recentMessages={recentMessages}
          />
          <div className='border'></div>
          <div>
            <ReactionWrapper
              reactions={reactions}
              allReactions={allReactions}
            />

            <div className='button-wrapper'>
              <EmojiButton />
              <div className='border'></div>
              <ShareButton setShowToast={setShowToast} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderCardMessage;
