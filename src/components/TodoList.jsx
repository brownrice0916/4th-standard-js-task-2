import React from "react";

const TodoList = ({
  todos,
  handleDeleteTodo,
  handleChangeTodoState,
  title,
}) => {
  return (
    <>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        {todos.map((todo, index) => (
          <div
            style={{ border: "1px solid black", padding: "10px" }}
            key={todo.id}
          >
            <div style={{ fontWeight: "900" }}>{todo.title}</div>
            <div>{todo.content}</div>
            <button
              onClick={() => {
                handleDeleteTodo(todo.id);
              }}
            >
              삭제
            </button>
            <button
              onClick={() => {
                handleChangeTodoState(todo.id);
              }}
            >
              {todo.isDone ? "취소" : "완료"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
