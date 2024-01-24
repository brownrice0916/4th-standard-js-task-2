import React from "react";

import Todo from "./Todo";

const TodoList = ({ setTodos, todos }) => {
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
