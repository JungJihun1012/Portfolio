import {MutableRefObject, useRef, useState} from "react";
import * as S from './styled/ErrorStyled';
import * as F from './styled/FrontStyled';

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
        <F.Container
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
                <F.Navbar>
                    <F.List>
                        <F.StyleTitle>Portfolio</F.StyleTitle>
                        {nav.map(({ idx, name }) => (
                            <F.Menu key={idx}>
                                <F.StyleMenu onClick={() => {
                                    if(name === "About me") {
                                        handleScroll(aboutRef);
                                    }
                                }}>{name}</F.StyleMenu>
                            </F.Menu>
                        ))}
                    </F.List>
                </F.Navbar>
            )}
            <F.StyleSection>
                <F.Introduction >끊임 없이 성장하고 싶은 개발자 입니다.</F.Introduction>
            </F.StyleSection>
            <F.StyleArticle
            ref={aboutRef}
            initial="initial"
            animate={isActive ? "animate" : "initial"}
            variants={slideAniamtion}
            >
                <F.AboutMe>About me</F.AboutMe>
                <F.Content>
                    <F.StyledText><F.StyleSpan>이름: </F.StyleSpan>정지훈</F.StyledText>
                    <F.StyledText><F.StyleSpan>이메일: </F.StyleSpan>jihunjeong965@gmail.com</F.StyledText>
                    <F.StyledText><F.StyleSpan>연락처: </F.StyleSpan>010-4744-5764</F.StyledText>
                    <F.StyledText><F.StyleSpan>Instagram: </F.StyleSpan>jihun.__.072</F.StyledText>
                </F.Content>
                <F.Skills>Skills</F.Skills>
                <
            </F.StyleArticle>
        </F.Container>
    );
};

export default ProtfolioPage;
