import styled from "styled-components"

export const BackEndImage = () => {
    return(
        <Container>
            <Node />
        </Container>
    )
}

export const Container = styled.div`
    padding-top: 10px;
`;
export const Node = styled.div`
    background-image: url("Images/Node.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 160px;
    height: 100px;
`;