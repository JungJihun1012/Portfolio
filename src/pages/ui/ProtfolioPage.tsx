import styled from "styled-components";
import { motion } from "framer-motion";
import {MutableRefObject, useRef, useState} from "react";
import * as S from './styled';

const nav = [
    { idx: 0, name: "About me" },
    { idx: 1, name: "Skills" },
    { idx: 2, name: "Archiving" },
    { idx: 3, name: "Projects" },
    { idx: 4, name: "Career" },
];
const ProtfolioPage = () => {
    const [isActive, setIsActive] = useState(false);
    const aboutRef = useRef<HTMLDivElement>(null);

    const handleScroll = (ref: MutableRefObject<HTMLDivElement | null>) => {
        if(ref.current) {
            window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth'});
            setIsActive(true);
            setTimeout(() => setIsActive(false), 1000);
        }
    }
    const slideAniamtion = {
        initial: {y: 425, opacity: 1},
        animate: {y: 420, opacity: 1},
    }
    const gradient = {
        initial: { background: "linear-gradient(90deg, #ff9a9e, #fad0c4)" },
        animate: {
            background: [
                "linear-gradient(90deg, #ff9a9e, #fad0c4)",
                "linear-gradient(90deg, #a18cd1, #fbc2eb)",
                "linear-gradient(90deg, #fad0c4, #ffd1ff)",
            ],
            transition: {
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
            },
        },
    };

    return (
        <Container
            initial="initial"
            animate="animate"
            variants={gradient}
        >
            {nav.length === 0 ? (
                <S.Content>
                    <S.Container>
                        <S.Text>이 페이지는 오류가 뜬 화면입니다.</S.Text>
                    </S.Container>
                </S.Content>
            ) : (
                <Navbar>
                    <List>
                        <StyleTitle>Portfolio</StyleTitle>
                        {nav.map(({ idx, name }) => (
                            <Menu key={idx}>
                                <StyleMenu onClick={() => {
                                    if(name === "About me") {
                                        handleScroll(aboutRef);
                                    }
                                }}>{name}</StyleMenu>
                            </Menu>
                        ))}
                    </List>
                </Navbar>
            )}
            <StyleSection>
                <Introduction >끊임 없이 성장하고 싶은 개발자 입니다.</Introduction>
            </StyleSection>
            <StyleArticle
            ref={aboutRef}
            initial="initial"
            animate={isActive ? "animate" : "initial"}
            variants={slideAniamtion}
            >
                <AboutMe>About me</AboutMe>
                <Content>
                    <StyledText><StyleSpan>이름: </StyleSpan>정지훈</StyledText>
                    <StyledText><StyleSpan>이메일: </StyleSpan>jihunjeong965@gmail.com</StyledText>
                    <StyledText><StyleSpan>연락처: </StyleSpan>010-4744-5764</StyledText>
                    <StyledText><StyleSpan>Instagram: </StyleSpan>jihun.__.072</StyledText>
                </Content>
                <Skills>Skills</Skills>
                <Content>
                    <Box>
                        
                    </Box>
                </Content>
            </StyleArticle>
        </Container>
    );
};

const Container = styled(motion.div)`
    flex: 1;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
`;

const Navbar = styled.div`
    flex: 1;
    background-color: #ffd4fa;
    position: fixed;
    width: 100vw;
`;

const List = styled.div`
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

const StyleTitle = styled.div`
    transition: all 0.2s;
    &:hover {
        text-decoration: underline;
        color: #a382a2;
    }
`;

const Menu = styled.div`
    transition: all 0.2s;
    &:hover {
        text-decoration: underline;
        color: #a382a2;
    }
`;

const StyleMenu = styled.div`
    transition: all 0.2s;
    &:hover {
        text-decoration: underline;
        color: #a382a2;
    }
`;
const StyleSection = styled.div`
    position: relative;
`;
const Introduction = styled.div`
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    position: absolute;
    top: 7em;
    left: 4em;
`;
const StyleArticle = styled(motion.div)`
    /* position: relative;
    top: 25em; */
    border-top: 1.5px solid #fac7fc;
    height: 100px;
`;
const AboutMe = styled.div`
    font-size: 26px;
    text-align: center;
    padding-top: 20px;
    color: #fff;
    font-weight: bold;
`;
const Box = styled.div``;
const Skills = styled.div`
    font-size: 26px;
    text-align: center;
    padding-top: 20px;
    color: #fff;
    font-weight: bold;
`;
const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 80%;
    padding-top: 24px;
    margin: 0 auto;
`;
const StyledText = styled.div`
    padding-left: 15px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`;
const StyleSpan = styled.span`
    color: #535252;
    font-size: 23px;
    font-weight: bold;
`;
export default ProtfolioPage;
