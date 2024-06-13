import Header from 'components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes></Routes>
    </Router>
  );
}

// Button - disable, emoji: true or false / type: primary or secondary or outlined / size: 56 or 40 or 36 or 28
// ArrowButton - direction: left or right
export default App;
