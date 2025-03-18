import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as S from './styled/LoginStyled';
import { loginUser } from "../../actions/user_action/user_login_action";

const text = {
  login: '로그인',
  register: '회원가입'
}
const LoginPage: React.FC = () => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {email, password};

    dispatch(loginUser(body)).then((res: any) => {
      if(res.payload.logunSuccess) {
        navigate('/');
      } else {
        alert('error');
      }
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target;
    if(name == "email") setEmail(value);
    else if(name === "password") setPassword(value);
  };

  return(
    <>
      <S.Container>
        <S.FormContainer
        method="post"
        onSubmit={handleSubmit}
        >
          <S.LoginTitle>{text.login}</S.LoginTitle>
          <S.StyledInput
          name="email"
          type="email"
          placeholder="아이디를 입력해주세요"
          value={email}
          onChange={handleChange}
          />
          <S.StyledInput
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={handleChange}
          />
          <S.LoginBtn type="submit">{text.login}</S.LoginBtn>
          <S.SignUp to="/register">{text.register}</S.SignUp>
        </S.FormContainer>
      </S.Container>
    </>
  )
}

export default LoginPage;