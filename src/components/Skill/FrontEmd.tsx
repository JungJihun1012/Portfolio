import styled from "styled-components"
import { FrontEndImage } from "./FrontEndImage";

export const FrontEnd = () => {
    return(
        <Container>
            <Front>
                Frontend
            </Front>
            <FrontEndImage />
        </Container>
    )
}

export const Container = styled.div``;
export const Front = styled.div`
    color: #fa7e7e;
    font-size: 25px;
    font-weight: bold;
    padding: 15px 0 10px 15px;
    border-bottom: 1px solid lightgray;
`;