import Button from 'components/Button';
import styles from 'components/Header.module.scss';
import './HeaderCardMessage.scss';

import { useMediaQuery } from 'react-responsive';
import WriterCount from './components/WriterCount';
import HeaderName from './components/HeaderName';
import EmojiShareWrapper from './components/EmojiShareWrapper';

function HeaderCardMessage({
  name,
  messageCount,
  recentMessages,
  handleClick,
  setShowToast,
  isLoading,
}) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  if (isMobile)
    return (
      <div className='header-mobile'>
        <div>
          <HeaderName name={name} messageCount={messageCount} />
        </div>
        <div>
          <EmojiShareWrapper setShowToast={setShowToast} />
        </div>
      </div>
    );

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <HeaderName
          name={name}
          messageCount={messageCount}
          isLoading={isLoading}
        />
        <div className='header-right'>
          {isDesktop ? (
            <>
              <WriterCount
                messageCount={messageCount}
                recentMessages={recentMessages}
                isLoading={isLoading}
              />
              <div className='border'></div>
            </>
          ) : null}
          <EmojiShareWrapper
            setShowToast={setShowToast}
            isLoading={isLoading}
          />
        </div>
      </div>
    </header>
  );
}

export default HeaderCardMessage;
