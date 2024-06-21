import { RecipientsReactionsAPI } from 'data/CallAPI';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function useReactions() {
  const [reactions, setReactions] = useState([]);

  const { postId } = useParams();

  const getReactions = async () => {
    const limit = 3;
    try {
      const response = await RecipientsReactionsAPI('get', postId, null, limit);
      setReactions(response.results);
    } catch (error) {
      console.log('use');
      console.error(error);
    }
  };

  return { reactions, getReactions };
}

export default useReactions;
