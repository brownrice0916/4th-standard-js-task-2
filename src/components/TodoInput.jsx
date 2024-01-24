import React, { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoInput = ({ setTodos }) => {
  const inputRef = useRef("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {});
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    if (e.target.title.value === "" || e.target.content.value === "") {
      return;
    }
    const newTodo = {
      title,
      content,
      isDone: false,
      id: uuidv4(),
    };
    setTodos((prev) => [...prev, newTodo]);
    e.target.title.value = "";
    e.target.content.value = "";
    inputRef.current.focus();
  };

  return (
    <form
      style={{ backgroundColor: "#ededed", padding: "20px" }}
      onSubmit={handleSubmit}
    >
      <label>제목</label>
      <input type="text" name="title" ref={inputRef} />
      <label>내용</label>
      <input type="text" name="content" />
      <input type="submit" value="추가" />
    </form>
  );
};

export default TodoInput;
