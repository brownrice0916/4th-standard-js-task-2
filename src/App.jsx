import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import InputArea from "./components/InputArea";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import "./style/todo.module.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: "밥",
      content: "짜파게티",
      isDone: false,
    },
  ]);

  return (
    <>
      <TodoHeader />
      <InputArea setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer />
    </>
  );
}

export default App;
