import styled from "styled-components"

export const SourceCode = () => {
    return(
        <Container>
            <Source>
                소스 코드 저장소
            </Source>
            <Code>
                입니다.
            </Code>
        </Container>
    )
}

export const Container = styled.div`
    padding-top: 20px;
    display: flex;
    align-items: center;
    width: 90%;
    margin: 0 auto;
`;
export const Source = styled.div`
    font-size: 17px;
    font-weight: bold;
`;
export const Code = styled.div``;