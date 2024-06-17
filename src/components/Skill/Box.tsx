import styled from "styled-components";

const Box = () => {

    return(
        <Container>
            <MiddleContent />
        </Container>
    )
}

export const Container = styled.div``;
export const MiddleContent = styled.div`
    background-color: #fff;
    border-radius: 10px;
    width: 230px;
    height: 50vh;
`;
export default Box;