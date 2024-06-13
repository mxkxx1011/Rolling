import HomePage from 'pages/home/HomePage';
import Main from 'pages/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

// Button - disable, emoji: true or false / type: primary or secondary or outlined / size: 56 or 40 or 36 or 28
// ArrowButton - direction: left or right
export default App;
