import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { todoAPI } from "../../server/api";
import { Todo } from "../../components/main/Todo";
import { TodoForm } from "../../components/main/Form";
import { StyledMain } from "./styled";

export const Main = () => {
  const [todos, setTodos] = useState([]);

  const navigate = useNavigate();

  const handleGetTodos = () => {
    todoAPI.getTodos().then(({ data }) => {
      setTodos(data);
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      handleGetTodos();
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <StyledMain>
      <button className="logout" onClick={handleLogout}>
        Logout
      </button>

      <div className="todo-form">
        <h2>To-do list</h2>
        <TodoForm todos={todos} setTodos={setTodos} />
      </div>

      <div className="todo-list">
        {todos.filter((todo) => todo.isCompleted === false).length > 0 && (
          <h2>Not done yet..</h2>
        )}
        {todos?.map((todo) => {
          return !todo.isCompleted ? (
            <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
          ) : null;
        })}

        {todos.filter((todo) => todo.isCompleted === true).length > 0 && (
          <h2>Work done!</h2>
        )}
        {todos?.map((todo) => {
          return todo.isCompleted ? (
            <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
          ) : null;
        })}
      </div>
    </StyledMain>
  );
};
