import { useNavigate } from 'react-router-dom';

function useNavigator() {
  const navigate = useNavigate();

  const handleMovePage = (page) => {
    navigate(page);
  };

  // 추가할 수 있는 기능 : 이전 페이지로 이동 혹은 특정 페이지로 이동
  return handleMovePage;
}

export default useNavigator;
