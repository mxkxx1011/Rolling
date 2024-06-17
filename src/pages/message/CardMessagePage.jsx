import HeaderCardMessage from 'components/header/HeaderCardMessage';
import { useEffect, useState, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
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

// post/{id}
function CardMessagePage() {
  const [recipient, setRecipient] = useState({});
  const [recipientMessage, setRecipientMessage] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const [page, setPage] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const { postId } = useParams(); // id랑 겹쳐서 수정 ㅠ
  const handleMovePage = useNavigator();

  const [ref, inView] = useInView();

  const {
    name,
    backgroundColor,
    backgroundImageURL,
    createdAt,
    messageCount,
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
        const responseMessage = await RecipientsMessagesAPI(
          'get',
          postId,
          null,
          5,
        );
        setRecipient(responseRecipient);
        setRecipientMessage(responseMessage.results);
      } catch (error) {
        console.error(error);
      }
    };

    getRecipient();
  }, [postId]);

  return (
    <>
      {recentMessages ? (
        <HeaderCardMessage
          name={name}
          messageCount={messageCount}
          recentMessages={recentMessages}
          reactions={topReactions}
          handleClick={ShareKakao}
        />
      ) : null}
      <main
        className={classNames(backgroundColor)}
        style={BackGroundImageStyle}
      >
        {recentMessages ? (
          <div className='message'>
            <Card
              type='plus'
              handleClick={() => handleMovePage(`/post/${postId}/message`)}
            />
            {recipientMessage.map((message) => (
              <Card
                key={message.id}
                message={message}
                type='normal'
                handleClick={() => handleOpenModal(message)}
              />
            ))}
            {hasMore && <div ref={ref}></div>}
          </div>
        ) : (
          <h2>메시지가 없어요</h2>
        )}
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
