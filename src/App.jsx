import CardListPage from 'pages/list/CardListPage';
import CardMessagePage from 'pages/message/CardMessagePage';
import CardMessagePostPage from 'pages/CardMessagePostPage';
import HomePage from 'pages/home/HomePage';
import Main from 'pages/Main';
import NotFoundPage from 'pages/NotFoundPage';
import PostPage from 'pages/postpage/PostPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<HomePage />} />
          <Route path='list' element={<CardListPage />} />
          <Route path='/post'>
            <Route index element={<PostPage />} />
            <Route path=':postId'>
              <Route index element={<CardMessagePage />} />
              <Route path='edit' element={<CardMessagePage />} />
              <Route path='message' element={<CardMessagePostPage />} />
            </Route>
          </Route>
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

// Button - disable, emoji: true or false / type: primary or secondary or outlined / size: 56 or 40 or 36 or 28
// ArrowButton - direction: left or right
export default App;
