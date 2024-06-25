import './App.css';
import CoinFlip from './mock-components/CoinFlip';
import GiveStarReview from './mock-components/GiveStarReview';
import ModalPage from './mock-components/ModalPage';
import Password from './mock-components/Password';
import { Todo } from './mock-components/Todo';
import TypingTest from './mock-components/TypingTest';

function App() {
  return (
    <>
    <div className='flex flex-col gap-5 bg-red-500'>
    <Password />
    <Todo/>
    <ModalPage/>
    <CoinFlip/>
    <TypingTest/>
    <GiveStarReview/>
    </div>
      
    </>
  );
}

export default App;
