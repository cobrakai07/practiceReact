import React, { useState } from "react";
import { Task } from "./Task";

interface TodoItem {
  id: number;
  task: string;
}

export const Todo: React.FC = () => {
  const [todo, setTodo] = useState<TodoItem[]>([]);
  const [text, setText] = useState<string>("");

  function submit(e: React.FormEvent): void {
    e.preventDefault();
    const obj: TodoItem = {
      id: todo.length,
      task: text,
    };
    setTodo([...todo, obj]);
    setText("");
  }

  return (
    <>
      <form onSubmit={submit}>
        <input
          value={text}
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
        <button type="submit">Create Todo</button>
      </form>
      <div style={{ padding:"12px" }}>
        {todo.length > 0 && todo.map((a) => <Task key={a.id} task={a.task} />)}
      </div>
    </>
  );
};
