import './ProfileList.scss';
function Profile({ url }) {
  return <img src={url} alt='profile' />;
}

/* ** ProfileList 컴포넌트
 * messageount = 메시지 개수
 * recentMessages = 받은 메시지들이 들어있는 배열
 * 개수에 맞게 출력하도록 했음
 */
function ProfileList({ messageCount = 0, recentMessages = [] }) {
  const messages = recentMessages ? recentMessages.slice(0, 3) : [];
  const COUNT = Math.max(0, messageCount - 3);
  return (
    <>
      <div className='profile-list'>
        {messages.map(
          (message) =>
            message && (
              <Profile key={message.id} url={message.profileImageURL} />
            ),
        )}
        {messageCount > 3 && (
          <div>
            <p>+{COUNT}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default ProfileList;
