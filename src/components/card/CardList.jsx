import './CardList.scss';
import classNames from 'classnames';
import ProfileList from 'components/profile/ProfileList';
import ReactionList from 'components/reaction/Reaction';
import 'components/profile/ProfileList.scss';
import { Link } from 'react-router-dom';

function CardList({ type = 'color', recipient }) {
  const {
    id,
    name,
    backgroundColor,
    backgroundImageURL,
    messageCount,
    recentMessages,
    topReactions,
  } = recipient;

  const CardBackgroundImage = {
    backgroundImage: `url(${backgroundImageURL})`,
  };

  // 카드 이미지 사용할때 백그라운드 설정해주는 스타일
  // 인라인 스타일로밖에 안됩니당
  return (
    <Link to={`/post/${id}`}>
      <div
        className={classNames('card-list', type, backgroundColor)}
        style={backgroundImageURL && CardBackgroundImage}
      >
        <div className='card-list-content'>
          <div className='content-top'>
            <p className='font-24-bold content-name'>To. {name}</p>
            <div className='reaction-wrapper'>
              <ProfileList
                messageCount={messageCount}
                recentMessages={recentMessages}
              />
              <p className='font-16-regular content-write'>
                <span className='font-16-bold content-count'>
                  {messageCount}
                </span>
                명이 작성했어요!
              </p>
            </div>
          </div>
          {topReactions.length === 0 ? (
            <div className='empty-emoji'>이모지를 남겨보세요!</div>
          ) : (
            <ReactionList reactions={topReactions} />
          )}
        </div>
      </div>
    </Link>
  );
}

export default CardList;
