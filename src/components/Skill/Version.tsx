import styled from "styled-components"
import { VersionImage } from "./VersionImage";

export const Version = () => {
    
    return(
        <Container>
            <Control>
                Version Control
            </Control>
            <VersionImage />
        </Container>
    )
}

export const Container = styled.div``;
export const Control = styled.div`
    color: #fa7e7e;
    font-size: 25px;
    font-weight: bold;
    padding: 15px 0 10px 15px;
    border-bottom: 1px solid lightgray;
`;