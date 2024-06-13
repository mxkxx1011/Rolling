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
//     <Button disable={true} type='primary' size='40' emoji={true}>
// 한주바보
// </Button>
// <Button disable={false} type='secondary' size='40' emoji={true}>
//   Disabled
// </Button>
// <ArrowButton direction='left' />
// <PlusButton disable={false} />
// <DeleteButton disable={false} />
// <ToggleButton options={['바보', '멍청이']} />
//     </>

// const options = ["Option 1", "Option 2", "Option 3"];
//   return (
//     <div>
//       <TextDropdownFiled options={options}></TextDropdownFiled>
//       <p></p>
//       <TextInputField></TextInputField>
//     </div>
