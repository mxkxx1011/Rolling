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
        const uniqueMessage = [...prev, ...response.results].reduce(
          (acc, cur) => {
            const existingMessage = acc.find((item) => item.id === cur.id);

            if (!existingMessage) {
              acc.push(cur);
            }

            return acc;
          },
          [],
        );

        return uniqueMessage.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
      });
    } catch (error) {
      console.warn(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRecipientMessage();
  }, [postId, isEditPage, isEditSelectPage]);

  return {
    recipientMessage,
    isLoading,
    getRecipientMessage,
    setRecipientMessage,
  };
}

export default useRecipientMessage;
