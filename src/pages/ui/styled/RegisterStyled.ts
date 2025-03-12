import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #121212;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    background: #1e1e1e;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    width: 380px;
`;

export const Title = styled.h2`
    margin-bottom: 40px;
    color: #ffffff;
    text-align: center;
    font-size: 28px;
    font-weight: 700;
`;

export const StyledInput = styled.input`
    padding: 14px;
    margin-bottom: 20px;
    border: 1px solid #444;
    border-radius: 8px;
    font-size: 16px;
    background-color: #333;
    color: #ffffff;
    transition: border-color 0.3s;

    &:focus {
        border-color: #007bff;
    }
`;

export const SignupButton = styled.button`
    padding: 14px;
    background-color: #007bff;
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
        background-color: #0056b3;
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }
`;