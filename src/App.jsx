import ArrowButton from 'components/ArrowButton';
import Button from './components/Button';
import PlusButton from 'components/PlusButton';
import DeleteButton from 'components/DeleteButton';

function App() {
  return (
    <>
      <Button disable={false} type='outlined' size='40' emoji={true}>
        한주바보
      </Button>
      <Button disable={true} type='secondary' size='28' emoji={false}>
        Disabled
      </Button>
      <ArrowButton direction='right' />
      <PlusButton disable={false} />
      <DeleteButton disable={false} />
    </>
  );
}

// Button - disable, emoji: true or false / type: primary or secondary or outlined / size: 56 or 40 or 36 or 28
// ArrowButton - direction: left or right
export default App;
