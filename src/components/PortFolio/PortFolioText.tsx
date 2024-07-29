import styled from "styled-components"

export const PortFolioText = () => {
    return(
        <Container>
            <Project>
                PROJECT
            </Project>
            <div></div>
        </Container>
    )
}

export const Container = styled.div`
    padding-top: 30px;
    display: flex;
    justify-content: center;
`;
export const Project = styled.div`
    font-size: 40px;
    font-weight: bold;
`;