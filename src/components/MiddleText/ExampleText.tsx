import styled from "styled-components"

export const ExampleText = () => {
    return(
        <Container>
            <InnerText>
                안녕하세요. <br />
                끊임없이 배우고 싶은 프론트 엔드 개발자, 정지훈입니다. <br />
                친화력이 좋은 성격 먼저 다가가는 성격인 저의 장점입니다. 
            </InnerText>
        </Container>
    )    
}
export const InnerText = styled.div`
    padding-top: 23px;
    line-height: 1.5em;
    font-size: 20px;
    font-weight: bold;
    color: #bebdbb;
`;
export const Container = styled.div``;