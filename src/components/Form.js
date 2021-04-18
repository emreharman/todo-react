import React, { useState } from "react";

const Form = ({ todos, setTodos }) => {
  const [todoText, setTodoText] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText === "") {
      setIsEmpty(true);
      setTimeout(() => {
        setIsEmpty(false);
      }, 1000);
    } else {
      const todo = {
        id: todos.length + 1,
        text: todoText,
        done: false,
      };
      const newTodos = [...todos, todo];
      setTodos(newTodos);
      window.localStorage.clear();
      window.localStorage.setItem("todos", JSON.stringify(newTodos));
      setTodoText("");
      setIsEmpty(false);
      setFormValid(true);
      setTimeout(() => {
        setFormValid(false);
      }, 1000);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "2rem",
        }}
      >
        <div className="input-group mb-3" style={{ width: "50%" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Type your todo"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            ADD
          </button>
        </div>
        {isEmpty && (
          <div className="alert alert-danger" role="alert">
            Can't be empty!
          </div>
        )}
        {formValid && (
          <div className="alert alert-primary" role="alert">
            Added Successfully
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
