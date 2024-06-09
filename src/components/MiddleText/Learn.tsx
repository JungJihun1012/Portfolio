import styled from "styled-components"

export const Learn = () => {
    return(
        <Container>
            <LearnMore>
                더 알아보기
            </LearnMore>
        </Container>
    )
}

export const Container = styled.div`
    width: 170px;
    background-color: #b04d4d;
    padding: 20px 12px;
    border-radius: 50px;
`;
export const LearnMore = styled.div`
    color: #fff;
`;