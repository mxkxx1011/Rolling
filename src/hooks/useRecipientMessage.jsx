import { RecipientsMessagesAPI } from 'data/CallAPI';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

function useRecipientMessage() {
  const [recipientMessage, setRecipientMessage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { postId } = useParams();

  const location = useLocation();
  const isEditPage = location.pathname.includes('/edit');
  const isEditSelectPage = location.pathname.includes('/edit/select');

  const getRecipientMessage = async () => {
    try {
      setIsLoading(true);
      const limit = isEditPage ? 6 : 5;
      const response = await RecipientsMessagesAPI(
        'get',
        postId,
        null,
        limit,
        0,
      );
      setRecipientMessage((prev) => {
        const allMessages = [...prev, ...response.results];
        const messageMap = new Map();

        // allMessages의 각 메시지를 Map에 추가
        allMessages.forEach((message) => {
          messageMap.set(message.id, message);
        });

        // Map의 값들을 배열로 변환하고, 날짜 기준으로 정렬
        const uniqueMessages = Array.from(messageMap.values()).sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );

        return uniqueMessages;
      });
    } catch (error) {
      console.warn(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRecipientMessage();
  }, [postId]);

  return {
    recipientMessage,
    isLoading,
    getRecipientMessage,
    setRecipientMessage,
  };
}

export default useRecipientMessage;
