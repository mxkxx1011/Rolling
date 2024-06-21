import { RecipientsAPI } from 'data/CallAPI';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

function useRecipient() {
  const [recipient, setRecipient] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { postId } = useParams(); // id랑 겹쳐서 수정 ㅠ

  const location = useLocation();
  const isEditPage = location.pathname.includes('/edit');
  const isEditSelectPage = location.pathname.includes('/edit/select');

  const getRecipient = async () => {
    try {
      setIsLoading(true);
      const response = await RecipientsAPI('get', postId);
      setRecipient(response);
    } catch (error) {
      console.warn(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRecipient();
  }, [postId, isEditPage, isEditSelectPage]);

  return { recipient, isLoading, getRecipient };
}

export default useRecipient;
