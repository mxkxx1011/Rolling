import Header from 'components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetBackImages from "../src/data/CallAPI"
import Test from "../src/pages/home/test"
function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/test" element={<GetBackImages/>}/>
      </Routes>
    </Router>
  );
}
export default App;
