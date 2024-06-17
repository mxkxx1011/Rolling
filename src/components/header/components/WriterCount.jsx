import ProfileList from 'components/profile/ProfileList';

function WriterCount({ messageCount, recentMessages }) {
  return (
    <div className='writer-count'>
      <ProfileList
        messageCount={messageCount}
        recentMessages={recentMessages}
      />
      <p className='font-18-regular'>
        <span className='font-18-bold'>{messageCount}</span>명이 작성했어요!
      </p>
    </div>
  );
}

export default WriterCount;
