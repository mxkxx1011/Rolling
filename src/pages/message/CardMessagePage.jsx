import HeaderCardMessage from 'components/header/HeaderCardMessage';
import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import {
  MessagesAPI,
  RecipientsAPI,
  RecipientsMessagesAPI,
} from 'data/CallAPI';
import Card from 'components/card/Card';
import './CardMessagePage.scss';
import classNames from 'classnames';
import ShareKakao from 'utils/ShareKakao';
import Modal from 'components/modal/Modal';
import useNavigator from 'hooks/useNavigator';
import { useInView } from 'react-intersection-observer';
import SkeletonCard from 'components/card/SkeletonCard';
import Toast from 'components/toast/Toast';
import Button from 'components/Button';
import Checkbox from '../../components/checkbox/CheckBox';
import useRecipient from 'hooks/useRecipient';
import useRecipientMessage from 'hooks/useRecipientMessage';

// post/{id}
function CardMessagePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const [allSelected, setAllSelected] = useState(false);

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const { postId } = useParams();
  const handleMovePage = useNavigator();

  const [ref, inView] = useInView();

  const location = useLocation();
  const isEditPage = location.pathname.includes('/edit');
  const isEditSelectPage = location.pathname.includes('/edit/select');

  const { getRecipient, recipient } = useRecipient();
  const {
    getRecipientMessage,
    recipientMessage,
    setRecipientMessage,
    isLoading,
  } = useRecipientMessage();

  const {
    name = 'null',
    backgroundColor,
    backgroundImageURL,
    createdAt,
    messageCount = 0,
    recentMessages,
    reactionCount,
    topReactions,
  } = recipient;

  const BackGroundImageStyle = {
    backgroundImage: `url(${backgroundImageURL})`,
  };

  const handleOpenModal = (message) => {
    setIsModalOpen(true);
    setSelectedMessage(message);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMessage(null);
  };

  const deleteMessage = async (id) => {
    try {
      const response = await MessagesAPI('delete', id, null);
      getRecipientMessage();
      getRecipient();
    } catch (error) {
      console.warn(error);
    }
  };

  const handleSelectDelete = () => {
    if (checkedItems.length == 0) {
      alert('삭제할 항목을 선택해주세요');
      return;
    }

    checkedItems.map((item) => {
      deleteMessage(item);
      handleMovePage(`/post/${postId}`);
    });
  };

  const handlePageDelete = () => {
    const result = window.confirm(
      `해당 '${name}'님의 롤링페이지를 삭제하시겠습니까?`,
    );
    if (result) {
      RecipientsAPI('delete', postId);
      handleMovePage('/list');
    } else {
      alert('페이지 삭제를 취소하셨습니다.');
      return;
    }
  };

  const handleDeleteEmpty = () => {
    if (messageCount == 0) {
      alert('삭제할 메시지가 없어요');
      return;
    }
    handleMovePage(`/post/${postId}/edit`);
  };

  const handleAllSelect = () => {
    setAllSelected((prev) => !prev);
  };

  const fetchMoreItems = async () => {
    const limit = 6; // 첫 페이지는 5개, 이후 페이지는 6개
    const offset = isEditPage ? page * 6 : (page - 1) * limit + 5; //(page == 1 ? 5 : 6); // 첫 페이지는 0, 이후 페이지는 6의 배수

    const responseMessage = await RecipientsMessagesAPI(
      'get',
      postId,
      null,
      limit,
      offset,
    );

    // 만약 더 이상 불러올 상품이 없다면 hasMore 상태를 false로 설정합니다.
    if (responseMessage.results.length === 0) {
      setHasMore(false);
    } else {
      setRecipientMessage((prevMessage) => [
        ...prevMessage,
        ...responseMessage.results,
      ]);

      // 페이지 번호를 업데이트하여 다음 요청에 올바른 skip 값을 사용합니다.
      setPage((prevPage) => prevPage + 1);
    }
  };
  useEffect(() => {
    if (inView && hasMore) {
      fetchMoreItems();
    }
  }, [inView, hasMore]);

  return (
    <>
      <HeaderCardMessage
        name={name}
        messageCount={messageCount}
        recentMessages={recentMessages}
        reactions={topReactions}
        handleClick={ShareKakao}
        setShowToast={setShowToast}
        isLoading={isLoading}
      />
      <main
        className={classNames(backgroundColor)}
        style={BackGroundImageStyle}
      >
        {isEditPage ? (
          <div className='content-button-wrapper'>
            <div className='button-left'>
              <Button
                order='secondary'
                size='40'
                handleClick={() =>
                  handleMovePage(
                    isEditSelectPage
                      ? `/post/${postId}/edit`
                      : `/post/${postId}`,
                  )
                }
              >
                뒤로 가기
              </Button>
            </div>
            <div className='button-right'>
              {isEditSelectPage ? (
                <>
                  <div className='all-select-wrapper'>
                    <p className='font-18-bold'>전체 선택</p>
                    <Checkbox
                      id='selectAll'
                      handleClick={handleAllSelect}
                      isChecked={allSelected}
                    />
                  </div>
                  <Button
                    order='primary'
                    size='40'
                    handleClick={handleSelectDelete}
                    disabled={checkedItems.length == 0}
                  >
                    선택한 항목 삭제하기
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    order='primary'
                    size='40'
                    handleClick={() => handleMovePage(`select`)}
                  >
                    선택 삭제
                  </Button>
                </>
              )}
            </div>
          </div>
        ) : (
          <div className='content-button-wrapper'>
            <div className='button-left'>
              <Button
                order='secondary'
                size='40'
                handleClick={() => handleMovePage('/list')}
              >
                뒤로 가기
              </Button>
            </div>
            <div className='button-right'>
              <Button
                order='secondary'
                size='40'
                handleClick={handlePageDelete}
              >
                페이지 삭제
              </Button>
              <Button
                order='primary'
                size='40'
                handleClick={handleDeleteEmpty}
                disabled={isLoading}
              >
                삭제
              </Button>
            </div>
          </div>
        )}

        <div className='message'>
          {isLoading ? (
            Array(6)
              .fill(null)
              .map((_, index) => <SkeletonCard key={index} />)
          ) : (
            <>
              {!isEditPage ? (
                <Card
                  type='plus'
                  handleClick={() => handleMovePage(`/post/${postId}/message`)}
                  setCheckedItems={setCheckedItems}
                />
              ) : null}
              {recipientMessage.map((message) => (
                <Card
                  key={message.id}
                  message={message}
                  type='normal'
                  isEditPage={isEditPage}
                  handleClick={
                    !isEditPage ? () => handleOpenModal(message) : null
                  }
                  checkedItems={checkedItems}
                  setCheckedItems={setCheckedItems}
                  allSelected={allSelected}
                  handleSelectDelete={deleteMessage}
                />
              ))}
            </>
          )}

          {hasMore && <div ref={ref}></div>}
          {showToast && <Toast setShowToast={setShowToast} />}
        </div>
      </main>
      {selectedMessage && (
        <Modal
          message={selectedMessage}
          isModalOpen={isModalOpen}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
}

export default CardMessagePage;

<></>;
