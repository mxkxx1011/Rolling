import ArrowButton from 'components/ArrowButton';
import Button from './components/Button';
import PlusButton from 'components/PlusButton';
import DeleteButton from 'components/DeleteButton';
import ToggleButton from 'components/ToggleButton';

function App() {
  return (
    <>
      <Button disable={true} type='primary' size='40' emoji={true}>
        한주바보
      </Button>
      <Button disable={false} type='secondary' size='40' emoji={true}>
        Disabled
      </Button>
      <ArrowButton direction='left' />
      <PlusButton disable={false} />
      <DeleteButton disable={false} />
      <ToggleButton options={['바보', '멍청이']} />
    </>
  );
}

// Button - disable, emoji: true or false / type: primary or secondary or outlined / size: 56 or 40 or 36 or 28
// ArrowButton - direction: left or right
export default App;
