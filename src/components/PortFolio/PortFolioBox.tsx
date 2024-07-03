import styled from "styled-components"
import { Drag } from "./Drag";
// import { SwiperSlie } from "./SwiperSlide";

export const PortFolioBox = () => {
    return(
        <Container>
            <PortBox />
            <Drag />
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
`;