import styled from "styled-components"
import { PortFolioText } from "./PortFolioText";
import { PortFolioBox } from "./PortFolioBox";

export const PortFolio = () => {
    return(
        <Container>
            <PortFolioText/>
            <PortFolioBox />
        </Container>
    )
}

export const Container = styled.div`
    height: 100vh;
    background-color: lightskyblue;
`;