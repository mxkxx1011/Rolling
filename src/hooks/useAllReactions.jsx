import { RecipientsReactionsAPI } from 'data/CallAPI';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';

function useAllReactions() {
  const [allReactions, setAllReactions] = useState([]);
  const [reactionCount, setReactionCount] = useState(0);

  const { postId } = useParams();
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const getAllReactions = async (all = false) => {
    let limit = isDesktop ? 8 : 6;
    limit = all ? reactionCount : null;
    try {
      const response = await RecipientsReactionsAPI('get', postId, null, limit);
      setAllReactions(response.results);
      setReactionCount(response.count);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllReactions();
  }, [postId]);

  return { allReactions, getAllReactions };
}

export default useAllReactions;
