import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
    flex: 1;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
`;

export const Navbar = styled.div`
    flex: 1;
    background-color: #ffd4fa;
    position: fixed;
    width: 100vw;
`;

export const List = styled.div`
    display: flex;
    width: 70%;
    margin: 0 auto;
    height: 65px;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 24px;
    cursor: pointer;
    color: #fff;
`;

export const StyleTitle = styled.div`
    transition: all 0.2s;
    &:hover {
        text-decoration: underline;
        color: #a382a2;
    }
`;

export const Menu = styled.div`
    transition: all 0.2s;
    &:hover {
        text-decoration: underline;
        color: #a382a2;
    }
`;

export const StyleMenu = styled.div`
    transition: all 0.2s;
    &:hover {
        text-decoration: underline;
        color: #a382a2;
    }
`;
export const StyleSection = styled.div`
    position: relative;
`;
export const Introduction = styled.div`
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    position: absolute;
    top: 7em;
    left: 4em;
`;
export const StyleArticle = styled(motion.div)`
    border-top: 1.5px solid #fac7fc;
    height: 100px;
`;
export const AboutMe = styled.div`
    font-size: 26px;
    text-align: center;
    padding-top: 20px;
    color: #fff;
    font-weight: bold;
`;
export const Skills = styled.div`
    font-size: 26px;
    text-align: center;
    padding-top: 20px;
    color: #fff;
    font-weight: bold;
`;
export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 80%;
    padding-top: 24px;
    margin: 0 auto;
`;
export const StyledText = styled.div`
    padding-left: 15px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`;
export const StyleSpan = styled.span`
    color: #535252;
    font-size: 23px;
    font-weight: bold;
`;