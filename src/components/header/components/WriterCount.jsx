import ProfileList from 'components/profile/ProfileList';

function WriterCount({ messageCount, recentMessages }) {
  return (
    <div className='writer-count'>
      <ProfileList
        messageCount={messageCount}
        recentMessages={recentMessages}
      />
      <p className='font-18-regular'>
        {messageCount == 0 ? (
          '아직 작성한 메시지가 없어요'
        ) : (
          <>
            <span className='font-18-bold'>{messageCount}</span>명이 작성했어요!
          </>
        )}
      </p>
    </div>
  );
}

export default WriterCount;
