import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Nav = [
    { idx: 0, name: "About me" },
    { idx: 1, name: "Skills" },
    { idx: 2, name: "Archiving" },
    { idx: 3, name: "Projects" },
    { idx: 4, name: "Career" },
];

interface IntroductionProps {
    scrollRef: React.RefObject<(HTMLDivElement | null)[]>;
}

export const Introduction: React.FC<IntroductionProps> = ({ scrollRef }) => {
    const [navIndex, setNavIndex] = useState<number | null>(null);
    const navRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (navIndex !== null && scrollRef.current) {
            scrollRef.current[navIndex]?.scrollIntoView({ behavior: 'smooth' });
            setNavIndex(null);
        }
        console.log(navIndex);
    }, [scrollRef, navIndex]);

    useEffect(() => {
        const changeNavBtnStyle = () => {
            scrollRef.current?.forEach((ref, idx) => {
                if (ref && ref.offsetTop - 180 < window.scrollY) {
                    navRef.current.forEach(ref => {
                        if (ref) ref.classList.remove(' active');
                    });
                    if (navRef.current[idx]) {
                        navRef.current[idx]!.classList.add("active");
                    }
                }
            });
        };

        const handleScroll = () => {
            window.requestAnimationFrame(changeNavBtnStyle);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollRef]);

    return (
        <Container>
            <Jjh>JJH's Portfolio</Jjh>
            <Content>
                {Nav.map(({ idx, name }) => (
                    <Int
                        key={idx}
                        ref={ref => (navRef.current[idx] = ref)}
                        onClick={() => setNavIndex(idx)}
                    >
                        {name}
                    </Int>
                ))}
            </Content>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const Content = styled.div`
    display: flex;
    gap: 25px;
`;

const Jjh = styled.div`
    font-size: 25px;
    font-weight: bold;
`;

const Int = styled.div`
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;

    &.active {
        color: red; 
    }
`;
