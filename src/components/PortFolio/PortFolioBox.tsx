import styled from "styled-components"
// import { SwiperSlie } from "./SwiperSlide";

export const PortFolioBox = () => {
    return(
        <Container>
            <PortBox />
            {/* <SwiperSlie /> */}
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