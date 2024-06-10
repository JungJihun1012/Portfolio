import styled from "styled-components"
import { About } from "./About";
import { AboutNavigation } from "./AboutNavigation";

export const AboutMe = () => {
    return(
        <Container>
            <About />
            <AboutNavigation />
        </Container>
    )
}
export const Container = styled.div``;