import styled from "styled-components";
import { MenuBar } from "../components/MenuBar/MenuBar";
import { AboutMe } from "../components/AboutMe/AboutMe";

const ProtfolioPage = () => {
    return(
        <Container>
            <MenuBar />
            <AboutMe />
        </Container>
    )
}
export const Container = styled.div``;
export default ProtfolioPage;