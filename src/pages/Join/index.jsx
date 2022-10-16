//Style import
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authAPI } from "../../server/api";
import { StyledJoin } from "./styled";

export const Join = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const confirmPasswordSpan = useRef();

  const signupData = {
    email: email,
    password: password,
  };

  const emailRegExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const handleJoin = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      confirmPasswordSpan.current.focus();
      confirmPasswordSpan.current.innerText = "비밀번호가 일치하지 않습니다.";
      confirmPasswordSpan.current.style.color = "red";
    } else {
      authAPI
        .signup(signupData)
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            alert("회원가입이 완료되었습니다.");
            navigate("/");
          }
        })
        .catch(({ response }) => {
          if (response.status === 400) {
            alert(response.data.message);
          }
        });
    }
  };

  return (
    <StyledJoin>
      <form onSubmit={(e) => handleJoin(e)}>
        <h2>JOIN</h2>
        <label>이메일</label>
        <input
          type="text"
          value={email}
          ref={emailRef}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일 입력"
          required
        />
        <label>비밀번호</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호 입력"
          ref={passwordRef}
          required
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setconfirmPassword(e.target.value)}
          placeholder="비밀번호 확인"
          ref={confirmPasswordRef}
          required
        />
        <span ref={confirmPasswordSpan}></span>
        {emailRegExp.test(email) && password.length >= 8 ? (
          <button type="submit">JOIN</button>
        ) : (
          <button disabled>JOIN</button>
        )}
      </form>
    </StyledJoin>
  );
};
