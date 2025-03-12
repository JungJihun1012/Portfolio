import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const LoginTitle = styled.h2`
    margin-bottom: 1.5rem;
    text-align: center;
    color: #333;
`;

export const StyledInput = styled.input`
    margin-bottom: 1rem;
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    &:focus {
        border-color: #555;
        outline: none;
    }
`;

export const LoginBtn = styled.button`
    padding: 0.75rem;
    font-size: 1rem;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
`;

export const ErrorText = styled.p`
    color: red;
    margin-top: 0.5rem;
`;

export const SignUp = styled(Link)`
    margin-top: 1rem;
    text-align: center;
    color: #007bff;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;