import styled from "styled-components"

export const MyName = () => {
    return(
        <Container>
            <Name>
                - 정지훈 - <br />
                프론트 엔드 개발자 포트폴리오
            </Name>
        </Container>
    )  
}

export const Name = styled.div`
    color: #ffffff;
    font-size: 50px;
    font-weight: bold;
    line-height: 1.5em;
`;
export const Container = styled.div``;