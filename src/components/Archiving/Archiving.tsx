import styled from "styled-components"
import { ArchivingBox } from "./ArchivingBox";
import { ArchivingText } from "./ArchivingText";

export const Archiving = () => {
    return(
        <Container>
            <ArchivingText />
            <ArchivingBox />
        </Container>
    )
} 

export const Container = styled.div`
    height: 60vh;
    background-color: #333;
`;