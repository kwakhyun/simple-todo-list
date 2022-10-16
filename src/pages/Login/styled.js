import styled from "styled-components";

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    margin-bottom: 30px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    input {
      width: 200px;
      height: 30px;
      margin: 10px 0;
      border: 1px solid #e5e5e5;
      border-radius: 5px;
      padding: 0 10px;
      &:focus {
        outline: none;
      }
    }
    button {
      width: 200px;
      height: 30px;
      margin: 10px 0;
      border: none;
      border-radius: 5px;
      background-color: #f5f5f5;
      color: #b5b5b5;
      font-weight: bold;
      cursor: pointer;
      &:focus {
        outline: none;
      }
      &:hover {
        background-color: #e5e5e5;
      }
      &:active {
        background-color: #d5d5d5;
      }
      &:disabled {
        background-color: #f5f5f5;
        color: #b5b5b5;
        cursor: not-allowed;
      }
    }
  }
  span {
    margin-top: 10px;
    margin-bottom: 10px;
    color: #b5b5b5;
    cursor: pointer;
    &:hover {
      color: #a5a5a5;
    }
  }
`;
