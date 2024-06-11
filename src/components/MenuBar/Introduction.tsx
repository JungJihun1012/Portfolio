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
    scrollRef: React.RefObject<HTMLDivElement[]>;
}

export const Introduction: React.FC<IntroductionProps> = ({ scrollRef }) => {
    const [navIndex, setNavIndex] = useState<number | null>(null);
    const navRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (navIndex !== null) {
            scrollRef.current?.[navIndex]?.scrollIntoView({ behavior: 'smooth' });
            setNavIndex(null);
        }
        console.log(navIndex);
    }, [scrollRef, navIndex]);

    useEffect(() => {
        const changeNavBtnStyle = () => {
            scrollRef.current?.forEach((ref, idx) => {
                if (ref?.offsetTop && ref.offsetTop - 180 < window.scrollY) {
                    navRef.current.forEach(ref => {
                        if (ref) ref.className = ref.className.replace(' active', '');
                    });
                    if (navRef.current[idx]) {
                        navRef.current[idx]!.className += ' active';
                    }
                }
            });
        };
        window.addEventListener("scroll", changeNavBtnStyle);

        return () => {
            window.removeEventListener("scroll", changeNavBtnStyle);
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
