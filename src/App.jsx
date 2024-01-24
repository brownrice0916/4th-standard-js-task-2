import "./App.css";
import Footer from "./components/Footer";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import "./style/todo.module.css";
function App() {
  return (
    <>
      <TodoHeader />
      <TodoList />
      <Footer />
    </>
  );
}

export default App;
