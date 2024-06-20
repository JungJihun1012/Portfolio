import styled from "styled-components"
import { BackEndImage } from "./BackEndImage";

export const BackEnd = () => {
    return(
        <Container>
            <Back>
                Backend
            </Back>
            <BackEndImage />
        </Container>
    )
}

export const Container = styled.div``;
export const Back = styled.div`
    color: #fa7e7e;
    font-size: 25px;
    font-weight: bold;
    padding: 15px 0 10px 15px;
    border-bottom: 1px solid lightgray;
`;
