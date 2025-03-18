import { useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../actions/user_action/user_register_action";
import * as S from './styled/RegisterStyled';

export const RegisterPage = () => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const dispatch: any = useDispatch();
    const navigate: any = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        if (name === "email") setEmail(value);
        else if (name === "password") setPassword(value);
        else if (name === "confirmPassword") setConfirmPassword(value);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        }

        const body = { email, password };

        dispatch(registerUser(body)).then((res: any) => {
            if (res.payload.success) {
                navigate("/login");
            } else {
                alert("Error");
            }
        });
    };
    return(
        <>
            <S.Container>
                <S.FormContainer onSubmit={handleSubmit}>
                    <S.Title>회원가입</S.Title>
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
                    <S.StyledInput
                        name="confirmPassword"
                        type="password"
                        placeholder="비밀번호를 다시 입력해주세요"
                        value={confirmPassword}
                        onChange={handleChange}
                    />
                    <S.SignupButton type="submit">회원가입</S.SignupButton>
                </S.FormContainer>
            </S.Container>
        </>
    )
}