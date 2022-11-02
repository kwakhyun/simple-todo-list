import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authAPI } from "../../api/api";
import { StyledAuth } from "./styled";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/todo");
    }
  }, [navigate]);

  const emailRegExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const signinData = {
    email: email,
    password: password,
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (emailRegExp.test(email)) {
      authAPI
        .signin(signinData)
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("token", response.data["access_token"]);
            navigate("/todo");
          }
        })
        .catch(({ response }) => {
          if (response.data.statusCode === 404) {
            alert("이메일 또는 비밀번호가 일치하지 않습니다.");
          }
        });
    } else {
      alert("이메일 형식에 맞지 않습니다");
    }
  };

  return (
    <StyledAuth>
      <p>To-do list made by kwakhyun</p>
      <form onSubmit={(e) => handleLogin(e)}>
        <label>Email</label>
        <input
          type={"text"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일 입력"
          required
        />
        <label>Password</label>
        <input
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호 입력"
          required
        />
        {emailRegExp.test(email) && password.length >= 8 ? (
          <button type="submit">로그인</button>
        ) : (
          <button disabled>로그인</button>
        )}
      </form>
      <span onClick={() => navigate("/signup")}>회원가입하기</span>
    </StyledAuth>
  );
};
