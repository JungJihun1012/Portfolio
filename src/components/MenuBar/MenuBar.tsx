import styled, { css } from "styled-components";
import { Introduction } from "./Introduction";
import BkImage from "./BkImage";
import React, { useEffect, useRef, useState } from "react";
import { MiddleText } from "../MiddleText/MiddleText";

export const MenuBar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false)
    const scrollRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Container>
            <BkImage>
                <Inner scrolled={scrolled}>
                    <Content>
                        <Introduction scrollRef={scrollRef}/>
                    </Content>
                </Inner>
                <MiddleText />
            </BkImage>
        </Container>
    );
};
export const Inner = styled.div<InnerProps>`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    color: white;
    ${(props) =>
        props.scrolled &&
        css`
            background-color: white;
            z-index: 1;
            color: black;
            border-bottom: 1px solid lightgray;
            width: 100%;
            left: 0%;
    `};
`

export const Container = styled.div`
  background: transparent;
  transition: all 0.3s ease-in-out;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 0px 20px;
    line-height: 4.5em;
    display: flex;
    color: inherit;
`;
