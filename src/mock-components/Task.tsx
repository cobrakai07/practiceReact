import React from "react";
interface TaskProps {
    task: string;
    
}
export const Task: React.FC<TaskProps> = ({task}) => {
  return (
    <>
    <div style={{backgroundColor:"red", margin:"10px"}}>
        {task}
    </div>
    </>
  );
};
