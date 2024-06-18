import HeaderCardMessage from 'components/header/HeaderCardMessage';
import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { RecipientsAPI, RecipientsMessagesAPI } from 'data/CallAPI';
import Card from 'components/card/Card';
import './CardMessagePage.scss';
import classNames from 'classnames';
import ShareKakao from 'utils/ShareKakao';
import Modal from 'components/modal/Modal';
import useNavigator from 'hooks/useNavigator';
import { useInView } from 'react-intersection-observer';
import CardList from 'components/card/CardList';
import SkeletonCardList from 'components/card/SkeletonCardList';
import SkeletonCard from 'components/card/SkeletonCard';
import Toast from 'components/toast/Toast';
import Button from 'components/Button';

// post/{id}
function CardMessagePage() {
  const [recipient, setRecipient] = useState({});
  const [recipientMessage, setRecipientMessage] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const [page, setPage] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const { postId } = useParams(); // id랑 겹쳐서 수정 ㅠ
  const handleMovePage = useNavigator();

  const [ref, inView] = useInView();

  const location = useLocation();
  const isEditPage = location.pathname.includes('/edit');

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

  const fetchMoreItems = async () => {
    const limit = page === 1 ? 5 : 6; // 첫 페이지는 5개, 이후 페이지는 6개
    const offset = (page - 1) * 6; // 첫 페이지는 0, 이후 페이지는 6의 배수

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

  useEffect(() => {
    const getRecipient = async () => {
      try {
        const responseRecipient = await RecipientsAPI('get', postId);
        const limit = isEditPage ? 6 : 5;
        const responseMessage = await RecipientsMessagesAPI(
          'get',
          postId,
          null,
          limit,
        );
        setRecipient(responseRecipient);
        setRecipientMessage(responseMessage.results);
      } catch (error) {
        console.error(error);
      }
    };

    getRecipient();
  }, [postId, isEditPage]);

  return (
    <>
      <HeaderCardMessage
        name={name}
        messageCount={messageCount}
        recentMessages={recentMessages}
        reactions={topReactions}
        handleClick={ShareKakao}
        setShowToast={setShowToast}
      />
      <main
        className={classNames(backgroundColor)}
        style={BackGroundImageStyle}
      >
        {isEditPage ? (
          <div className='button-wrapper button-right'>
            <Button order='secondary' size='40'>
              페이지 삭제
            </Button>
            <Button order='primary' size='40'>
              선택 삭제
            </Button>
            <Button order='primary' size='40'>
              전체 삭제
            </Button>
          </div>
        ) : (
          <div className='button-wrapper button-left'>
            <Button
              order='secondary'
              size='40'
              handleClick={() => handleMovePage('/list')}
            >
              뒤로 가기
            </Button>
          </div>
        )}
        {recentMessages ? (
          <div className='message'>
            {!isEditPage ? (
              <Card
                type='plus'
                handleClick={() => handleMovePage(`/post/${postId}/message`)}
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
              />
            ))}
            {hasMore && <div ref={ref}></div>}
          </div>
        ) : (
          <h2>메시지가 없어요</h2>
        )}
        {showToast && <Toast setShowToast={setShowToast} />}
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
