import React, { useState } from "react";

const Todo = ({ todos, todo, setTodos }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [todoText, setTodoText] = useState(todo.text);
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
      const filteredTodos = todos.filter((item) => {
        if (item.id != todo.id) {
          return true;
        }
      });
      const updatedTodo = { ...todo, text: todoText };
      const updatedTodos = [...filteredTodos, updatedTodo];
      window.localStorage.clear();
      window.localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setTodos(updatedTodos);

      //setTodoText("");
      setIsEmpty(false);
      setFormValid(true);
      setTimeout(() => {
        setFormValid(false);
        setIsEdit(false);
      }, 1000);
    }
  };
  const handleDone = () => {
    const filteredTodos = todos.filter((item) => {
      if (item.id != todo.id) {
        return true;
      }
    });
    const updatedTodo = { ...todo, done: !todo.done };
    const updatedTodos = [...filteredTodos, updatedTodo];
    window.localStorage.clear();
    window.localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };
  const handleDelete = () => {
    const filteredTodos = todos.filter((item) => {
      if (item.id != todo.id) {
        return true;
      }
    });
    window.localStorage.clear();
    window.localStorage.setItem("todos", JSON.stringify(filteredTodos));
    setTodos(filteredTodos);
  };
  const handleEdit = () => {
    setIsEdit(true);
  };
  return (
    <>
      {!isEdit ? (
        <div
          className="alert alert-secondary"
          role="alert"
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>
            {todo.done ? (
              <del>
                <i>{todo.text}</i>
              </del>
            ) : (
              <b>{todo.text}</b>
            )}
          </p>
          <div>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={handleDelete}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
            <button
              className="btn btn-sm btn-outline-primary"
              onClick={handleEdit}
            >
              <i className="far fa-edit"></i>
            </button>
            <button
              className="btn btn-sm btn-outline-success"
              onClick={handleDone}
            >
              <i className="far fa-check-square"></i>
            </button>
          </div>
        </div>
      ) : (
        <div
          className="alert alert-secondary"
          role="alert"
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              width: "100%",
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
                Edit
              </button>
            </div>
            {isEmpty && (
              <div className="alert alert-danger" role="alert">
                Can't be empty!
              </div>
            )}
            {formValid && (
              <div className="alert alert-primary" role="alert">
                Updated Successfully
              </div>
            )}
          </form>
        </div>
      )}
    </>
  );
};

export default Todo;
