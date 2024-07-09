import styled from "styled-components"
import { Drag} from "./Drag";
// import { SwiperSlie } from "./SwiperSlide";

export const PortFolioBox = () => {
    const cardList = [
        <div key="1">Card 1</div>,
        <div key="2">Card 1</div>,
        <div key="3">Card 1</div>
    ];
    return(
        <Container>
            <PortBox>
                <Drag cardList={cardList} slidesPerView={3}/>
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
`;