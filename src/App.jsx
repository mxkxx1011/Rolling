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