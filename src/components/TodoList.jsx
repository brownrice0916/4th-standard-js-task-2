import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InputArea from "./InputArea";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: "밥",
      content: "짜파게티",
      isDone: false,
    },
  ]);

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleChangeTodoState = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const workingTodo = todos.filter((todo) => todo.isDone === false);
  const doneTodo = todos.filter((todo) => todo.isDone === true);
  return (
    <>
      <InputArea setTodos={setTodos} />
      <Todo
        handleDeleteTodo={handleDeleteTodo}
        handleChangeTodoState={handleChangeTodoState}
        todos={workingTodo}
        title={"Working"}
      />
      <Todo
        handleDeleteTodo={handleDeleteTodo}
        handleChangeTodoState={handleChangeTodoState}
        todos={doneTodo}
        title={"Done"}
      />
    </>
  );
};

export default TodoList;
