import './App.css';
import CoinFlip from './mock-components/CoinFlip';
import GiveStarReview from './mock-components/GiveStarReview';
import ModalPage from './mock-components/ModalPage';
import Password from './mock-components/Password';
import Quiz from './mock-components/Quiz';
import { Todo } from './mock-components/Todo';
import TypingTest from './mock-components/TypingTest';
import GroupChat from './mock-components/GroupChat';
import  Otp  from './mock-components/Otp';
import { useEffect, useState } from 'react';



function App() {
  const [item, setItem]=useState([{id:0, title:"task1"}]);
  const [input,setInput]=useState("");
  const addTask=()=>{
    const arr=[...item,{ id: item.length-1, title :input}];
    setItem(arr);
  }
//   console.log(aa);
//   var aa=67;
// let a=123;
// a=262626;
// const ab={id:123};
  const deleteTask=(id:any)=>{
    const updatedItem = item.filter((task)=>task.id===id);
    setItem(updatedItem);
  }
  useEffect(()=>{
   console.log("Component Mounted") ;
   return()=>{
    console.log("unmounted");
   }
  },[item]);
  return (
    <div>
   {
    item.length>0&&item.map((it, index)=>(<div key={index}>
      {it.title}
      <button onClick={()=>deleteTask(index)}>Delete</button>
    </div>))
   }
    <input type="text"  value={input} onChange={(e)=>setInput(e.target.value)}/>
    <button onClick={addTask}>Add Task</button>
    <a href="https://leetcode.com/problems/counter-ii/submissions/1586855175/?envType=study-plan-v2&envId=30-days-of-javascript">Move</a>
    </div>
  );
}

export default App;
