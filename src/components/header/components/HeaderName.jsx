function HeaderName({ name, messageCount, isLoading }) {
  if (isLoading) {
    return <div className='skeleton skeleton-header-name'></div>;
  }

  const headerMessage =
    messageCount == 0 ? '첫 번째로 메시지를 작성해보세요!🥳' : `To. ${name}`;

  return (
    <>
      <div className='header-name'>{headerMessage}</div>
    </>
  );
}

export default HeaderName;
