import styled from "styled-components"

export const VersionImage = () => {
    return(
        <Container>
            <Github />
        </Container>
    )
}

export const Container = styled.div``;
export const Github = styled.div`
    background-image: url("Images/Github.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 150px;
    height: 120px;
`;