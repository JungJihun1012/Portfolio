import styled from "styled-components"
import Drag from "./Drag";

export const PortFolioBox = () => {

    return(
        <Container>
            <PortBox>
                <Drag  />
            </PortBox>
        </Container>
    )
}

export const Container = styled.div`
    padding-top: 100px;
`;
export const PortBox = styled.div`
    background-color: #fff;
    border-radius: 20px;
    width: 50%;
    height: 70vh;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;