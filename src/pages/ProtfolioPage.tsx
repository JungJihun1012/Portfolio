import styled from "styled-components";
import { MenuBar } from "../components/MenuBar/MenuBar";
import { AboutMe } from "../components/AboutMe/AboutMe";
import { Skill } from "../components/Skill/Skill";

const ProtfolioPage = () => {
    return(
        <Container>
            <MenuBar />
            <AboutMe />
            <Skill />
        </Container>
    )
}
export const Container = styled.div``;
export default ProtfolioPage;