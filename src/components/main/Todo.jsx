import { useRef, useState } from "react";
import styled from "styled-components";
import { todoAPI } from "../../server/api";
import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";

export const Todo = ({ todo, getTodo }) => {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  const [isUpDate, setIsUpDate] = useState(false);
  const updateRef = useRef();

  return (
    <StyledTodo>
      <div>
        {isUpDate ? (
          isCompleted ? (
            <AiFillCheckCircle
              className="icon"
              onClick={() => {
                setIsCompleted(!isCompleted);
              }}
            />
          ) : (
            <AiOutlineCheckCircle
              className="icon"
              onClick={() => {
                setIsCompleted(!isCompleted);
              }}
            />
          )
        ) : isCompleted ? (
          <AiFillCheckCircle className="icon" />
        ) : (
          <AiOutlineCheckCircle className="icon" />
        )}

        {isUpDate ? (
          <input ref={updateRef} type="text" defaultValue={todo.todo} />
        ) : (
          <span>{todo.todo}</span>
        )}
      </div>

      <div className="button-box">
        <button
          onClick={() => {
            if (isUpDate) {
              setIsUpDate(!isUpDate);
              todoAPI
                .updateTodo(todo.id, {
                  todo: updateRef.current.value,
                  isCompleted: isCompleted,
                })
                .then(() => {
                  getTodo();
                });
            } else if (!isUpDate) {
              setIsUpDate(!isUpDate);
            }
          }}
        >
          {isUpDate ? "제출" : "수정"}
        </button>

        {isUpDate ? (
          <button
            onClick={() => {
              setIsUpDate(false);
              setIsCompleted(todo.isCompleted);
            }}
          >
            취소
          </button>
        ) : (
          <button
            onClick={() => {
              todoAPI.deleteTodo(todo.id).then(() => {
                getTodo();
              });
            }}
          >
            삭제
          </button>
        )}
      </div>
    </StyledTodo>
  );
};

const StyledTodo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;

  .icon {
    font-size: 30px;
    margin-right: 10px;
  }

  span {
    font-size: 20px;
  }

  input {
    width: 300px;
    height: 30px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    padding: 0 10px;
  }

  .button-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;

    button {
      width: 40px;
      height: 30px;
      border: none;
      border-radius: 5px;
      background-color: #e5e5e5;
    }
  }

  &:hover {
    background-color: #e5e5e5;
  }

  &:hover .button-box {
    display: flex;
  }

  &:hover .button-box button {
    display: block;
  }

  &:hover .button-box button:nth-child(1) {
    margin-right: 10px;
  }

  &:hover .button-box button:nth-child(2) {
    display: none;
  }
`;
