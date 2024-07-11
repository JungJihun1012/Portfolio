import styled from "styled-components"
import { Drag} from "./Drag";
import { ReactElement } from "react";
// import { SwiperSlie } from "./SwiperSlide";

export const PortFolioBox = () => {
    const cardList: ReactElement[] = [
        <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>Card 1</div>,
        <div style={{ backgroundColor: 'lightcoral', padding: '20px' }}>Card 2</div>,
        <div style={{ backgroundColor: 'lightgreen', padding: '20px' }}>Card 3</div>,
        <div style={{ backgroundColor: 'lightpink', padding: '20px' }}>Card 4</div>,
        <div style={{ backgroundColor: 'lightgoldenrodyellow', padding: '20px' }}>Card 5</div>,
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