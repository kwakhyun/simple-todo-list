import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { todoAPI } from "../../server/api";
import { Todo } from "../../components/main/Todo";
import { TodoForm } from "../../components/main/TodoForm";

export const Main = () => {
  const [todos, setTodos] = useState([]);

  const navigate = useNavigate();

  const handleGetTodos = () => {
    todoAPI.getTodos().then((response) => {
      setTodos(response.data);
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
  }, [navigate, todos]);

  return (
    <StyledMain>
      <button className="logout" onClick={handleLogout}>
        Logout
      </button>
      <div className="todo-form">
        <h2>wanted-pre-onboarding todo-list</h2>
        <TodoForm setTodos={setTodos} />
      </div>
      <div className="todo-list">
        {todos.length > 0 &&
          todos?.map((todo) => {
            return (
              <Todo key={todo.id} todo={todo} handleGetTodos={handleGetTodos} />
            );
          })}
      </div>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;

  .logout {
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: #e5e5e5;
    margin: 10px 0;
  }

  .todo-form {
    width: 100%;
    height: 100px;
    background-color: #fff;

    h2 {
      text-align: center;
      margin: 10px 0;
    }
  }

  .todo-list {
    width: 100%;
    height: 100%;
    margin-top: 100px;
    background-color: #fff;
  }

  .todo-list > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #e5e5e5;
    padding: 0 10px;
  }
`;
