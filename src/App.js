import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  if (JSON.parse(window.localStorage.getItem("todos")) == null) {
    window.localStorage.setItem("todos", JSON.stringify([]));
  }
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    setTodos(JSON.parse(window.localStorage.getItem("todos")));
  }, []);
  return (
    <div className="App bg-light" style={{ minHeight: "100vh" }}>
      <h1 className="pt-5">Todo App</h1>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
