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
<<<<<<< HEAD
export default App;
=======

// Button - disable, emoji: true or false / type: primary or secondary or outlined / size: 56 or 40 or 36 or 28
// ArrowButton - direction: left or right
export default App;


// <>
//       <Button disable={false} type='outlined' size='40' emoji={true}>
//         한주바보
//       </Button>
//       <Button disable={true} type='secondary' size='28' emoji={false}>
//         Disabled
//       </Button>
//       <ArrowButton direction='right' />
//       <PlusButton disable={false} />
//       <DeleteButton disable={false} />
//     </>

// const options = ["Option 1", "Option 2", "Option 3"];
//   return (
//     <div>
//       <TextDropdownFiled options={options}></TextDropdownFiled>
//       <p></p>
//       <TextInputField></TextInputField>
//     </div>
>>>>>>> 206c22e26dc9569fe045f23d3bc94823f54f4287
