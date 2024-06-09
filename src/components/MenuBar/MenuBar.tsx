import styled, { css } from "styled-components";
import { ProtFolio } from "./Protfolio";
import { Introduction } from "./Introduction";
import BkImage from "./BkImage";
import React, { useEffect, useState } from "react";
import { MiddleText } from "../MiddleText/MiddleText";

interface ContentProps {
    scrolled: boolean;
}

export const MenuBar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

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
                <Content  scrolled={scrolled}>
                    <ProtFolio />
                    <Introduction />
                </Content>
                <MiddleText />
            </BkImage>
        </Container>
    );
};

export const Container = styled.div`
  z-index: 1;
  background: transparent;
  transition: all 0.3s ease-in-out;
`;

export const Content = styled.div<ContentProps>`
    position: fixed;
    left: 22%;
    width: 55%;
    line-height: 4.5em;
    display: flex;
    justify-content: space-between;

    ${(props) =>
        props.scrolled &&
        css`
            background-color: aliceblue;
            color: black;
    `};
`;
