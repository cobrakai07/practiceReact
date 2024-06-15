import './App.css';
import Password from './mock-components/Password';
import { Todo } from './mock-components/Todo';

function App() {
  return (
    <>
    <div className='flex flex-col gap-5 bg-red-500'>
    <Password />
    <Todo/>
    </div>
      
    </>
  );
}

export default App;
