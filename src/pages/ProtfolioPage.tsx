import styled from "styled-components";
import { MenuBar } from "../components/MenuBar/MenuBar";
import { AboutMe } from "../components/AboutMe/AboutMe";
import { Skill } from "../components/Skill/Skill";
import { Archiving } from "../components/Archiving/Archiving";
import { PortFolio } from "../components/PortFolio/PortFolio";

const ProtfolioPage = () => {
    return(
        <Container>
            <MenuBar />
            <AboutMe />
            <Skill />
            <Archiving />
            <PortFolio />
        </Container>
    )
}
export const Container = styled.div``;
export default ProtfolioPage;