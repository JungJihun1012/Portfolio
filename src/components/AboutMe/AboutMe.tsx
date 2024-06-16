import styled from "styled-components"
import { About } from "./About";
import { AboutNavigation } from "./AboutNavigation";
import React, { useRef } from "react";

export const AboutMe: React.FC = () => {

    const sectionRef = useRef<(HTMLDivElement | null)[]>([]);

    return (
        <Container>
            <Content ref={el => (sectionRef.current[0] = el)}>
                <About />
                <AboutNavigation />
            </Content>
        </Container>
    )
}
export const Container = styled.div``;
export const Content = styled.div``;