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
  handleClick,
  setShowToast,
}) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      {!isMobile ? (
        <header className={styles.header}>
          <div className={styles.container}>
            <HeaderName name={name} messageCount={messageCount} />
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
              <EmojiShareWrapper setShowToast={setShowToast} />
            </div>
          </div>
        </header>
      ) : (
        <div className='header-mobile'>
          <div>
            <HeaderName name={name} messageCount={messageCount} />
          </div>
          <div>
            <EmojiShareWrapper setShowToast={setShowToast} />
          </div>
        </div>
      )}
    </>
  );
}

export default HeaderCardMessage;
