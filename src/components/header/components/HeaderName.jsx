function HeaderName({ name, messageCount }) {
  return (
    <div className='font-28-bold header-name'>
      {messageCount == 0 ? '첫 번째로 메시지를 작성해보세요!🥳' : `To. ${name}`}
    </div>
  );
}

export default HeaderName;
